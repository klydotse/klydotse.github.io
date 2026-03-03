
const KLY = (() => {

const DEFAULT = {name:"Stockholm", lat:59.3293, lon:18.0686};

const searchInput = document.getElementById("searchInput");
const suggestBox = document.getElementById("suggest");
const cityNameEl = document.getElementById("cityName");
const citySubEl = document.getElementById("citySub");

async function geocode(query){
  const url = new URL("https://geocoding-api.open-meteo.com/v1/search");
  url.searchParams.set("name", query);
  url.searchParams.set("count","10");
  url.searchParams.set("language","sv");
  url.searchParams.set("country_code","SE");
  const res = await fetch(url);
  if(!res.ok) return [];
  const data = await res.json();
  return data.results || [];
}

searchInput.addEventListener("input", async e=>{
  const q = e.target.value.trim();
  if(q.length<2){suggestBox.classList.remove("open");return;}
  const results = await geocode(q);
  suggestBox.innerHTML="";
  results.forEach(r=>{
    const btn=document.createElement("button");
    btn.innerHTML=`<span>${r.name}</span><span style="opacity:.6">${r.admin1||""}</span>`;
    btn.onclick=()=>selectCity(r);
    suggestBox.appendChild(btn);
  });
  suggestBox.classList.add("open");
});

function selectCity(r){
  suggestBox.classList.remove("open");
  searchInput.value="";
  loadAll({name:r.name, lat:r.latitude, lon:r.longitude, admin1:r.admin1});
}

async function loadAll(place){
  cityNameEl.textContent = place.name;
  citySubEl.textContent = place.admin1||"";

  await loadWeather(place);
  await loadPollen(place);
}

async function loadWeather(place){
  const url=new URL("https://api.open-meteo.com/v1/forecast");
  url.searchParams.set("latitude",place.lat);
  url.searchParams.set("longitude",place.lon);
  url.searchParams.set("hourly","uv_index");
  url.searchParams.set("timezone","auto");

  const res=await fetch(url);
  const data=await res.json();

  drawUV(data.hourly.time,data.hourly.uv_index);
}

function drawUV(times,values){
  const svg=document.getElementById("uvChart");
  if(!svg) return;
  const w=800,h=200,pad=40;
  svg.setAttribute("viewBox","0 0 "+w+" "+h);
  const today=new Date().toDateString();
  const pts=[];
  for(let i=0;i<times.length;i++){
    if(new Date(times[i]).toDateString()===today){
      pts.push({h:new Date(times[i]).getHours(),v:values[i]});
    }
  }
  if(!pts.length) return;
  const maxV=Math.max(...pts.map(p=>p.v),1);

  let path="";
  pts.forEach((p,i)=>{
    const x=pad+(p.h/24)*(w-pad*2);
    const y=h-pad-(p.v/maxV)*(h-pad*2);
    path+=(i===0?"M":"L")+x+" "+y+" ";
  });

  let yAxis="";
  [0,3,6,8,11].forEach(v=>{
    const y=h-pad-(v/maxV)*(h-pad*2);
    yAxis+=`<line x1="${pad}" x2="${w-pad}" y1="${y}" y2="${y}" stroke="#eee"/>`;
    yAxis+=`<text x="5" y="${y+4}" font-size="12">${v}</text>`;
  });

  svg.innerHTML=yAxis+`<path d="${path}" fill="none" stroke="#333" stroke-width="3"/>`;
}

async function loadPollen(place){
  const box=document.getElementById("pollenBox");
  box.innerHTML="Laddar…";
  try{
    const regionsRes=await fetch("https://api.pollenrapporten.se/v1/regions");
    const regions=await regionsRes.json();
    const region=regions[0]; // Simplified: match logic can be improved
    const forecastRes=await fetch("https://api.pollenrapporten.se/v1/forecasts?region_id="+region.id+"&current=true");
    const data=await forecastRes.json();
    box.innerHTML="";
    data.forEach(p=>{
      const row=document.createElement("div");
      row.className="pollenItem";
      row.innerHTML=`<span>${p.type}</span><span>${p.level}</span>`;
      box.appendChild(row);
    });
  }catch{
    box.innerHTML="Kunde inte hämta pollen.";
  }
}

loadAll(DEFAULT);

})();

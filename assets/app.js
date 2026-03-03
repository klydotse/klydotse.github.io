
const KLY = (() => {
  const DEFAULT = {name:"Stockholm", lat:59.3293, lon:18.0686, admin1:"Stockholms län"};

  const searchInput = document.getElementById("searchInput");
  const suggestBox = document.getElementById("suggest");
  const cityNameEl = document.getElementById("cityName");
  const citySubEl = document.getElementById("citySub");

  const uvMetaEl = document.getElementById("uvMeta");
  const pollenMetaEl = document.getElementById("pollenMeta");
  const pollenBox = document.getElementById("pollenBox");

  // Weather elements
  const wNowTemp = document.getElementById("wNowTemp");
  const wNowText = document.getElementById("wNowText");
  const wNowFeels = document.getElementById("wNowFeels");
  const wNowWind = document.getElementById("wNowWind");
  const wNowPrec = document.getElementById("wNowPrec");

  const wDayRange = document.getElementById("wDayRange");
  const wDayPrec = document.getElementById("wDayPrec");
  const wSunrise = document.getElementById("wSunrise");
  const wSunset = document.getElementById("wSunset");

  const partCards = {
    morning: document.getElementById("partMorning"),
    afternoon: document.getElementById("partAfternoon"),
    evening: document.getElementById("partEvening"),
    night: document.getElementById("partNight"),
  };
  const hoursTrack = document.getElementById("hoursTrack");
  const daysList = document.getElementById("daysList");

  function esc(s){return (s||"").replace(/[&<>"']/g,c=>({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[c]));}

  // ---- Search (strict diacritic prefix when user typed diacritics) ----
  async function geocodeOpenMeteo(query){
    const url = new URL("https://geocoding-api.open-meteo.com/v1/search");
    url.searchParams.set("name", query);
    url.searchParams.set("count","10");
    url.searchParams.set("language","sv");
    url.searchParams.set("country_code","SE");
    const res = await fetch(url.toString(), {cache:"no-store"});
    if(!res.ok) return [];
    const data = await res.json();
    return (data.results||[]).map(r => ({
      name: r.name,
      admin1: r.admin1 || r.admin2 || "",
      lat: r.latitude,
      lon: r.longitude,
      source: "open-meteo"
    }));
  }

  async function geocodeNominatim(query){
    const url = new URL("https://nominatim.openstreetmap.org/search");
    url.searchParams.set("q", query);
    url.searchParams.set("format","jsonv2");
    url.searchParams.set("addressdetails","1");
    url.searchParams.set("limit","10");
    url.searchParams.set("countrycodes","se");
    url.searchParams.set("accept-language","sv");
    const res = await fetch(url.toString(), {cache:"no-store"});
    if(!res.ok) return [];
    const data = await res.json();
    return (data||[]).map(r => ({
      name: (r.name && r.name.split(",")[0]) || (r.display_name && r.display_name.split(",")[0]) || query,
      admin1: r.address?.county || r.address?.state || r.address?.region || "",
      lat: Number(r.lat),
      lon: Number(r.lon),
      source: "nominatim"
    })).filter(x => Number.isFinite(x.lat) && Number.isFinite(x.lon));
  }

  const strip = (s)=> (s||"").normalize("NFD").replace(/\p{Diacritic}/gu,"").toLowerCase();
  function strictPrefixFilter(items, query){
    const q = query.normalize("NFC").toLowerCase();
    const qHasDia = /[^\u0000-\u007f]/.test(query);
    if(!qHasDia) return items;
    const strict = items.filter(it => (it.name||"").normalize("NFC").toLowerCase().startsWith(q));
    return strict.length ? strict : items;
  }

  function rank(items, query){
    const q = query.trim();
    const ql = q.toLowerCase();
    const qHasDia = /[^\u0000-\u007f]/.test(q);
    const qs = strip(q);
    const score = (it)=>{
      const n = (it.name||"").normalize("NFC");
      const nl = n.toLowerCase();
      const ns = strip(n);
      let s = 0;
      if(qHasDia){
        if(nl.startsWith(ql)) s += 120;
        if(ns.startsWith(qs)) s += 20;
      }else{
        if(ns.startsWith(qs)) s += 100;
        if(nl.startsWith(ql)) s += 70;
      }
      if(nl === ql) s += 140;
      if(ns === qs) s += 130;
      return -s;
    };
    return items.sort((a,b)=>score(a)-score(b));
  }

  async function geocode(query){
    let r = await geocodeOpenMeteo(query);
    if(!r.length){
      const q2 = query.normalize("NFD").replace(/\p{Diacritic}/gu,"");
      if(q2 !== query) r = await geocodeOpenMeteo(q2);
      if(!r.length) r = await geocodeOpenMeteo(`${query} Sverige`);
      if(!r.length) r = await geocodeNominatim(`${query}, Sverige`);
      if(!r.length && q2 !== query) r = await geocodeNominatim(`${q2}, Sverige`);
    }
    r = strictPrefixFilter(r, query);
    return rank(r, query);
  }

  function closeSuggest(){ suggestBox.classList.remove("open"); suggestBox.innerHTML=""; }
  function renderSuggest(items){
    if(!items.length){ closeSuggest(); return; }
    suggestBox.innerHTML="";
    items.slice(0,8).forEach(it=>{
      const btn=document.createElement("button");
      btn.innerHTML = `<span class="left">${esc(it.name)}</span><span class="right">${esc(it.admin1||"")}</span>`;
      btn.onclick = ()=> selectPlace(it, {clearSearch:true});
      suggestBox.appendChild(btn);
    });
    suggestBox.classList.add("open");
  }

  let timer=null;
  searchInput.addEventListener("input", e=>{
    const q=e.target.value.trim();
    if(timer) clearTimeout(timer);
    if(q.length<2){ closeSuggest(); return; }
    timer=setTimeout(async ()=>{
      try{ renderSuggest(await geocode(q)); } catch { closeSuggest(); }
    }, 220);
  });
  searchInput.addEventListener("keydown", async e=>{
    if(e.key==="Enter"){
      e.preventDefault();
      const q=searchInput.value.trim();
      if(q.length<2) return;
      try{
        const items=await geocode(q);
        if(items.length) selectPlace(items[0], {clearSearch:true});
        closeSuggest();
      }catch{}
    } else if(e.key==="Escape"){
      closeSuggest();
    }
  });
  document.addEventListener("click", e=>{
    if(!suggestBox.contains(e.target) && e.target!==searchInput) closeSuggest();
  });

  // ---- Location: auto-try once on load ----
  function tryAutoLocation(){
    if(!navigator.geolocation) return Promise.reject();
    return new Promise((resolve,reject)=>{
      navigator.geolocation.getCurrentPosition(
        (pos)=>resolve({name:"Din position", admin1:"", lat:pos.coords.latitude, lon:pos.coords.longitude}),
        ()=>reject(),
        {enableHighAccuracy:false, timeout:2500, maximumAge:3600000}
      );
    });
  }

  function setCity(place){
    cityNameEl.textContent = place.name || DEFAULT.name;
    citySubEl.textContent = place.admin1 || "";
  }

  function riskLabel(v){
    if(v==null || isNaN(v)) return "—";
    if(v < 3) return "Låg";
    if(v < 6) return "Måttlig";
    if(v < 8) return "Hög";
    if(v < 11) return "Mycket hög";
    return "Extrem";
  }

  // ---- Open-Meteo weather ----
  const WMO = {
    0:"Klart", 1:"Mest klart", 2:"Delvis molnigt", 3:"Mulet",
    45:"Dimma", 48:"Rimfrost-dimma",
    51:"Duggregn", 53:"Duggregn", 55:"Duggregn",
    61:"Regn", 63:"Regn", 65:"Regn",
    71:"Snö", 73:"Snö", 75:"Snö",
    80:"Regnskurar", 81:"Regnskurar", 82:"Regnskurar",
    95:"Åska", 96:"Åska", 99:"Åska"
  };

  async function loadWeather(place){
    const url = new URL("https://api.open-meteo.com/v1/forecast");
    url.searchParams.set("latitude", place.lat);
    url.searchParams.set("longitude", place.lon);
    url.searchParams.set("timezone", "auto");
    url.searchParams.set("current", "temperature_2m,apparent_temperature,weather_code,wind_speed_10m,wind_direction_10m,precipitation");
    url.searchParams.set("hourly", "temperature_2m,precipitation,weather_code");
    url.searchParams.set("daily", "temperature_2m_max,temperature_2m_min,precipitation_sum,sunrise,sunset,weather_code");
    url.searchParams.set("forecast_days", "10");

    const res = await fetch(url.toString(), {cache:"no-store"});
    if(!res.ok) throw new Error("weather_failed");
    const data = await res.json();

    // current
    const c = data.current || {};
    wNowTemp.textContent = c.temperature_2m!=null ? Math.round(c.temperature_2m)+"°" : "—";
    wNowText.textContent = WMO[c.weather_code] || "—";
    wNowFeels.textContent = c.apparent_temperature!=null ? `Känns som ${Math.round(c.apparent_temperature)}°` : "Känns som —";
    wNowWind.textContent = (c.wind_speed_10m!=null) ? `${Math.round(c.wind_speed_10m)} m/s` : "— m/s";
    wNowPrec.textContent = (c.precipitation!=null) ? `${Number(c.precipitation).toFixed(1).replace(".",",")} mm` : "— mm";

    // today daily (index 0)
    const d = data.daily || {};
    const tmax = d.temperature_2m_max?.[0];
    const tmin = d.temperature_2m_min?.[0];
    wDayRange.textContent = (tmax!=null && tmin!=null) ? `${Math.round(tmax)}° / ${Math.round(tmin)}°` : "— / —";
    const psum = d.precipitation_sum?.[0];
    wDayPrec.textContent = (psum!=null) ? `${Number(psum).toFixed(1).replace(".",",")} mm` : "— mm";
    const sr = d.sunrise?.[0] ? new Date(d.sunrise[0]).toLocaleTimeString("sv-SE",{hour:"2-digit",minute:"2-digit"}) : "—";
    const ss = d.sunset?.[0] ? new Date(d.sunset[0]).toLocaleTimeString("sv-SE",{hour:"2-digit",minute:"2-digit"}) : "—";
    wSunrise.textContent = sr;
    wSunset.textContent = ss;

    // hourly for today
    const ht = data.hourly?.time || [];
    const htemp = data.hourly?.temperature_2m || [];
    const hprec = data.hourly?.precipitation || [];
    const hcode = data.hourly?.weather_code || [];

    const today = new Date().toLocaleDateString("sv-SE");
    const hours = [];
    for(let i=0;i<ht.length;i++){
      const dt = new Date(ht[i]);
      if(dt.toLocaleDateString("sv-SE") !== today) continue;
      hours.push({ hr: dt.getHours(), temp: htemp[i], prec: hprec[i], code: hcode[i] });
    }

    function part(from, to){
      const seg = hours.filter(x => from<=to ? (x.hr>=from && x.hr<=to) : (x.hr>=from || x.hr<=to));
      if(!seg.length) return {temp:null, prec:null};
      const avgT = seg.reduce((a,b)=>a+b.temp,0)/seg.length;
      const sumP = seg.reduce((a,b)=>a+(b.prec||0),0);
      return {temp:avgT, prec:sumP};
    }
    const pMorning = part(6,11);
    const pAfternoon = part(12,17);
    const pEvening = part(18,23);
    const pNight = part(0,5);

    function renderPart(el, label, p){
      el.innerHTML = `<div class="t">${label}</div><div class="v">${p.temp==null?"—":Math.round(p.temp)+"°"}</div><div class="p">${p.prec==null?"—":Number(p.prec).toFixed(1).replace(".",",")} mm</div>`;
    }
    renderPart(partCards.morning, "Morgon", pMorning);
    renderPart(partCards.afternoon, "Eftermiddag", pAfternoon);
    renderPart(partCards.evening, "Kväll", pEvening);
    renderPart(partCards.night, "Natt", pNight);

    // all hours scroll (rest of today)
    hoursTrack.innerHTML = "";
    const nowHr = new Date().getHours();
    const rest = hours.filter(x => x.hr >= nowHr);
    rest.forEach(x => {
      const div = document.createElement("div");
      div.className="hourCard";
      const hh = String(x.hr).padStart(2,"0");
      div.innerHTML = `<div class="t">${hh}</div><div class="v">${Math.round(x.temp)}°</div><div class="p">${Number(x.prec||0).toFixed(1).replace(".",",")}mm</div>`;
      hoursTrack.appendChild(div);
    });

    // 10 days list
    daysList.innerHTML = "";
    const dt = data.daily?.time || [];
    for(let i=0;i<Math.min(10, dt.length); i++){
      const date = new Date(dt[i]+"T00:00:00");
      const day = date.toLocaleDateString("sv-SE",{weekday:"short"});
      const mx = d.temperature_2m_max?.[i];
      const mn = d.temperature_2m_min?.[i];
      const pr = d.precipitation_sum?.[i];
      const row = document.createElement("div");
      row.className="dayRow";
      row.innerHTML = `<span>${esc(day)}</span><span>${mx==null?"—":Math.round(mx)}° / ${mn==null?"—":Math.round(mn)}°</span><span style="opacity:.7">${pr==null?"—":Number(pr).toFixed(1).replace(".",",")} mm</span>`;
      daysList.appendChild(row);
    }
  }

  // ---- UV ----
  async function loadUV(place){
    const url = new URL("https://api.open-meteo.com/v1/forecast");
    url.searchParams.set("latitude", place.lat);
    url.searchParams.set("longitude", place.lon);
    url.searchParams.set("timezone", "auto");
    url.searchParams.set("hourly", "uv_index");
    url.searchParams.set("forecast_days", "2");
    const res = await fetch(url.toString(), {cache:"no-store"});
    if(!res.ok) throw new Error("uv_failed");
    const data = await res.json();
    const times = data.hourly?.time || [];
    const vals = data.hourly?.uv_index || [];

    const now = Date.now();
    let best=0, bestDiff=Infinity;
    for(let i=0;i<times.length;i++){
      const t=new Date(times[i]).getTime();
      const diff=Math.abs(t-now);
      if(diff<bestDiff){bestDiff=diff; best=i;}
    }
    const uvNow = vals[best];
    uvMetaEl.textContent = `Nu: ${uvNow==null?"—":Number(uvNow).toFixed(1)} · Risk: ${riskLabel(uvNow)}`;
    drawUV(times, vals);
  }

  function drawUV(times, values){
    const svg=document.getElementById("uvChart");
    if(!svg) return;
    const w=900,h=220,padL=42,padR=14,padT=12,padB=30;
    const innerW=w-padL-padR, innerH=h-padT-padB;
    const today = new Date().toLocaleDateString("sv-SE");
    const pts=[];
    for(let i=0;i<times.length;i++){
      const d=new Date(times[i]);
      if(d.toLocaleDateString("sv-SE")!==today) continue;
      const hr=d.getHours();
      const v=values[i];
      if(v==null || isNaN(v)) continue;
      pts.push({hr, v:Number(v)});
    }
    if(!pts.length){ svg.innerHTML=""; return; }
    const maxScale=11;
    const minHr=Math.min(...pts.map(p=>p.hr));
    const maxHr=Math.max(...pts.map(p=>p.hr));
    const x=(hr)=> padL + ((hr-minHr)/Math.max(1,(maxHr-minHr)))*innerW;
    const y=(v)=> padT + (1-(Math.max(0,Math.min(maxScale,v))/maxScale))*innerH;

    const bands=[
      {a:0,b:2,fill:"rgba(80,200,120,.18)"},
      {a:2,b:5,fill:"rgba(255,220,80,.18)"},
      {a:5,b:7,fill:"rgba(255,160,70,.18)"},
      {a:7,b:10,fill:"rgba(255,90,90,.14)"},
      {a:10,b:11,fill:"rgba(170,90,220,.14)"},
    ];
    const rects=bands.map(b=>{
      const y1=y(b.b), y2=y(b.a);
      return `<rect x="${padL}" y="${y1}" width="${innerW}" height="${y2-y1}" fill="${b.fill}" />`;
    }).join("");

    const ticks=[0,3,6,8,11];
    const yAxis=ticks.map(v=>{
      const Y=y(v);
      return `<line x1="${padL}" y1="${Y}" x2="${w-padR}" y2="${Y}" stroke="rgba(0,0,0,.10)" />
              <text x="10" y="${Y+4}" font-size="12" fill="rgba(18,22,36,.65)" font-weight="700">${v}</text>`;
    }).join("");

    let dLine="";
    pts.forEach((p,i)=>{
      const X=x(p.hr), Y=y(p.v);
      dLine += (i===0?`M ${X} ${Y}`:` L ${X} ${Y}`);
    });
    const baseY=padT+innerH;
    const dFill=`${dLine} L ${x(pts[pts.length-1].hr)} ${baseY} L ${x(pts[0].hr)} ${baseY} Z`;

    const start=minHr-(minHr%2);
    const xLabels=[];
    for(let hr=start; hr<=maxHr; hr+=2){
      const X=x(hr);
      xLabels.push(`<text x="${X}" y="${h-10}" text-anchor="middle" font-size="12" fill="rgba(18,22,36,.60)" font-weight="700">${String(hr).padStart(2,"0")}</text>`);
    }

    svg.setAttribute("viewBox",`0 0 ${w} ${h}`);
    svg.innerHTML = `${rects}${yAxis}
      <path d="${dFill}" fill="rgba(0,0,0,.06)"></path>
      <path d="${dLine}" fill="none" stroke="rgba(18,22,36,.78)" stroke-width="3"></path>
      ${xLabels.join("")}`;
  }

  // ---- Pollenrapporten ----
  async function loadPollen(place){
    pollenBox.innerHTML = `<div class="smallNote">Laddar…</div>`;
    pollenMetaEl.textContent = `Sammanfattning: —`;
    try{
      const regionsRes = await fetch("https://api.pollenrapporten.se/v1/regions", {cache:"no-store"});
      if(!regionsRes.ok) throw new Error("regions_failed");
      const regions = await regionsRes.json();
      let best = regions[0] || null;

      if(best && (("latitude" in best) || ("lat" in best))){
        const R=6371, toRad=d=>d*Math.PI/180;
        const lat0=place.lat, lon0=place.lon;
        let bestD=Infinity;
        for(const r of regions){
          const rlat=Number(r.latitude ?? r.lat);
          const rlon=Number(r.longitude ?? r.lon);
          if(!Number.isFinite(rlat)||!Number.isFinite(rlon)) continue;
          const dLat=toRad(rlat-lat0), dLon=toRad(rlon-lon0);
          const a=Math.sin(dLat/2)**2 + Math.cos(toRad(lat0))*Math.cos(toRad(rlat))*Math.sin(dLon/2)**2;
          const d=2*R*Math.asin(Math.sqrt(a));
          if(d<bestD){bestD=d; best=r;}
        }
      }
      const regionId = best?.id ?? best?.region_id ?? best?.regionId;
      if(!regionId) throw new Error("no_region_id");

      const fcUrl = new URL("https://api.pollenrapporten.se/v1/forecasts");
      fcUrl.searchParams.set("region_id", String(regionId));
      fcUrl.searchParams.set("current", "true");
      const forecastRes = await fetch(fcUrl.toString(), {cache:"no-store"});
      if(!forecastRes.ok) throw new Error("forecast_failed");
      const data = await forecastRes.json();
      const items = (Array.isArray(data) ? data : (data.forecasts || data.items || [])).map(x => ({
        type: x.type || x.pollen || x.name || "—",
        level: x.level || x.value || x.risk || "—"
      }));

      const top = items.slice(0, 8);
      pollenBox.innerHTML = "";
      top.forEach(p=>{
        const row=document.createElement("div");
        row.className="pollenItem";
        row.innerHTML = `<span>${esc(p.type)}</span><span><b>${esc(p.level)}</b></span>`;
        pollenBox.appendChild(row);
      });

      const levels = top.map(x=>String(x.level||"").toLowerCase());
      let summary="—";
      if(levels.some(l=>l.includes("hög")||l.includes("high"))) summary="Hög";
      else if(levels.some(l=>l.includes("mått")||l.includes("medel")||l.includes("medium"))) summary="Måttlig";
      else if(levels.some(l=>l.includes("låg")||l.includes("low"))) summary="Låg";
      else if(levels.some(l=>l.includes("ingen")||l.includes("none"))) summary="Ingen";
      pollenMetaEl.textContent = `Sammanfattning: ${summary}`;

    }catch{
      pollenBox.innerHTML = `<div class="smallNote">Kunde inte hämta pollen just nu.</div>`;
      pollenMetaEl.textContent = `Sammanfattning: —`;
    }
  }

  async function loadAll(place, opts={}){
    setCity(place);
    await Promise.allSettled([loadWeather(place), loadUV(place), loadPollen(place)]);
    if(opts.clearSearch){
      searchInput.value="";
      searchInput.blur();
      closeSuggest();
    }
  }

  function selectPlace(it, opts={}){
    const place = {name: it.name, admin1: it.admin1 || "", lat: Number(it.lat), lon: Number(it.lon)};
    if(!Number.isFinite(place.lat)||!Number.isFinite(place.lon)) return;
    loadAll(place, opts);
  }

  async function init(){
    try{
      const loc = await tryAutoLocation();
      await loadAll(loc);
    }catch{
      await loadAll(DEFAULT);
    }
  }

  init();
  return {};
})();

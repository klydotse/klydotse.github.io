
const KLY = (() => {
  const DEFAULT = {name:"Stockholm", lat:59.3293, lon:18.0686, admin1:"Stockholms län"};
  const searchInput = document.getElementById("searchInput");
  const suggestBox = document.getElementById("suggest");
  const cityNameEl = document.getElementById("cityName");
  const citySubEl = document.getElementById("citySub");
  const uvMetaEl = document.getElementById("uvMeta");

  function esc(s){return (s||"").replace(/[&<>"']/g,c=>({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[c]));}

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

  function rankSuggestions(items, query){
    const q = (query||"").trim();
    const ql = q.toLowerCase();
    const hasDia = /[^\u0000-\u007f]/.test(q);
    const strip = (s)=> (s||"").normalize("NFD").replace(/\p{Diacritic}/gu,"").toLowerCase();
    const qs = strip(q);
    const score = (it)=>{
      const n = (it.name||"").normalize("NFC");
      const nl = n.toLowerCase();
      const ns = strip(n);
      let s = 0;
      if(hasDia){
        if(nl.startsWith(ql)) s += 100;
        if(ns.startsWith(qs)) s += 40;
      }else{
        if(ns.startsWith(qs)) s += 90;
        if(nl.startsWith(ql)) s += 60;
      }
      if(nl === ql) s += 120;
      if(ns === qs) s += 110;
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
      if(!r.length) r = await geocodeNominatim(query);
      if(!r.length && q2 !== query) r = await geocodeNominatim(q2);
      if(!r.length) r = await geocodeNominatim(`${query} Sverige`);
    }
    return rankSuggestions(r, query);
  }

  function closeSuggest(){ suggestBox.classList.remove("open"); suggestBox.innerHTML=""; }

  function renderSuggest(items){
    if(!items.length){ closeSuggest(); return; }
    suggestBox.innerHTML = "";
    items.slice(0,8).forEach(it => {
      const btn = document.createElement("button");
      btn.innerHTML = `<span class="left">${esc(it.name)}</span><span class="right">${esc(it.admin1||"")}</span>`;
      btn.addEventListener("click", () => selectPlace(it, {clearSearch:true}));
      suggestBox.appendChild(btn);
    });
    suggestBox.classList.add("open");
  }

  let timer = null;
  searchInput.addEventListener("input", e => {
    const q = e.target.value.trim();
    if(timer) clearTimeout(timer);
    if(q.length < 2){ closeSuggest(); return; }
    timer = setTimeout(async () => {
      try{ renderSuggest(await geocode(q)); } catch { closeSuggest(); }
    }, 220);
  });

  searchInput.addEventListener("keydown", async e => {
    if(e.key === "Enter"){
      e.preventDefault();
      const q = searchInput.value.trim();
      if(q.length < 2) return;
      try{
        const items = await geocode(q);
        if(items.length) selectPlace(items[0], {clearSearch:true});
        closeSuggest();
      }catch{}
    } else if(e.key === "Escape"){
      closeSuggest();
    }
  });

  document.addEventListener("click", e => {
    if(!suggestBox.contains(e.target) && e.target !== searchInput) closeSuggest();
  });

  document.getElementById("locBtn").addEventListener("click", () => useLocation());

  function setCity(place){
    cityNameEl.textContent = place.name || DEFAULT.name;
    citySubEl.textContent = place.admin1 || "";
  }

  async function useLocation(){
    if(!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(
      (pos)=>{
        const p = {name:"Din position", admin1:"", lat:pos.coords.latitude, lon:pos.coords.longitude};
        selectPlace(p, {clearSearch:true});
      },
      ()=>{},
      {enableHighAccuracy:false, timeout:4500, maximumAge:3600000}
    );
  }

  function riskLabel(v){
    if(v == null || isNaN(v)) return "—";
    if(v < 3) return "Låg";
    if(v < 6) return "Måttlig";
    if(v < 8) return "Hög";
    if(v < 11) return "Mycket hög";
    return "Extrem";
  }

  async function loadUV(place){
    const url = new URL("https://api.open-meteo.com/v1/forecast");
    url.searchParams.set("latitude", place.lat);
    url.searchParams.set("longitude", place.lon);
    url.searchParams.set("timezone", "auto");
    url.searchParams.set("hourly", "uv_index");
    url.searchParams.set("forecast_days", "2");
    const res = await fetch(url.toString(), {cache:"no-store"});
    if(!res.ok) throw new Error("uv_fetch_failed");
    const data = await res.json();
    const times = data.hourly?.time || [];
    const vals = data.hourly?.uv_index || [];
    const now = Date.now();
    let best = 0, bestDiff = Infinity;
    for(let i=0;i<times.length;i++){
      const t = new Date(times[i]).getTime();
      const diff = Math.abs(t-now);
      if(diff<bestDiff){ bestDiff=diff; best=i; }
    }
    const uvNow = vals[best];
    const label = riskLabel(uvNow);
    uvMetaEl.textContent = `Nu: ${uvNow==null?"—":Number(uvNow).toFixed(1)} · Risk: ${label}`;
    drawUV(times, vals, uvNow);
  }

  function drawUV(times, values){
    const svg = document.getElementById("uvChart");
    if(!svg) return;
    const w=900, h=220, padL=42, padR=14, padT=12, padB=30;
    const innerW = w-padL-padR, innerH = h-padT-padB;

    const today = new Date().toLocaleDateString("sv-SE");
    const pts = [];
    for(let i=0;i<times.length;i++){
      const d = new Date(times[i]);
      if(d.toLocaleDateString("sv-SE") !== today) continue;
      const hr = d.getHours();
      const v = values[i];
      if(v == null || isNaN(v)) continue;
      pts.push({hr, v:Number(v)});
    }
    if(!pts.length){ svg.innerHTML=""; return; }

    const maxScale = 11; // fixed
    const minHr = Math.min(...pts.map(p=>p.hr));
    const maxHr = Math.max(...pts.map(p=>p.hr));
    const x = (hr)=> padL + ((hr-minHr)/Math.max(1,(maxHr-minHr)))*innerW;
    const y = (v)=> padT + (1-(Math.max(0,Math.min(maxScale,v))/maxScale))*innerH;

    const bands = [
      {a:0, b:2,  fill:"rgba(80, 200, 120, 0.18)"},
      {a:2, b:5,  fill:"rgba(255, 220, 80, 0.18)"},
      {a:5, b:7,  fill:"rgba(255, 160, 70, 0.18)"},
      {a:7, b:10, fill:"rgba(255, 90, 90, 0.14)"},
      {a:10,b:11, fill:"rgba(170, 90, 220, 0.14)"},
    ];
    const rects = bands.map(b=>{
      const y1 = y(b.b), y2 = y(b.a);
      return `<rect x="${padL}" y="${y1}" width="${innerW}" height="${y2-y1}" fill="${b.fill}" />`;
    }).join("");

    const ticks = [0,3,6,8,11];
    const yAxis = ticks.map(v=>{
      const Y = y(v);
      return `<line x1="${padL}" y1="${Y}" x2="${w-padR}" y2="${Y}" stroke="rgba(0,0,0,.10)" />
              <text x="10" y="${Y+4}" font-size="12" fill="rgba(20,24,36,.65)" font-weight="700">${v}</text>`;
    }).join("");

    let dLine="";
    pts.forEach((p,i)=>{
      const X=x(p.hr), Y=y(p.v);
      dLine += (i===0?`M ${X} ${Y}`:` L ${X} ${Y}`);
    });
    const baseY = padT+innerH;
    const dFill = `${dLine} L ${x(pts[pts.length-1].hr)} ${baseY} L ${x(pts[0].hr)} ${baseY} Z`;

    const start = minHr - (minHr%2);
    const xLabels = [];
    for(let hr=start; hr<=maxHr; hr+=2){
      const X = x(hr);
      xLabels.push(`<text x="${X}" y="${h-10}" text-anchor="middle" font-size="12" fill="rgba(20,24,36,.60)" font-weight="700">${String(hr).padStart(2,"0")}</text>`);
    }

    svg.setAttribute("viewBox", `0 0 900 220`);
    svg.innerHTML = `${rects}${yAxis}
      <path d="${dFill}" fill="rgba(0,0,0,.06)"></path>
      <path d="${dLine}" fill="none" stroke="rgba(20,24,36,.78)" stroke-width="3"></path>
      ${xLabels.join("")}`;
  }

  async function loadPollen(place){
    const box = document.getElementById("pollenBox");
    const pollenMeta = document.getElementById("pollenMeta");
    box.innerHTML = `<div class="smallNote">Laddar…</div>`;
    pollenMeta.textContent = `Sammanfattning: —`;

    try{
      const regionsRes = await fetch("https://api.pollenrapporten.se/v1/regions", {cache:"no-store"});
      if(!regionsRes.ok) throw new Error("regions_failed");
      const regions = await regionsRes.json();
      let best = regions[0] || null;

      // Nearest region if coords exist
      if(best && (("latitude" in best) || ("lat" in best))){
        const R = 6371, toRad = d => d*Math.PI/180;
        const lat0 = place.lat, lon0 = place.lon;
        let bestD = Infinity;
        for(const r of regions){
          const rlat = Number(r.latitude ?? r.lat);
          const rlon = Number(r.longitude ?? r.lon);
          if(!Number.isFinite(rlat) || !Number.isFinite(rlon)) continue;
          const dLat = toRad(rlat-lat0), dLon = toRad(rlon-lon0);
          const a = Math.sin(dLat/2)**2 + Math.cos(toRad(lat0))*Math.cos(toRad(rlat))*Math.sin(dLon/2)**2;
          const d = 2*R*Math.asin(Math.sqrt(a));
          if(d < bestD){ bestD = d; best = r; }
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

      const top = items.slice(0, 10);
      box.innerHTML = "";
      top.forEach(p => {
        const row = document.createElement("div");
        row.className = "pollenItem";
        row.innerHTML = `<span>${esc(p.type)}</span><span><b>${esc(p.level)}</b></span>`;
        box.appendChild(row);
      });

      const levels = top.map(x => String(x.level||"").toLowerCase());
      let summary = "—";
      if(levels.some(l => l.includes("hög") || l.includes("high"))) summary = "Hög";
      else if(levels.some(l => l.includes("mått") || l.includes("medel") || l.includes("medium"))) summary = "Måttlig";
      else if(levels.some(l => l.includes("låg") || l.includes("low"))) summary = "Låg";
      else if(levels.some(l => l.includes("ingen") || l.includes("none"))) summary = "Ingen";
      pollenMeta.textContent = `Sammanfattning: ${summary}`;

    }catch{
      box.innerHTML = `<div class="smallNote">Kunde inte hämta pollen just nu.</div>`;
      pollenMeta.textContent = `Sammanfattning: —`;
    }
  }

  async function loadAll(place, opts={}){
    setCity(place);
    await Promise.allSettled([loadUV(place), loadPollen(place)]);
    if(opts.clearSearch){
      searchInput.value = "";
      searchInput.blur();
      closeSuggest();
    }
  }

  function selectPlace(it, opts={}){
    const place = {name: it.name, admin1: it.admin1 || "", lat: Number(it.lat), lon: Number(it.lon)};
    if(!Number.isFinite(place.lat) || !Number.isFinite(place.lon)) return;
    loadAll(place, opts);
  }

  loadAll(DEFAULT);

  return {};
})();

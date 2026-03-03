
const KLY = (() => {
  const TOP = [{"name": "Stockholm", "slug": "stockholm", "lat": 59.3293, "lon": 18.0686}, {"name": "Göteborg", "slug": "goteborg", "lat": 57.7089, "lon": 11.9746}, {"name": "Malmö", "slug": "malmo", "lat": 55.605, "lon": 13.0038}, {"name": "Uppsala", "slug": "uppsala", "lat": 59.8586, "lon": 17.6389}, {"name": "Västerås", "slug": "vasteras", "lat": 59.6099, "lon": 16.5448}, {"name": "Örebro", "slug": "orebro", "lat": 59.2753, "lon": 15.2134}, {"name": "Linköping", "slug": "linkoping", "lat": 58.4109, "lon": 15.6216}, {"name": "Helsingborg", "slug": "helsingborg", "lat": 56.0465, "lon": 12.6945}, {"name": "Jönköping", "slug": "jonkoping", "lat": 57.7826, "lon": 14.1618}, {"name": "Norrköping", "slug": "norrkoping", "lat": 58.5877, "lon": 16.1924}, {"name": "Lund", "slug": "lund", "lat": 55.7047, "lon": 13.191}, {"name": "Umeå", "slug": "umea", "lat": 63.8258, "lon": 20.263}, {"name": "Gävle", "slug": "gavle", "lat": 60.6745, "lon": 17.1417}, {"name": "Borås", "slug": "boras", "lat": 57.721, "lon": 12.9401}, {"name": "Södertälje", "slug": "sodertalje", "lat": 59.1955, "lon": 17.6253}, {"name": "Eskilstuna", "slug": "eskilstuna", "lat": 59.3713, "lon": 16.5097}, {"name": "Halmstad", "slug": "halmstad", "lat": 56.6745, "lon": 12.8578}, {"name": "Växjö", "slug": "vaxjo", "lat": 56.8777, "lon": 14.8091}, {"name": "Karlstad", "slug": "karlstad", "lat": 59.3791, "lon": 13.5036}, {"name": "Sundsvall", "slug": "sundsvall", "lat": 62.3908, "lon": 17.3069}, {"name": "Östersund", "slug": "ostersund", "lat": 63.1792, "lon": 14.6357}, {"name": "Luleå", "slug": "lulea", "lat": 65.5848, "lon": 22.1547}, {"name": "Trelleborg", "slug": "trelleborg", "lat": 55.3751, "lon": 13.1569}, {"name": "Kristianstad", "slug": "kristianstad", "lat": 56.0294, "lon": 14.1567}, {"name": "Skövde", "slug": "skovde", "lat": 58.3912, "lon": 13.8451}, {"name": "Falun", "slug": "falun", "lat": 60.6065, "lon": 15.6355}, {"name": "Karlskrona", "slug": "karlskrona", "lat": 56.1612, "lon": 15.5869}, {"name": "Kalmar", "slug": "kalmar", "lat": 56.6634, "lon": 16.3568}, {"name": "Trollhättan", "slug": "trollhattan", "lat": 58.2835, "lon": 12.2886}, {"name": "Uddevalla", "slug": "uddevalla", "lat": 58.3498, "lon": 11.9389}, {"name": "Skellefteå", "slug": "skelleftea", "lat": 64.7507, "lon": 20.95}, {"name": "Piteå", "slug": "pitea", "lat": 65.3172, "lon": 21.4793}, {"name": "Nyköping", "slug": "nykoping", "lat": 58.753, "lon": 17.0079}, {"name": "Karlskoga", "slug": "karlskoga", "lat": 59.3275, "lon": 14.5239}, {"name": "Lidköping", "slug": "lidkoping", "lat": 58.5052, "lon": 13.1577}, {"name": "Alingsås", "slug": "alingsas", "lat": 57.9303, "lon": 12.533}, {"name": "Sandviken", "slug": "sandviken", "lat": 60.6167, "lon": 16.77}, {"name": "Visby", "slug": "visby", "lat": 57.6348, "lon": 18.2948}, {"name": "Varberg", "slug": "varberg", "lat": 57.107, "lon": 12.248}, {"name": "Nässjö", "slug": "nassjo", "lat": 57.6537, "lon": 14.6975}, {"name": "Katrineholm", "slug": "katrineholm", "lat": 58.9959, "lon": 16.2072}, {"name": "Vänersborg", "slug": "vanersborg", "lat": 58.3808, "lon": 12.3234}, {"name": "Härnösand", "slug": "harnosand", "lat": 62.6323, "lon": 17.9379}, {"name": "Borlänge", "slug": "borlange", "lat": 60.4858, "lon": 15.4371}, {"name": "Motala", "slug": "motala", "lat": 58.537, "lon": 15.0366}, {"name": "Kungsbacka", "slug": "kungsbacka", "lat": 57.4872, "lon": 12.0761}, {"name": "Eslöv", "slug": "eslov", "lat": 55.838, "lon": 13.303}, {"name": "Ystad", "slug": "ystad", "lat": 55.4292, "lon": 13.8204}, {"name": "Kiruna", "slug": "kiruna", "lat": 67.8558, "lon": 20.2253}, {"name": "Enköping", "slug": "enkoping", "lat": 59.636, "lon": 17.0777}];
  const bySlug = new Map(TOP.map(c => [c.slug, c]));
  const DEFAULT = { name: "Stockholm", admin1: "Stockholms län", lat: 59.3293, lon: 18.0686 };

  function qs(){ return new URLSearchParams(location.search); }
  function setUrlState(state){
    const p = new URLSearchParams();
    p.set("name", state.name);
    if (state.admin1) p.set("admin1", state.admin1);
    p.set("lat", state.lat.toFixed(4));
    p.set("lon", state.lon.toFixed(4));
    history.replaceState(null, "", `${location.pathname}?${p.toString()}`);
  }

  const els = {};
  function bind(){
    const ids = [
      "klySearch","klyLocateBtn","klyCityLabel","klyCitySub",
      "uvSummaryValue","uvSummaryRisk","pollenSummaryValue",
      "uvNow","uvMax","uvRisk","uvAdvice",
      "uvChart",
      "nowTempBig","nowEmoji","nowText","nowFeels","nowWind","nowRain",
      "todayTemp","todayRain","sunrise","sunset",
      "mornIcon","mornTemp","mornRain","aftIcon","aftTemp","aftRain","eveIcon","eveTemp","eveRain","nightIcon","nightTemp","nightRain",
      "hourStrip","dayList","dataError",
      "uvDetails","pollenDetails",
      "pollenList"
    ];
    for (const id of ids) els[id] = document.getElementById(id);

    const wrap = document.querySelector(".search");
    if (wrap){
      let s = document.getElementById("klySuggest");
      if (!s){
        s = document.createElement("div");
        s.id = "klySuggest";
        s.className = "suggest";
        wrap.appendChild(s);
      }
      els.suggest = s;
    }
  }

  function wmoToEmoji(code){
    if (code == null) return "⛅";
    if (code === 0) return "☀️";
    if (code === 1) return "🌤";
    if (code === 2) return "⛅";
    if (code === 3) return "☁️";
    if ([45,48].includes(code)) return "🌫";
    if ([51,53,55].includes(code)) return "🌦";
    if ([61,63,65,80,81,82].includes(code)) return "🌧";
    if ([66,67].includes(code)) return "🌧";
    if ([71,73,75,77,85,86].includes(code)) return "🌨";
    if ([95,96,99].includes(code)) return "⛈";
    return "⛅";
  }
  function wmoToText(code){
    const m = {0:"Klart",1:"Mest klart",2:"Delvis molnigt",3:"Mulet",45:"Dimma",48:"Dimma",51:"Duggregn",53:"Duggregn",55:"Duggregn",61:"Regn",63:"Regn",65:"Regn",66:"Underkylt regn",67:"Underkylt regn",71:"Snö",73:"Snö",75:"Snö",77:"Snökorn",80:"Regnskurar",81:"Regnskurar",82:"Regnskurar",85:"Snöbyar",86:"Snöbyar",95:"Åska",96:"Åska",99:"Åska"};
    return m[code] ?? "Väder";
  }
  function fmtTimeHH(iso){ return new Date(iso).toLocaleTimeString("sv-SE", {hour:"2-digit"}); }
  function fmtTimeHHMM(iso){ return new Date(iso).toLocaleTimeString("sv-SE", {hour:"2-digit", minute:"2-digit"}); }
  function fmtDay(iso){ return new Date(iso).toLocaleDateString("sv-SE", {weekday:"short"}); }
  function pickNowIndex(times){
    const now = Date.now();
    let best = 0, bestDiff = Infinity;
    for (let i=0;i<times.length;i++){
      const t = new Date(times[i]).getTime();
      const diff = Math.abs(t - now);
      if (diff < bestDiff){ bestDiff = diff; best = i; }
    }
    return best;
  }
  function degToCompass(deg){
    if (deg == null || isNaN(deg)) return "—";
    const dirs = ["N","NNO","NO","ONO","O","OSO","SO","SSO","S","SSV","SV","VSV","V","VNV","NV","NNV"];
    return dirs[Math.round(deg/22.5) % 16];
  }
  function setText(el, v){ if (el) el.textContent = v; }

  function getInitialState(){
    const slug = document.body.dataset.citySlug;
    if (slug && bySlug.has(slug)){
      const c = bySlug.get(slug);
      return { name: c.name, admin1: "", lat: c.lat, lon: c.lon, from:"slug" };
    }
    const p = qs();
    const lat = parseFloat(p.get("lat") || "");
    const lon = parseFloat(p.get("lon") || "");
    const name = (p.get("name") || "").trim();
    const admin1 = (p.get("admin1") || "").trim();
    if (name && Number.isFinite(lat) && Number.isFinite(lon)){
      return { name, admin1, lat, lon, from:"url" };
    }
    try{
      const last = JSON.parse(localStorage.getItem("kly:lastPlace") || "null");
      if (last && last.name && Number.isFinite(last.lat) && Number.isFinite(last.lon)){
        return { ...last, from:"saved" };
      }
    }catch{}
    return { ...DEFAULT, from:"default" };
  }

  async function geocode(query){
    const url = new URL("https://geocoding-api.open-meteo.com/v1/search");
    url.searchParams.set("name", query);
    url.searchParams.set("count", "8");
    url.searchParams.set("language", "sv");
    url.searchParams.set("format", "json");
    const res = await fetch(url.toString(), { cache:"no-store" });
    if (!res.ok) return [];
    const data = await res.json();
    const results = data.results || [];
    return results
      .filter(r => r.latitude != null && r.longitude != null)
      .map(r => ({
        name: r.name,
        admin1: r.admin1 || r.admin2 || "",
        country: r.country || "",
        lat: r.latitude,
        lon: r.longitude
      }));
  }

  function escapeHtml(s){ return (s||"").replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
  function closeSuggest(){ if (els.suggest){ els.suggest.classList.remove("open"); els.suggest.innerHTML=""; } }
  function renderSuggest(items){
    if (!els.suggest) return;
    if (!items.length){ closeSuggest(); return; }
    els.suggest.innerHTML = "";
    for (const it of items){
      const b = document.createElement("button");
      const right = [it.admin1, it.country].filter(Boolean).join(", ");
      b.innerHTML = `<div class="name">${escapeHtml(it.name)}</div><div class="admin">${escapeHtml(right)}</div>`;
      b.addEventListener("click", () => { closeSuggest(); selectPlace({ name: it.name, admin1: it.admin1 || "", lat: it.lat, lon: it.lon }); });
      els.suggest.appendChild(b);
    }
    els.suggest.classList.add("open");
  }

  let suggestTimer = null;
  function wireSearch(){
    const input = els.klySearch;
    if (!input) return;

    input.addEventListener("input", () => {
      const q = (input.value || "").trim();
      if (suggestTimer) clearTimeout(suggestTimer);
      if (q.length < 2){ closeSuggest(); return; }
      suggestTimer = setTimeout(async () => {
        try{ renderSuggest(await geocode(q)); }catch{ closeSuggest(); }
      }, 220);
    });

    input.addEventListener("keydown", async (e) => {
      if (e.key === "Enter"){
        e.preventDefault();
        const q = (input.value || "").trim();
        if (q.length < 2) return;
        try{
          const items = await geocode(q);
          if (items.length){ selectPlace({ name: items[0].name, admin1: items[0].admin1 || "", lat: items[0].lat, lon: items[0].lon }); }
        }catch{}
      } else if (e.key === "Escape"){ closeSuggest(); }
    });

    document.addEventListener("click", (e) => {
      if (!els.suggest) return;
      if (!els.suggest.contains(e.target) && e.target !== input){ closeSuggest(); }
    });

    if (els.klyLocateBtn) els.klyLocateBtn.addEventListener("click", () => useLocation());
  }

  async function useLocation(){
    if (!navigator.geolocation){ selectPlace(DEFAULT); return; }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const {latitude, longitude} = pos.coords;
        let best = TOP[0], bestD = Infinity;
        const toRad = d => d * Math.PI / 180, R = 6371;
        for (const c of TOP){
          const dLat = toRad(c.lat - latitude), dLon = toRad(c.lon - longitude);
          const a = Math.sin(dLat/2)**2 + Math.cos(toRad(latitude))*Math.cos(toRad(c.lat))*Math.sin(dLon/2)**2;
          const d = 2*R*Math.asin(Math.sqrt(a));
          if (d < bestD){ bestD = d; best = c; }
        }
        selectPlace({ name: best.name, admin1: "", lat: latitude, lon: longitude });
      },
      () => selectPlace(DEFAULT),
      { enableHighAccuracy:false, timeout:4500, maximumAge:3600000 }
    );
  }

  let currentPlace = null;
  function selectPlace(place){
    currentPlace = { name: place.name || DEFAULT.name, admin1: place.admin1 || "", lat: Number(place.lat), lon: Number(place.lon) };
    try{ localStorage.setItem("kly:lastPlace", JSON.stringify(currentPlace)); }catch{}
    setUrlState(currentPlace);

    setText(els.klyCityLabel, currentPlace.name);
    setText(els.klyCitySub, currentPlace.admin1 ? currentPlace.admin1 : "");

    loadAll(currentPlace).catch(() => { if (els.dataError) els.dataError.classList.remove("hidden"); });
  }

  async function loadAll(place){
    if (els.dataError) els.dataError.classList.add("hidden");
    await loadWeatherAndUV(place);
    renderPollenPlaceholder();
  }

  function renderPollenPlaceholder(){
    setText(els.pollenSummaryValue, "—");
    if (els.pollenList) els.pollenList.innerHTML = `<div class="notice">Pollen (placeholder) – fixas snart.</div>`;
  }

  async function loadWeatherAndUV(place){
    const url = new URL("https://api.open-meteo.com/v1/forecast");
    url.searchParams.set("latitude", place.lat);
    url.searchParams.set("longitude", place.lon);
    url.searchParams.set("timezone", "auto");
    url.searchParams.set("wind_speed_unit", "ms");
    url.searchParams.set("current", "temperature_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m,wind_direction_10m");
    url.searchParams.set("hourly", "temperature_2m,precipitation,weather_code,uv_index");
    url.searchParams.set("daily", "temperature_2m_max,temperature_2m_min,precipitation_sum,weather_code,sunrise,sunset,uv_index_max");
    url.searchParams.set("forecast_days", "10");

    const res = await fetch(url.toString(), { cache:"no-store" });
    if (!res.ok) throw new Error("weather_fetch_failed");
    const data = await res.json();

    const cur = data.current || {};
    setText(els.nowTempBig, cur.temperature_2m==null?"—":Math.round(cur.temperature_2m));
    setText(els.nowEmoji, wmoToEmoji(cur.weather_code));
    setText(els.nowText, wmoToText(cur.weather_code));
    setText(els.nowFeels, cur.apparent_temperature==null?"Känns som —":`Känns som ${Math.round(cur.apparent_temperature)}°`);
    const wind = (cur.wind_speed_10m==null?"—":`${Math.round(cur.wind_speed_10m)} m/s`) + ` ${degToCompass(cur.wind_direction_10m)}`;
    setText(els.nowWind, wind);
    setText(els.nowRain, cur.precipitation==null ? "—" : `${Number(cur.precipitation).toFixed(1).replace(".", ",")} mm`);

    const d = data.daily || {};
    const tmax = d.temperature_2m_max?.[0], tmin = d.temperature_2m_min?.[0], psum = d.precipitation_sum?.[0], dCode = d.weather_code?.[0];
    setText(els.todayTemp, (tmax==null||tmin==null) ? "—" : `${Math.round(tmax)}° / ${Math.round(tmin)}°`);
    setText(els.todayRain, psum==null ? "—" : `${Number(psum).toFixed(1).replace(".", ",")} mm (${wmoToText(dCode)})`);
    setText(els.sunrise, d.sunrise?.[0] ? fmtTimeHHMM(d.sunrise[0]) : "—");
    setText(els.sunset, d.sunset?.[0] ? fmtTimeHHMM(d.sunset[0]) : "—");

    const ht = data.hourly?.time || [], htemp = data.hourly?.temperature_2m || [], hprec = data.hourly?.precipitation || [], hcode = data.hourly?.weather_code || [], huv = data.hourly?.uv_index || [];
    const avg = (arr)=>{ const v=arr.filter(x=>x!=null && !isNaN(x)); return v.length? v.reduce((a,b)=>a+b,0)/v.length : null; };
    const modeCode = (sliceIdx)=>{ const m=new Map(); for (const i of sliceIdx){ const c=hcode[i]; if (c==null) continue; m.set(c,(m.get(c)||0)+1);} let best=null,bestN=-1; for (const [k,v] of m.entries()){ if (v>bestN){ bestN=v; best=k;}} return best; };

    const now = new Date();
    const y=now.getFullYear(), mo=now.getMonth(), da=now.getDate();
    const isDate = (d, yy, mm, dd)=> d.getFullYear()==yy && d.getMonth()==mm && d.getDate()==dd;
    const tomorrow = new Date(now.getTime()+24*3600*1000);
    const ty=tomorrow.getFullYear(), tmo=tomorrow.getMonth(), tda=tomorrow.getDate();
    const idxs = ht.map((t,i)=>({i, d:new Date(t)}));
    const todayIdxs = idxs.filter(x=>isDate(x.d, y, mo, da));
    const tomorrowIdxs = idxs.filter(x=>isDate(x.d, ty, tmo, tda));
    const morning = todayIdxs.filter(x=>x.d.getHours()>=6 && x.d.getHours()<12).map(x=>x.i);
    const aft = todayIdxs.filter(x=>x.d.getHours()>=12 && x.d.getHours()<18).map(x=>x.i);
    const eve = todayIdxs.filter(x=>x.d.getHours()>=18 && x.d.getHours()<24).map(x=>x.i);
    let night = todayIdxs.filter(x=>x.d.getHours()>=0 && x.d.getHours()<6).map(x=>x.i);
    if (!night.length) night = tomorrowIdxs.filter(x=>x.d.getHours()>=0 && x.d.getHours()<6).map(x=>x.i);

    function fillMini(prefix, slice){
      if (!slice.length){ setText(els[prefix+"Temp"],"—"); setText(els[prefix+"Icon"],"⛅"); setText(els[prefix+"Rain"],"—"); return; }
      const t = avg(slice.map(i=>htemp[i])); const r = avg(slice.map(i=>hprec[i])); const code = modeCode(slice);
      setText(els[prefix+"Temp"], t==null?"—":`${Math.round(t)}°`);
      setText(els[prefix+"Icon"], wmoToEmoji(code));
      setText(els[prefix+"Rain"], r==null? "—" : `${Number(r).toFixed(1).replace(".", ",")} mm`);
    }
    fillMini("morn", morning); fillMini("aft", aft); fillMini("eve", eve); fillMini("night", night);

    if (els.hourStrip){
      els.hourStrip.innerHTML = "";
      const nowIdx = pickNowIndex(ht);
      const end = Math.min(nowIdx + 24, ht.length);
      for (let i=nowIdx; i<end; i++){
        const card = document.createElement("div");
        card.className = "hour";
        card.innerHTML = `<div class="t">${fmtTimeHH(ht[i])}</div><div class="i">${wmoToEmoji(hcode[i])}</div><div class="v">${htemp[i]==null?"—":Math.round(htemp[i])}°</div><div class="p">${hprec[i]==null?"":`${Number(hprec[i]).toFixed(1).replace(".", ",")}mm`}</div>`;
        els.hourStrip.appendChild(card);
      }
    }

    if (els.dayList){
      els.dayList.innerHTML = "";
      const times = d.time || [], tmx = d.temperature_2m_max || [], tmn = d.temperature_2m_min || [], pr = d.precipitation_sum || [], wc = d.weather_code || [];
      for (let i=0; i<Math.min(10, times.length); i++){
        const row = document.createElement("div");
        row.className = "day";
        row.innerHTML = `<div class="l">${fmtDay(times[i])}</div><div class="r">${wmoToEmoji(wc[i])} ${Math.round(tmx[i])}° / ${Math.round(tmn[i])}° · ${Number(pr[i]||0).toFixed(1).replace(".", ",")} mm</div>`;
        els.dayList.appendChild(row);
      }
    }

    let uvNow = null;
    if (huv && huv.length && ht && ht.length){ uvNow = huv[pickNowIndex(ht)]; }
    const uvMax = d.uv_index_max?.[0];
    setText(els.uvNow, uvNow==null?"—":Number(uvNow).toFixed(1));
    setText(els.uvMax, uvMax==null?"—":Number(uvMax).toFixed(1));
    const risk = (v)=> v==null?"—":(v<3?"Låg":v<6?"Måttlig":v<8?"Hög":v<11?"Mycket hög":"Extrem");
    const r = risk(uvNow);
    setText(els.uvRisk, r);
    setText(els.uvSummaryValue, uvNow==null?"—":Number(uvNow).toFixed(1));
    setText(els.uvSummaryRisk, r);
    if (els.uvAdvice){
      els.uvAdvice.textContent = r==="Låg" ? "Låg UV. Solglasögon om det är ljust, solskydd behövs oftast inte."
        : r==="Måttlig" ? "Måttlig UV. Skydda ansikte och nacke om du är ute länge."
        : "Hög UV. Använd solskydd och sök skugga mitt på dagen.";
    }
    drawUvChart(ht, huv, uvNow);
  }

  function drawUvChart(times, uvArr, uvNow){
    const svg = els.uvChart;
    if (!svg || !times || !uvArr || !times.length) return;
    const now = new Date();
    const y=now.getFullYear(), mo=now.getMonth(), da=now.getDate();
    const pts = [];
    for (let i=0;i<times.length;i++){
      const d = new Date(times[i]);
      if (d.getFullYear()!==y || d.getMonth()!==mo || d.getDate()!==da) continue;
      const h = d.getHours();
      if (h < 6 || h > 22) continue;
      const v = uvArr[i];
      if (v == null || isNaN(v)) continue;
      pts.push({h, v:Number(v)});
    }
    if (!pts.length){ svg.innerHTML=""; return; }
    const w=900,h=180,padL=34,padR=10,padT=14,padB=26;
    const innerW=w-padL-padR, innerH=h-padT-padB;
    const maxV=Math.max(1,...pts.map(p=>p.v));
    const minH=Math.min(...pts.map(p=>p.h)), maxH=Math.max(...pts.map(p=>p.h));
    const x=(hour)=> padL + ((hour-minH)/Math.max(1,(maxH-minH)))*innerW;
    const yv=(v)=> padT + (1-(v/maxV))*innerH;

    let dLine="";
    pts.forEach((p,idx)=>{ const X=x(p.h), Y=yv(p.v); dLine += (idx===0?`M ${X} ${Y}`:` L ${X} ${Y}`); });
    const firstX=x(pts[0].h), lastX=x(pts[pts.length-1].h), baseY=padT+innerH;
    const dFill=`${dLine} L ${lastX} ${baseY} L ${firstX} ${baseY} Z`;
    const axis=`<line class="uvAxis" x1="${padL}" y1="${baseY}" x2="${w-padR}" y2="${baseY}" />`;

    const labels=[];
    for (let hour=minH; hour<=maxH; hour+=2){
      labels.push(`<text class="uvLabel" x="${x(hour)}" y="${h-8}" text-anchor="middle">${String(hour).padStart(2,"0")}</text>`);
    }

    let dot="";
    if (uvNow != null){
      const nowHour=now.getHours();
      const nearest=pts.reduce((best,p)=> Math.abs(p.h-nowHour) < best.diff ? {p, diff:Math.abs(p.h-nowHour)} : best, {p:pts[0], diff:999}).p;
      dot=`<circle class="uvDot" cx="${x(nearest.h)}" cy="${yv(nearest.v)}" r="4" />`;
    }

    svg.setAttribute("viewBox", `0 0 ${w} ${h}`);
    svg.innerHTML = `${axis}<path class="uvFill" d="${dFill}"></path><path class="uvLine" d="${dLine}"></path>${dot}${labels.join("")}`;
  }

  function init(){
    bind();
    wireSearch();
    const initial = getInitialState();
    const isHome = document.body.dataset.klyPage === "home";
    if (isHome && initial.from === "default"){
      useLocation();
      selectPlace(initial);
    } else {
      selectPlace(initial);
    }
  }

  return { init };
})();
document.addEventListener("DOMContentLoaded", () => KLY.init());

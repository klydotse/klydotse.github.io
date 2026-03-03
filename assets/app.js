
const KLY = (() => {
  const CITIES = [{"name": "Stockholm", "slug": "stockholm", "lat": 59.3293, "lon": 18.0686}, {"name": "Göteborg", "slug": "goteborg", "lat": 57.7089, "lon": 11.9746}, {"name": "Malmö", "slug": "malmo", "lat": 55.605, "lon": 13.0038}, {"name": "Uppsala", "slug": "uppsala", "lat": 59.8586, "lon": 17.6389}, {"name": "Västerås", "slug": "vasteras", "lat": 59.6099, "lon": 16.5448}, {"name": "Örebro", "slug": "orebro", "lat": 59.2753, "lon": 15.2134}, {"name": "Linköping", "slug": "linkoping", "lat": 58.4109, "lon": 15.6216}, {"name": "Helsingborg", "slug": "helsingborg", "lat": 56.0465, "lon": 12.6945}, {"name": "Jönköping", "slug": "jonkoping", "lat": 57.7826, "lon": 14.1618}, {"name": "Norrköping", "slug": "norrkoping", "lat": 58.5877, "lon": 16.1924}, {"name": "Lund", "slug": "lund", "lat": 55.7047, "lon": 13.191}, {"name": "Umeå", "slug": "umea", "lat": 63.8258, "lon": 20.263}, {"name": "Gävle", "slug": "gavle", "lat": 60.6745, "lon": 17.1417}, {"name": "Borås", "slug": "boras", "lat": 57.721, "lon": 12.9401}, {"name": "Södertälje", "slug": "sodertalje", "lat": 59.1955, "lon": 17.6253}, {"name": "Eskilstuna", "slug": "eskilstuna", "lat": 59.3713, "lon": 16.5097}, {"name": "Halmstad", "slug": "halmstad", "lat": 56.6745, "lon": 12.8578}, {"name": "Växjö", "slug": "vaxjo", "lat": 56.8777, "lon": 14.8091}, {"name": "Karlstad", "slug": "karlstad", "lat": 59.3791, "lon": 13.5036}, {"name": "Sundsvall", "slug": "sundsvall", "lat": 62.3908, "lon": 17.3069}, {"name": "Östersund", "slug": "ostersund", "lat": 63.1792, "lon": 14.6357}, {"name": "Luleå", "slug": "lulea", "lat": 65.5848, "lon": 22.1547}, {"name": "Trelleborg", "slug": "trelleborg", "lat": 55.3751, "lon": 13.1569}, {"name": "Kristianstad", "slug": "kristianstad", "lat": 56.0294, "lon": 14.1567}, {"name": "Skövde", "slug": "skovde", "lat": 58.3912, "lon": 13.8451}, {"name": "Falun", "slug": "falun", "lat": 60.6065, "lon": 15.6355}, {"name": "Karlskrona", "slug": "karlskrona", "lat": 56.1612, "lon": 15.5869}, {"name": "Kalmar", "slug": "kalmar", "lat": 56.6634, "lon": 16.3568}, {"name": "Trollhättan", "slug": "trollhattan", "lat": 58.2835, "lon": 12.2886}, {"name": "Uddevalla", "slug": "uddevalla", "lat": 58.3498, "lon": 11.9389}, {"name": "Skellefteå", "slug": "skelleftea", "lat": 64.7507, "lon": 20.95}, {"name": "Piteå", "slug": "pitea", "lat": 65.3172, "lon": 21.4793}, {"name": "Nyköping", "slug": "nykoping", "lat": 58.753, "lon": 17.0079}, {"name": "Karlskoga", "slug": "karlskoga", "lat": 59.3275, "lon": 14.5239}, {"name": "Lidköping", "slug": "lidkoping", "lat": 58.5052, "lon": 13.1577}, {"name": "Alingsås", "slug": "alingsas", "lat": 57.9303, "lon": 12.533}, {"name": "Sandviken", "slug": "sandviken", "lat": 60.6167, "lon": 16.77}, {"name": "Visby", "slug": "visby", "lat": 57.6348, "lon": 18.2948}, {"name": "Varberg", "slug": "varberg", "lat": 57.107, "lon": 12.248}, {"name": "Nässjö", "slug": "nassjo", "lat": 57.6537, "lon": 14.6975}, {"name": "Katrineholm", "slug": "katrineholm", "lat": 58.9959, "lon": 16.2072}, {"name": "Vänersborg", "slug": "vanersborg", "lat": 58.3808, "lon": 12.3234}, {"name": "Härnösand", "slug": "harnosand", "lat": 62.6323, "lon": 17.9379}, {"name": "Borlänge", "slug": "borlange", "lat": 60.4858, "lon": 15.4371}, {"name": "Motala", "slug": "motala", "lat": 58.537, "lon": 15.0366}, {"name": "Kungsbacka", "slug": "kungsbacka", "lat": 57.4872, "lon": 12.0761}, {"name": "Eslöv", "slug": "eslov", "lat": 55.838, "lon": 13.303}, {"name": "Ystad", "slug": "ystad", "lat": 55.4292, "lon": 13.8204}, {"name": "Kiruna", "slug": "kiruna", "lat": 67.8558, "lon": 20.2253}, {"name": "Enköping", "slug": "enkoping", "lat": 59.636, "lon": 17.0777}];
  const bySlug = new Map(CITIES.map(c => [c.slug, c]));
  const byName = new Map(CITIES.map(c => [c.name.toLowerCase(), c]));

  function cityUrl(slug){ return `/stad/${slug}/`; }
  function setLastCity(slug){ try{ localStorage.setItem("kly_last_city", slug); }catch(e){} }

  function wireSearch(inputId){
    const input = document.getElementById(inputId);
    if (!input) return;

    const dl = document.createElement("datalist");
    dl.id = "klyCityList";
    for (const c of CITIES){
      const opt = document.createElement("option");
      opt.value = c.name;
      dl.appendChild(opt);
    }
    document.body.appendChild(dl);
    input.setAttribute("list", dl.id);

    function goToTyped(){
      const raw = (input.value || "").trim();
      if (!raw) return;
      const key = raw.toLowerCase();
      const exact = byName.get(key);
      const hit = exact || CITIES.find(c => c.name.toLowerCase().includes(key));
      if (hit){
        setLastCity(hit.slug);
        window.location.href = cityUrl(hit.slug);
      }
    }

    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter"){
        e.preventDefault();
        goToTyped();
      }
    });

    const locBtn = document.getElementById("klyLocateBtn");
    if (locBtn){
      locBtn.addEventListener("click", () => useLocation());
    }
  }

  function useLocation(){
    if (!navigator.geolocation){
      window.location.href = cityUrl("stockholm");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const {latitude, longitude} = pos.coords;
        let best = CITIES[0], bestD = Infinity;
        const toRad = d => d * Math.PI / 180;
        const R = 6371;
        for (const c of CITIES){
          const dLat = toRad(c.lat - latitude);
          const dLon = toRad(c.lon - longitude);
          const a = Math.sin(dLat/2)**2 + Math.cos(toRad(latitude))*Math.cos(toRad(c.lat))*Math.sin(dLon/2)**2;
          const d = 2*R*Math.asin(Math.sqrt(a));
          if (d < bestD){ bestD = d; best = c; }
        }
        setLastCity(best.slug);
        window.location.href = cityUrl(best.slug);
      },
      () => window.location.href = cityUrl("stockholm"),
      {enableHighAccuracy:false, timeout:4500, maximumAge:3600000}
    );
  }

  function homeDefault(){ window.location.replace(cityUrl("stockholm")); }

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
  function setText(id, value){
    const el = document.getElementById(id);
    if (el) el.textContent = value;
  }
  function mm(v){
    if (v == null || isNaN(v)) return "—";
    return `${Number(v).toFixed(1).replace(".", ",")} mm`;
  }

  async function loadWeather(slug){
    const city = bySlug.get(slug);
    if (!city) return;

    const url = new URL("https://api.open-meteo.com/v1/forecast");
    url.searchParams.set("latitude", city.lat);
    url.searchParams.set("longitude", city.lon);
    url.searchParams.set("timezone", "auto");
    url.searchParams.set("current", "temperature_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m,wind_direction_10m,wind_gusts_10m");
    url.searchParams.set("hourly", "temperature_2m,precipitation,weather_code");
    url.searchParams.set("daily", "temperature_2m_max,temperature_2m_min,precipitation_sum,weather_code,sunrise,sunset,uv_index_max");
    url.searchParams.set("forecast_days", "10");

    const res = await fetch(url.toString(), {cache:"no-store"});
    if (!res.ok) throw new Error("weather_fetch_failed");
    const data = await res.json();

    setText("klyCityLabel", city.name);

    const cur = data.current || {};
    setText("nowTempBig", cur.temperature_2m==null?"—":Math.round(cur.temperature_2m));
    setText("nowEmoji", wmoToEmoji(cur.weather_code));
    setText("nowText", wmoToText(cur.weather_code));
    setText("nowFeels", cur.apparent_temperature==null?"Känns som —":`Känns som ${Math.round(cur.apparent_temperature)}°`);
    setText("nowWind", (cur.wind_speed_10m==null?"—":`${Math.round(cur.wind_speed_10m)} km/h`) + ` ${degToCompass(cur.wind_direction_10m)}` + (cur.wind_gusts_10m==null?"":` (byar ${Math.round(cur.wind_gusts_10m)})`));
    setText("nowRain", mm(cur.precipitation));

    const d = data.daily || {};
    const tmax = d.temperature_2m_max?.[0];
    const tmin = d.temperature_2m_min?.[0];
    const psum = d.precipitation_sum?.[0];
    const dCode = d.weather_code?.[0];
    setText("todayTemp", (tmax==null||tmin==null) ? "—" : `${Math.round(tmax)}° / ${Math.round(tmin)}°`);
    setText("todayRain", psum==null ? "—" : `${Number(psum).toFixed(1).replace(".", ",")} mm (${wmoToText(dCode)})`);
    setText("sunrise", d.sunrise?.[0] ? fmtTimeHHMM(d.sunrise[0]) : "—");
    setText("sunset", d.sunset?.[0] ? fmtTimeHHMM(d.sunset[0]) : "—");

    // 3-part mini forecast derived from hourly (morning/afternoon/evening)
    const ht = data.hourly?.time || [];
    const htemp = data.hourly?.temperature_2m || [];
    const hprec = data.hourly?.precipitation || [];
    const hcode = data.hourly?.weather_code || [];

    function avg(arr){ const v=arr.filter(x=>x!=null && !isNaN(x)); return v.length? v.reduce((a,b)=>a+b,0)/v.length : null; }
    function modeCode(sliceIdx){
      const m = new Map();
      for (const i of sliceIdx){
        const c = hcode[i];
        if (c==null) continue;
        m.set(c,(m.get(c)||0)+1);
      }
      let best=null, bestN=-1;
      for (const [k,v] of m.entries()){ if (v>bestN){ bestN=v; best=k; } }
      return best;
    }
    const idxs = [];
    for (let i=0;i<ht.length;i++){
      const dt = new Date(ht[i]);
      idxs.push({i, h: dt.getHours(), t: dt.getTime()});
    }
    const today = new Date();
    const y=today.getFullYear(), mo=today.getMonth(), da=today.getDate();
    const isToday = (ms)=>{ const d=new Date(ms); return d.getFullYear()==y && d.getMonth()==mo && d.getDate()==da; }
    const todayIdxs = idxs.filter(x=>isToday(x.t));
    const morning = todayIdxs.filter(x=>x.h>=6 && x.h<12).map(x=>x.i);
    const aft = todayIdxs.filter(x=>x.h>=12 && x.h<18).map(x=>x.i);
    const eve = todayIdxs.filter(x=>x.h>=18 && x.h<=23).map(x=>x.i);

    function fillMini(prefix, slice){
      if (!slice.length){ setText(prefix+"Temp","—"); setText(prefix+"Icon","⛅"); setText(prefix+"Rain","—"); return; }
      const t = avg(slice.map(i=>htemp[i]));
      const r = avg(slice.map(i=>hprec[i]));
      const code = modeCode(slice);
      setText(prefix+"Temp", t==null?"—":`${Math.round(t)}°`);
      setText(prefix+"Icon", wmoToEmoji(code));
      setText(prefix+"Rain", r==null? "—" : `${Number(r).toFixed(1).replace(".", ",")} mm`);
    }
    fillMini("morn", morning);
    fillMini("aft", aft);
    fillMini("eve", eve);

    // full hourly strip inside details
    const strip = document.getElementById("hourStrip");
    if (strip){
      strip.innerHTML = "";
      const nowIdx = pickNowIndex(ht);
      const end = Math.min(nowIdx + 18, ht.length);
      for (let i=nowIdx; i<end; i++){
        const card = document.createElement("div");
        card.className = "hour";
        card.innerHTML = `
          <div class="t">${fmtTimeHH(ht[i])}</div>
          <div class="i">${wmoToEmoji(hcode[i])}</div>
          <div class="v">${htemp[i]==null?"—":Math.round(htemp[i])}°</div>
          <div class="p">${hprec[i]==null?"":`${Number(hprec[i]).toFixed(1).replace(".", ",")}mm`}</div>
        `;
        strip.appendChild(card);
      }
    }

    // 10 days
    const list = document.getElementById("dayList");
    if (list){
      list.innerHTML = "";
      const times = d.time || [];
      const tmx = d.temperature_2m_max || [];
      const tmn = d.temperature_2m_min || [];
      const pr = d.precipitation_sum || [];
      const wc = d.weather_code || [];
      for (let i=0; i<Math.min(10, times.length); i++){
        const row = document.createElement("div");
        row.className = "day";
        row.innerHTML = `<div class="l">${fmtDay(times[i])}</div><div class="r">${wmoToEmoji(wc[i])} ${Math.round(tmx[i])}° / ${Math.round(tmn[i])}° · ${Number(pr[i]||0).toFixed(1).replace(".", ",")} mm</div>`;
        list.appendChild(row);
      }
    }

    // UV
    const uvMax = d.uv_index_max?.[0];
    setText("uvMax", uvMax==null?"—":uvMax.toFixed(1));
    const now = new Date();
    let uvNow = null;
    if (uvMax != null){
      const hour = now.getHours();
      uvNow = (hour >= 10 && hour <= 16) ? Math.max(0, uvMax * 0.6) : (hour >= 7 && hour <= 19 ? Math.max(0, uvMax * 0.25) : 0);
    }
    setText("uvNow", uvNow==null?"—":uvNow.toFixed(1));
    const risk = (v) => v==null?"—":(v<3?"Låg":v<6?"Måttlig":v<8?"Hög":v<11?"Mycket hög":"Extrem");
    const r = risk(uvNow);
    setText("uvRisk", r);
    const advice = document.getElementById("uvAdvice");
    if (advice){
      advice.textContent = r==="Låg" ? "Låg UV. Solglasögon om det är ljust, solskydd behövs oftast inte."
        : r==="Måttlig" ? "Måttlig UV. Skydda ansikte och nacke om du är ute länge."
        : "Hög UV. Använd solskydd och sök skugga mitt på dagen.";
    }
  }

  function unwrapList(x){
    if (Array.isArray(x)) return x;
    if (!x || typeof x !== "object") return [];
    if (Array.isArray(x.data)) return x.data;
    if (Array.isArray(x.items)) return x.items;
    if (Array.isArray(x.results)) return x.results;
    if (x.data && Array.isArray(x.data.items)) return x.data.items;
    if (x.data && Array.isArray(x.data.results)) return x.data.results;
    if (x.data && Array.isArray(x.data.data)) return x.data.data;
    return [];
  }

  function levelToBucket(v){
    const s = (v ?? "").toString().toLowerCase().trim();
    if (!s) return "—";
    if (["ingen","none","0","no"].includes(s)) return "Ingen";
    if (["låg","low","1"].includes(s)) return "Låg";
    if (["måttlig","moderate","medium","medel","2"].includes(s)) return "Måttlig";
    if (["hög","high","3","4","5","very high","mycket hög"].includes(s)) return "Hög";
    return s.charAt(0).toUpperCase()+s.slice(1);
  }

  async function loadPollen(slug){
    const city = bySlug.get(slug);
    if (!city) return;

    const regionsRes = await fetch("https://api.pollenrapporten.se/v1/regions", {cache:"no-store"});
    if (!regionsRes.ok) throw new Error("pollen_regions_failed");
    const regionsJson = await regionsRes.json();
    const regions = unwrapList(regionsJson);
    if (!regions.length) throw new Error("pollen_no_regions");

    const cityKey = city.name.toLowerCase();
    let region = regions.find(r => ((r.name||r.region_name||"")+"").toLowerCase().includes(cityKey));
    if (!region){
      region = regions.find(r => ((r.name||r.region_name||"")+"").toLowerCase().includes("stockholm")) || regions[0];
    }

    const rid = region.id || region.region_id || region.uuid || region.regionId;
    if (!rid) throw new Error("pollen_region_id_missing");

    const fcUrl = new URL("https://api.pollenrapporten.se/v1/forecasts");
    fcUrl.searchParams.set("region_id", rid);
    fcUrl.searchParams.set("current", "true");

    const fcRes = await fetch(fcUrl.toString(), {cache:"no-store"});
    if (!fcRes.ok) throw new Error("pollen_forecasts_failed");
    const fcJson = await fcRes.json();
    const rawList = unwrapList(fcJson);

    const entries = [];
    for (const it of rawList){
      const typeName = (it.pollen_type?.name || it.pollen_type_name || it.pollen_type || it.type || it.name || "").toString();
      const lvl = (it.level?.name || it.level_name || it.level || it.risk || it.value || it.pollen_level || "").toString();
      if (!typeName) continue;
      entries.push({type: typeName, level: lvl});
    }

    const wanted = ["Al","Hassel","Björk","Alm","Ek","Gräs","Gråbo","Ambrosia"];
    const map = new Map([
      ["al","Al"],["alder","Al"],
      ["hassel","Hassel"],["hazel","Hassel"],
      ["björk","Björk"],["birch","Björk"],
      ["alm","Alm"],["elm","Alm"],
      ["ek","Ek"],["oak","Ek"],
      ["gräs","Gräs"],["gras","Gräs"],["grass","Gräs"],
      ["gråbo","Gråbo"],["mugwort","Gråbo"],
      ["ambrosia","Ambrosia"],["ragweed","Ambrosia"],
    ]);
    function norm(s){ return (s||"").toLowerCase().replace(/\s+/g," ").trim(); }
    const normalized = entries.map(e => {
      const key = norm(e.type);
      const label = map.get(key) || map.get(key.replace("å","a").replace("ä","a").replace("ö","o")) || e.type;
      return {label, level: levelToBucket(e.level)};
    });

    const byLabel = new Map();
    for (const e of normalized){
      if (!byLabel.has(e.label)) byLabel.set(e.label, e.level);
    }

    const rows = [];
    for (const w of wanted){
      if (byLabel.has(w)) rows.push({label:w, level: byLabel.get(w)});
    }
    if (!rows.length){
      for (const e of normalized.slice(0,8)) rows.push(e);
    }

    const headline = document.getElementById("pollenHeadline");
    if (headline){
      const anyActive = rows.some(r => ["Låg","Måttlig","Hög"].includes(r.level));
      headline.textContent = anyActive ? "Pollen idag" : "Inga aktiva pollen idag";
    }

    const list = document.getElementById("pollenList");
    if (list){
      list.innerHTML = "";
      for (const r of rows){
        const div = document.createElement("div");
        div.className = "item";
        div.innerHTML = `<div class="k">${r.label}</div><div class="v">${r.level}</div>`;
        list.appendChild(div);
      }
    }
  }

  function init(){
    wireSearch("klySearch");

    if (document.body.dataset.klyPage === "home"){
      setTimeout(() => homeDefault(), 10);
      return;
    }

    if (document.body.dataset.klyPage === "city"){
      const slug = document.body.dataset.citySlug;
      if (slug){
        loadWeather(slug).catch(() => {
          const e = document.getElementById("dataError");
          if (e) e.classList.remove("hidden");
        });
        loadPollen(slug).catch(() => {
          const e = document.getElementById("pollenError");
          if (e) e.classList.remove("hidden");
        });
      }
    }
  }

  return { init };
})();
document.addEventListener("DOMContentLoaded", () => KLY.init());

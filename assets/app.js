const KLY = (() => {
  const CITIES = [{"name": "Stockholm", "slug": "stockholm", "lat": 59.3293, "lon": 18.0686}, {"name": "Göteborg", "slug": "goteborg", "lat": 57.7089, "lon": 11.9746}, {"name": "Malmö", "slug": "malmo", "lat": 55.605, "lon": 13.0038}, {"name": "Uppsala", "slug": "uppsala", "lat": 59.8586, "lon": 17.6389}, {"name": "Västerås", "slug": "vasteras", "lat": 59.6099, "lon": 16.5448}, {"name": "Örebro", "slug": "orebro", "lat": 59.2753, "lon": 15.2134}, {"name": "Linköping", "slug": "linkoping", "lat": 58.4109, "lon": 15.6216}, {"name": "Helsingborg", "slug": "helsingborg", "lat": 56.0465, "lon": 12.6945}, {"name": "Jönköping", "slug": "jonkoping", "lat": 57.7826, "lon": 14.1618}, {"name": "Norrköping", "slug": "norrkoping", "lat": 58.5877, "lon": 16.1924}, {"name": "Lund", "slug": "lund", "lat": 55.7047, "lon": 13.191}, {"name": "Umeå", "slug": "umea", "lat": 63.8258, "lon": 20.263}, {"name": "Gävle", "slug": "gavle", "lat": 60.6745, "lon": 17.1417}, {"name": "Borås", "slug": "boras", "lat": 57.721, "lon": 12.9401}, {"name": "Södertälje", "slug": "sodertalje", "lat": 59.1955, "lon": 17.6253}, {"name": "Eskilstuna", "slug": "eskilstuna", "lat": 59.3713, "lon": 16.5097}, {"name": "Halmstad", "slug": "halmstad", "lat": 56.6745, "lon": 12.8578}, {"name": "Växjö", "slug": "vaxjo", "lat": 56.8777, "lon": 14.8091}, {"name": "Karlstad", "slug": "karlstad", "lat": 59.3791, "lon": 13.5036}, {"name": "Sundsvall", "slug": "sundsvall", "lat": 62.3908, "lon": 17.3069}, {"name": "Östersund", "slug": "ostersund", "lat": 63.1792, "lon": 14.6357}, {"name": "Luleå", "slug": "lulea", "lat": 65.5848, "lon": 22.1547}, {"name": "Trelleborg", "slug": "trelleborg", "lat": 55.3751, "lon": 13.1569}, {"name": "Kristianstad", "slug": "kristianstad", "lat": 56.0294, "lon": 14.1567}, {"name": "Skövde", "slug": "skovde", "lat": 58.3912, "lon": 13.8451}, {"name": "Falun", "slug": "falun", "lat": 60.6065, "lon": 15.6355}, {"name": "Karlskrona", "slug": "karlskrona", "lat": 56.1612, "lon": 15.5869}, {"name": "Kalmar", "slug": "kalmar", "lat": 56.6634, "lon": 16.3568}, {"name": "Trollhättan", "slug": "trollhattan", "lat": 58.2835, "lon": 12.2886}, {"name": "Uddevalla", "slug": "uddevalla", "lat": 58.3498, "lon": 11.9389}, {"name": "Skellefteå", "slug": "skelleftea", "lat": 64.7507, "lon": 20.95}, {"name": "Piteå", "slug": "pitea", "lat": 65.3172, "lon": 21.4793}, {"name": "Nyköping", "slug": "nykoping", "lat": 58.753, "lon": 17.0079}, {"name": "Karlskoga", "slug": "karlskoga", "lat": 59.3275, "lon": 14.5239}, {"name": "Lidköping", "slug": "lidkoping", "lat": 58.5052, "lon": 13.1577}, {"name": "Alingsås", "slug": "alingsas", "lat": 57.9303, "lon": 12.533}, {"name": "Sandviken", "slug": "sandviken", "lat": 60.6167, "lon": 16.77}, {"name": "Visby", "slug": "visby", "lat": 57.6348, "lon": 18.2948}, {"name": "Varberg", "slug": "varberg", "lat": 57.107, "lon": 12.248}, {"name": "Nässjö", "slug": "nassjo", "lat": 57.6537, "lon": 14.6975}, {"name": "Katrineholm", "slug": "katrineholm", "lat": 58.9959, "lon": 16.2072}, {"name": "Vänersborg", "slug": "vanersborg", "lat": 58.3808, "lon": 12.3234}, {"name": "Härnösand", "slug": "harnosand", "lat": 62.6323, "lon": 17.9379}, {"name": "Borlänge", "slug": "borlange", "lat": 60.4858, "lon": 15.4371}, {"name": "Motala", "slug": "motala", "lat": 58.537, "lon": 15.0366}, {"name": "Kungsbacka", "slug": "kungsbacka", "lat": 57.4872, "lon": 12.0761}, {"name": "Eslöv", "slug": "eslov", "lat": 55.838, "lon": 13.303}, {"name": "Ystad", "slug": "ystad", "lat": 55.4292, "lon": 13.8204}, {"name": "Kiruna", "slug": "kiruna", "lat": 67.8558, "lon": 20.2253}, {"name": "Enköping", "slug": "enkoping", "lat": 59.636, "lon": 17.0777}];
  const bySlug = new Map(CITIES.map(c => [c.slug, c]));
  const byName = new Map(CITIES.map(c => [c.name.toLowerCase(), c]));

  function haversineKm(lat1, lon1, lat2, lon2){
    const R = 6371;
    const toRad = d => d * Math.PI / 180;
    const dLat = toRad(lat2-lat1);
    const dLon = toRad(lon2-lon1);
    const a = Math.sin(dLat/2)**2 + Math.cos(toRad(lat1))*Math.cos(toRad(lat2))*Math.sin(dLon/2)**2;
    return 2*R*Math.asin(Math.sqrt(a));
  }

  function nearestCity(lat, lon){
    let best = CITIES[0];
    let bestD = Infinity;
    for (const c of CITIES){
      const d = haversineKm(lat, lon, c.lat, c.lon);
      if (d < bestD){ bestD = d; best = c; }
    }
    return best;
  }

  function cityUrl(slug){ return `/stad/${slug}/`; }
  function setLastCity(slug){ try{ localStorage.setItem("kly_last_city", slug); }catch(e){} }
  function getLastCity(){ try{ return localStorage.getItem("kly_last_city"); }catch(e){ return null; } }

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
      if (exact){
        setLastCity(exact.slug);
        window.location.href = cityUrl(exact.slug);
        return;
      }
      const hit = CITIES.find(c => c.name.toLowerCase().includes(key));
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
      locBtn.addEventListener("click", () => autoRoute({force:true}));
    }
  }

  function autoRoute({force=false}={}){
    const last = getLastCity();
    const defaultSlug = "stockholm";

    if (document.body.dataset.klyPage !== "home") return;

    if (last && !force){
      window.location.replace(cityUrl(last));
      return;
    }

    if (!navigator.geolocation){
      window.location.replace(cityUrl(defaultSlug));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const {latitude, longitude} = pos.coords;
        const c = nearestCity(latitude, longitude);
        setLastCity(c.slug);
        window.location.replace(cityUrl(c.slug));
      },
      () => { window.location.replace(cityUrl(defaultSlug)); },
      {enableHighAccuracy: false, timeout: 4500, maximumAge: 3600000}
    );
  }

  function wireCityLinks(){
    document.querySelectorAll("[data-city-slug]").forEach(a => {
      a.addEventListener("click", () => setLastCity(a.dataset.citySlug));
    });
  }

  function wmoToText(code){
    const m = {
      0:"Klart", 1:"Mest klart", 2:"Delvis molnigt", 3:"Mulet",
      45:"Dimma", 48:"Dimma",
      51:"Duggregn",53:"Duggregn",55:"Duggregn",
      61:"Regn",63:"Regn",65:"Regn",
      66:"Underkylt regn",67:"Underkylt regn",
      71:"Snö",73:"Snö",75:"Snö",
      77:"Snökorn",
      80:"Regnskurar",81:"Regnskurar",82:"Regnskurar",
      85:"Snöbyar",86:"Snöbyar",
      95:"Åska",96:"Åska",99:"Åska"
    };
    return m[code] ?? "Väder";
  }

  function fmtTimeHHMM(iso){
    const d = new Date(iso);
    return d.toLocaleTimeString("sv-SE", {hour:"2-digit", minute:"2-digit"});
  }

  function fmtDay(iso){
    const d = new Date(iso);
    return d.toLocaleDateString("sv-SE", {weekday:"short"});
  }

  function pickNowIndex(times){
    const now = Date.now();
    let best = 0;
    let bestDiff = Infinity;
    for (let i=0;i<times.length;i++){
      const t = new Date(times[i]).getTime();
      const diff = Math.abs(t - now);
      if (diff < bestDiff){ bestDiff = diff; best = i; }
    }
    return best;
  }

  async function loadCityData(slug){
    const city = bySlug.get(slug);
    if (!city) return;

    const url = new URL("https://api.open-meteo.com/v1/forecast");
    url.searchParams.set("latitude", city.lat);
    url.searchParams.set("longitude", city.lon);
    url.searchParams.set("timezone", "auto");
    url.searchParams.set("current", "temperature_2m,apparent_temperature,relative_humidity_2m,precipitation,weather_code,wind_speed_10m,wind_direction_10m");
    url.searchParams.set("hourly", "temperature_2m,precipitation,weather_code,uv_index");
    url.searchParams.set("daily", "temperature_2m_max,temperature_2m_min,precipitation_sum,uv_index_max");
    url.searchParams.set("forecast_days", "7");

    const res = await fetch(url.toString(), {cache:"no-store"});
    if (!res.ok) throw new Error("fetch_failed");
    const data = await res.json();

    const label = document.getElementById("klyCityLabel");
    if (label) label.textContent = city.name;

    const cur = data.current || {};
    const temp = cur.temperature_2m;
    const feels = cur.apparent_temperature;
    const hum = cur.relative_humidity_2m;
    const wind = cur.wind_speed_10m;
    const wcode = cur.weather_code;

    const tempEl = document.getElementById("wTemp");
    if (tempEl && temp != null) tempEl.textContent = Math.round(temp);
    const feelsEl = document.getElementById("wFeels");
    if (feelsEl && feels != null) feelsEl.textContent = `Känns som ${Math.round(feels)}°`;
    const descEl = document.getElementById("wDesc");
    if (descEl && wcode != null) descEl.textContent = wmoToText(wcode);

    const metaHum = document.getElementById("wHum");
    if (metaHum && hum != null) metaHum.textContent = `${Math.round(hum)}% luftfuktighet`;
    const metaWind = document.getElementById("wWind");
    if (metaWind && wind != null) metaWind.textContent = `${Math.round(wind)} m/s vind`;

    const ht = data.hourly?.time || [];
    const hp = data.hourly?.precipitation || [];
    const nowIdx = pickNowIndex(ht);
    let sum6 = 0;
    for (let i=nowIdx; i<Math.min(nowIdx+6, hp.length); i++){
      const v = hp[i];
      if (typeof v === "number") sum6 += v;
    }
    const metaRain = document.getElementById("wRain6");
    if (metaRain) metaRain.textContent = `${sum6.toFixed(1).replace(".", ",")} mm kommande 6h`;

    const hourlyWrap = document.getElementById("wHourly");
    if (hourlyWrap){
      hourlyWrap.innerHTML = "";
      const hw = data.hourly?.weather_code || [];
      const ht2 = data.hourly?.temperature_2m || [];
      const hp2 = data.hourly?.precipitation || [];
      for (let i=nowIdx; i<Math.min(nowIdx+5, ht.length); i++){
        const t = fmtTimeHHMM(ht[i]);
        const vv = ht2[i];
        const pp = hp2[i];
        const wc = hw[i];
        const card = document.createElement("div");
        card.className = "hour";
        card.innerHTML = `
          <div class="t">${t}</div>
          <div class="v">${vv==null?"—":Math.round(vv)}°</div>
          <div class="s">${pp==null?"":`${pp.toFixed(1).replace(".", ",")}mm`} · ${wmoToText(wc)}</div>
        `;
        hourlyWrap.appendChild(card);
      }
    }

    const weekWrap = document.getElementById("wWeek");
    if (weekWrap){
      weekWrap.innerHTML = "";
      const dt = data.daily?.time || [];
      const tmax = data.daily?.temperature_2m_max || [];
      const tmin = data.daily?.temperature_2m_min || [];
      const psum = data.daily?.precipitation_sum || [];
      for (let i=0;i<dt.length;i++){
        const row = document.createElement("div");
        row.className = "day";
        row.innerHTML = `
          <div class="l">${fmtDay(dt[i])}</div>
          <div class="r">${Math.round(tmin[i])}° / ${Math.round(tmax[i])}° · ${Number(psum[i]||0).toFixed(1).replace(".", ",")}mm</div>
        `;
        weekWrap.appendChild(row);
      }
    }

    const uNowEl = document.getElementById("uvNow");
    const uMaxEl = document.getElementById("uvMax");
    const uRiskEl = document.getElementById("uvRisk");
    const uvh = data.hourly?.uv_index || [];
    const uvNow = uvh[nowIdx];
    if (uNowEl) uNowEl.textContent = (uvNow==null?"—":uvNow.toFixed(1));
    const uvm = data.daily?.uv_index_max?.[0];
    if (uMaxEl) uMaxEl.textContent = (uvm==null?"—":uvm.toFixed(1));

    const risk = (v) => {
      if (v == null) return "—";
      if (v < 3) return "Låg";
      if (v < 6) return "Måttlig";
      if (v < 8) return "Hög";
      if (v < 11) return "Mycket hög";
      return "Extrem";
    };
    if (uRiskEl) uRiskEl.textContent = risk(uvNow);

    const uvAdvice = document.getElementById("uvAdvice");
    if (uvAdvice){
      const r = risk(uvNow);
      if (r === "Låg") uvAdvice.textContent = "Låg UV. Solglasögon om det är ljust, solskydd behövs oftast inte.";
      else if (r === "Måttlig") uvAdvice.textContent = "Måttlig UV. Skydda ansikte och nacke om du är ute länge.";
      else uvAdvice.textContent = "Hög UV. Använd solskydd och sök skugga mitt på dagen.";
    }
  }

  function wireToggle(){
    const btnH = document.getElementById("btnHourly");
    const btnW = document.getElementById("btnWeek");
    const secH = document.getElementById("secHourly");
    const secW = document.getElementById("secWeek");
    if (!btnH || !btnW || !secH || !secW) return;

    function set(mode){
      const isH = mode === "h";
      btnH.setAttribute("aria-pressed", isH ? "true" : "false");
      btnW.setAttribute("aria-pressed", !isH ? "true" : "false");
      secH.style.display = isH ? "" : "none";
      secW.style.display = !isH ? "" : "none";
    }
    btnH.addEventListener("click", () => set("h"));
    btnW.addEventListener("click", () => set("w"));
    set("h");
  }

  function init(){
    wireSearch("klySearch");
    wireCityLinks();
    wireToggle();

    if (document.body.dataset.klyPage === "city"){
      const slug = document.body.dataset.citySlug;
      if (slug){
        loadCityData(slug).catch(() => {
          const e = document.getElementById("dataError");
          if (e) e.style.display = "";
        });
      }
    }

    if (document.body.dataset.klyPage === "home"){
      setTimeout(() => autoRoute(), 50);
    }
  }

  return { init, autoRoute };
})();
document.addEventListener("DOMContentLoaded", () => KLY.init());

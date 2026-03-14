// kly.se - Vädret, helt enkelt. (v15 - Final Pro Version)
const $ = (id) => document.getElementById(id);

const state = {
  place: { name: "Stockholm", county: "Stockholms län", country: "SE", lat: 59.3293, lon: 18.0686 },
};

/* --- UTILITIES --- */
function fmtTime(date) { return date.toLocaleTimeString("sv-SE", { hour: "2-digit", minute: "2-digit" }); }
function fmtDay(date) { return date.toLocaleDateString("sv-SE", { weekday: "short" }); }

function getWeatherIcon(code, isDay = 1) {
  const c = Number(code);
  if (c === 0) return isDay ? "bi-sun-fill text-warning" : "bi-moon-stars-fill text-light";
  if ([1, 2].includes(c)) return isDay ? "bi-cloud-sun-fill text-warning" : "bi-cloud-moon-fill text-light";
  if (c === 3) return "bi-clouds-fill text-white-50"; // Fixed visibility
  if ([45, 48].includes(c)) return "bi-cloud-haze-fill text-white-50";
  if ([51, 53, 55, 56, 57].includes(c)) return "bi-cloud-drizzle-fill text-info";
  if ([61, 63, 65, 66, 67, 80, 81, 82].includes(c)) return "bi-cloud-rain-fill text-info";
  if ([71, 73, 75, 77, 85, 86].includes(c)) return "bi-cloud-snow-fill text-white";
  if ([95, 96, 99].includes(c)) return "bi-cloud-lightning-rain-fill text-warning";
  return "bi-cloud-fill text-white-50";
}

function getWeatherDesc(code) {
  const c = Number(code);
  if (c === 0) return "Klart";
  if ([1, 2].includes(c)) return "Halvklart";
  if (c === 3) return "Mulet";
  if ([45, 48].includes(c)) return "Dimma";
  if ([61, 63, 65, 80].includes(c)) return "Regn";
  if ([71, 73, 75].includes(c)) return "Snö";
  if ([95, 96, 99].includes(c)) return "Åska";
  return "Växlande";
}

/* --- BOOT & URL PARSING --- */
function init() {
  const params = new URLSearchParams(window.location.search);
  const lat = params.get("lat");
  const lon = params.get("lon");
  const name = params.get("name");
  
  if (lat && lon && name) {
    state.place = { name: name, county: "", country: "", lat: parseFloat(lat), lon: parseFloat(lon) };
    refreshAll();
  } else {
    getUserLocation(true);
  }
}

/* --- GEOLOCATION --- */
function getUserLocation(silent = false) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        state.place = { name: "Din plats", county: "Lokal data", country: "SE", lat: pos.coords.latitude, lon: pos.coords.longitude };
        refreshAll();
      },
      () => { if (!silent) alert("Kunde inte hämta plats."); refreshAll(); }
    );
  } else { refreshAll(); }
}

$("btnGeo").addEventListener("click", () => getUserLocation(false));

/* --- SEARCH --- */
let searchTimeout;
$("searchInput").addEventListener("input", (e) => {
  clearTimeout(searchTimeout);
  const q = e.target.value.trim();
  if (q.length < 2) { $("searchResults").hidden = true; return; }
  
  searchTimeout = setTimeout(async () => {
    try {
      const res = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(q)}&count=10&language=sv&format=json`);
      const data = await res.json();
      if (!data.results) { $("searchResults").hidden = true; return; }

      const allowed = ["SE", "NO", "IT", "ES"];
      const filtered = data.results.filter(p => allowed.includes(p.country_code));
      
      const box = $("searchResults");
      box.innerHTML = "";
      filtered.forEach(p => {
        const div = document.createElement("div");
        div.className = "search-item";
        div.innerHTML = `<div class="fw-bold">${p.name}</div><small class="text-white-50">${p.admin1 || p.country}</small>`;
        div.onclick = () => {
          state.place = { name: p.name, county: p.admin1 || p.country, country: p.country_code, lat: p.latitude, lon: p.longitude };
          $("searchInput").value = "";
          box.hidden = true;
          window.history.pushState({}, document.title, "/");
          refreshAll();
        };
        box.appendChild(div);
      });
      box.hidden = filtered.length === 0;
    } catch (err) { console.error(err); }
  }, 300);
});

/* --- FETCH & RENDER --- */
async function refreshAll() {
  $("placeName").textContent = state.place.name;
  $("placeCounty").textContent = state.place.county;

  const { lat, lon } = state.place;
  const wxUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,cloud_cover,wind_speed_10m&hourly=temperature_2m,precipitation_probability,weather_code,is_day&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,uv_index_max,sunrise,sunset&minutely_15=precipitation&timezone=auto&forecast_days=10`;
  
  try {
    const res = await fetch(wxUrl);
    const data = await res.json();
    renderWeather(data);
    renderRainGraph(data.minutely_15);
  } catch (err) { console.error(err); }

  fetchPollen();
}

function renderWeather(data) {
  const cur = data.current;
  const daily = data.daily;
  
  $("tempNow").textContent = Math.round(cur.temperature_2m);
  $("feelsLike").textContent = `Känns som ${Math.round(cur.apparent_temperature)}°`;
  $("weatherCond").textContent = getWeatherDesc(cur.weather_code);
  $("wind").textContent = Math.round(cur.wind_speed_10m);
  $("humidity").textContent = Math.round(cur.relative_humidity_2m);
  $("cloudCover").textContent = Math.round(cur.cloud_cover);
  $("uvLevel").textContent = Math.round(daily.uv_index_max[0]);
  $("sunrise").textContent = daily.sunrise[0].split("T")[1];
  $("sunset").textContent = daily.sunset[0].split("T")[1];

  $("heroIcon").className = `bi ${getWeatherIcon(cur.weather_code, cur.is_day)} hero-icon`;

  // Rain Summary
  const prob = daily.precipitation_probability_max[0];
  $("rainSummaryText").textContent = prob < 10 ? "Ingen nederbörd väntas idag." : (prob < 50 ? `Liten risk (${prob}%) för regn idag.` : "Regn väntas idag. Ta med paraply!");

  // Hourly
  const hrBox = $("hourlyRow");
  hrBox.innerHTML = "";
  for(let i=0; i<24; i++) {
    const t = new Date(data.hourly.time[i]);
    hrBox.innerHTML += `
      <div class="hour-tile">
        <div class="fw-bold small">${t.getHours()}:00</div>
        <i class="bi ${getWeatherIcon(data.hourly.weather_code[i], data.hourly.is_day[i])}"></i>
        <div class="fw-bold">${Math.round(data.hourly.temperature_2m[i])}°</div>
        <div class="small text-white-50">${data.hourly.precipitation_probability[i]}%</div>
      </div>`;
  }

  // 10-Day Table (Safety Check for Array Length)
  const dayBox = $("outlookRows");
  dayBox.innerHTML = "";
  for(let i=0; i < daily.time.length; i++) {
    const d = new Date(daily.time[i]);
    dayBox.innerHTML += `
      <tr>
        <td class="ps-3 fw-bold">${i===0 ? "Idag" : fmtDay(d)}</td>
        <td><i class="bi ${getWeatherIcon(daily.weather_code[i], 1)} fs-5"></i></td>
        <td class="text-end fw-bold text-white-50">${Math.round(daily.temperature_2m_min[i])}°</td>
        <td class="text-end fw-bold">${Math.round(daily.temperature_2m_max[i])}°</td>
        <td class="text-end pe-3 text-info">${daily.precipitation_probability_max[i]}%</td>
      </tr>`;
  }

  // UV Detail Section
  $("uvMaxToday").textContent = daily.uv_index_max[0];
  $("uvStatusText").textContent = (daily.uv_index_max[0] < 3 ? "Låg" : (daily.uv_index_max[0] < 6 ? "Måttlig" : "Hög"));
  const uvRow = $("uvWeekly");
  uvRow.innerHTML = daily.uv_index_max.slice(1, 6).map((val, i) => `
    <div class="text-center">
      <div class="small text-white-50">${fmtDay(new Date(daily.time[i+1]))}</div>
      <div class="fw-bold">${Math.round(val)}</div>
    </div>`).join("");
}

function renderRainGraph(minutely) {
  const box = $("rainGraphSection");
  const graph = $("rainGraph");
  graph.innerHTML = "";
  if (!minutely || !minutely.precipitation.some(v => v > 0)) { box.style.display = "none"; return; }
  box.style.display = "block";
  const maxRain = Math.max(...minutely.precipitation.slice(0, 8), 0.5);
  minutely.precipitation.slice(0, 8).forEach(amount => {
    graph.innerHTML += `<div class="rain-bar" style="height: ${(amount/maxRain)*100}%"></div>`;
  });
}

/* --- POLLEN --- */
async function fetchPollen() {
  const { lat, lon } = state.place;
  try {
    const url = `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${lat}&longitude=${lon}&hourly=birch_pollen,grass_pollen,alder_pollen,oak_pollen,pine_pollen&forecast_days=7&timezone=auto`;
    const res = await fetch(url);
    const data = await res.json();
    const pollen = [
      { name: "Björk", val: data.hourly.birch_pollen[12] },
      { name: "Gräs", val: data.hourly.grass_pollen[12] },
      { name: "Al", val: data.hourly.alder_pollen[12] },
      { name: "Ek", val: data.hourly.oak_pollen[12] },
      { name: "Tall", val: data.hourly.pine_pollen[12] }
    ].sort((a,b) => b.val - a.val);

    $("pollenHero").textContent = pollen[0].val > 0.1 ? pollen[0].name : "Ingen";
    $("pollenList").innerHTML = pollen.map((p, i) => `
      <div class="pollen-row ${i > 2 ? 'pollen-extra d-none' : ''}">
        <div style="width: 100px" class="fw-bold">${p.name}</div>
        <div class="pollen-bar-bg"><div class="pollen-bar-fill ${p.val > 50 ? 'level-H' : (p.val > 10 ? 'level-M' : 'level-L')}" style="width: ${Math.min(p.val, 100)}%"></div></div>
        <div style="width: 60px; text-align: right" class="small fw-bold">${p.val > 50 ? 'Hög' : (p.val > 10 ? 'Måttlig' : (p.val > 0.1 ? 'Låg' : 'Ingen'))}</div>
      </div>`).join("");
  } catch (err) { console.error(err); }
}

let pollenOpen = false;
$("pollenToggleBtn").addEventListener("click", () => {
  pollenOpen = !pollenOpen;
  document.querySelectorAll(".pollen-extra").forEach(el => el.classList.toggle("d-none"));
  $("pollenToggleBtn").innerHTML = pollenOpen ? 'Dölj <i class="bi bi-chevron-up"></i>' : 'Visa alla <i class="bi bi-chevron-down"></i>';
});

// Enable horizontal scroll with mouse wheel
document.querySelector('.hourly-scroll').addEventListener('wheel', (e) => {
  if (e.deltaY !== 0) { e.preventDefault(); document.querySelector('.hourly-scroll').scrollLeft += e.deltaY; }
});

init();

// kly.se - Vädret, helt enkelt.
const $ = (id) => document.getElementById(id);

// Standard state
const state = {
  place: { name: "Stockholm", county: "Stockholms län", country: "SE", lat: 59.3293, lon: 18.0686 },
};

/* --- HJÄLPMETODER --- */
function fmtTime(date) { return date.toLocaleTimeString("sv-SE", { hour: "2-digit", minute: "2-digit" }); }
function fmtDay(date) { return date.toLocaleDateString("sv-SE", { weekday: "short" }); }

function getWeatherIcon(code, isDay = 1) {
  const c = Number(code);
  if (c === 0) return isDay ? "bi-sun-fill text-warning" : "bi-moon-stars-fill text-light";
  if ([1, 2].includes(c)) return isDay ? "bi-cloud-sun-fill text-warning" : "bi-cloud-moon-fill text-light";
  if (c === 3) return "bi-clouds-fill text-secondary";
  if ([45, 48].includes(c)) return "bi-cloud-haze-fill text-secondary";
  if ([51, 53, 55, 56, 57].includes(c)) return "bi-cloud-drizzle-fill text-info";
  if ([61, 63, 65, 66, 67, 80, 81, 82].includes(c)) return "bi-cloud-rain-fill text-info";
  if ([71, 73, 75, 77, 85, 86].includes(c)) return "bi-cloud-snow-fill text-white";
  if ([95, 96, 99].includes(c)) return "bi-cloud-lightning-rain-fill text-warning";
  return "bi-cloud-fill";
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

/* --- INITIERING & URL-HANTREING (För SEO) --- */
function init() {
  const params = new URLSearchParams(window.location.search);
  const lat = params.get("lat");
  const lon = params.get("lon");
  const name = params.get("name");
  
  if (lat && lon && name) {
    // Om användaren kom via en SEO-länk
    state.place = { name: name, county: "", country: "", lat: parseFloat(lat), lon: parseFloat(lon) };
    refreshAll();
  } else {
    // Försök hämta geolokalisering på första besöket
    getUserLocation(true);
  }
}

/* --- GEOLOCATION --- */
function getUserLocation(silentFallback = false) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        state.place = { name: "Din plats", county: "Lokal data", country: "SE", lat: pos.coords.latitude, lon: pos.coords.longitude };
        refreshAll();
      },
      (err) => {
        if (!silentFallback) alert("Kunde inte hämta plats. Kontrollera dina webbläsarinställningar.");
        refreshAll(); // Fallback till Stockholm
      }
    );
  } else {
    refreshAll();
  }
}

$("btnGeo").addEventListener("click", () => getUserLocation(false));

/* --- SÖKNING (Open-Meteo Geocoding) --- */
let searchTimeout;
$("searchInput").addEventListener("input", (e) => {
  clearTimeout(searchTimeout);
  const q = e.target.value.trim();
  if (q.length < 2) { $("searchResults").hidden = true; return; }
  
  searchTimeout = setTimeout(async () => {
    try {
      const res = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(q)}&count=10&language=sv&format=json`);
      const data = await res.json();
      if (!data.results) {
        $("searchResults").hidden = true;
        return;
      }

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
          // Ta bort SEO-parametrar från URL:en när man söker nytt
          window.history.pushState({}, document.title, "/");
          refreshAll();
        };
        box.appendChild(div);
      });
      box.hidden = filtered.length === 0;
    } catch (err) { console.error(err); }
  }, 300);
});

// Stäng sök när man klickar utanför
document.addEventListener("click", (e) => {
  if (!$("searchResults").contains(e.target) && e.target !== $("searchInput")) {
    $("searchResults").hidden = true;
  }
});

/* --- HÄMTA VÄDER --- */
async function refreshAll() {
  $("placeName").textContent = state.place.name;
  $("placeCounty").textContent = state.place.county;

  const { lat, lon } = state.place;
  
  const wxUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,weather_code,cloud_cover,wind_speed_10m&hourly=temperature_2m,precipitation_probability,weather_code,is_day&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,uv_index_max&minutely_15=precipitation&timezone=auto`;
  
  try {
    const res = await fetch(wxUrl);
    const data = await res.json();
    renderWeather(data);
    generateRainSummary(data);
    renderRainGraph(data.minutely_15);
  } catch (err) { console.error("Väderfel:", err); }

  fetchPollen();
}

/* --- RENDERA VÄDER --- */
function renderWeather(data) {
  const cur = data.current;
  $("tempNow").textContent = Math.round(cur.temperature_2m);
  $("feelsLike").textContent = `Känns som ${Math.round(cur.apparent_temperature)}°`;
  $("weatherCond").textContent = getWeatherDesc(cur.weather_code);
  $("wind").textContent = Math.round(cur.wind_speed_10m);
  $("humidity").textContent = Math.round(cur.relative_humidity_2m);
  $("cloudCover").textContent = Math.round(cur.cloud_cover);
  $("uvLevel").textContent = Math.round(data.daily.uv_index_max[0] || 0);

  const iconClass = getWeatherIcon(cur.weather_code, cur.is_day);
  $("heroIcon").className = `bi ${iconClass} hero-icon`;

  const hrBox = $("hourlyRow");
  hrBox.innerHTML = "";
  for(let i=0; i<24; i++) {
    const t = new Date(data.hourly.time[i]);
    const div = document.createElement("div");
    div.className = "hour-tile";
    div.innerHTML = `
      <div class="fw-bold small">${t.getHours()}:00</div>
      <i class="bi ${getWeatherIcon(data.hourly.weather_code[i], data.hourly.is_day[i])}"></i>
      <div class="fw-bold">${Math.round(data.hourly.temperature_2m[i])}°</div>
      <div class="small text-white-50">${data.hourly.precipitation_probability[i]}%</div>
    `;
    hrBox.appendChild(div);
  }

  const dayBox = $("outlookRows");
  dayBox.innerHTML = "";
  for(let i=0; i<10; i++) {
    const tr = document.createElement("tr");
    const d = new Date(data.daily.time[i]);
    tr.innerHTML = `
      <td class="fw-bold">${i===0 ? "Idag" : fmtDay(d)}</td>
      <td><i class="bi ${getWeatherIcon(data.daily.weather_code[i], 1)} fs-5"></i></td>
      <td class="text-end fw-bold text-white-50">${Math.round(data.daily.temperature_2m_min[i])}°</td>
      <td class="text-end fw-bold">${Math.round(data.daily.temperature_2m_max[i])}°</td>
      <td class="text-end text-info">${data.daily.precipitation_probability_max[i]}%</td>
    `;
    dayBox.appendChild(tr);
  }
}

/* --- TEXTSAMMANFATTNING & REGNGRAF --- */
function generateRainSummary(data) {
  const prob = data.daily.precipitation_probability_max[0];
  const text = $("rainSummaryText");
  if (prob < 10) {
    text.textContent = "Ingen nederbörd väntas idag. Njut av dagen!";
  } else if (prob < 50) {
    text.textContent = `Liten risk (${prob}%) för nederbörd under dagen.`;
  } else {
    text.textContent = `Regn väntas idag. Ta med ett paraply!`;
  }
}

function renderRainGraph(minutely) {
  const box = $("rainGraphSection");
  const graph = $("rainGraph");
  graph.innerHTML = "";
  
  if (!minutely || !minutely.precipitation) return;
  
  const rainData = minutely.precipitation.slice(0, 8);
  const hasRain = rainData.some(val => val > 0);

  if (!hasRain) {
    box.style.display = "none";
    return;
  }

  box.style.display = "block";
  const maxRain = Math.max(...rainData, 1); 
  
  rainData.forEach(amount => {
    const bar = document.createElement("div");
    bar.className = "rain-bar";
    const heightPct = (amount / maxRain) * 100;
    bar.style.height = `${Math.max(heightPct, 5)}%`; 
    graph.appendChild(bar);
  });
}

/* --- POLLEN --- */
async function fetchPollen() {
  const { lat, lon } = state.place;
  
  try {
    const url = `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${lat}&longitude=${lon}&hourly=alder_pollen,birch_pollen,grass_pollen,mugwort_pollen,ragweed_pollen&timezone=auto`;
    const res = await fetch(url);
    const data = await res.json();
    
    // Hitta dagens datum-index kl 12:00
    const todayStr = new Date().toISOString().slice(0,10) + "T12:00";
    let idx = data.hourly.time.indexOf(todayStr);
    if (idx === -1) idx = 12; // Fallback till index 12 om exakt tid inte finns

    const pollenTypes = [
      { name: "Björk", val: data.hourly.birch_pollen[idx] || 0 },
      { name: "Gräs", val: data.hourly.grass_pollen[idx] || 0 },
      { name: "Al", val: data.hourly.alder_pollen[idx] || 0 },
      { name: "Gråbo", val: data.hourly.mugwort_pollen[idx] || 0 },
      { name: "Malörtsambrosia", val: data.hourly.ragweed_pollen[idx] || 0 }
    ];

    pollenTypes.sort((a,b) => b.val - a.val);

    const createRow = (p) => {
      let levelText = "Ingen"; let bgClass = "level-N"; let w = "0%";
      if (p.val > 0.1) { levelText = "Låg"; bgClass = "level-L"; w = "30%"; }
      if (p.val > 10) { levelText = "Måttlig"; bgClass = "level-M"; w = "60%"; }
      if (p.val > 50) { levelText = "Hög"; bgClass = "level-H"; w = "90%"; }
      
      return `
        <div class="pollen-row">
          <div style="width: 120px" class="fw-bold">${p.name}</div>
          <div class="pollen-bar-bg"><div class="pollen-bar-fill ${bgClass}" style="width: ${w}"></div></div>
          <div style="width: 60px; text-align: right" class="small fw-bold">${levelText}</div>
        </div>
      `;
    };

    $("pollenTop3").innerHTML = pollenTypes.slice(0, 3).map(createRow).join("");
    $("pollenHidden").innerHTML = pollenTypes.slice(3).map(createRow).join("");
    
    // Visa knapp endast om det finns data
    $("pollenToggleBtn").style.display = "block";

  } catch (err) { 
    console.error("Pollenfel", err); 
    $("pollenTop3").innerHTML = "<div class='text-white-50 small'>Kunde inte ladda pollendata just nu.</div>";
    $("pollenToggleBtn").style.display = "none";
  }
}

let pollenOpen = false;
$("pollenToggleBtn").addEventListener("click", (e) => {
  pollenOpen = !pollenOpen;
  $("pollenHidden").style.display = pollenOpen ? "block" : "none";
  e.currentTarget.innerHTML = pollenOpen ? 'Dölj <i class="bi bi-chevron-up"></i>' : 'Visa alla <i class="bi bi-chevron-down"></i>';
});

// Kör igång
init();

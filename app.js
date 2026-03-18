const INITIAL_PLACE = {
  id: 'stockholm',
  canonical_id: 'stockholm',
  name: 'Stockholm',
  municipality: 'Stockholm',
  county: 'Stockholms län',
  region: 'Stockholms län',
  country: 'SE',
  country_name_sv: 'Sverige',
  type: 'major_city',
  lat: 59.3293,
  lon: 18.0686,
  route_slug: 'stockholm',
  url_slug: 'stockholm',
  label: 'Stockholm · Stockholms län',
  aliases: []
};

const DEFAULT_POLLEN_ROWS = [
  ['Al', '-', '-', '-', 'feb–maj'],
  ['Hassel', '-', '-', '-', 'feb–jun'],
  ['Alm', '-', '-', '-', 'mar–jun'],
  ['Björk', '-', '-', '-', 'mar–jul'],
  ['Bok', '-', '-', '-', 'maj–jun'],
  ['Ek', '-', '-', '-', 'maj–jul'],
  ['Gräs', '-', '-', '-', 'maj–okt'],
  ['Gråbo', '-', '-', '-', 'jul–okt'],
  ['Ambrosia', '-', '-', '-', 'aug–sep'],
  ['Sälg/vide', '-', '-', '-', 'mar–maj']
];

const state = {
  placeIndex: new Map(),
  placesLoaded: false,
  selectedIndex: -1,
  results: [],
  requestToken: 0,
  activePlace: INITIAL_PLACE,
  weatherCache: new Map(),
  pollenCache: new Map()
};

function $(id) { return document.getElementById(id); }

function slugify(value = '') {
  return String(value)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function getInitialSlug() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  return path === '/' ? 'stockholm' : slugify(path.split('/').pop());
}

function setText(id, value) {
  const el = $(id);
  if (el) el.textContent = value;
}

function setHtml(id, value) {
  const el = $(id);
  if (el) el.innerHTML = value;
}

function announce(text) {
  const el = $('routeAnnouncer');
  if (el) el.textContent = text;
}

function formatTemp(value) {
  return `${Math.round(Number(value) || 0)}°`;
}

function formatWind(value) {
  return `${Math.round(Number(value) || 0)} m/s`;
}

function formatMm(value) {
  const num = Number(value) || 0;
  if (num < 0.05) return '0 mm';
  if (num < 1) return `${num.toLocaleString('sv-SE', { minimumFractionDigits: 1, maximumFractionDigits: 1 })} mm`;
  return `${num.toLocaleString('sv-SE', { maximumFractionDigits: 1 })} mm`;
}

function formatHumidity(value) {
  return `${Math.round(Number(value) || 0)} %`;
}

function formatTime(iso) {
  try {
    return new Intl.DateTimeFormat('sv-SE', { hour: '2-digit', minute: '2-digit' }).format(new Date(iso));
  } catch {
    return '—';
  }
}

function dayLabel(iso, index) {
  if (index === 0) return 'Idag';
  if (index === 1) return 'Imorgon';
  const date = new Date(iso);
  return new Intl.DateTimeFormat('sv-SE', { weekday: 'short' }).format(date).replace('.', '');
}

function weatherMeta(code, isNight = false) {
  const map = {
    0: { label: 'Klart', icon: isNight ? 'weather-night.svg' : 'weather-sun.svg' },
    1: { label: 'Mest klart', icon: isNight ? 'weather-night.svg' : 'weather-sun.svg' },
    2: { label: 'Växlande molnighet', icon: 'weather-cloud.svg' },
    3: { label: 'Mulet', icon: 'weather-cloud.svg' },
    45: { label: 'Dimma', icon: 'weather-cloud.svg' },
    48: { label: 'Dimma', icon: 'weather-cloud.svg' },
    51: { label: 'Lätt duggregn', icon: 'weather-rain.svg' },
    53: { label: 'Duggregn', icon: 'weather-rain.svg' },
    55: { label: 'Kraftigt duggregn', icon: 'weather-rain.svg' },
    56: { label: 'Underkylt duggregn', icon: 'weather-snow.svg' },
    57: { label: 'Underkylt duggregn', icon: 'weather-snow.svg' },
    61: { label: 'Lätt regn', icon: 'weather-rain.svg' },
    63: { label: 'Regn', icon: 'weather-rain.svg' },
    65: { label: 'Kraftigt regn', icon: 'weather-rain.svg' },
    66: { label: 'Underkylt regn', icon: 'weather-snow.svg' },
    67: { label: 'Underkylt regn', icon: 'weather-snow.svg' },
    71: { label: 'Lätt snö', icon: 'weather-snow.svg' },
    73: { label: 'Snö', icon: 'weather-snow.svg' },
    75: { label: 'Kraftig snö', icon: 'weather-snow.svg' },
    77: { label: 'Snökorn', icon: 'weather-snow.svg' },
    80: { label: 'Lätta skurar', icon: 'weather-rain.svg' },
    81: { label: 'Skurar', icon: 'weather-rain.svg' },
    82: { label: 'Kraftiga skurar', icon: 'weather-rain.svg' },
    85: { label: 'Lätta snöbyar', icon: 'weather-snow.svg' },
    86: { label: 'Snöbyar', icon: 'weather-snow.svg' },
    95: { label: 'Åska', icon: 'weather-rain.svg' },
    96: { label: 'Åska med hagel', icon: 'weather-snow.svg' },
    99: { label: 'Åska med hagel', icon: 'weather-snow.svg' }
  };
  return map[Number(code)] || { label: 'Mulet', icon: 'weather-cloud.svg' };
}

function windDirection(deg) {
  const dirs = ['N', 'NO', 'O', 'SO', 'S', 'SV', 'V', 'NV'];
  const num = Number(deg);
  if (!Number.isFinite(num)) return '—';
  return dirs[Math.round((num % 360) / 45) % 8];
}

function updateMeta(place) {
  document.title = `Kly.se – vädret i ${place.name}`;
  const desc = document.querySelector('meta[name="description"]');
  if (desc) desc.setAttribute('content', `Väder, pollen och UV för ${place.name} – snabbt, tydligt och utan reklam.`);
  const canonical = document.querySelector('link[rel="canonical"]');
  if (canonical) {
    const url = new URL(window.location.href);
    const slug = slugify(place.route_slug || place.name);
    url.pathname = slug === 'stockholm' ? '/' : `/${slug}/`;
    url.search = '';
    url.hash = '';
    canonical.href = url.toString();
  }
}

function pushPlace(place, replace = false) {
  const slug = slugify(place.route_slug || place.name);
  const target = slug === 'stockholm' ? '/' : `/${slug}/`;
  if (replace) history.replaceState({}, '', target);
  else if (window.location.pathname !== target) history.pushState({}, '', target);
}

function updateStickyOffset() {
  const header = $('siteHeader');
  if (!header) return;
  document.documentElement.style.setProperty('--sticky-offset', `${header.offsetHeight + 12}px`);
}

function buildHeroLead(hourly) {
  const wet = hourly.filter(h => (Number(h.precipitation) || 0) >= 0.3);
  if (!wet.length) return 'Mest torrt idag';
  const first = wet[0].label;
  const last = wet[wet.length - 1].label;
  return first === last ? `Nederbörd runt ${first}` : `Nederbörd ${first}–${last}`;
}

function buildHourlyInsight(hourly) {
  const wet = hourly.filter(h => (Number(h.precipitation) || 0) >= 0.3);
  if (!wet.length) return 'Torrt större delen av dagen.';
  const first = wet[0].label;
  const last = wet[wet.length - 1].label;
  return first === last ? `Regn väntas runt ${first}.` : `Regn väntas främst mellan ${first} och ${last}.`;
}

function peakUv(uvSeries) {
  return uvSeries.reduce((best, point) => point.value > best.value ? point : best, { time: '12', value: 0 });
}

function renderHero(place, current, daily, hourly, uvPeak) {
  const meta = weatherMeta(current.weather_code, Number(current.is_day) === 0);
  setText('placeName', place.name);
  setText('tempNow', formatTemp(current.temperature_2m));
  setText('weatherNow', meta.label);
  setText('heroLead', buildHeroLead(hourly));
  setText('feelsLike', `Känns som ${formatTemp(current.apparent_temperature)}`);
  setText('hiLo', `H ${formatTemp(daily.temperature_2m_max[0])} L ${formatTemp(daily.temperature_2m_min[0])}`);
  const icon = $('heroIcon');
  if (icon) {
    icon.src = `./icons/${meta.icon}`;
    icon.alt = meta.label;
  }
  setText('pillPrecip', (Number(daily.precipitation_sum[0]) || 0) > 0.1 ? `Nederbörd idag · ${formatMm(daily.precipitation_sum[0])}` : 'Nederbörd idag · 0 mm');
  setText('pillWind', `Vind · ${windDirection(current.wind_direction_10m)} ${formatWind(current.wind_speed_10m)}`);
  setText('pillHumidity', `Luftfuktighet · ${formatHumidity(current.relative_humidity_2m)}`);
  setText('pillDaylight', `Dagsljus · ${formatTime(daily.sunrise[0])}–${formatTime(daily.sunset[0])}`);
  setText('insightWeather', buildHourlyInsight(hourly));
  setText('insightUv', `Högst idag ${uvPeak.value.toLocaleString('sv-SE', { maximumFractionDigits: 1 })} kl. ${uvPeak.time} · Gäller vid klart väder`);
}

function renderHourly(hourly) {
  setText('hourlyHint', buildHourlyInsight(hourly));
  setText('hourlyAccessible', 'Timprognosen visar de kommande 18 timmarna med tid, temperatur, väderläge, nederbörd och vind. Svep sidledes för fler timmar.');
  const html = hourly.map(item => {
    const meta = weatherMeta(item.weather_code, item.isNight);
    const classes = ['hour-card'];
    if (item.label === 'Nu') classes.push('now');
    if ((Number(item.precipitation) || 0) >= 0.3) classes.push('wet');
    return `
      <article class="${classes.join(' ')}">
        <p class="hour-time">${item.label}</p>
        <img class="hour-icon" src="./icons/${meta.icon}" alt="${meta.label}">
        <p class="hour-temp">${formatTemp(item.temperature_2m)}</p>
        <p class="hour-meta">${meta.label}</p>
        <p class="hour-meta">${formatMm(item.precipitation)}</p>
        <p class="hour-meta">${formatWind(item.wind_speed_10m)}</p>
      </article>`;
  }).join('');
  setHtml('hourlyCards', html);
}

function normalizePollenLevel(value) {
  const val = String(value ?? '').toLowerCase().trim();
  if (!val || val === '-' || val === '0') return '-';
  if (['1','l','low','lag','låg'].includes(val)) return 'L';
  if (['2','m','medium','moderat','måttlig','mattlig'].includes(val)) return 'M';
  if (['3','h','high','hog','hög'].includes(val)) return 'H';
  return String(value);
}

function normalizePollenType(name = '') {
  const key = slugify(name).replace(/-/g, '');
  const map = {
    al: 'Al', hassel: 'Hassel', alm: 'Alm', bjork: 'Björk', bok: 'Bok', ek: 'Ek',
    gras: 'Gräs', grabo: 'Gråbo', ambrosia: 'Ambrosia', salgvide: 'Sälg/vide', salg: 'Sälg/vide', vide: 'Sälg/vide'
  };
  return map[key] || name;
}

function renderPollen(rows, summary = '') {
  const body = rows.map(row => `
    <tr>
      <th scope="row">${row[0]}</th>
      <td>${row[1]}</td>
      <td>${row[2]}</td>
      <td>${row[3]}</td>
      <td>${row[4]}</td>
    </tr>`).join('');
  setHtml('pollenTableBody', body);
  const summaryEl = $('pollenSummary');
  if (summary) {
    setText('pollenSummary', summary);
    if (summaryEl) summaryEl.hidden = false;
  } else if (summaryEl) {
    summaryEl.hidden = true;
  }
  const top = rows.filter(r => ['L','M','H'].includes(r[1])).sort((a,b) => ({H:3,M:2,L:1}[b[1]] - ({H:3,M:2,L:1}[a[1]])))[0];
  setText('insightPollen', top ? `${top[0]} är högst idag.` : 'Låga eller inga pollenhalter idag.');
}

function renderDaily(daily) {
  const tableRows = daily.map((item, index) => {
    const meta = weatherMeta(item.weather_code, false);
    return `
      <tr>
        <th scope="row">${dayLabel(item.time, index)}</th>
        <td><div class="weather-cell"><img src="./icons/${meta.icon}" alt="${meta.label}" width="22" height="22"></div></td>
        <td>${formatTemp(item.temperature_2m_max)} / ${formatTemp(item.temperature_2m_min)}</td>
        <td>${formatMm(item.precipitation_sum)}</td>
        <td>${formatWind(item.wind_speed_10m_max)}</td>
      </tr>`;
  }).join('');
  setHtml('dailyTableBody', tableRows);

  const cardRows = daily.map((item, index) => {
    const meta = weatherMeta(item.weather_code, false);
    return `
      <article class="daily-mobile-card">
        <img class="daily-mobile-icon" src="./icons/${meta.icon}" alt="${meta.label}" width="24" height="24">
        <div class="daily-mobile-main">
          <div class="daily-mobile-day">${dayLabel(item.time, index)}</div>
          <div class="daily-mobile-meta">${formatMm(item.precipitation_sum)} · ${formatWind(item.wind_speed_10m_max)}</div>
        </div>
        <div class="daily-mobile-temp">${formatTemp(item.temperature_2m_max)} / ${formatTemp(item.temperature_2m_min)}</div>
      </article>`;
  }).join('');
  setHtml('dailyCards', cardRows);
}

function renderUvChart(uvSeries) {
  const svg = $('uvChart');
  if (!svg) return;
  const width = 760;
  const height = 260;
  const left = 56;
  const right = 28;
  const top = 20;
  const bottom = 42;
  const maxY = Math.max(6, ...uvSeries.map(d => d.value));
  const plotW = width - left - right;
  const plotH = height - top - bottom;
  const xStep = uvSeries.length > 1 ? plotW / (uvSeries.length - 1) : 0;
  const x = i => left + i * xStep;
  const y = v => top + (1 - v / maxY) * plotH;

  const grid = svg.querySelector('.grid');
  const thresholds = svg.querySelector('.thresholds');
  const axes = svg.querySelector('.axes');
  const area = svg.querySelector('.uv-area');
  const path = svg.querySelector('.uv-path');
  const points = svg.querySelector('.points');
  const labels = svg.querySelector('.labels');

  if (grid) grid.innerHTML = [0,1,2,3,4,5,6].map(v => `<line x1="${left}" y1="${y(v)}" x2="${width-right}" y2="${y(v)}"></line>`).join('');
  if (thresholds) thresholds.innerHTML = `<line class="uv-threshold-line" x1="${left}" y1="${y(3)}" x2="${width-right}" y2="${y(3)}"></line>`;
  if (axes) axes.innerHTML = `<line x1="${left}" y1="${height-bottom}" x2="${width-right}" y2="${height-bottom}"></line><line x1="${left}" y1="${top}" x2="${left}" y2="${height-bottom}"></line>`;

  const lineD = uvSeries.map((d, i) => `${i === 0 ? 'M' : 'L'} ${x(i)} ${y(d.value)}`).join(' ');
  const areaD = `${lineD} L ${x(uvSeries.length - 1)} ${height-bottom} L ${x(0)} ${height-bottom} Z`;
  if (path) path.setAttribute('d', lineD);
  if (area) area.setAttribute('d', areaD);
  const peak = peakUv(uvSeries);
  if (points) points.innerHTML = uvSeries.map((d,i)=>`<circle${d.time === peak.time && d.value === peak.value ? ' class="peak"' : ''} cx="${x(i)}" cy="${y(d.value)}" r="4"></circle>`).join('');
  if (labels) labels.innerHTML = uvSeries.map((d,i)=>`<text x="${x(i)}" y="${height-16}" text-anchor="middle">${d.time}</text>`).join('');
}

function renderUv(uvSeries) {
  const peak = peakUv(uvSeries);
  setText('uvSummary', `Högst idag ${peak.value.toLocaleString('sv-SE', { maximumFractionDigits: 1 })} kl. ${peak.time} · Gäller vid klart väder`);
  setText('uvNote', peak.value >= 3 ? 'Runt UV 3 rekommenderar Strålsäkerhetsmyndigheten att de flesta skyddar sig i solen.' : 'UV är lågt idag, men tänk på att nivån gäller vid klart väder.');
  setText('uvAccessible', `UV är högst runt ${peak.time} och når ${peak.value.toLocaleString('sv-SE', { maximumFractionDigits: 1 })}.`);
  renderUvChart(uvSeries);
  return peak;
}

async function fetchWeather(place) {
  const key = `${place.lat},${place.lon}`;
  const cached = state.weatherCache.get(key);
  if (cached && Date.now() - cached.time < 5 * 60 * 1000) return cached.data;
  const params = new URLSearchParams({
    latitude: String(place.lat),
    longitude: String(place.lon),
    current: 'temperature_2m,apparent_temperature,relative_humidity_2m,weather_code,is_day,wind_speed_10m,wind_direction_10m',
    hourly: 'temperature_2m,precipitation,weather_code,wind_speed_10m,is_day,uv_index',
    daily: 'temperature_2m_max,temperature_2m_min,weather_code,precipitation_sum,wind_speed_10m_max,sunrise,sunset,uv_index_max',
    forecast_days: '10',
    timezone: 'auto'
  });
  const res = await fetch(`https://api.open-meteo.com/v1/forecast?${params.toString()}`, { cache: 'no-store' });
  if (!res.ok) throw new Error(`Weather ${res.status}`);
  const data = await res.json();
  state.weatherCache.set(key, { time: Date.now(), data });
  return data;
}

async function fetchPollen(place) {
  const key = `${place.lat},${place.lon}`;
  const cached = state.pollenCache.get(key);
  if (cached && Date.now() - cached.time < 30 * 60 * 1000) return cached.data;
  try {
    const stationsRes = await fetch('https://r.jina.ai/http://www.pollenrapporten.se/api/stations', { cache: 'no-store' });
    if (!stationsRes.ok) throw new Error('stations');
    const stations = await stationsRes.json();
    if (!Array.isArray(stations) || !stations.length) throw new Error('no stations');
    const nearest = stations.reduce((best, station) => {
      const lat = Number(station.latitude ?? station.lat);
      const lon = Number(station.longitude ?? station.lon);
      if (!Number.isFinite(lat) || !Number.isFinite(lon)) return best;
      const dist = Math.hypot(place.lat - lat, place.lon - lon);
      return !best || dist < best.dist ? { station, dist } : best;
    }, null);
    const stationId = nearest.station.id || nearest.station.station_id || nearest.station.stationId;
    const fcRes = await fetch(`https://r.jina.ai/http://www.pollenrapporten.se/api/forecast?station=${stationId}`, { cache: 'no-store' });
    if (!fcRes.ok) throw new Error('forecast');
    const payload = await fcRes.json();
    const source = Array.isArray(payload) ? payload : (payload.forecasts || payload.data || payload.forecast || []);
    const grouped = new Map();
    for (const item of source) {
      const name = normalizePollenType(item.species || item.type || item.name || '');
      if (!name) continue;
      if (!grouped.has(name)) grouped.set(name, []);
      grouped.get(name).push({ date: item.date || item.day || '', level: normalizePollenLevel(item.level ?? item.value ?? item.classification ?? item.risk) });
    }
    const rows = DEFAULT_POLLEN_ROWS.map(base => {
      const vals = (grouped.get(base[0]) || []).sort((a,b)=>String(a.date).localeCompare(String(b.date))).slice(0,3).map(x=>x.level);
      while (vals.length < 3) vals.push('-');
      return [base[0], vals[0], vals[1], vals[2], base[4]];
    });
    const data = { rows, summary: `Pollenprognos från ${nearest.station.name || 'närmaste station'}.` };
    state.pollenCache.set(key, { time: Date.now(), data });
    return data;
  } catch {
    const data = { rows: DEFAULT_POLLEN_ROWS, summary: '' };
    state.pollenCache.set(key, { time: Date.now(), data });
    return data;
  }
}

function buildHourlyRows(data) {
  const times = data.hourly.time || [];
  const currentIso = data.current.time;
  const currentDate = new Date(currentIso);
  const rows = [];
  for (let i = 0; i < times.length && rows.length < 18; i += 1) {
    const dt = new Date(times[i]);
    if (dt < currentDate) continue;
    rows.push({
      label: rows.length === 0 ? 'Nu' : String(dt.getHours()).padStart(2, '0'),
      temperature_2m: data.hourly.temperature_2m[i],
      precipitation: data.hourly.precipitation[i],
      weather_code: data.hourly.weather_code[i],
      wind_speed_10m: data.hourly.wind_speed_10m[i],
      isNight: Number(data.hourly.is_day[i]) === 0
    });
  }
  return rows;
}

function buildUvSeries(data) {
  const wanted = new Set([6, 9, 12, 13, 15, 18, 21]);
  const times = data.hourly.time || [];
  const result = [];
  const currentDate = new Date(data.current.time).toDateString();
  for (let i = 0; i < times.length; i += 1) {
    const dt = new Date(times[i]);
    if (dt.toDateString() !== currentDate) continue;
    const hour = dt.getHours();
    if (!wanted.has(hour)) continue;
    result.push({ time: String(hour).padStart(2, '0'), value: Number(data.hourly.uv_index[i] || 0) });
  }
  if (!result.length) result.push({ time: '12', value: Number(data.daily.uv_index_max?.[0] || 0) });
  return result;
}

function buildDailyRows(data) {
  return (data.daily.time || []).slice(0, 10).map((time, i) => ({
    time,
    temperature_2m_max: data.daily.temperature_2m_max[i],
    temperature_2m_min: data.daily.temperature_2m_min[i],
    weather_code: data.daily.weather_code[i],
    precipitation_sum: data.daily.precipitation_sum[i],
    wind_speed_10m_max: data.daily.wind_speed_10m_max[i]
  }));
}

function resolvePlaceFromSlug(slug) {
  return state.placeIndex.get(slug) || INITIAL_PLACE;
}

async function renderPlace(place, replaceHistory = false) {
  const token = ++state.requestToken;
  state.activePlace = place;
  updateMeta(place);
  try {
    const [weather, pollen] = await Promise.all([fetchWeather(place), fetchPollen(place)]);
    if (token !== state.requestToken) return;
    const hourly = buildHourlyRows(weather);
    const uvSeries = buildUvSeries(weather);
    const uvPeak = renderUv(uvSeries);
    renderHero(place, weather.current, weather.daily, hourly, uvPeak);
    renderHourly(hourly);
    renderPollen(pollen.rows, pollen.summary);
    renderDaily(buildDailyRows(weather));
    setText('pollenDay2Label', 'Imorgon');
    setText('pollenDay3Label', dayLabel(new Date(Date.now() + 2 * 864e5).toISOString(), 2));
    announce(`Visar vädret för ${place.name}`);
    pushPlace(place, replaceHistory);
    initScrollAffordances();
  } catch (err) {
    if (token !== state.requestToken) return;
    setText('placeName', place.name);
    setText('heroLead', 'Kunde inte hämta liveprognos just nu.');
    setText('hourlyHint', 'Försök igen om en stund.');
    setText('insightWeather', 'Liveprognosen kunde inte hämtas just nu.');
    renderPollen(DEFAULT_POLLEN_ROWS, '');
    announce(`Det gick inte att läsa in vädret för ${place.name}`);
  }
}

function initDragScroll(el) {
  if (!el || el.dataset.dragReady === 'true') return;
  el.dataset.dragReady = 'true';
  el.classList.add('drag-scroll');
  let isDown = false;
  let startX = 0;
  let startScrollLeft = 0;

  el.addEventListener('mousedown', (e) => {
    if (e.button !== 0) return;
    isDown = true;
    startX = e.pageX;
    startScrollLeft = el.scrollLeft;
    el.classList.add('is-dragging');
    document.body.classList.add('is-dragging-scroll');
  });
  window.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const dx = e.pageX - startX;
    el.scrollLeft = startScrollLeft - dx;
  });
  window.addEventListener('mouseup', () => {
    isDown = false;
    el.classList.remove('is-dragging');
    document.body.classList.remove('is-dragging-scroll');
  });
  el.addEventListener('mouseleave', () => {
    isDown = false;
    el.classList.remove('is-dragging');
    document.body.classList.remove('is-dragging-scroll');
  });
}

function initScrollAffordances() {
  const hourlyScroll = $('hourlyScroll');
  const pollenWrap = $('pollenWrap');
  if (hourlyScroll) {
    const refresh = () => {
      hourlyScroll.classList.toggle('show-left', hourlyScroll.scrollLeft > 4);
      hourlyScroll.classList.toggle('show-right', hourlyScroll.scrollLeft < hourlyScroll.scrollWidth - hourlyScroll.clientWidth - 4);
    };
    if (!hourlyScroll.dataset.affordanceReady) {
      hourlyScroll.dataset.affordanceReady = 'true';
      hourlyScroll.addEventListener('scroll', refresh, { passive: true });
      window.addEventListener('resize', refresh);
      initDragScroll(hourlyScroll);
    }
    refresh();
  }
  if (pollenWrap) {
    const refresh = () => {
      pollenWrap.classList.toggle('is-scrolled', pollenWrap.scrollLeft > 4);
      pollenWrap.classList.toggle('show-right', pollenWrap.scrollLeft < pollenWrap.scrollWidth - pollenWrap.clientWidth - 4);
    };
    if (!pollenWrap.dataset.affordanceReady) {
      pollenWrap.dataset.affordanceReady = 'true';
      pollenWrap.addEventListener('scroll', refresh, { passive: true });
      window.addEventListener('resize', refresh);
      initDragScroll(pollenWrap);
    }
    refresh();
  }
}

async function initSearch() {
  const input = $('searchInput');
  const resultsEl = $('searchResults');
  await window.KlySwedenSearch.loadPlaces([
    './resources/sweden-places.json',
    './resources/sweden-local-areas-seed.json',
    './resources/sweden-local-areas-backlog.json',
    './resources/places-abroad-seed.json'
  ]);
  state.placesLoaded = true;
  const places = window.KlySwedenSearch.getPlaces().filter(place => !place.search_hidden);
  state.placeIndex = new Map();
  for (const place of places) {
    state.placeIndex.set(slugify(place.route_slug || place.name), place);
    state.placeIndex.set(slugify(place.name), place);
    for (const alias of (place.aliases || [])) state.placeIndex.set(slugify(alias), place);
  }

  function closeResults() {
    resultsEl.classList.remove('open');
    resultsEl.innerHTML = '';
    state.selectedIndex = -1;
  }

  function choose(place) {
    input.value = place.name;
    renderPlace(place, false);
    closeResults();
  }

  function renderResults(list) {
    state.results = list;
    if (!list.length) {
      closeResults();
      return;
    }
    resultsEl.innerHTML = list.map((place, idx) => `<button type="button" class="search-item" role="option" aria-selected="${idx === state.selectedIndex}">${window.KlySwedenSearch.label(place)}</button>`).join('');
    [...resultsEl.querySelectorAll('.search-item')].forEach((button, idx) => button.addEventListener('click', () => choose(list[idx])));
    resultsEl.classList.add('open');
  }

  input.addEventListener('input', () => {
    state.selectedIndex = -1;
    const query = input.value.trim();
    if (query.length < 2) return closeResults();
    renderResults(window.KlySwedenSearch.search(query, { limit: 8, minChars: 2 }));
  });

  input.addEventListener('keydown', (e) => {
    if (!state.results.length) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      state.selectedIndex = (state.selectedIndex + 1) % state.results.length;
      renderResults(state.results);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      state.selectedIndex = (state.selectedIndex - 1 + state.results.length) % state.results.length;
      renderResults(state.results);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const place = state.results[Math.max(state.selectedIndex, 0)];
      if (place) choose(place);
    } else if (e.key === 'Escape') {
      closeResults();
    }
  });

  document.addEventListener('click', (e) => {
    if (!resultsEl.contains(e.target) && e.target !== input) closeResults();
  });

  const slug = getInitialSlug();
  if (slug !== 'stockholm') {
    const place = resolvePlaceFromSlug(slug);
    renderPlace(place, true);
  }
}

function initFooterPanels() {
  const buttons = document.querySelectorAll('.footer-link');
  const panels = document.querySelectorAll('.footer-panel');
  const closeAll = () => {
    panels.forEach(panel => { panel.hidden = true; });
    buttons.forEach(btn => btn.setAttribute('aria-expanded', 'false'));
  };
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.panel;
      const panel = $(id);
      const willOpen = panel && panel.hidden;
      closeAll();
      if (panel && willOpen) {
        panel.hidden = false;
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
  document.querySelectorAll('.footer-close').forEach(btn => btn.addEventListener('click', closeAll));
}

function registerServiceWorker() {
  if ('serviceWorker' in navigator) navigator.serviceWorker.register('./sw.js').catch(() => {});
}

window.addEventListener('resize', updateStickyOffset);
window.addEventListener('popstate', () => {
  const place = state.placesLoaded ? resolvePlaceFromSlug(getInitialSlug()) : INITIAL_PLACE;
  renderPlace(place, true);
});
window.addEventListener('DOMContentLoaded', () => {
  updateStickyOffset();
  initFooterPanels();
  registerServiceWorker();
  renderPlace(INITIAL_PLACE, true);
  initSearch().catch(() => {});
});

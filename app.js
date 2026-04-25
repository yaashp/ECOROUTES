// ── DATA ──
const FOOD_DATA = [
  {"ingredient":"Rice","origin_country":"India","production_lat":22.0,"production_lng":82.0,"default_transport":"Road","carbon_factor":{"Road":0.096,"Rail":0.028,"Sea":0.008,"Air":0.602},"alternative":"Locally grown rice"},
  {"ingredient":"Wheat","origin_country":"India","production_lat":30.5,"production_lng":74.5,"default_transport":"Road","carbon_factor":{"Road":0.096,"Rail":0.028,"Sea":0.008,"Air":0.602},"alternative":"Local wheat variety"},
  {"ingredient":"Quinoa","origin_country":"Peru","production_lat":-13.5,"production_lng":-72.0,"default_transport":"Sea","carbon_factor":{"Road":0.096,"Rail":0.028,"Sea":0.008,"Air":0.602},"alternative":"Amaranth (Rajgira)"},
  {"ingredient":"Avocado","origin_country":"Mexico","production_lat":19.5,"production_lng":-99.1,"default_transport":"Air","carbon_factor":{"Road":0.096,"Rail":0.028,"Sea":0.008,"Air":0.602},"alternative":"Mango or Banana"},
  {"ingredient":"Almonds","origin_country":"USA","production_lat":36.7,"production_lng":-119.7,"default_transport":"Sea","carbon_factor":{"Road":0.096,"Rail":0.028,"Sea":0.008,"Air":0.602},"alternative":"Groundnuts"},
  {"ingredient":"Olive Oil","origin_country":"Spain","production_lat":39.5,"production_lng":-3.7,"default_transport":"Sea","carbon_factor":{"Road":0.096,"Rail":0.028,"Sea":0.008,"Air":0.602},"alternative":"Sesame or Groundnut oil"},
  {"ingredient":"Coffee","origin_country":"Brazil","production_lat":-14.2,"production_lng":-51.9,"default_transport":"Sea","carbon_factor":{"Road":0.096,"Rail":0.028,"Sea":0.008,"Air":0.602},"alternative":"Indian Filter Coffee (Coorg)"},
  {"ingredient":"Chocolate","origin_country":"Ivory Coast","production_lat":7.5,"production_lng":-5.5,"default_transport":"Sea","carbon_factor":{"Road":0.096,"Rail":0.028,"Sea":0.008,"Air":0.602},"alternative":"Carob or local cacao"},
  {"ingredient":"Banana","origin_country":"India","production_lat":11.0,"production_lng":77.0,"default_transport":"Road","carbon_factor":{"Road":0.096,"Rail":0.028,"Sea":0.008,"Air":0.602},"alternative":"Local variety"},
  {"ingredient":"Apple","origin_country":"India","production_lat":34.0,"production_lng":74.8,"default_transport":"Road","carbon_factor":{"Road":0.096,"Rail":0.028,"Sea":0.008,"Air":0.602},"alternative":"Guava or local fruit"},
  {"ingredient":"Oats","origin_country":"Australia","production_lat":-25.3,"production_lng":133.8,"default_transport":"Sea","carbon_factor":{"Road":0.096,"Rail":0.028,"Sea":0.008,"Air":0.602},"alternative":"Ragi or Jowar"},
  {"ingredient":"Soy Milk","origin_country":"China","production_lat":35.9,"production_lng":104.2,"default_transport":"Sea","carbon_factor":{"Road":0.096,"Rail":0.028,"Sea":0.008,"Air":0.602},"alternative":"Cow milk or Coconut milk"},
  {"ingredient":"Blueberries","origin_country":"USA","production_lat":45.5,"production_lng":-122.7,"default_transport":"Air","carbon_factor":{"Road":0.096,"Rail":0.028,"Sea":0.008,"Air":0.602},"alternative":"Jamun or Indian gooseberry"},
  {"ingredient":"Pasta","origin_country":"Italy","production_lat":41.9,"production_lng":12.5,"default_transport":"Sea","carbon_factor":{"Road":0.096,"Rail":0.028,"Sea":0.008,"Air":0.602},"alternative":"Local wheat noodles"},
  {"ingredient":"Salmon","origin_country":"Norway","production_lat":60.5,"production_lng":8.5,"default_transport":"Air","carbon_factor":{"Road":0.096,"Rail":0.028,"Sea":0.008,"Air":0.602},"alternative":"Rohu or Catla fish"},
  {"ingredient":"Black Pepper","origin_country":"India","production_lat":11.0,"production_lng":76.0,"default_transport":"Road","carbon_factor":{"Road":0.096,"Rail":0.028,"Sea":0.008,"Air":0.602},"alternative":"Local (Kerala)"},
  {"ingredient":"Tomato","origin_country":"India","production_lat":14.0,"production_lng":76.0,"default_transport":"Road","carbon_factor":{"Road":0.096,"Rail":0.028,"Sea":0.008,"Air":0.602},"alternative":"Local variety"},
  {"ingredient":"Onion","origin_country":"India","production_lat":19.7,"production_lng":74.0,"default_transport":"Road","carbon_factor":{"Road":0.096,"Rail":0.028,"Sea":0.008,"Air":0.602},"alternative":"Local variety"},
  {"ingredient":"Mango","origin_country":"India","production_lat":17.0,"production_lng":78.0,"default_transport":"Road","carbon_factor":{"Road":0.096,"Rail":0.028,"Sea":0.008,"Air":0.602},"alternative":"Local variety"},
  {"ingredient":"Coconut","origin_country":"India","production_lat":10.0,"production_lng":76.3,"default_transport":"Road","carbon_factor":{"Road":0.096,"Rail":0.028,"Sea":0.008,"Air":0.602},"alternative":"Local variety"},
  {"ingredient":"Kiwi","origin_country":"New Zealand","production_lat":-40.9,"production_lng":174.9,"default_transport":"Sea","carbon_factor":{"Road":0.096,"Rail":0.028,"Sea":0.008,"Air":0.602},"alternative":"Amla (Indian gooseberry)"},
  {"ingredient":"Asparagus","origin_country":"Peru","production_lat":-9.2,"production_lng":-75.0,"default_transport":"Air","carbon_factor":{"Road":0.096,"Rail":0.028,"Sea":0.008,"Air":0.602},"alternative":"Green beans"},
  {"ingredient":"Maple Syrup","origin_country":"Canada","production_lat":46.8,"production_lng":-71.2,"default_transport":"Sea","carbon_factor":{"Road":0.096,"Rail":0.028,"Sea":0.008,"Air":0.602},"alternative":"Jaggery (Gur)"},
  {"ingredient":"Vanilla","origin_country":"Madagascar","production_lat":-18.8,"production_lng":47.0,"default_transport":"Air","carbon_factor":{"Road":0.096,"Rail":0.028,"Sea":0.008,"Air":0.602},"alternative":"Indian vanilla (Kerala)"},
  {"ingredient":"Dates","origin_country":"Saudi Arabia","production_lat":23.9,"production_lng":45.1,"default_transport":"Sea","carbon_factor":{"Road":0.096,"Rail":0.028,"Sea":0.008,"Air":0.602},"alternative":"Khajoor (local dates)"},
  {"ingredient":"Walnuts","origin_country":"USA","production_lat":37.3,"production_lng":-120.5,"default_transport":"Sea","carbon_factor":{"Road":0.096,"Rail":0.028,"Sea":0.008,"Air":0.602},"alternative":"Akhrot (Kashmiri walnut)"},
  {"ingredient":"Strawberry","origin_country":"India","production_lat":18.5,"production_lng":73.9,"default_transport":"Road","carbon_factor":{"Road":0.096,"Rail":0.028,"Sea":0.008,"Air":0.602},"alternative":"Local (Mahabaleshwar)"},
  {"ingredient":"Jackfruit","origin_country":"India","production_lat":10.5,"production_lng":76.2,"default_transport":"Road","carbon_factor":{"Road":0.096,"Rail":0.028,"Sea":0.008,"Air":0.602},"alternative":"Local variety"},
  {"ingredient":"Dragon Fruit","origin_country":"Vietnam","production_lat":10.8,"production_lng":106.7,"default_transport":"Sea","carbon_factor":{"Road":0.096,"Rail":0.028,"Sea":0.008,"Air":0.602},"alternative":"Guava"},
  {"ingredient":"Flaxseeds","origin_country":"Canada","production_lat":53.9,"production_lng":-116.6,"default_transport":"Sea","carbon_factor":{"Road":0.096,"Rail":0.028,"Sea":0.008,"Air":0.602},"alternative":"Alsi (local flaxseed)"},
  {"ingredient":"Chia Seeds","origin_country":"Mexico","production_lat":23.6,"production_lng":-102.6,"default_transport":"Sea","carbon_factor":{"Road":0.096,"Rail":0.028,"Sea":0.008,"Air":0.602},"alternative":"Sabja (Basil seeds)"},
  {"ingredient":"Broccoli","origin_country":"India","production_lat":28.6,"production_lng":77.2,"default_transport":"Road","carbon_factor":{"Road":0.096,"Rail":0.028,"Sea":0.008,"Air":0.602},"alternative":"Cauliflower"},
  {"ingredient":"Cranberries","origin_country":"USA","production_lat":43.8,"production_lng":-69.8,"default_transport":"Air","carbon_factor":{"Road":0.096,"Rail":0.028,"Sea":0.008,"Air":0.602},"alternative":"Karonda (local berry)"},
  {"ingredient":"Rice","origin_country":"India","production_lat":22.0,"production_lng":82.0,"default_transport":"Road","carbon_factor":{"Road":0.096,"Rail":0.028,"Sea":0.008,"Air":0.602},"alternative":"Locally grown rice"},
  {"ingredient":"Lentils","origin_country":"India","production_lat":25.0,"production_lng":80.0,"default_transport":"Road","carbon_factor":{"Road":0.096,"Rail":0.028,"Sea":0.008,"Air":0.602},"alternative":"Local dal"},
  {"ingredient":"Chickpeas","origin_country":"India","production_lat":24.0,"production_lng":77.0,"default_transport":"Road","carbon_factor":{"Road":0.096,"Rail":0.028,"Sea":0.008,"Air":0.602},"alternative":"Local variety"},
  {"ingredient":"Garlic","origin_country":"India","production_lat":23.0,"production_lng":76.0,"default_transport":"Road","carbon_factor":{"Road":0.096,"Rail":0.028,"Sea":0.008,"Air":0.602},"alternative":"Local variety"},
  {"ingredient":"Ginger","origin_country":"India","production_lat":10.5,"production_lng":76.2,"default_transport":"Road","carbon_factor":{"Road":0.096,"Rail":0.028,"Sea":0.008,"Air":0.602},"alternative":"Local variety"},
  {"ingredient":"Turmeric","origin_country":"India","production_lat":11.0,"production_lng":77.0,"default_transport":"Road","carbon_factor":{"Road":0.096,"Rail":0.028,"Sea":0.008,"Air":0.602},"alternative":"Local (Erode/Sangli)"},
  {"ingredient":"Spinach","origin_country":"India","production_lat":28.7,"production_lng":77.1,"default_transport":"Road","carbon_factor":{"Road":0.096,"Rail":0.028,"Sea":0.008,"Air":0.602},"alternative":"Local seasonal greens"},
  {"ingredient":"Potato","origin_country":"India","production_lat":27.0,"production_lng":80.0,"default_transport":"Road","carbon_factor":{"Road":0.096,"Rail":0.028,"Sea":0.008,"Air":0.602},"alternative":"Local variety"},
  {"ingredient":"Cauliflower","origin_country":"India","production_lat":30.0,"production_lng":76.0,"default_transport":"Road","carbon_factor":{"Road":0.096,"Rail":0.028,"Sea":0.008,"Air":0.602},"alternative":"Local seasonal veg"},
  {"ingredient":"Green Peas","origin_country":"India","production_lat":29.0,"production_lng":77.0,"default_transport":"Road","carbon_factor":{"Road":0.096,"Rail":0.028,"Sea":0.008,"Air":0.602},"alternative":"Local variety"},
  {"ingredient":"Paneer","origin_country":"India","production_lat":26.0,"production_lng":80.0,"default_transport":"Road","carbon_factor":{"Road":0.096,"Rail":0.028,"Sea":0.008,"Air":0.602},"alternative":"Local dairy"},
  {"ingredient":"Yogurt","origin_country":"India","production_lat":20.0,"production_lng":78.0,"default_transport":"Road","carbon_factor":{"Road":0.096,"Rail":0.028,"Sea":0.008,"Air":0.602},"alternative":"Local curd"},
  {"ingredient":"Eggs","origin_country":"India","production_lat":18.0,"production_lng":79.0,"default_transport":"Road","carbon_factor":{"Road":0.096,"Rail":0.028,"Sea":0.008,"Air":0.602},"alternative":"Local farm eggs"},
  {"ingredient":"Chicken","origin_country":"India","production_lat":17.0,"production_lng":78.0,"default_transport":"Road","carbon_factor":{"Road":0.096,"Rail":0.028,"Sea":0.008,"Air":0.602},"alternative":"Local poultry"},
  {"ingredient":"Honey","origin_country":"India","production_lat":30.7,"production_lng":76.7,"default_transport":"Road","carbon_factor":{"Road":0.096,"Rail":0.028,"Sea":0.008,"Air":0.602},"alternative":"Local apiary honey"},
  {"ingredient":"Sunflower Oil","origin_country":"Ukraine","production_lat":48.3,"production_lng":31.1,"default_transport":"Sea","carbon_factor":{"Road":0.096,"Rail":0.028,"Sea":0.008,"Air":0.602},"alternative":"Groundnut or mustard oil"},
  {"ingredient":"Mustard","origin_country":"India","production_lat":28.0,"production_lng":76.0,"default_transport":"Road","carbon_factor":{"Road":0.096,"Rail":0.028,"Sea":0.008,"Air":0.602},"alternative":"Local variety"},
  {"ingredient":"Coriander","origin_country":"India","production_lat":26.0,"production_lng":73.0,"default_transport":"Road","carbon_factor":{"Road":0.096,"Rail":0.028,"Sea":0.008,"Air":0.602},"alternative":"Home grown"},
  {"ingredient":"Green Tea","origin_country":"China","production_lat":30.0,"production_lng":120.0,"default_transport":"Sea","carbon_factor":{"Road":0.096,"Rail":0.028,"Sea":0.008,"Air":0.602},"alternative":"Assam or Darjeeling tea"},
  {"ingredient":"Tofu","origin_country":"China","production_lat":35.0,"production_lng":105.0,"default_transport":"Sea","carbon_factor":{"Road":0.096,"Rail":0.028,"Sea":0.008,"Air":0.602},"alternative":"Paneer or local soy"},
  {"ingredient":"Beef","origin_country":"Australia","production_lat":-25.0,"production_lng":135.0,"default_transport":"Sea","carbon_factor":{"Road":0.096,"Rail":0.028,"Sea":0.008,"Air":0.602},"alternative":"Local livestock"},
  {"ingredient":"Pineapple","origin_country":"India","production_lat":25.5,"production_lng":91.9,"default_transport":"Road","carbon_factor":{"Road":0.096,"Rail":0.028,"Sea":0.008,"Air":0.602},"alternative":"Local (Assam/Meghalaya)"},
  {"ingredient":"Orange","origin_country":"India","production_lat":21.0,"production_lng":79.0,"default_transport":"Road","carbon_factor":{"Road":0.096,"Rail":0.028,"Sea":0.008,"Air":0.602},"alternative":"Local Nagpur orange"}
];

const CITIES = [
  {name:"Mumbai",country:"India",flag:"🇮🇳",lat:19.076,lng:72.877},
  {name:"New Delhi",country:"India",flag:"🇮🇳",lat:28.644,lng:77.216},
  {name:"Bengaluru",country:"India",flag:"🇮🇳",lat:12.972,lng:77.595},
  {name:"Chennai",country:"India",flag:"🇮🇳",lat:13.083,lng:80.270},
  {name:"Kolkata",country:"India",flag:"🇮🇳",lat:22.572,lng:88.363},
  {name:"Hyderabad",country:"India",flag:"🇮🇳",lat:17.385,lng:78.487},
  {name:"Ahmedabad",country:"India",flag:"🇮🇳",lat:23.022,lng:72.571},
  {name:"Pune",country:"India",flag:"🇮🇳",lat:18.520,lng:73.856},
  {name:"Jaipur",country:"India",flag:"🇮🇳",lat:26.912,lng:75.787},
  {name:"London",country:"UK",flag:"🇬🇧",lat:51.507,lng:-0.127},
  {name:"Manchester",country:"UK",flag:"🇬🇧",lat:53.480,lng:-2.243},
  {name:"New York",country:"USA",flag:"🇺🇸",lat:40.712,lng:-74.006},
  {name:"Los Angeles",country:"USA",flag:"🇺🇸",lat:34.052,lng:-118.243},
  {name:"Chicago",country:"USA",flag:"🇺🇸",lat:41.878,lng:-87.630},
  {name:"San Francisco",country:"USA",flag:"🇺🇸",lat:37.774,lng:-122.419},
  {name:"Toronto",country:"Canada",flag:"🇨🇦",lat:43.651,lng:-79.347},
  {name:"Vancouver",country:"Canada",flag:"🇨🇦",lat:49.246,lng:-123.116},
  {name:"Tokyo",country:"Japan",flag:"🇯🇵",lat:35.676,lng:139.650},
  {name:"Osaka",country:"Japan",flag:"🇯🇵",lat:34.693,lng:135.502},
  {name:"Beijing",country:"China",flag:"🇨🇳",lat:39.905,lng:116.391},
  {name:"Shanghai",country:"China",flag:"🇨🇳",lat:31.230,lng:121.473},
  {name:"Sydney",country:"Australia",flag:"🇦🇺",lat:-33.868,lng:151.209},
  {name:"Melbourne",country:"Australia",flag:"🇦🇺",lat:-37.813,lng:144.963},
  {name:"Paris",country:"France",flag:"🇫🇷",lat:48.856,lng:2.352},
  {name:"Berlin",country:"Germany",flag:"🇩🇪",lat:52.520,lng:13.405},
  {name:"Amsterdam",country:"Netherlands",flag:"🇳🇱",lat:52.370,lng:4.895},
  {name:"Madrid",country:"Spain",flag:"🇪🇸",lat:40.416,lng:-3.703},
  {name:"Rome",country:"Italy",flag:"🇮🇹",lat:41.902,lng:12.496},
  {name:"Dubai",country:"UAE",flag:"🇦🇪",lat:25.204,lng:55.270},
  {name:"Abu Dhabi",country:"UAE",flag:"🇦🇪",lat:24.453,lng:54.377},
  {name:"Singapore",country:"Singapore",flag:"🇸🇬",lat:1.352,lng:103.819},
  {name:"Bangkok",country:"Thailand",flag:"🇹🇭",lat:13.756,lng:100.502},
  {name:"Kuala Lumpur",country:"Malaysia",flag:"🇲🇾",lat:3.140,lng:101.686},
  {name:"Jakarta",country:"Indonesia",flag:"🇮🇩",lat:-6.208,lng:106.845},
  {name:"Seoul",country:"South Korea",flag:"🇰🇷",lat:37.566,lng:126.978},
  {name:"São Paulo",country:"Brazil",flag:"🇧🇷",lat:-23.550,lng:-46.633},
  {name:"Rio de Janeiro",country:"Brazil",flag:"🇧🇷",lat:-22.906,lng:-43.172},
  {name:"Mexico City",country:"Mexico",flag:"🇲🇽",lat:19.432,lng:-99.133},
  {name:"Cairo",country:"Egypt",flag:"🇪🇬",lat:30.044,lng:31.235},
  {name:"Lagos",country:"Nigeria",flag:"🇳🇬",lat:6.524,lng:3.379},
  {name:"Nairobi",country:"Kenya",flag:"🇰🇪",lat:-1.292,lng:36.821},
  {name:"Cape Town",country:"South Africa",flag:"🇿🇦",lat:-33.924,lng:18.424},
  {name:"Johannesburg",country:"South Africa",flag:"🇿🇦",lat:-26.204,lng:28.047},
  {name:"Moscow",country:"Russia",flag:"🇷🇺",lat:55.751,lng:37.617},
  {name:"Istanbul",country:"Turkey",flag:"🇹🇷",lat:41.015,lng:28.979},
  {name:"Karachi",country:"Pakistan",flag:"🇵🇰",lat:24.860,lng:67.010},
  {name:"Dhaka",country:"Bangladesh",flag:"🇧🇩",lat:23.810,lng:90.412},
  {name:"Colombo",country:"Sri Lanka",flag:"🇱🇰",lat:6.927,lng:79.862},
  {name:"Kathmandu",country:"Nepal",flag:"🇳🇵",lat:27.700,lng:85.318},
  {name:"Vienna",country:"Austria",flag:"🇦🇹",lat:48.208,lng:16.373},
  {name:"Zurich",country:"Switzerland",flag:"🇨🇭",lat:47.378,lng:8.540}
];

// ── STATE ──
let destination = {name:"Mumbai, India", lat:19.076, lng:72.877};
let ingredients = [];
let idCounter = 0;
let map, routeLayers = [];

// ── TRANSPORT CONFIG ──
const TC = {Air:"#ff00aa", Sea:"#00f5ff", Road:"#00ff88", Rail:"#bf00ff"};
const TP_CLASS = {Air:"tp-air", Sea:"tp-sea", Road:"tp-road", Rail:"tp-rail"};
const TRANSPORT_EMOJI = {Air:"✈️", Sea:"🚢", Road:"🚛", Rail:"🚆"};

// ── UTILS ──
function haversine(lat1, lng1, lat2, lng2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a = Math.sin(dLat/2)**2 + Math.cos(lat1*Math.PI/180) * Math.cos(lat2*Math.PI/180) * Math.sin(dLng/2)**2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function calcEmissions(dist, weightKg, transport, factors) {
  return dist * (weightKg / 1000) * (factors[transport] || 0.096);
}

function greatCirclePoints(lat1, lng1, lat2, lng2, n) {
  const toRad = d => d * Math.PI / 180;
  const toDeg = r => r * 180 / Math.PI;
  const φ1 = toRad(lat1), λ1 = toRad(lng1);
  const φ2 = toRad(lat2), λ2 = toRad(lng2);
  const d = 2 * Math.asin(Math.sqrt(Math.sin((φ2-φ1)/2)**2 + Math.cos(φ1)*Math.cos(φ2)*Math.sin((λ2-λ1)/2)**2));
  if (d < 0.001) return [[lat1,lng1],[lat2,lng2]];
  const pts = [];
  for (let i = 0; i <= n; i++) {
    const f = i / n;
    const A = Math.sin((1-f)*d) / Math.sin(d);
    const B = Math.sin(f*d) / Math.sin(d);
    const x = A*Math.cos(φ1)*Math.cos(λ1) + B*Math.cos(φ2)*Math.cos(λ2);
    const y = A*Math.cos(φ1)*Math.sin(λ1) + B*Math.cos(φ2)*Math.sin(λ2);
    const z = A*Math.sin(φ1) + B*Math.sin(φ2);
    pts.push([toDeg(Math.atan2(z, Math.sqrt(x*x + y*y))), toDeg(Math.atan2(y, x))]);
  }
  return pts;
}

// ── MAP ──
function initMap() {
  map = L.map('map', {center:[20,20], zoom:2, minZoom:1, maxZoom:10, scrollWheelZoom:true});
  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://carto.com/">CARTO</a>',
    subdomains: 'abcd', maxZoom: 19
  }).addTo(map);
}

function updateMap() {
  routeLayers.forEach(l => map.removeLayer(l));
  routeLayers = [];
  const destLL = [destination.lat, destination.lng];

  const destIcon = L.divIcon({
    className: '',
    html: `<div style="width:16px;height:16px;background:#ff00aa;border:2px solid #fff;border-radius:50%;box-shadow:0 0 12px rgba(255,0,170,0.8),0 0 24px rgba(255,0,170,0.4)"></div>`,
    iconSize:[16,16], iconAnchor:[8,8]
  });
  const destMarker = L.marker(destLL, {icon:destIcon}).addTo(map);
  destMarker.bindPopup(`<div class="popup-title">📍 ${destination.name}</div><div class="popup-detail">Your destination</div>`);
  routeLayers.push(destMarker);

  ingredients.forEach(ing => {
    const food = FOOD_DATA[ing.foodIdx];
    const srcLL = [food.production_lat, food.production_lng];
    const dist = Math.round(haversine(food.production_lat, food.production_lng, destination.lat, destination.lng));
    const co2 = calcEmissions(dist, ing.weightKg, ing.transport, food.carbon_factor);
    const color = TC[ing.transport] || '#888';

    const srcIcon = L.divIcon({
      className: '',
      html: `<div style="width:10px;height:10px;background:${color};border:1px solid rgba(255,255,255,0.6);border-radius:50%;box-shadow:0 0 8px ${color},0 0 16px ${color}55"></div>`,
      iconSize:[10,10], iconAnchor:[5,5]
    });
    const srcMarker = L.marker(srcLL, {icon:srcIcon}).addTo(map);
    srcMarker.bindPopup(`
      <div class="popup-title">${TRANSPORT_EMOJI[ing.transport]} ${food.ingredient}</div>
      <div class="popup-detail">Origin: ${food.origin_country}</div>
      <div class="popup-detail">Transport: ${ing.transport} · ${dist.toLocaleString()} km</div>
      <div class="popup-co2">${co2.toFixed(3)} kg CO₂</div>
    `);
    routeLayers.push(srcMarker);

    const arcPoints = greatCirclePoints(food.production_lat, food.production_lng, destination.lat, destination.lng, 80);
    const polyline = L.polyline(arcPoints, {
      color, weight: ing.transport==='Air'?1.5:2, opacity:0.7,
      dashArray: ing.transport==='Air'?'6, 5':ing.transport==='Rail'?'3, 3':null
    }).addTo(map);
    routeLayers.push(polyline);
  });

  if (ingredients.length > 0) {
    const allPoints = ingredients.map(ing => [FOOD_DATA[ing.foodIdx].production_lat, FOOD_DATA[ing.foodIdx].production_lng]);
    allPoints.push([destination.lat, destination.lng]);
    map.fitBounds(L.latLngBounds(allPoints), {padding:[40,40], maxZoom:5});
  } else {
    map.setView([20,20], 2);
  }
}

// ── CITY SEARCH ──
const cityInput = document.getElementById('cityInput');
const cityDropdown = document.getElementById('cityDropdown');

cityInput.addEventListener('input', function() {
  const q = this.value.trim().toLowerCase();
  if (q.length < 1) { cityDropdown.classList.remove('open'); return; }
  const results = CITIES.filter(c => c.name.toLowerCase().includes(q) || c.country.toLowerCase().includes(q)).slice(0, 8);
  if (!results.length) { cityDropdown.classList.remove('open'); return; }
  cityDropdown.innerHTML = results.map(c => `
    <div class="search-result" onclick="selectCity(${c.lat},${c.lng},'${c.name}, ${c.country}')">
      <span class="search-result-flag">${c.flag}</span>
      <div><div>${c.name}</div><div class="search-result-detail">${c.country} · ${c.lat.toFixed(2)}°, ${c.lng.toFixed(2)}°</div></div>
    </div>
  `).join('');
  cityDropdown.classList.add('open');
});

document.addEventListener('click', e => {
  if (!e.target.closest('.search-wrap')) cityDropdown.classList.remove('open');
});

function selectCity(lat, lng, name) {
  destination = {name, lat, lng};
  document.getElementById('destName').textContent = name;
  document.getElementById('destCoords').textContent = `${Math.abs(lat).toFixed(3)}°${lat>=0?'N':'S'}, ${Math.abs(lng).toFixed(3)}°${lng>=0?'E':'W'}`;
  cityInput.value = '';
  cityDropdown.classList.remove('open');
  renderIngredients();
  recalcAll();
}

// ── INGREDIENTS ──
function addIngredient() {
  ingredients.push({id:idCounter++, foodIdx:0, weightKg:1, transport:FOOD_DATA[0].default_transport});
  renderIngredients();
}

function removeIngredient(id) {
  ingredients = ingredients.filter(i => i.id !== id);
  renderIngredients();
}

function updateFood(id, idx) {
  const ing = ingredients.find(i => i.id === id);
  if (ing) { ing.foodIdx = parseInt(idx); ing.transport = FOOD_DATA[ing.foodIdx].default_transport; }
  renderIngredients();
}

function updateWeight(id, val) {
  const ing = ingredients.find(i => i.id === id);
  if (ing) ing.weightKg = Math.max(0.01, parseFloat(val) || 1);
}

function updateTransport(id, val) {
  const ing = ingredients.find(i => i.id === id);
  if (ing) ing.transport = val;
  renderIngredients();
}

function renderIngredients() {
  const list = document.getElementById('ingList');
  document.getElementById('ingCount').textContent = `${ingredients.length} item${ingredients.length !== 1 ? 's' : ''}`;

  if (ingredients.length === 0) {
    list.innerHTML = `<div class="empty-state"><span class="empty-icon">🥦</span><div class="empty-title">No ingredients yet</div><div class="empty-text">Click "Add ingredient" to start tracking your meal's carbon footprint.</div></div>`;
    return;
  }

  list.innerHTML = ingredients.map(ing => {
    const food = FOOD_DATA[ing.foodIdx];
    const dist = Math.round(haversine(food.production_lat, food.production_lng, destination.lat, destination.lng));
    const co2 = calcEmissions(dist, ing.weightKg, ing.transport, food.carbon_factor);
    const foodOptions = FOOD_DATA.map((f,i) => `<option value="${i}"${i===ing.foodIdx?' selected':''}>${f.ingredient}</option>`).join('');

    return `<div class="ing-item">
      <div class="ing-top">
        <select class="ing-select" onchange="updateFood(${ing.id},this.value)">${foodOptions}</select>
        <button class="ing-del" onclick="removeIngredient(${ing.id})" title="Remove">×</button>
      </div>
      <div class="ing-fields">
        <div>
          <div class="field-label">Weight (kg)</div>
          <input class="field-input" type="number" min="0.01" step="0.1" value="${ing.weightKg}" onchange="updateWeight(${ing.id},this.value)">
        </div>
        <div>
          <div class="field-label">Transport</div>
          <select class="field-select" onchange="updateTransport(${ing.id},this.value)">
            ${['Road','Rail','Sea','Air'].map(t=>`<option value="${t}"${t===ing.transport?' selected':''}>${TRANSPORT_EMOJI[t]} ${t}</option>`).join('')}
          </select>
        </div>
      </div>
      <div class="ing-result-row">
        <div class="ing-origin">
          <span>${food.origin_country}</span>
          <span class="transport-pill ${TP_CLASS[ing.transport]}">${ing.transport}</span>
        </div>
        <div class="ing-metrics">
          <div class="ing-metric">
            <div class="ing-metric-val">${dist.toLocaleString()} km</div>
            <div class="ing-metric-lbl">distance</div>
          </div>
          <div class="ing-metric">
            <div class="ing-metric-val" style="color:${co2>1?'var(--neon-pink)':'var(--neon-green)'}">${co2.toFixed(3)}</div>
            <div class="ing-metric-lbl">kg CO₂</div>
          </div>
        </div>
      </div>
    </div>`;
  }).join('');
}

function recalcAll() {
  let totDist = 0, totCO2 = 0;
  const byTransport = {};
  const airIngredients = [];

  ingredients.forEach(ing => {
    const food = FOOD_DATA[ing.foodIdx];
    const dist = haversine(food.production_lat, food.production_lng, destination.lat, destination.lng);
    const co2 = calcEmissions(dist, ing.weightKg, ing.transport, food.carbon_factor);
    totDist += dist;
    totCO2 += co2;
    byTransport[ing.transport] = (byTransport[ing.transport] || 0) + co2;
    if (ing.transport === 'Air' && food.alternative) airIngredients.push({name:food.ingredient, alt:food.alternative, co2});
  });

  document.getElementById('totDist').textContent = Math.round(totDist).toLocaleString();
  document.getElementById('totCO2').textContent = totCO2.toFixed(2);
  document.getElementById('totIng').textContent = ingredients.length;

  const pct = Math.min((totCO2 / 20) * 100, 100);
  const fill = document.getElementById('impactFill');
  fill.style.width = pct + '%';
  fill.style.background = pct > 70 ? 'var(--neon-pink)' : pct > 35 ? 'var(--neon-yellow)' : 'var(--neon-green)';
  document.getElementById('impactLabel').textContent = totCO2.toFixed(2) + ' kg CO₂';

  const bb = document.getElementById('breakdownBars');
  if (!Object.keys(byTransport).length) {
    bb.innerHTML = '<div style="font-size:13px;color:var(--text-muted);text-align:center;padding:12px">Add ingredients to see breakdown</div>';
  } else {
    const maxVal = Math.max(...Object.values(byTransport));
    bb.innerHTML = Object.entries(byTransport).map(([t,val]) => `
      <div class="breakdown-row">
        <div class="br-label">${TRANSPORT_EMOJI[t]} ${t}</div>
        <div class="br-track"><div class="br-fill" style="width:${maxVal>0?(val/maxVal*100).toFixed(1):0}%;background:${TC[t]};box-shadow:0 0 8px ${TC[t]}88"></div></div>
        <div class="br-val">${val.toFixed(2)} kg</div>
      </div>
    `).join('');
  }

  const altCard = document.getElementById('altCard');
  if (airIngredients.length > 0) {
    altCard.style.display = 'block';
    document.getElementById('altList').innerHTML = airIngredients.map(a => `
      <div class="alt-item">
        <span class="alt-from">${a.name}</span>
        <span class="alt-arrow">→</span>
        <span class="alt-to">${a.alt}</span>
        <span class="alt-save">Air freight</span>
      </div>
    `).join('');
  } else {
    altCard.style.display = 'none';
  }

  updateMap();
}

// ── INIT ──
initMap();

renderIngredients();
// No default ingredients - start fresh
updateSummaryZero();

function updateSummaryZero() {
  document.getElementById('totDist').textContent = '0';
  document.getElementById('totCO2').textContent = '0.00';
  document.getElementById('totIng').textContent = '0';
  const fill = document.getElementById('impactFill');
  fill.style.width = '0%';
  fill.style.background = 'var(--neon-green)';
  document.getElementById('impactLabel').textContent = '0.00 kg CO₂';
  document.getElementById('breakdownBars').innerHTML = '<div style="font-size:13px;color:var(--text-muted);text-align:center;padding:12px">Add ingredients to see breakdown</div>';
  document.getElementById('altCard').style.display = 'none';
  updateMap();
}

// ── FAQ ──
function toggleFaq(btn) {
  const item = btn.closest('.faq-item');
  const isOpen = item.classList.contains('open');
  // Close all
  document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
  // Sync chips
  document.querySelectorAll('.faq-chip').forEach(c => c.classList.remove('active'));
  if (!isOpen) {
    item.classList.add('open');
    const idx = item.dataset.index;
    const chip = document.querySelector(`.faq-chip[onclick*="openFaq(${idx},"]`);
    if (chip) chip.classList.add('active');
  }
}

function openFaq(index, chipEl) {
  document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
  document.querySelectorAll('.faq-chip').forEach(c => c.classList.remove('active'));
  const item = document.querySelector(`.faq-item[data-index="${index}"]`);
  if (item) {
    item.classList.add('open');
    item.scrollIntoView({behavior:'smooth', block:'nearest'});
  }
  if (chipEl) chipEl.classList.add('active');
}

// ─────────────────────────────────────────
// FOOD DATA (50+ items with origins & alternatives)
// ─────────────────────────────────────────
const FOOD_DATA = [
  {ingredient:"Rice",origin_country:"India",production_lat:22.0,production_lng:82.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Locally grown rice"},
  {ingredient:"Wheat",origin_country:"India",production_lat:30.5,production_lng:74.5,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local wheat variety"},
  {ingredient:"Quinoa",origin_country:"Peru",production_lat:-13.5,production_lng:-72.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Amaranth (Rajgira)"},
  {ingredient:"Avocado",origin_country:"Mexico",production_lat:19.5,production_lng:-99.1,default_transport:"Air",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Mango or Banana"},
  {ingredient:"Almonds",origin_country:"USA",production_lat:36.7,production_lng:-119.7,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Groundnuts"},
  {ingredient:"Olive Oil",origin_country:"Spain",production_lat:39.5,production_lng:-3.7,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Sesame or Groundnut oil"},
  {ingredient:"Coffee",origin_country:"Brazil",production_lat:-14.2,production_lng:-51.9,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Indian Filter Coffee (Coorg)"},
  {ingredient:"Chocolate",origin_country:"Ivory Coast",production_lat:7.5,production_lng:-5.5,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Carob or local cacao"},
  {ingredient:"Banana",origin_country:"India",production_lat:11.0,production_lng:77.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local variety"},
  {ingredient:"Apple",origin_country:"India",production_lat:34.0,production_lng:74.8,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Guava or local fruit"},
  {ingredient:"Oats",origin_country:"Australia",production_lat:-25.3,production_lng:133.8,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Ragi or Jowar"},
  {ingredient:"Soy Milk",origin_country:"China",production_lat:35.9,production_lng:104.2,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Coconut milk"},
  {ingredient:"Blueberries",origin_country:"USA",production_lat:45.5,production_lng:-122.7,default_transport:"Air",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Jamun (Indian gooseberry)"},
  {ingredient:"Pasta",origin_country:"Italy",production_lat:41.9,production_lng:12.5,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local wheat noodles"},
  {ingredient:"Salmon",origin_country:"Norway",production_lat:60.5,production_lng:8.5,default_transport:"Air",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Rohu or Catla fish"},
  {ingredient:"Black Pepper",origin_country:"India",production_lat:11.0,production_lng:76.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local (Kerala)"},
  {ingredient:"Tomato",origin_country:"India",production_lat:14.0,production_lng:76.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local variety"},
  {ingredient:"Onion",origin_country:"India",production_lat:19.7,production_lng:74.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local variety"},
  {ingredient:"Mango",origin_country:"India",production_lat:17.0,production_lng:78.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local variety"},
  {ingredient:"Coconut",origin_country:"India",production_lat:10.0,production_lng:76.3,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local variety"},
  {ingredient:"Kiwi",origin_country:"New Zealand",production_lat:-40.9,production_lng:174.9,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Amla (Indian gooseberry)"},
  {ingredient:"Asparagus",origin_country:"Peru",production_lat:-9.2,production_lng:-75.0,default_transport:"Air",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Green beans"},
  {ingredient:"Maple Syrup",origin_country:"Canada",production_lat:46.8,production_lng:-71.2,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Jaggery (Gur)"},
  {ingredient:"Vanilla",origin_country:"Madagascar",production_lat:-18.8,production_lng:47.0,default_transport:"Air",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Indian vanilla (Kerala)"},
  {ingredient:"Dates",origin_country:"Saudi Arabia",production_lat:23.9,production_lng:45.1,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Khajoor (local dates)"},
  {ingredient:"Walnuts",origin_country:"USA",production_lat:37.3,production_lng:-120.5,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Akhrot (Kashmiri walnut)"},
  {ingredient:"Strawberry",origin_country:"India",production_lat:18.5,production_lng:73.9,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local (Mahabaleshwar)"},
  {ingredient:"Jackfruit",origin_country:"India",production_lat:10.5,production_lng:76.2,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local variety"},
  {ingredient:"Dragon Fruit",origin_country:"Vietnam",production_lat:10.8,production_lng:106.7,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Guava"},
  {ingredient:"Chia Seeds",origin_country:"Mexico",production_lat:23.6,production_lng:-102.6,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Sabja (Basil seeds)"},
  {ingredient:"Broccoli",origin_country:"India",production_lat:28.6,production_lng:77.2,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Cauliflower"},
  {ingredient:"Cranberries",origin_country:"USA",production_lat:43.8,production_lng:-69.8,default_transport:"Air",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Karonda (local berry)"},
  {ingredient:"Lentils",origin_country:"India",production_lat:25.0,production_lng:80.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local dal"},
  {ingredient:"Chickpeas",origin_country:"India",production_lat:24.0,production_lng:77.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local variety"},
  {ingredient:"Garlic",origin_country:"India",production_lat:23.0,production_lng:76.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local variety"},
  {ingredient:"Ginger",origin_country:"India",production_lat:10.5,production_lng:76.2,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local variety"},
  {ingredient:"Turmeric",origin_country:"India",production_lat:11.0,production_lng:77.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local (Erode/Sangli)"},
  {ingredient:"Spinach",origin_country:"India",production_lat:28.7,production_lng:77.1,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local seasonal greens"},
  {ingredient:"Potato",origin_country:"India",production_lat:27.0,production_lng:80.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local variety"},
  {ingredient:"Cauliflower",origin_country:"India",production_lat:30.0,production_lng:76.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local seasonal veg"},
  {ingredient:"Paneer",origin_country:"India",production_lat:26.0,production_lng:80.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local dairy"},
  {ingredient:"Eggs",origin_country:"India",production_lat:18.0,production_lng:79.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local farm eggs"},
  {ingredient:"Chicken",origin_country:"India",production_lat:17.0,production_lng:78.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local poultry"},
  {ingredient:"Honey",origin_country:"India",production_lat:30.7,production_lng:76.7,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local apiary honey"},
  {ingredient:"Sunflower Oil",origin_country:"Ukraine",production_lat:48.3,production_lng:31.1,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Groundnut or mustard oil"},
  {ingredient:"Green Tea",origin_country:"China",production_lat:30.0,production_lng:120.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Assam or Darjeeling tea"},
  {ingredient:"Pineapple",origin_country:"India",production_lat:25.5,production_lng:91.9,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local (Assam/Meghalaya)"},
  {ingredient:"Orange",origin_country:"India",production_lat:21.0,production_lng:79.0,default_transport:"Road",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local Nagpur orange"},
  {ingredient:"Flaxseeds",origin_country:"Canada",production_lat:53.9,production_lng:-116.6,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Alsi (local flaxseed)"},
  {ingredient:"Beef",origin_country:"Australia",production_lat:-25.0,production_lng:135.0,default_transport:"Sea",carbon_factor:{Road:0.096,Rail:0.028,Sea:0.008,Air:0.602},alternative:"Local livestock"}
];

// ─────────────────────────────────────────
// CITIES DATABASE
// ─────────────────────────────────────────
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
  {name:"New York",country:"USA",flag:"🇺🇸",lat:40.712,lng:-74.006},
  {name:"Los Angeles",country:"USA",flag:"🇺🇸",lat:34.052,lng:-118.243},
  {name:"Chicago",country:"USA",flag:"🇺🇸",lat:41.878,lng:-87.630},
  {name:"San Francisco",country:"USA",flag:"🇺🇸",lat:37.774,lng:-122.419},
  {name:"Toronto",country:"Canada",flag:"🇨🇦",lat:43.651,lng:-79.347},
  {name:"Tokyo",country:"Japan",flag:"🇯🇵",lat:35.676,lng:139.650},
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
  {name:"Singapore",country:"Singapore",flag:"🇸🇬",lat:1.352,lng:103.819},
  {name:"Bangkok",country:"Thailand",flag:"🇹🇭",lat:13.756,lng:100.502},
  {name:"Kuala Lumpur",country:"Malaysia",flag:"🇲🇾",lat:3.140,lng:101.686},
  {name:"Seoul",country:"South Korea",flag:"🇰🇷",lat:37.566,lng:126.978},
  {name:"São Paulo",country:"Brazil",flag:"🇧🇷",lat:-23.550,lng:-46.633},
  {name:"Mexico City",country:"Mexico",flag:"🇲🇽",lat:19.432,lng:-99.133},
  {name:"Cairo",country:"Egypt",flag:"🇪🇬",lat:30.044,lng:31.235},
  {name:"Lagos",country:"Nigeria",flag:"🇳🇬",lat:6.524,lng:3.379},
  {name:"Cape Town",country:"South Africa",flag:"🇿🇦",lat:-33.924,lng:18.424},
  {name:"Moscow",country:"Russia",flag:"🇷🇺",lat:55.751,lng:37.617},
  {name:"Istanbul",country:"Turkey",flag:"🇹🇷",lat:41.015,lng:28.979},
  {name:"Karachi",country:"Pakistan",flag:"🇵🇰",lat:24.860,lng:67.010},
  {name:"Dhaka",country:"Bangladesh",flag:"🇧🇩",lat:23.810,lng:90.412},
  {name:"Colombo",country:"Sri Lanka",flag:"🇱🇰",lat:6.927,lng:79.862},
  {name:"Vienna",country:"Austria",flag:"🇦🇹",lat:48.208,lng:16.373},
  {name:"Zurich",country:"Switzerland",flag:"🇨🇭",lat:47.378,lng:8.540}
];

// ─────────────────────────────────────────
// STATE
// ─────────────────────────────────────────
let destination = {name:"Mumbai, India", lat:19.076, lng:72.877, country:"India"};
let ingredients = [];
let idCounter = 0;
let map, routeLayers = [];

const TC = {Air:"#ff00aa", Sea:"#00f5ff", Road:"#00ff88", Rail:"#bf00ff"};
const TP_CLASS = {Air:"tp-air", Sea:"tp-sea", Road:"tp-road", Rail:"tp-rail"};
const TRANSPORT_EMOJI = {Air:"✈️", Sea:"🚢", Road:"🚛", Rail:"🚆"};

// ─────────────────────────────────────────
// UTILITIES
// ─────────────────────────────────────────
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

// Great-circle arc points for map routes
function greatCirclePoints(lat1, lng1, lat2, lng2, n) {
  const toRad = d => d * Math.PI / 180;
  const toDeg = r => r * 180 / Math.PI;
  const φ1=toRad(lat1), λ1=toRad(lng1), φ2=toRad(lat2), λ2=toRad(lng2);
  const d = 2*Math.asin(Math.sqrt(Math.sin((φ2-φ1)/2)**2 + Math.cos(φ1)*Math.cos(φ2)*Math.sin((λ2-λ1)/2)**2));
  if (d < 0.001) return [[lat1,lng1],[lat2,lng2]];
  const pts = [];
  for (let i=0; i<=n; i++) {
    const f = i/n;
    const A = Math.sin((1-f)*d)/Math.sin(d);
    const B = Math.sin(f*d)/Math.sin(d);
    const x = A*Math.cos(φ1)*Math.cos(λ1)+B*Math.cos(φ2)*Math.cos(λ2);
    const y = A*Math.cos(φ1)*Math.sin(λ1)+B*Math.cos(φ2)*Math.sin(λ2);
    const z = A*Math.sin(φ1)+B*Math.sin(φ2);
    pts.push([toDeg(Math.atan2(z, Math.sqrt(x*x+y*y))), toDeg(Math.atan2(y,x))]);
  }
  return pts;
}

// ─────────────────────────────────────────
// MAP
// ─────────────────────────────────────────
function initMap() {
  map = L.map('map', {center:[20,20], zoom:2, minZoom:1, maxZoom:10, scrollWheelZoom:true});
  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution:'&copy; <a href="https://carto.com/">CARTO</a>',
    subdomains:'abcd', maxZoom:19
  }).addTo(map);
}

function updateMap() {
  routeLayers.forEach(l => map.removeLayer(l));
  routeLayers = [];
  const destLL = [destination.lat, destination.lng];

  const destIcon = L.divIcon({
    className:'',
    html:`<div style="width:16px;height:16px;background:#ff00aa;border:2px solid #fff;border-radius:50%;box-shadow:0 0 12px rgba(255,0,170,0.8),0 0 24px rgba(255,0,170,0.4)"></div>`,
    iconSize:[16,16], iconAnchor:[8,8]
  });
  const dm = L.marker(destLL, {icon:destIcon}).addTo(map);
  dm.bindPopup(`<div class="popup-title">📍 ${destination.name}</div><div class="popup-detail">Your destination</div>`);
  routeLayers.push(dm);

  ingredients.forEach(ing => {
    const food = FOOD_DATA[ing.foodIdx];
    const srcLL = [food.production_lat, food.production_lng];
    const dist = Math.round(haversine(food.production_lat, food.production_lng, destination.lat, destination.lng));
    const co2 = calcEmissions(dist, ing.weightKg, ing.transport, food.carbon_factor);
    const color = TC[ing.transport] || '#888';

    const srcIcon = L.divIcon({
      className:'',
      html:`<div style="width:10px;height:10px;background:${color};border:1px solid rgba(255,255,255,0.6);border-radius:50%;box-shadow:0 0 8px ${color},0 0 16px ${color}55"></div>`,
      iconSize:[10,10], iconAnchor:[5,5]
    });
    const sm = L.marker(srcLL, {icon:srcIcon}).addTo(map);
    sm.bindPopup(`<div class="popup-title">${TRANSPORT_EMOJI[ing.transport]} ${food.ingredient}</div><div class="popup-detail">Origin: ${food.origin_country}</div><div class="popup-detail">Transport: ${ing.transport} · ${dist.toLocaleString()} km</div><div class="popup-co2">${co2.toFixed(3)} kg CO₂</div>`);
    routeLayers.push(sm);

    const arcPts = greatCirclePoints(food.production_lat, food.production_lng, destination.lat, destination.lng, 80);
    const pl = L.polyline(arcPts, {
      color, weight: ing.transport==='Air'?1.5:2, opacity:0.7,
      dashArray: ing.transport==='Air'?'6,5': ing.transport==='Rail'?'3,3':null
    }).addTo(map);
    routeLayers.push(pl);
  });

  if (ingredients.length > 0) {
    const pts = ingredients.map(i=>[FOOD_DATA[i.foodIdx].production_lat, FOOD_DATA[i.foodIdx].production_lng]);
    pts.push([destination.lat, destination.lng]);
    map.fitBounds(L.latLngBounds(pts), {padding:[40,40], maxZoom:5});
  } else {
    map.setView([20,20], 2);
  }
}

// ─────────────────────────────────────────
// LAND CONNECTIVITY — TRANSPORT AVAILABILITY
// Road & Rail are only physically possible when origin
// and destination share a continuous land route.
// We assign each country a "land group" — countries
// within the same group can use Road/Rail between them.
// Countries in DIFFERENT groups are separated by ocean
// and must use Sea or Air only.
// ─────────────────────────────────────────

// Land groups: countries that share a continuous land mass
// and can realistically be connected by road/rail.
const LAND_GROUPS = {
  // Eurasian + African landmass (all connected by road/rail networks)
  'India':         'eurasia',
  'China':         'eurasia',
  'Japan':         'island',    // island — no land connection
  'South Korea':   'island',    // peninsula but no practical road to mainland
  'Sri Lanka':     'island',
  'Indonesia':     'island',
  'Singapore':     'island',    // city-state, island
  'UK':            'island',    // island
  'Ireland':       'island',
  'New Zealand':   'island',
  'Australia':     'island',
  'Madagascar':    'island',
  'Japan':         'island',
  'Philippines':   'island',
  'Taiwan':        'island',
  'Maldives':      'island',
  'Ivory Coast':   'eurasia',
  'Kenya':         'eurasia',
  'Nigeria':       'eurasia',
  'South Africa':  'eurasia',
  'Egypt':         'eurasia',
  'Saudi Arabia':  'eurasia',
  'UAE':           'eurasia',
  'Spain':         'eurasia',
  'Italy':         'eurasia',
  'France':        'eurasia',
  'Germany':       'eurasia',
  'Netherlands':   'eurasia',
  'Austria':       'eurasia',
  'Switzerland':   'eurasia',
  'Russia':        'eurasia',
  'Turkey':        'eurasia',
  'Ukraine':       'eurasia',
  'Pakistan':      'eurasia',
  'Bangladesh':    'eurasia',
  'Nepal':         'eurasia',
  'Vietnam':       'eurasia',
  'Thailand':      'eurasia',
  'Malaysia':      'eurasia',   // peninsula connected to Thailand by road
  'Myanmar':       'eurasia',
  'Cambodia':      'eurasia',
  'Laos':          'eurasia',
  // Americas — connected landmass (North + Central + South America)
  'USA':           'americas',
  'Canada':        'americas',
  'Mexico':        'americas',
  'Brazil':        'americas',
  'Peru':          'americas',
  'Colombia':      'americas',
  'Argentina':     'americas',
  'Chile':         'americas',
  'Venezuela':     'americas',
};

/**
 * Given a food's origin country and the current destination city country,
 * returns the list of transport modes that are physically feasible.
 * Road & Rail require both to be in the same land group (and not island-only).
 */
function getAvailableTransports(originCountry, destCountry) {
  const originGroup = LAND_GROUPS[originCountry] || 'unknown';
  const destGroup   = LAND_GROUPS[destCountry]   || 'unknown';

  // Same country → all modes available
  if (originCountry === destCountry) return ['Road', 'Rail', 'Sea', 'Air'];

  // Both in the same land group AND neither is an island → land transport OK
  const landPossible = (
    originGroup !== 'island' &&
    destGroup   !== 'island' &&
    originGroup === destGroup &&
    originGroup !== 'unknown'
  );

  return landPossible ? ['Road', 'Rail', 'Sea', 'Air'] : ['Sea', 'Air'];
}

/**
 * Given a city object from CITIES, return its country string.
 * We store destination country separately for transport checks.
 */
function getDestCountry() {
  // Find matching city in CITIES array by lat/lng
  const match = CITIES.find(c =>
    Math.abs(c.lat - destination.lat) < 0.01 &&
    Math.abs(c.lng - destination.lng) < 0.01
  );
  return match ? match.country : 'Unknown';
}

// ─────────────────────────────────────────
// CITY SEARCH
// ─────────────────────────────────────────
const cityInput = document.getElementById('cityInput');
const cityDropdown = document.getElementById('cityDropdown');

cityInput.addEventListener('input', function() {
  const q = this.value.trim().toLowerCase();
  if (q.length < 1) { cityDropdown.classList.remove('open'); return; }
  const results = CITIES.filter(c => c.name.toLowerCase().includes(q) || c.country.toLowerCase().includes(q)).slice(0,8);
  if (!results.length) { cityDropdown.classList.remove('open'); return; }
  cityDropdown.innerHTML = results.map(c=>`
    <div class="search-result" onclick="selectCity(${c.lat},${c.lng},'${c.name}, ${c.country}','${c.country}')">
      <span class="search-result-flag">${c.flag}</span>
      <div><div>${c.name}</div><div class="search-result-detail">${c.country} · ${c.lat.toFixed(2)}°, ${c.lng.toFixed(2)}°</div></div>
    </div>
  `).join('');
  cityDropdown.classList.add('open');
});

document.addEventListener('click', e => {
  if (!e.target.closest('.search-wrap')) cityDropdown.classList.remove('open');
});

function selectCity(lat, lng, name, country) {
  destination = {name, lat, lng, country: country || 'Unknown'};
  document.getElementById('destName').textContent = name;
  document.getElementById('destCoords').textContent = `${Math.abs(lat).toFixed(3)}°${lat>=0?'N':'S'}, ${Math.abs(lng).toFixed(3)}°${lng>=0?'E':'W'}`;
  cityInput.value = '';
  cityDropdown.classList.remove('open');
  // Re-validate transport for all ingredients when destination changes
  ingredients.forEach(ing => {
    const food = FOOD_DATA[ing.foodIdx];
    const available = getAvailableTransports(food.origin_country, destination.country);
    if (!available.includes(ing.transport)) {
      ing.transport = available.includes(food.default_transport)
        ? food.default_transport
        : available[0];
    }
  });
  renderIngredients();
  recalcAll();
}

// ─────────────────────────────────────────
// INGREDIENT MANAGEMENT
// ─────────────────────────────────────────
function addIngredient() {
  const _newFoodIdx = 0;
  const _newFood = FOOD_DATA[_newFoodIdx];
  const _newAvail = getAvailableTransports(_newFood.origin_country, destination.country || 'India');
  const _newTransport = _newAvail.includes(_newFood.default_transport) ? _newFood.default_transport : _newAvail[0];
  ingredients.push({id:idCounter++, foodIdx:_newFoodIdx, weightKg:1, transport:_newTransport});
  renderIngredients();
}

function removeIngredient(id) {
  ingredients = ingredients.filter(i=>i.id!==id);
  renderIngredients();
  recalcAll();
}

function updateFood(id, idx) {
  const ing = ingredients.find(i=>i.id===id);
  if (ing) {
    ing.foodIdx = parseInt(idx);
    const food = FOOD_DATA[ing.foodIdx];
    const available = getAvailableTransports(food.origin_country, destination.country || 'India');
    // Use default transport if available, otherwise fallback to first available
    ing.transport = available.includes(food.default_transport) ? food.default_transport : available[0];
  }
  renderIngredients();
}

function updateWeight(id, val) {
  const ing = ingredients.find(i=>i.id===id);
  if (ing) ing.weightKg = Math.max(0.01, parseFloat(val)||1);
}

function updateTransport(id, val) {
  const ing = ingredients.find(i=>i.id===id);
  if (ing) ing.transport = val;
  renderIngredients();
}

function renderIngredients() {
  const list = document.getElementById('ingList');
  document.getElementById('ingCount').textContent = `${ingredients.length} item${ingredients.length!==1?'s':''}`;

  if (ingredients.length===0) {
    list.innerHTML = `<div class="empty-state"><span class="empty-icon">🥦</span><div class="empty-title">No ingredients yet</div><div class="empty-text">Click "Add ingredient" to start tracking your meal's carbon footprint.</div></div>`;
    return;
  }

  list.innerHTML = ingredients.map(ing => {
    const food = FOOD_DATA[ing.foodIdx];
    const dist = Math.round(haversine(food.production_lat, food.production_lng, destination.lat, destination.lng));
    const co2 = calcEmissions(dist, ing.weightKg, ing.transport, food.carbon_factor);
    const foodOptions = FOOD_DATA.map((f,i)=>`<option value="${i}"${i===ing.foodIdx?' selected':''}>${f.ingredient}</option>`).join('');
    return `<div class="ing-item">
      <div class="ing-top">
        <select class="ing-select" onchange="updateFood(${ing.id},this.value)">${foodOptions}</select>
        <button class="ing-del" onclick="removeIngredient(${ing.id})">×</button>
      </div>
      <div class="ing-fields">
        <div><div class="field-label">Weight (kg)</div><input class="field-input" type="number" min="0.01" step="0.1" value="${ing.weightKg}" onchange="updateWeight(${ing.id},this.value)"></div>
        <div><div class="field-label">Transport</div><select class="field-select" onchange="updateTransport(${ing.id},this.value)">
        ${(()=>{
          const food = FOOD_DATA[ing.foodIdx];
          const available = getAvailableTransports(food.origin_country, destination.country || 'India');
          return available.map(t=>`<option value="${t}"${t===ing.transport?' selected':''}>${TRANSPORT_EMOJI[t]} ${t}</option>`).join('');
        })()}</select></div>
      </div>
      <div class="ing-result-row">
        <div class="ing-origin"><span>${food.origin_country}</span><span class="transport-pill ${TP_CLASS[ing.transport]}">${ing.transport}</span></div>
        <div class="ing-metrics">
          <div class="ing-metric"><div class="ing-metric-val">${dist.toLocaleString()} km</div><div class="ing-metric-lbl">distance</div></div>
          <div class="ing-metric"><div class="ing-metric-val" style="color:${co2>1?'var(--neon-pink)':'var(--neon-green)'}">${co2.toFixed(3)}</div><div class="ing-metric-lbl">kg CO₂</div></div>
        </div>
      </div>
    </div>`;
  }).join('');
}

// ─────────────────────────────────────────
// MAIN RECALCULATION
// ─────────────────────────────────────────
function recalcAll() {
  let totDist=0, totCO2=0;
  const byTransport = {};
  const airIngredients = [];

  ingredients.forEach(ing => {
    const food = FOOD_DATA[ing.foodIdx];
    const dist = haversine(food.production_lat, food.production_lng, destination.lat, destination.lng);
    const co2 = calcEmissions(dist, ing.weightKg, ing.transport, food.carbon_factor);
    totDist += dist; totCO2 += co2;
    byTransport[ing.transport] = (byTransport[ing.transport]||0) + co2;
    if (ing.transport==='Air' && food.alternative) airIngredients.push({name:food.ingredient, alt:food.alternative, co2});
  });

  document.getElementById('totDist').textContent = Math.round(totDist).toLocaleString();
  document.getElementById('totCO2').textContent = totCO2.toFixed(2);
  document.getElementById('totIng').textContent = ingredients.length;

  const pct = Math.min((totCO2/20)*100, 100);
  const fill = document.getElementById('impactFill');
  fill.style.width = pct+'%';
  fill.style.background = pct>70?'var(--neon-pink)':pct>35?'var(--neon-yellow)':'var(--neon-green)';
  document.getElementById('impactLabel').textContent = totCO2.toFixed(2)+' kg CO₂';

  // Breakdown bars
  const bb = document.getElementById('breakdownBars');
  if (!Object.keys(byTransport).length) {
    bb.innerHTML = '<div style="font-size:13px;color:var(--text-muted);text-align:center;padding:12px">Add ingredients to see breakdown</div>';
  } else {
    const maxVal = Math.max(...Object.values(byTransport));
    bb.innerHTML = Object.entries(byTransport).map(([t,val])=>`
      <div class="breakdown-row">
        <div class="br-label">${TRANSPORT_EMOJI[t]} ${t}</div>
        <div class="br-track"><div class="br-fill" style="width:${maxVal>0?(val/maxVal*100).toFixed(1):0}%;background:${TC[t]};box-shadow:0 0 8px ${TC[t]}88"></div></div>
        <div class="br-val">${val.toFixed(2)} kg</div>
      </div>
    `).join('');
  }

  // Alternatives
  const altCard = document.getElementById('altCard');
  if (airIngredients.length>0) {
    altCard.style.display='block';
    document.getElementById('altList').innerHTML = airIngredients.map(a=>`
      <div class="alt-item">
        <span class="alt-from">${a.name}</span>
        <span class="alt-arrow">→</span>
        <span class="alt-to">${a.alt}</span>
        <span class="alt-save">Air freight</span>
      </div>
    `).join('');
  } else {
    altCard.style.display='none';
  }

  // Environmental equivalents
  updateEquivalents(totCO2);

  updateMap();
}

// ─────────────────────────────────────────
// ENVIRONMENTAL EQUIVALENTS
// Convert CO₂ kg into relatable real-world units
// ─────────────────────────────────────────
function updateEquivalents(totCO2) {
  // 1 km driving petrol car ≈ 0.192 kg CO₂
  const carKm = (totCO2 / 0.192).toFixed(1);
  // Average tree absorbs ≈ 21 kg CO₂/year
  const trees = (totCO2 / 21).toFixed(2);
  // 60W bulb for 1 hour ≈ 0.06 kWh → 0.0233 kg CO₂
  const bulbHrs = Math.round(totCO2 / 0.0233);
  // Smartphone charge ≈ 0.008 kg CO₂
  const phones = Math.round(totCO2 / 0.008);

  if (totCO2 <= 0) {
    ['eqCar','eqTrees','eqBulb','eqPhone'].forEach(id=>{
      document.getElementById(id).textContent = '—';
    });
    return;
  }

  document.getElementById('eqCar').textContent = carKm + ' km';
  document.getElementById('eqTrees').textContent = trees;
  document.getElementById('eqBulb').textContent = bulbHrs.toLocaleString() + ' hrs';
  document.getElementById('eqPhone').textContent = phones.toLocaleString();
}

// ─────────────────────────────────────────
// COMPARISON CHART (Chart.js)
// Shows local vs imported food CO₂ per kg
// ─────────────────────────────────────────
function buildComparisonChart() {
  const ctx = document.getElementById('comparisonChart').getContext('2d');

  // Representative comparison: same food, local vs. air-imported, 1 kg to Mumbai
  const comparisons = [
    {label:'Rice\n(India, Road)', co2: haversine(22,82,19.076,72.877) * (1/1000) * 0.096, color:'#00ff88', type:'local'},
    {label:'Avocado\n(Mexico, Air)', co2: haversine(19.5,-99.1,19.076,72.877) * (1/1000) * 0.602, color:'#ff00aa', type:'import'},
    {label:'Banana\n(India, Road)', co2: haversine(11,77,19.076,72.877) * (1/1000) * 0.096, color:'#00ff88', type:'local'},
    {label:'Blueberries\n(USA, Air)', co2: haversine(45.5,-122.7,19.076,72.877) * (1/1000) * 0.602, color:'#ff00aa', type:'import'},
    {label:'Coffee\n(Brazil, Sea)', co2: haversine(-14.2,-51.9,19.076,72.877) * (1/1000) * 0.008, color:'#00f5ff', type:'sea'},
    {label:'Salmon\n(Norway, Air)', co2: haversine(60.5,8.5,19.076,72.877) * (1/1000) * 0.602, color:'#ff00aa', type:'import'},
    {label:'Tomato\n(India, Road)', co2: haversine(14,76,19.076,72.877) * (1/1000) * 0.096, color:'#00ff88', type:'local'},
    {label:'Asparagus\n(Peru, Air)', co2: haversine(-9.2,-75,19.076,72.877) * (1/1000) * 0.602, color:'#ff00aa', type:'import'},
  ];

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: comparisons.map(c=>c.label),
      datasets: [{
        label: 'CO₂ emissions (kg per 1 kg food)',
        data: comparisons.map(c=>+c.co2.toFixed(4)),
        backgroundColor: comparisons.map(c=>c.color+'55'),
        borderColor: comparisons.map(c=>c.color),
        borderWidth: 1.5,
        borderRadius: 3,
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: 'rgba(10,10,26,0.95)',
          borderColor: 'rgba(0,245,255,0.3)',
          borderWidth: 1,
          titleColor: '#00f5ff',
          bodyColor: '#e0e8ff',
          padding: 12,
          callbacks: {
            label: ctx => `${ctx.parsed.y.toFixed(4)} kg CO₂ per kg of food`
          }
        }
      },
      scales: {
        x: {
          grid: { color: 'rgba(0,245,255,0.05)' },
          ticks: {
            color: '#6a7a9a',
            font: { family: "'Share Tech Mono', monospace", size: 11 },
            maxRotation: 0
          }
        },
        y: {
          grid: { color: 'rgba(0,245,255,0.06)' },
          ticks: {
            color: '#6a7a9a',
            font: { family: "'Share Tech Mono', monospace", size: 11 },
            callback: v => v.toFixed(3) + ' kg'
          },
          title: {
            display: true,
            text: 'kg CO₂ per kg of food',
            color: '#6a7a9a',
            font: { family: "'Share Tech Mono', monospace", size: 11 }
          }
        }
      }
    }
  });
}

// ─────────────────────────────────────────
// FAQ
// ─────────────────────────────────────────
function toggleFaq(btn) {
  const item = btn.closest('.faq-item');
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(i=>i.classList.remove('open'));
  document.querySelectorAll('.faq-chip').forEach(c=>c.classList.remove('active'));
  if (!isOpen) {
    item.classList.add('open');
    const idx = item.dataset.index;
    const chip = document.querySelector(`.faq-chip[onclick*="openFaq(${idx},"]`);
    if (chip) chip.classList.add('active');
  }
}

function openFaq(index, chipEl) {
  document.querySelectorAll('.faq-item').forEach(i=>i.classList.remove('open'));
  document.querySelectorAll('.faq-chip').forEach(c=>c.classList.remove('active'));
  const item = document.querySelector(`.faq-item[data-index="${index}"]`);
  if (item) { item.classList.add('open'); item.scrollIntoView({behavior:'smooth', block:'nearest'}); }
  if (chipEl) chipEl.classList.add('active');
}

// ─────────────────────────────────────────
// CHATBOT (rule-based)
// ─────────────────────────────────────────
const BOT_ANSWERS = {
  "What are food miles?": "🌍 <strong>Food miles</strong> are the total distance food travels from farm to your plate. Coined by Professor Tim Lang in the 1990s, the concept highlights the hidden carbon cost in our food system. A Mexican avocado travels ~13,500 km to Mumbai — each kilometre burning fuel and releasing CO₂.",
  "How does this calculator work?": "⚙️ The calculator works in 3 steps:<br>1. You select your <strong>destination city</strong><br>2. Add <strong>ingredients</strong> with weights and transport mode<br>3. It computes distance using the <strong>Haversine formula</strong>, then multiplies by DEFRA carbon factors to get CO₂ emissions. Results show on an interactive map!",
  "Why is CO₂ harmful?": "💨 CO₂ is a <strong>greenhouse gas</strong> that traps heat in Earth's atmosphere. Higher CO₂ levels cause global temperatures to rise, leading to melting ice caps, rising sea levels, extreme weather events, and ecosystem collapse. Food transport contributes ~6% of global greenhouse gas emissions.",
  "Which transport is most eco-friendly?": "🚢 <strong>Sea freight</strong> is by far the greenest transport mode — emitting just 0.008 kg CO₂ per tonne·km. That's 75× less than air freight (0.602 kg). Rail (0.028) and road (0.096) fall in between. Always choose sea-shipped imports over air-freighted ones!",
  "How can I reduce my food miles?": "🌱 Here are the top eco-tips:<br>• <strong>Buy local</strong> — choose produce from your region<br>• <strong>Eat seasonally</strong> — seasonal foods don't need air freight<br>• <strong>Swap exotic imports</strong> — replace avocados with mangoes, blueberries with Jamun<br>• <strong>Choose sea-shipped</strong> over air-freighted imports<br>• <strong>Reduce waste</strong> — wasted food wastes its carbon cost too!"
};

function toggleChat() {
  const win = document.getElementById('chatWindow');
  win.classList.toggle('open');
}

function askBot(question) {
  const msgs = document.getElementById('chatMessages');
  // User message
  const uMsg = document.createElement('div');
  uMsg.className = 'chat-msg user';
  uMsg.textContent = question;
  msgs.appendChild(uMsg);

  // Bot answer (with slight delay for realism)
  setTimeout(() => {
    const bMsg = document.createElement('div');
    bMsg.className = 'chat-msg bot';
    bMsg.innerHTML = BOT_ANSWERS[question] || "🤔 I'm not sure about that. Try the FAQ section below for more answers!";
    msgs.appendChild(bMsg);
    msgs.scrollTop = msgs.scrollHeight;
  }, 400);

  msgs.scrollTop = msgs.scrollHeight;
}

// ─────────────────────────────────────────
// MOBILE NAV TOGGLE
// ─────────────────────────────────────────
function toggleMobileNav() {
  document.getElementById('navLinks').classList.toggle('open');
}

// Close mobile nav on link click
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('navLinks').classList.remove('open');
  });
});

// ─────────────────────────────────────────
// INIT
// ─────────────────────────────────────────
initMap();
renderIngredients();
updateEquivalents(0);
buildComparisonChart();

// Reset summary to zeroes
document.getElementById('totDist').textContent = '0';
document.getElementById('totCO2').textContent = '0.00';
document.getElementById('totIng').textContent = '0';
document.getElementById('impactFill').style.width = '0%';
document.getElementById('impactLabel').textContent = '0.00 kg CO₂';
document.getElementById('breakdownBars').innerHTML = '<div style="font-size:13px;color:var(--text-muted);text-align:center;padding:12px">Add ingredients to see breakdown</div>';
document.getElementById('altCard').style.display = 'none';
updateMap();

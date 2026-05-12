/* ═══════════════════════════════════════════════════
   ECOMILES · storage.js
   Features:
     1. Meal history (localStorage)
     2. Carbon score system
     3. Gamification badges
     4. Eco facts carousel
     5. Back-to-top button
═══════════════════════════════════════════════════ */

/* ═══════════════════════════════════════════════════
   1. MEAL HISTORY SYSTEM
═══════════════════════════════════════════════════ */
const History = (() => {
  const KEY      = 'ecomiles-history';
  const MAX_ITEMS = 20;

  function getAll() {
    try { return JSON.parse(localStorage.getItem(KEY) || '[]'); }
    catch { return []; }
  }

  function save(entry) {
    const all = getAll();
    all.unshift(entry);           // newest first
    if (all.length > MAX_ITEMS) all.length = MAX_ITEMS;
    localStorage.setItem(KEY, JSON.stringify(all));
    renderHistoryPage();
    updateWeeklySummary();
  }

  function clear() {
    if (!confirm('Clear all saved meal history?')) return;
    localStorage.removeItem(KEY);
    renderHistoryPage();
    updateWeeklySummary();
  }
  window.clearHistory = clear;

  function updateWeeklySummary() {
    const all = getAll();
    const now = Date.now();
    const week = all.filter(e => now - e.timestamp < 7 * 86400000);
    const total = week.reduce((s, e) => s + e.totalCO2, 0);
    const avg   = week.length ? total / week.length : 0;
    const best  = all.reduce((b, e) => (!b || e.totalCO2 < b.totalCO2) ? e : b, null);

    el('wsCount').textContent = all.length;
    el('wsTotal').textContent = total.toFixed(2);
    el('wsAvg').textContent   = avg.toFixed(2);
    el('wsBest').textContent  = best ? best.totalCO2.toFixed(2) + ' kg' : '—';
  }

  function renderHistoryPage() {
    const list = el('historyList');
    if (!list) return;
    const all  = getAll();

    const clearBtn = el('clearHistoryBtn');
    if (clearBtn) clearBtn.style.display = all.length ? 'flex' : 'none';

    if (!all.length) {
      list.innerHTML = `
        <div class="history-empty">
          <span style="font-size:48px">📭</span>
          <div class="history-empty-title">No meals saved yet</div>
          <div class="history-empty-sub">Calculate a meal and it will appear here automatically</div>
          <button class="hero-cta-btn primary" style="margin-top:20px" onclick="switchPage('calculator')">⚡ Go to Calculator</button>
        </div>`;
      return;
    }

    list.innerHTML = all.map((entry, i) => {
      const date = new Date(entry.timestamp);
      const dateStr = date.toLocaleDateString('en-IN', { day:'numeric', month:'short', year:'numeric' });
      const timeStr = date.toLocaleTimeString('en-IN', { hour:'2-digit', minute:'2-digit' });
      const gradeColor = entry.grade === 'A' ? '#1B5E20' :
                         entry.grade === 'B' ? '#2E7D32' :
                         entry.grade === 'C' ? '#F57F17' :
                         entry.grade === 'D' ? '#BF360C' : '#B71C1C';
      const ings = entry.ingredients.slice(0, 4).map(i => i.name).join(', ')
                 + (entry.ingredients.length > 4 ? ` +${entry.ingredients.length - 4} more` : '');
      return `
        <div class="history-card scroll-reveal" data-reveal-delay="${i * 60}">
          <div class="hc-left">
            <div class="hc-grade" style="background:${gradeColor}22;color:${gradeColor};border-color:${gradeColor}44">${entry.grade}</div>
          </div>
          <div class="hc-body">
            <div class="hc-dest">📍 ${entry.destination}</div>
            <div class="hc-ings">${ings}</div>
            <div class="hc-meta">
              <span>📦 ${entry.ingredients.length} ingredient${entry.ingredients.length !== 1 ? 's' : ''}</span>
              <span>🛣️ ${Math.round(entry.totalDist).toLocaleString()} km</span>
              <span>🕐 ${dateStr} · ${timeStr}</span>
            </div>
          </div>
          <div class="hc-right">
            <div class="hc-co2">${entry.totalCO2.toFixed(3)}</div>
            <div class="hc-unit">kg CO₂</div>
          </div>
        </div>`;
    }).join('');

    // Trigger scroll-reveal
    setTimeout(() => {
      list.querySelectorAll('.scroll-reveal').forEach(el => {
        el.classList.add('sr-init');
        const delay = Number(el.dataset.revealDelay || 0);
        setTimeout(() => el.classList.add('sr-visible'), delay);
      });
    }, 80);
  }

  function init() {
    renderHistoryPage();
    updateWeeklySummary();
  }

  return { save, getAll, init, renderHistoryPage, updateWeeklySummary };
})();


/* ═══════════════════════════════════════════════════
   2. CARBON SCORE SYSTEM
═══════════════════════════════════════════════════ */
const CarbonScore = (() => {
  // Score tiers (lower CO₂ = higher score)
  const TIERS = [
    { max: 0.5,  grade:'A', label:'🌱 Eco Friendly',      color:'#1B5E20', pct: 95 },
    { max: 2.0,  grade:'B', label:'🌿 Low Impact',         color:'#2E7D32', pct: 78 },
    { max: 5.0,  grade:'C', label:'⚡ Moderate Impact',    color:'#F57F17', pct: 55 },
    { max: 12.0, grade:'D', label:'🔥 High Carbon Impact', color:'#BF360C', pct: 30 },
    { max: Infinity, grade:'E', label:'💨 Very High Impact', color:'#B71C1C', pct: 10 },
  ];

  const COMPARISONS = [
    { max: 0.5,  text: 'Your meal is greener than 92% of imported meals worldwide! 🌍' },
    { max: 2.0,  text: 'Your meal emits less than 78% of typical imported food baskets.' },
    { max: 5.0,  text: 'Your meal has moderate impact — try swapping 1 air-freighted item.' },
    { max: 12.0, text: 'Your meal is in the top 35% highest-impact meals. Consider local swaps.' },
    { max: Infinity, text: 'This meal\'s carbon cost is very high — switching transport modes could help significantly.' },
  ];

  const RECS = [
    { max: 0.5,  items: ['Keep choosing local! 🌱', 'Sea freight is your best friend 🚢', 'You\'re on track for Planet Protector badge 🌳'] },
    { max: 2.0,  items: ['Try one more local substitute', 'Prefer road over air for nearby origins', 'Great progress — keep exploring!'] },
    { max: 5.0,  items: ['Check which ingredient emits most', 'Switch any air-freighted item to sea', 'Explore local seasonal alternatives'] },
    { max: 12.0, items: ['Reduce air-freighted items first', 'Local swaps can cut 60–80% of emissions', 'See the Eco Tips page for alternatives 🌿'] },
    { max: Infinity, items: ['Replace top 2 emitters with local options', 'Air freight emits 75× more than sea', 'Check our Food Selector for eco picks'] },
  ];

  function calculate(totalCO2) {
    const tier  = TIERS.find(t => totalCO2 <= t.max) || TIERS[TIERS.length - 1];
    const comp  = COMPARISONS.find(t => totalCO2 <= t.max);
    const recs  = RECS.find(t => totalCO2 <= t.max);

    // Score: 0–100 (log scale)
    const rawScore = Math.max(0, 100 - Math.log1p(totalCO2 * 5) * 22);
    const score    = Math.round(Math.max(0, Math.min(100, rawScore)));

    return { tier, comp: comp?.text, recs: recs?.items || [], score };
  }

  function render(totalCO2) {
    const section = el('carbonScoreSection');
    if (!section) return;
    section.style.display = 'block';

    const { tier, comp, recs, score } = calculate(totalCO2);

    // Grade
    const gradeEl = el('csGrade');
    if (gradeEl) {
      gradeEl.textContent   = tier.grade;
      gradeEl.style.background = tier.color + '22';
      gradeEl.style.color      = tier.color;
      gradeEl.style.borderColor = tier.color + '55';
    }

    // Animated ring
    const ring = el('csRingFill');
    if (ring) {
      const circumference = 314;
      const offset = circumference - (score / 100) * circumference;
      ring.style.stroke = tier.color;
      setTimeout(() => { ring.style.strokeDashoffset = offset; }, 100);
    }

    // Score counter animation
    const scoreEl = el('csScore');
    if (scoreEl) animateCounter(scoreEl, 0, score, 900);

    el('csCategory').textContent  = tier.label;
    el('csCategory').style.color  = tier.color;
    el('csComparison').textContent = comp || '';

    const recsEl = el('csRecs');
    if (recsEl) {
      recsEl.innerHTML = recs.map(r =>
        `<div class="cs-rec-item"><span class="cs-rec-dot" style="background:${tier.color}"></span>${r}</div>`
      ).join('');
    }

    return tier.grade;
  }

  return { calculate, render };
})();


/* ═══════════════════════════════════════════════════
   3. GAMIFICATION BADGES
═══════════════════════════════════════════════════ */
const Badges = (() => {
  const KEY = 'ecomiles-badges';

  const ALL_BADGES = [
    {
      id: 'first_calc',
      icon: '🌱', name: 'Beginner Saver',
      desc: 'Complete your first carbon calculation',
      unlock: (stats) => stats.totalCalcs >= 1,
    },
    {
      id: 'eco_explorer',
      icon: '🌿', name: 'Eco Explorer',
      desc: 'Calculate 5 different meals',
      unlock: (stats) => stats.totalCalcs >= 5,
    },
    {
      id: 'planet_protector',
      icon: '🌳', name: 'Planet Protector',
      desc: 'Achieve an A grade 3 times',
      unlock: (stats) => stats.aGrades >= 3,
    },
    {
      id: 'sustainability_master',
      icon: '♻️', name: 'Sustainability Master',
      desc: 'Use only local ingredients in a meal',
      unlock: (stats) => stats.allLocalMeals >= 1,
    },
    {
      id: 'sea_champion',
      icon: '🚢', name: 'Sea Champion',
      desc: 'Use sea transport for all ingredients in a meal',
      unlock: (stats) => stats.allSeaMeals >= 1,
    },
    {
      id: 'data_wizard',
      icon: '📊', name: 'Data Wizard',
      desc: 'Compare 3 different transport modes',
      unlock: (stats) => stats.transportComparisons >= 3,
    },
  ];

  function getStats() {
    try { return JSON.parse(localStorage.getItem(KEY) || '{}'); }
    catch { return {}; }
  }

  function saveStats(stats) {
    localStorage.setItem(KEY, JSON.stringify(stats));
  }

  function update(calcResult) {
    const stats = getStats();
    stats.totalCalcs           = (stats.totalCalcs || 0) + 1;
    stats.aGrades              = (stats.aGrades || 0) + (calcResult.grade === 'A' ? 1 : 0);
    stats.transportComparisons = (stats.transportComparisons || 0) + calcResult.modesUsed;
    if (calcResult.allLocal) stats.allLocalMeals = (stats.allLocalMeals || 0) + 1;
    if (calcResult.allSea)   stats.allSeaMeals   = (stats.allSeaMeals || 0) + 1;
    stats.unlocked = stats.unlocked || [];

    const newlyUnlocked = [];
    ALL_BADGES.forEach(badge => {
      if (!stats.unlocked.includes(badge.id) && badge.unlock(stats)) {
        stats.unlocked.push(badge.id);
        newlyUnlocked.push(badge);
      }
    });

    saveStats(stats);
    render(stats);

    // Show unlock animations
    newlyUnlocked.forEach((badge, i) => {
      setTimeout(() => showBadgeUnlock(badge), i * 600);
    });
  }

  function render(stats) {
    const section = el('badgesSection');
    const grid    = el('badgesGrid');
    if (!section || !grid) return;

    const s = stats || getStats();
    const unlocked = s.unlocked || [];

    if (unlocked.length === 0 && (s.totalCalcs || 0) === 0) {
      section.style.display = 'none';
      return;
    }
    section.style.display = 'block';

    grid.innerHTML = ALL_BADGES.map(badge => {
      const isUnlocked = unlocked.includes(badge.id);
      return `
        <div class="badge-item ${isUnlocked ? 'badge-unlocked' : 'badge-locked'}"
             title="${badge.desc}">
          <div class="badge-icon">${badge.icon}</div>
          <div class="badge-name">${badge.name}</div>
          <div class="badge-desc">${badge.desc}</div>
          ${isUnlocked ? '<div class="badge-check">✓</div>' : '<div class="badge-lock">🔒</div>'}
        </div>`;
    }).join('');
  }

  function showBadgeUnlock(badge) {
    const popup = document.createElement('div');
    popup.className = 'badge-popup';
    popup.innerHTML = `
      <div class="badge-popup-icon">${badge.icon}</div>
      <div class="badge-popup-title">Badge Unlocked!</div>
      <div class="badge-popup-name">${badge.name}</div>
      <div class="badge-popup-desc">${badge.desc}</div>`;
    document.body.appendChild(popup);
    requestAnimationFrame(() => popup.classList.add('badge-popup-in'));
    setTimeout(() => {
      popup.classList.add('badge-popup-out');
      setTimeout(() => popup.remove(), 500);
    }, 3200);
  }

  function init() {
    render();
  }

  return { update, render, init, getStats };
})();


/* ═══════════════════════════════════════════════════
   4. ECO FACTS CAROUSEL
═══════════════════════════════════════════════════ */
const EcoFacts = (() => {
  const facts = [
    '🌍 Air freight emits 75× more CO₂ per tonne·km than sea shipping.',
    '🥑 An avocado from Mexico to Mumbai travels ~13,500 km by air.',
    '🚢 Sea freight carries 80% of global trade at just 2.5% of transport CO₂.',
    '🌱 Buying seasonal local produce can cut food transport emissions by 90%.',
    '♻️ Food waste generates ~3.3 billion tonnes of CO₂ per year globally.',
    '🥗 A plant-based meal emits 50% less CO₂ than a meat-heavy one.',
    '🍃 Switching one air-freighted item a week saves ~50 kg CO₂ per year.',
    '🌾 Indian staples like dal, rice and roti have among the lowest food miles.',
    '📦 Packaging accounts for ~5% of total food system emissions.',
    '🌡️ The food system contributes ~26% of global greenhouse gas emissions.',
  ];

  let idx = 0;
  let timer = null;

  function init() {
    const bar   = el('ecoFactsBar');
    const track = el('ecoFactsTrack');
    if (!bar || !track) return;

    render(track);
    timer = setInterval(() => {
      idx = (idx + 1) % facts.length;
      render(track);
    }, 5000);
  }

  function render(track) {
    track.style.opacity = '0';
    track.style.transform = 'translateY(8px)';
    setTimeout(() => {
      track.textContent = facts[idx];
      track.style.opacity = '1';
      track.style.transform = 'translateY(0)';
    }, 200);
  }

  return { init };
})();


/* ═══════════════════════════════════════════════════
   5. BACK-TO-TOP BUTTON
═══════════════════════════════════════════════════ */
function initBackToTop() {
  const btn = el('backToTop');
  if (!btn) return;
  window.addEventListener('scroll', () => {
    btn.classList.toggle('btt-visible', window.scrollY > 300);
  }, { passive: true });
}


/* ═══════════════════════════════════════════════════
   HOOK INTO MAIN.JS recalcAll
   Called after every calculation to save + score.
═══════════════════════════════════════════════════ */
function hookCalculatorResults() {
  // Override calculateWithLoading to also run storage hooks
  const origCalc = window.calculateWithLoading;
  if (!origCalc || origCalc._hooked) return;

  window.calculateWithLoading = function() {
    origCalc.apply(this, arguments);

    // After a delay (after recalcAll runs), extract results and save
    setTimeout(saveCurrentMeal, 1200);
  };
  window.calculateWithLoading._hooked = true;
}

function saveCurrentMeal() {
  // Read current state from the global `ingredients` and `destination` vars
  if (typeof ingredients === 'undefined' || !ingredients.length) return;
  if (typeof FOOD_DATA   === 'undefined') return;

  let totalCO2 = 0, totalDist = 0;
  const ingDetails = [];
  let modesUsed = new Set();
  let allLocal = true, allSea = true;

  ingredients.forEach(ing => {
    const food = FOOD_DATA[ing.foodIdx];
    if (!food) return;
    const dist = typeof haversine === 'function'
      ? haversine(food.production_lat, food.production_lng, destination.lat, destination.lng)
      : 0;
    const co2 = typeof calcEmissions === 'function'
      ? calcEmissions(dist, ing.weightKg || 1, ing.transport, food.carbon_factor)
      : 0;
    totalCO2  += co2;
    totalDist += dist;
    modesUsed.add(ing.transport);
    if (dist > 200)          allLocal = false;
    if (ing.transport !== 'Sea') allSea = false;
    ingDetails.push({ name: food.ingredient, transport: ing.transport, co2: +co2.toFixed(4) });
  });

  const grade = CarbonScore.render(totalCO2);

  const entry = {
    timestamp   : Date.now(),
    destination : destination.name,
    totalCO2    : +totalCO2.toFixed(4),
    totalDist   : +totalDist.toFixed(0),
    grade       : grade || 'C',
    ingredients : ingDetails,
  };

  History.save(entry);

  Badges.update({
    grade,
    modesUsed : modesUsed.size,
    allLocal,
    allSea,
  });
}


/* ═══════════════════════════════════════════════════
   UTILITY
═══════════════════════════════════════════════════ */
function el(id) { return document.getElementById(id); }

function animateCounter(element, from, to, duration) {
  const start  = performance.now();
  const update = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    const ease     = 1 - Math.pow(1 - progress, 3);
    element.textContent = Math.round(from + (to - from) * ease);
    if (progress < 1) requestAnimationFrame(update);
  };
  requestAnimationFrame(update);
}


/* ═══════════════════════════════════════════════════
   BOOT
═══════════════════════════════════════════════════ */
function bootStorage() {
  History.init();
  Badges.init();
  EcoFacts.init();
  initBackToTop();

  // Hook calculator after main.js is fully ready
  setTimeout(hookCalculatorResults, 300);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bootStorage);
} else {
  bootStorage();
}

window.History      = History;
window.CarbonScore  = CarbonScore;
window.Badges       = Badges;

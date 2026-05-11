/* ═══════════════════════════════════════════════════
   ECOMILES · theme.js
   Dark / Light mode toggle with localStorage
   persistence and animated chart updates.
═══════════════════════════════════════════════════ */

const Theme = (() => {
  const STORAGE_KEY = 'ecomiles-theme';
  const DARK  = 'dark';
  const LIGHT = 'light';

  // Chart colour sets for each theme
  const CHART_COLORS = {
    light: {
      gridColor:   'rgba(46,125,50,0.08)',
      tickColor:   '#5D6B5A',
      tooltipBg:   'rgba(255,248,238,0.97)',
      tooltipBorder:'rgba(46,125,50,0.2)',
      tooltipTitle:'#1B5E20',
      tooltipBody: '#1B1B1B',
    },
    dark: {
      gridColor:   'rgba(34,197,94,0.1)',
      tickColor:   '#94A3B8',
      tooltipBg:   'rgba(30,41,59,0.97)',
      tooltipBorder:'rgba(34,197,94,0.25)',
      tooltipTitle:'#4ADE80',
      tooltipBody: '#F8FAFC',
    },
  };

  /* ── Apply theme to DOM ── */
  function apply(mode) {
    document.documentElement.setAttribute('data-theme', mode);
    const btn = document.getElementById('themeToggle');
    if (btn) {
      btn.textContent = mode === DARK ? '☀️' : '🌙';
      btn.title       = mode === DARK ? 'Switch to light mode' : 'Switch to dark mode';
      btn.classList.toggle('dark-active', mode === DARK);
    }
    localStorage.setItem(STORAGE_KEY, mode);

    // Update any Chart.js instances that are currently rendered
    setTimeout(updateChartThemes, 50);
  }

  /* ── Toggle between modes ── */
  function toggle() {
    const current = document.documentElement.getAttribute('data-theme') || LIGHT;
    apply(current === DARK ? LIGHT : DARK);
  }

  /* ── Read saved preference on load ── */
  function init() {
    const saved = localStorage.getItem(STORAGE_KEY);
    apply(saved || LIGHT);

    const btn = document.getElementById('themeToggle');
    if (btn) btn.addEventListener('click', toggle);
  }

  /* ── Update Chart.js chart colours for current theme ── */
  function updateChartThemes() {
    const mode = document.documentElement.getAttribute('data-theme') || LIGHT;
    const c    = CHART_COLORS[mode];

    if (!window.Chart) return;

    // Update Chart.js global defaults
    Chart.defaults.color            = c.tickColor;
    Chart.defaults.borderColor      = c.gridColor;
    Chart.defaults.plugins.tooltip.backgroundColor = c.tooltipBg;
    Chart.defaults.plugins.tooltip.borderColor     = c.tooltipBorder;
    Chart.defaults.plugins.tooltip.titleColor      = c.tooltipTitle;
    Chart.defaults.plugins.tooltip.bodyColor       = c.tooltipBody;

    // Re-render any existing charts
    Object.values(Chart.instances || {}).forEach(chart => {
      if (!chart) return;
      try {
        if (chart.options.scales) {
          Object.values(chart.options.scales).forEach(scale => {
            if (scale.grid)  scale.grid.color   = c.gridColor;
            if (scale.ticks) scale.ticks.color  = c.tickColor;
          });
        }
        chart.update('none'); // update without animation for speed
      } catch (_) {}
    });
  }

  /* ── Expose current mode ── */
  function isDark() {
    return document.documentElement.getAttribute('data-theme') === DARK;
  }

  return { init, toggle, apply, isDark, updateChartThemes };
})();

/* Boot on DOM ready */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', Theme.init);
} else {
  Theme.init();
}

window.Theme = Theme;

const THEMES = {
  blue: {
    name: 'Ocean Blue',
    accent: '#3b82f6',
    accentDark: '#1d4ed8',
    accentMid: '#2563eb',
    accentLight: '#93c5fd',
    accentPale: '#dbeafe',
    bg: '#0a0f1e',
    bgCard: '#0d1b35',
    text: '#f0f6ff',
  },
  red: {
    name: 'Crimson',
    accent: '#ef4444',
    accentDark: '#991b1b',
    accentMid: '#dc2626',
    accentLight: '#fca5a5',
    accentPale: '#fee2e2',
    bg: '#1a0a0a',
    bgCard: '#2d0f0f',
    text: '#fff5f5',
  },
  purple: {
    name: 'Violet',
    accent: '#a855f7',
    accentDark: '#6b21a8',
    accentMid: '#9333ea',
    accentLight: '#d8b4fe',
    accentPale: '#f3e8ff',
    bg: '#0f0a1e',
    bgCard: '#1a0d35',
    text: '#faf5ff',
  },
  orange: {
    name: 'Ember',
    accent: '#f97316',
    accentDark: '#c2410c',
    accentMid: '#ea580c',
    accentLight: '#fdba74',
    accentPale: '#ffedd5',
    bg: '#1a0f06',
    bgCard: '#2d1a08',
    text: '#fff7ed',
  },
  black: {
    name: 'Obsidian',
    accent: '#a1a1aa',
    accentDark: '#3f3f46',
    accentMid: '#71717a',
    accentLight: '#d4d4d8',
    accentPale: '#f4f4f5',
    bg: '#09090b',
    bgCard: '#18181b',
    text: '#fafafa',
  },
  green: {
    name: 'Forest',
    accent: '#22c55e',
    accentDark: '#15803d',
    accentMid: '#16a34a',
    accentLight: '#86efac',
    accentPale: '#dcfce7',
    bg: '#071a0e',
    bgCard: '#0d2b18',
    text: '#f0fdf4',
  },
  yellow: {
    name: 'Solar',
    accent: '#eab308',
    accentDark: '#a16207',
    accentMid: '#ca8a04',
    accentLight: '#fde047',
    accentPale: '#fefce8',
    bg: '#181200',
    bgCard: '#2a1e00',
    text: '#fefce8',
  },
  pink: {
    name: 'Rose',
    accent: '#ec4899',
    accentDark: '#9d174d',
    accentMid: '#db2777',
    accentLight: '#f9a8d4',
    accentPale: '#fce7f3',
    bg: '#1a0812',
    bgCard: '#2d0d1e',
    text: '#fdf2f8',
  },
};

function getTheme() {
  const saved = localStorage.getItem('anchor-theme') || 'blue';
  return THEMES[saved] || THEMES.blue;
}

function setTheme(key) {
  localStorage.setItem('anchor-theme', key);
  applyTheme(THEMES[key]);
}

function applyTheme(t) {
  const r = document.documentElement.style;
  r.setProperty('--accent', t.accent);
  r.setProperty('--accent-dark', t.accentDark);
  r.setProperty('--accent-mid', t.accentMid);
  r.setProperty('--accent-light', t.accentLight);
  r.setProperty('--accent-pale', t.accentPale);
  r.setProperty('--bg', t.bg);
  r.setProperty('--bg-card', t.bgCard);
  r.setProperty('--text', t.text);
}

function initTheme() {
  applyTheme(getTheme());
}
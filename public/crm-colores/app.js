// =========================================================================
// LÓGICA DEL LABORATORIO DE COLOR — CRM VECTORIAL
// =========================================================================

const DEFAULT_TOKENS = {
  // Barras y navegación
  '--marco-lateral-bg': '#f7faff',
  '--azul-lateral': '#3b5ede',
  '--azul-lateral-fin': '#cfdefe',
  '--menu-activo-bg': '#e4edff',
  '--menu-activo-texto': '#142543',
  '--menu-inactivo-texto': '#ffffff',
  '--barra-sup-inicio': '#dce9ff',
  '--barra-sup-medio': '#ecf2fb',
  '--barra-sup-linea': '#5b7ee6',

  // Fondos, tarjetas y bordes
  '--lienzo-exterior': '#e3ecf8',
  '--fondo': '#f5f8fd',
  '--card': '#ffffff',
  '--superficie-tenue': '#eef3fa',
  '--borde': '#e0e7f2',
  '--borde-campo': '#c3d1e6',

  // Tarjeta destacada (KPI)
  '--azul-800': '#243faa',
  '--azul-500': '#3a62db',
  '--destacado-texto': '#ffffff',

  // Botones y acentos
  '--azul-600': '#284fc5',
  '--azul-700': '#2243a8',
  '--boton-texto': '#ffffff',
  '--azul-50': '#eaf1ff',

  // Textos
  '--tinta-900': '#142543',
  '--tinta-600': '#536580',

  // Etiquetas de estado
  '--ambar-fondo': '#fbedd9',
  '--ambar-texto': '#784c16',
  '--azul-estado-fondo': '#e4edff',
  '--azul-estado-texto': '#284e9c',
  '--verde-fondo': '#e3f3ec',
  '--verde-texto': '#226650',
  '--morado-fondo': '#ece9fb',
  '--morado-texto': '#51408a',
  '--rojo-fondo': '#f8e8ea',
  '--rojo-texto': '#8b3044',

  // Avisos y peligro
  '--exito-fondo': '#e9f5ee',
  '--exito-texto': '#1f634b',
  '--error-fondo': '#fef0ef',
  '--error-texto': '#852f2c',
  '--peligro': '#a3302d'
};

const TOKEN_GROUPS = [
  {
    id: 'barras',
    title: '1. Barras (Lateral y Superior)',
    items: [
      { key: '--azul-lateral', label: 'Barra lateral (color superior)' },
      { key: '--azul-lateral-fin', label: 'Barra lateral (degradado inferior)' },
      { key: '--marco-lateral-bg', label: 'Columna exterior lateral' },
      { key: '--menu-activo-bg', label: 'Botón menú activo (fondo)' },
      { key: '--menu-activo-texto', label: 'Botón menú activo (texto)' },
      { key: '--menu-inactivo-texto', label: 'Botones menú inactivos (texto)' },
      { key: '--barra-sup-inicio', label: 'Barra superior (izquierda)' },
      { key: '--barra-sup-medio', label: 'Barra superior (centro)' },
      { key: '--barra-sup-linea', label: 'Línea inferior ruta activa' }
    ]
  },
  {
    id: 'destacada',
    title: '2. Tarjeta KPI Destacada',
    items: [
      { key: '--azul-800', label: 'Degradado inicio (oscuro)' },
      { key: '--azul-500', label: 'Degradado fin (brillante)' },
      { key: '--destacado-texto', label: 'Texto sobre tarjeta destacada' }
    ]
  },
  {
    id: 'botones',
    title: '3. Botones, Enlaces y Cajas Ícono',
    items: [
      { key: '--azul-600', label: 'Botón primario y enlaces' },
      { key: '--azul-700', label: 'Botón primario (al pasar mouse)' },
      { key: '--boton-texto', label: 'Texto botón primario' },
      { key: '--azul-50', label: 'Cajas de ícono y pestaña suave' }
    ]
  },
  {
    id: 'fondos',
    title: '4. Fondos, Tarjetas, Tablas y Bordes',
    items: [
      { key: '--fondo', label: 'Fondo interior de la página CRM' },
      { key: '--card', label: 'Fondo de tarjetas y formularios' },
      { key: '--superficie-tenue', label: 'Cabecera de tablas / cargando' },
      { key: '--borde', label: 'Bordes de tarjetas y divisores' },
      { key: '--borde-campo', label: 'Bordes de inputs y selectores' },
      { key: '--lienzo-exterior', label: 'Fondo exterior de presentación' }
    ]
  },
  {
    id: 'textos',
    title: '5. Tipografía / Textos',
    items: [
      { key: '--tinta-900', label: 'Títulos y texto principal' },
      { key: '--tinta-600', label: 'Subtítulos y texto secundario' }
    ]
  },
  {
    id: 'etiquetas',
    title: '6. Etiquetas / Estados (Badges)',
    items: [
      { key: '--ambar-fondo', label: 'Pendiente / Borrador (fondo)' },
      { key: '--ambar-texto', label: 'Pendiente / Borrador (texto)' },
      { key: '--azul-estado-fondo', label: 'En proceso / En plazo (fondo)' },
      { key: '--azul-estado-texto', label: 'En proceso / En plazo (texto)' },
      { key: '--verde-fondo', label: 'Resuelta / Publicada (fondo)' },
      { key: '--verde-texto', label: 'Resuelta / Publicada (texto)' },
      { key: '--morado-fondo', label: 'Facturada (fondo)' },
      { key: '--morado-texto', label: 'Facturada (texto)' },
      { key: '--rojo-fondo', label: 'No activado (fondo)' },
      { key: '--rojo-texto', label: 'No activado (texto)' }
    ]
  },
  {
    id: 'avisos',
    title: '7. Avisos y Acción Eliminar',
    items: [
      { key: '--exito-fondo', label: 'Aviso confirmación (fondo)' },
      { key: '--exito-texto', label: 'Aviso confirmación (texto)' },
      { key: '--error-fondo', label: 'Aviso error / campo inválido (fondo)' },
      { key: '--error-texto', label: 'Aviso error (texto)' },
      { key: '--peligro', label: 'Botón destructivo / Eliminar' }
    ]
  }
];

const PRESETS = [
  {
    id: 'original',
    name: 'Contraste Azul (Actual)',
    swatches: ['#3b5ede', '#284fc5', '#f5f8fd'],
    values: { ...DEFAULT_TOKENS }
  },
  {
    id: 'navy',
    name: 'Azul Marino Ejecutivo',
    swatches: ['#163357', '#1d4e89', '#f4f7fb'],
    values: {
      ...DEFAULT_TOKENS,
      '--marco-lateral-bg': '#f4f7fb',
      '--azul-lateral': '#163357',
      '--azul-lateral-fin': '#cbd9ec',
      '--menu-activo-bg': '#e3eef9',
      '--menu-activo-texto': '#0f2540',
      '--barra-sup-inicio': '#dae6f5',
      '--barra-sup-medio': '#ebf1f8',
      '--barra-sup-linea': '#1d4e89',
      '--fondo': '#f4f7fb',
      '--tinta-900': '#0f2540',
      '--tinta-600': '#4c627d',
      '--azul-800': '#102845',
      '--azul-500': '#245896',
      '--azul-600': '#1d4e89',
      '--azul-700': '#153b69',
      '--azul-50': '#e6eff9'
    }
  },
  {
    id: 'esmeralda',
    name: 'Esmeralda Inmobiliario',
    swatches: ['#156f5b', '#0f766e', '#f3f9f7'],
    values: {
      ...DEFAULT_TOKENS,
      '--lienzo-exterior': '#dfeee9',
      '--marco-lateral-bg': '#f4faf8',
      '--azul-lateral': '#156f5b',
      '--azul-lateral-fin': '#cdece3',
      '--menu-activo-bg': '#dff5ee',
      '--menu-activo-texto': '#113830',
      '--barra-sup-inicio': '#d7f0e8',
      '--barra-sup-medio': '#eaf6f2',
      '--barra-sup-linea': '#15806a',
      '--fondo': '#f3f9f7',
      '--superficie-tenue': '#e8f3ef',
      '--borde': '#d6e7e1',
      '--borde-campo': '#b5cfc6',
      '--tinta-900': '#113830',
      '--tinta-600': '#496b63',
      '--azul-800': '#0f5244',
      '--azul-500': '#1d8a72',
      '--azul-600': '#137963',
      '--azul-700': '#0e5e4d',
      '--azul-50': '#e4f5ef'
    }
  },
  {
    id: 'indigo',
    name: 'Índigo Moderno',
    swatches: ['#4f46e5', '#4338ca', '#f6f6fd'],
    values: {
      ...DEFAULT_TOKENS,
      '--lienzo-exterior': '#e6e7f9',
      '--marco-lateral-bg': '#f8f8fe',
      '--azul-lateral': '#4f46e5',
      '--azul-lateral-fin': '#dad7fe',
      '--menu-activo-bg': '#e7e5ff',
      '--menu-activo-texto': '#1e1b4b',
      '--barra-sup-inicio': '#e2e0ff',
      '--barra-sup-medio': '#efeffd',
      '--barra-sup-linea': '#6366f1',
      '--fondo': '#f6f6fd',
      '--superficie-tenue': '#eeeefc',
      '--borde': '#e0e0f5',
      '--borde-campo': '#c4c3e3',
      '--tinta-900': '#1e1b4b',
      '--tinta-600': '#57547d',
      '--azul-800': '#3730a3',
      '--azul-500': '#6366f1',
      '--azul-600': '#4338ca',
      '--azul-700': '#3730a3',
      '--azul-50': '#ecebff'
    }
  },
  {
    id: 'grafito',
    name: 'Grafito & Azul Acero',
    swatches: ['#273449', '#2563eb', '#f6f8fa'],
    values: {
      ...DEFAULT_TOKENS,
      '--lienzo-exterior': '#e2e8f0',
      '--marco-lateral-bg': '#f8fafc',
      '--azul-lateral': '#273449',
      '--azul-lateral-fin': '#cbd5e1',
      '--menu-activo-bg': '#ffffff',
      '--menu-activo-texto': '#0f172a',
      '--barra-sup-inicio': '#e2e8f0',
      '--barra-sup-medio': '#f1f5f9',
      '--barra-sup-linea': '#2563eb',
      '--fondo': '#f6f8fa',
      '--superficie-tenue': '#edf2f7',
      '--borde': '#e2e8f0',
      '--borde-campo': '#cbd5e1',
      '--tinta-900': '#0f172a',
      '--tinta-600': '#475569',
      '--azul-800': '#1e293b',
      '--azul-500': '#334155',
      '--azul-600': '#2563eb',
      '--azul-700': '#1d4ed8',
      '--azul-50': '#eff6ff'
    }
  },
  {
    id: 'borgona',
    name: 'Terracota / Corporativo Cálido',
    swatches: ['#8c3b32', '#9a3412', '#fbf8f6'],
    values: {
      ...DEFAULT_TOKENS,
      '--lienzo-exterior': '#efe6e1',
      '--marco-lateral-bg': '#fcf9f7',
      '--azul-lateral': '#8c3b32',
      '--azul-lateral-fin': '#f1d6d1',
      '--menu-activo-bg': '#fbeae7',
      '--menu-activo-texto': '#3b1814',
      '--barra-sup-inicio': '#f5dfd9',
      '--barra-sup-medio': '#faf0ed',
      '--barra-sup-linea': '#9a3412',
      '--fondo': '#fbf8f6',
      '--superficie-tenue': '#f4ece8',
      '--borde': '#e8dcd6',
      '--borde-campo': '#cfbeba',
      '--tinta-900': '#361a16',
      '--tinta-600': '#6e524e',
      '--azul-800': '#6e2820',
      '--azul-500': '#a8473c',
      '--azul-600': '#93372d',
      '--azul-700': '#772b23',
      '--azul-50': '#faece9'
    }
  }
];

const STORAGE_KEY = 'crm_vectorial_color_studio_v1';

let currentTokens = { ...DEFAULT_TOKENS };
let currentScreenIndex = 0;
let currentViewMode = 'both';
let inspectMode = false;
let activePresetId = 'original';

// Utilidades de conversión HSL <-> HEX para el generador armónico de 1 clic
function hexToHsl(hex) {
  let c = hex.replace('#', '');
  if (c.length === 3) c = c.split('').map((x) => x + x).join('');
  const r = parseInt(c.slice(0, 2), 16) / 255;
  const g = parseInt(c.slice(2, 4), 16) / 255;
  const b = parseInt(c.slice(4, 6), 16) / 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h = 0, s = 0;
  const l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }
  return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
}

function hslToHex(h, s, l) {
  const s1 = Math.max(0, Math.min(100, s)) / 100;
  const l1 = Math.max(0, Math.min(100, l)) / 100;
  const k = (n) => (n + h / 30) % 12;
  const a = s1 * Math.min(l1, 1 - l1);
  const f = (n) => l1 - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
  const toHex = (x) => Math.round(255 * x).toString(16).padStart(2, '0');
  return `#${toHex(f(0))}${toHex(f(8))}${toHex(f(4))}`;
}

function generateHarmonicPalette(baseHex) {
  const { h, s } = hexToHsl(baseHex);
  const sat = Math.max(35, Math.min(82, s));
  return {
    ...currentTokens,
    '--azul-600': hslToHex(h, sat, 44),
    '--azul-700': hslToHex(h, sat, 36),
    '--azul-800': hslToHex(h, sat, 34),
    '--azul-500': hslToHex(h, Math.min(88, sat + 6), 53),
    '--azul-lateral': hslToHex(h, Math.min(85, sat + 4), 50),
    '--azul-lateral-fin': hslToHex(h, Math.min(92, sat + 10), 90),
    '--marco-lateral-bg': hslToHex(h, 60, 98),
    '--menu-activo-bg': hslToHex(h, 85, 94),
    '--menu-activo-texto': hslToHex(h, 52, 17),
    '--barra-sup-inicio': hslToHex(h, 80, 92),
    '--barra-sup-medio': hslToHex(h, 65, 96),
    '--barra-sup-linea': hslToHex(h, sat, 58),
    '--azul-50': hslToHex(h, 85, 96),
    '--fondo': hslToHex(h, 55, 97),
    '--lienzo-exterior': hslToHex(h, 48, 92),
    '--superficie-tenue': hslToHex(h, 45, 95),
    '--borde': hslToHex(h, 36, 90),
    '--borde-campo': hslToHex(h, 30, 80),
    '--tinta-900': hslToHex(h, 52, 17),
    '--tinta-600': hslToHex(h, 22, 42)
  };
}

// Aplicar variables CSS al documento
function applyTokensToDOM() {
  const root = document.documentElement;
  Object.entries(currentTokens).forEach(([key, val]) => {
    root.style.setProperty(key, val);
  });
  syncControlsValues();
  saveToLocalStorage();
}

function syncControlsValues() {
  document.querySelectorAll('[data-token-picker]').forEach((el) => {
    const key = el.getAttribute('data-token-picker');
    if (currentTokens[key]) el.value = currentTokens[key];
  });
  document.querySelectorAll('[data-token-hex]').forEach((el) => {
    const key = el.getAttribute('data-token-hex');
    if (currentTokens[key] && document.activeElement !== el) {
      el.value = currentTokens[key].toUpperCase();
    }
  });
  document.querySelectorAll('.preset-chip').forEach((btn) => {
    btn.classList.toggle('active', btn.getAttribute('data-preset-id') === activePresetId);
  });
}

// Codificar / decodificar paleta en el hash de la URL para que el superior pueda enviar el enlace
function encodePaletteToHash() {
  const diff = {};
  Object.keys(DEFAULT_TOKENS).forEach((k) => {
    if (currentTokens[k].toLowerCase() !== DEFAULT_TOKENS[k].toLowerCase()) {
      diff[k.replace(/^--/, '')] = currentTokens[k].replace('#', '');
    }
  });
  const screenId = window.CRM_SCREENS[currentScreenIndex]?.id || '01';
  const payload = { s: screenId, c: diff };
  const encoded = btoa(unescape(encodeURIComponent(JSON.stringify(payload))));
  const url = `${window.location.origin}${window.location.pathname}#p=${encoded}`;
  window.history.replaceState(null, '', `#p=${encoded}`);
  return url;
}

function loadFromHashOrStorage() {
  const hash = window.location.hash || '';
  if (hash.startsWith('#p=')) {
    try {
      const raw = decodeURIComponent(escape(atob(hash.slice(3))));
      const parsed = JSON.parse(raw);
      if (parsed && parsed.c) {
        currentTokens = { ...DEFAULT_TOKENS };
        Object.entries(parsed.c).forEach(([shortKey, hexNoHash]) => {
          const fullKey = `--${shortKey}`;
          if (DEFAULT_TOKENS[fullKey] && /^[0-9a-fA-F]{6}$/.test(hexNoHash)) {
            currentTokens[fullKey] = `#${hexNoHash.toLowerCase()}`;
          }
        });
        activePresetId = '';
      }
      if (parsed && parsed.s) {
        const idx = window.CRM_SCREENS.findIndex((x) => x.id === parsed.s);
        if (idx >= 0) currentScreenIndex = idx;
      }
      return;
    } catch (_) {
      // continuar a localStorage
    }
  }

  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed && parsed.tokens) {
        currentTokens = { ...DEFAULT_TOKENS, ...parsed.tokens };
        activePresetId = parsed.preset || '';
      }
    }
  } catch (_) {}
}

function saveToLocalStorage() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ tokens: currentTokens, preset: activePresetId }));
  } catch (_) {}
}

// Renderizar pantalla actual en Escritorio y Móvil
function renderCurrentScreen() {
  const screen = window.CRM_SCREENS[currentScreenIndex];
  if (!screen) return;

  document.getElementById('mockupBoardTag').textContent = screen.boardTitle;
  document.getElementById('screenSelect').value = screen.id;

  const { desktop, mobile } = screen.render();
  document.getElementById('desktopFrame').innerHTML = desktop;
  document.getElementById('mobileFrame').innerHTML = mobile;
}

// Construir controles del panel derecho
function buildEditorDrawer() {
  // Presets
  const presetGrid = document.getElementById('presetGrid');
  presetGrid.innerHTML = PRESETS.map(
    (p) => `
    <button type="button" class="preset-chip ${p.id === activePresetId ? 'active' : ''}" data-preset-id="${p.id}">
      <span class="preset-swatches">
        ${p.swatches.map((c) => `<span style="background:${c}"></span>`).join('')}
      </span>
      <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${p.name}</span>
    </button>`
  ).join('');

  presetGrid.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-preset-id]');
    if (!btn) return;
    const preset = PRESETS.find((x) => x.id === btn.getAttribute('data-preset-id'));
    if (!preset) return;
    activePresetId = preset.id;
    currentTokens = { ...preset.values };
    document.getElementById('magicBrandPicker').value = currentTokens['--azul-600'];
    applyTokensToDOM();
    showToast(`Paleta aplicada: ${preset.name}`);
  });

  // Grupos de variables
  const container = document.getElementById('tokenGroupsContainer');
  container.innerHTML = TOKEN_GROUPS.map(
    (group, idx) => `
    <div class="token-group ${idx > 2 ? 'collapsed' : ''}" id="group-${group.id}" data-group-box="${group.id}">
      <button type="button" class="token-group-head" data-toggle-group="${group.id}">
        <span>${group.title}</span>
        <span class="chevron">▾</span>
      </button>
      <div class="token-group-body">
        ${group.items
          .map(
            (item) => `
          <div class="token-row">
            <div class="token-info">
              <div class="token-label">${item.label}</div>
              <div class="token-var">${item.key}</div>
            </div>
            <div class="token-controls">
              <input type="color" class="color-swatch-input" data-token-picker="${item.key}" value="${currentTokens[item.key]}" aria-label="${item.label}" />
              <input type="text" class="hex-input" data-token-hex="${item.key}" value="${currentTokens[item.key].toUpperCase()}" maxlength="7" aria-label="Código HEX ${item.label}" />
              <button type="button" class="token-reset-btn" data-token-reset="${item.key}" title="Restaurar este color">↺</button>
            </div>
          </div>`
          )
          .join('')}
      </div>
    </div>`
  ).join('');

  // Eventos acordeón
  container.addEventListener('click', (e) => {
    const head = e.target.closest('[data-toggle-group]');
    if (head) {
      const box = head.closest('.token-group');
      box.classList.toggle('collapsed');
      return;
    }
    const rst = e.target.closest('[data-token-reset]');
    if (rst) {
      const key = rst.getAttribute('data-token-reset');
      currentTokens[key] = DEFAULT_TOKENS[key];
      activePresetId = '';
      applyTokensToDOM();
    }
  });

  // Eventos color picker en vivo
  container.addEventListener('input', (e) => {
    const picker = e.target.closest('[data-token-picker]');
    if (picker) {
      const key = picker.getAttribute('data-token-picker');
      currentTokens[key] = picker.value.toLowerCase();
      activePresetId = '';
      applyTokensToDOM();
      return;
    }
    const hexIn = e.target.closest('[data-token-hex]');
    if (hexIn) {
      let val = hexIn.value.trim();
      if (!val.startsWith('#')) val = '#' + val;
      if (/^#[0-9a-fA-F]{6}$/.test(val)) {
        const key = hexIn.getAttribute('data-token-hex');
        currentTokens[key] = val.toLowerCase();
        activePresetId = '';
        applyTokensToDOM();
      }
    }
  });
}

// Construir selector de las 16 pantallas
function buildScreenSelector() {
  const select = document.getElementById('screenSelect');
  const groups = {};
  window.CRM_SCREENS.forEach((s) => {
    if (!groups[s.group]) groups[s.group] = [];
    groups[s.group].push(s);
  });

  select.innerHTML = Object.entries(groups)
    .map(
      ([gName, list]) => `
      <optgroup label="${gName}">
        ${list.map((s) => `<option value="${s.id}">${s.name}</option>`).join('')}
      </optgroup>`
    )
    .join('');

  select.addEventListener('change', () => {
    const idx = window.CRM_SCREENS.findIndex((s) => s.id === select.value);
    if (idx >= 0) {
      currentScreenIndex = idx;
      renderCurrentScreen();
    }
  });

  document.getElementById('prevScreenBtn').addEventListener('click', () => {
    currentScreenIndex = (currentScreenIndex - 1 + window.CRM_SCREENS.length) % window.CRM_SCREENS.length;
    renderCurrentScreen();
  });

  document.getElementById('nextScreenBtn').addEventListener('click', () => {
    currentScreenIndex = (currentScreenIndex + 1) % window.CRM_SCREENS.length;
    renderCurrentScreen();
  });
}

// Generar bloque CSS compatible con globals.css de crm-vectorial
function buildExportCssText() {
  return `/* Paleta personalizada para CRM Vectorial (globals.css) */
:root {
  /* Texto */
  --tinta-900: ${currentTokens['--tinta-900']};
  --tinta-600: ${currentTokens['--tinta-600']};

  /* Marca, botones y barras */
  --azul-600: ${currentTokens['--azul-600']};
  --azul-700: ${currentTokens['--azul-700']};
  --azul-800: ${currentTokens['--azul-800']};
  --azul-500: ${currentTokens['--azul-500']};
  --azul-lateral: ${currentTokens['--azul-lateral']};
  --azul-lateral-fin: ${currentTokens['--azul-lateral-fin']};
  --azul-100: ${currentTokens['--menu-activo-bg']};
  --azul-50: ${currentTokens['--azul-50']};
  --marco-lateral-bg: ${currentTokens['--marco-lateral-bg']};
  --barra-sup-inicio: ${currentTokens['--barra-sup-inicio']};
  --barra-sup-medio: ${currentTokens['--barra-sup-medio']};

  /* Superficies y bordes */
  --fondo: ${currentTokens['--fondo']};
  --card: ${currentTokens['--card']};
  --superficie-tenue: ${currentTokens['--superficie-tenue']};
  --borde: ${currentTokens['--borde']};
  --borde-campo: ${currentTokens['--borde-campo']};

  /* Etiquetas de estado */
  --ambar-texto: ${currentTokens['--ambar-texto']};
  --ambar-fondo: ${currentTokens['--ambar-fondo']};
  --azul-texto: ${currentTokens['--azul-estado-texto']};
  --azul-fondo: ${currentTokens['--azul-estado-fondo']};
  --verde-texto: ${currentTokens['--verde-texto']};
  --verde-fondo: ${currentTokens['--verde-fondo']};
  --morado-texto: ${currentTokens['--morado-texto']};
  --morado-fondo: ${currentTokens['--morado-fondo']};
  --rojo-texto: ${currentTokens['--rojo-texto']};
  --rojo-fondo: ${currentTokens['--rojo-fondo']};

  /* Avisos y acción destructiva */
  --exito-texto: ${currentTokens['--exito-texto']};
  --exito-fondo: ${currentTokens['--exito-fondo']};
  --error-texto: ${currentTokens['--error-texto']};
  --error-fondo: ${currentTokens['--error-fondo']};
  --peligro: ${currentTokens['--peligro']};
}`;
}

let toastTimer = null;
function showToast(msg) {
  const toast = document.getElementById('studioToast');
  toast.textContent = msg;
  toast.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.hidden = true;
  }, 3200);
}

function highlightEditorGroup(groupId) {
  const studioBody = document.getElementById('studioBody');
  studioBody.classList.remove('panel-collapsed');

  const box = document.getElementById(`group-${groupId}`);
  if (!box) return;
  box.classList.remove('collapsed');
  box.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  box.classList.add('flash');
  setTimeout(() => box.classList.remove('flash'), 1400);
}

// Inicialización general
document.addEventListener('DOMContentLoaded', () => {
  loadFromHashOrStorage();
  buildScreenSelector();
  buildEditorDrawer();
  applyTokensToDOM();
  renderCurrentScreen();

  // Navegación interna de los mockups o modo Inspector de color
  document.querySelector('.canvas-stage').addEventListener('click', (e) => {
    if (inspectMode) {
      const targetGroup = e.target.closest('[data-edit-group]');
      if (targetGroup) {
        e.preventDefault();
        e.stopPropagation();
        const gId = targetGroup.getAttribute('data-edit-group');
        highlightEditorGroup(gId);
        showToast(`Editando sección: ${gId.toUpperCase()}`);
        return;
      }
    }

    const gotoBtn = e.target.closest('[data-goto-screen]');
    if (gotoBtn) {
      const targetId = gotoBtn.getAttribute('data-goto-screen');
      const idx = window.CRM_SCREENS.findIndex((s) => s.id === targetId);
      if (idx >= 0) {
        currentScreenIndex = idx;
        renderCurrentScreen();
      }
    }
  });

  // Cambio de modo de vista (Ambos, Escritorio, Móvil)
  document.querySelectorAll('[data-view]').forEach((btn) => {
    btn.addEventListener('click', () => {
      currentViewMode = btn.getAttribute('data-view');
      document.querySelectorAll('[data-view]').forEach((b) => b.classList.toggle('active', b === btn));
      const layout = document.getElementById('framesLayout');
      layout.className = `frames-layout mode-${currentViewMode}`;
    });
  });

  // Botón Inspector "Tocar elemento"
  const inspectBtn = document.getElementById('inspectToggleBtn');
  inspectBtn.addEventListener('click', () => {
    inspectMode = !inspectMode;
    document.body.classList.toggle('inspect-mode', inspectMode);
    inspectBtn.classList.toggle('inspect-active', inspectMode);
    showToast(
      inspectMode
        ? '🎯 Modo tocar activado: haz clic en cualquier parte del CRM para abrir sus colores'
        : 'Modo navegación normal activado'
    );
  });

  // Generador armónico desde 1 color
  document.getElementById('applyMagicBtn').addEventListener('click', () => {
    const baseHex = document.getElementById('magicBrandPicker').value;
    currentTokens = generateHarmonicPalette(baseHex);
    activePresetId = '';
    applyTokensToDOM();
    showToast(`✨ Gama armónica generada desde ${baseHex.toUpperCase()}`);
  });

  // Restaurar todo al original
  document.getElementById('resetAllBtn').addEventListener('click', () => {
    currentTokens = { ...DEFAULT_TOKENS };
    activePresetId = 'original';
    window.history.replaceState(null, '', window.location.pathname);
    applyTokensToDOM();
    showToast('↺ Colores restaurados al diseño original del mockup');
  });

  // Mostrar/ocultar panel
  document.getElementById('toggleDrawerBtn').addEventListener('click', () => {
    document.getElementById('studioBody').classList.toggle('panel-collapsed');
  });

  // Copiar enlace con paleta guardada
  const handleShareUrl = async () => {
    const url = encodePaletteToHash();
    try {
      await navigator.clipboard.writeText(url);
      showToast('🔗 ¡Enlace copiado! Compártelo para abrir exactamente estos colores');
    } catch (_) {
      prompt('Copia este enlace con tus colores elegidos:', url);
    }
  };
  document.getElementById('shareUrlBtn').addEventListener('click', handleShareUrl);
  document.getElementById('shareUrlBtnBottom').addEventListener('click', handleShareUrl);

  // Modal Exportar CSS
  const modal = document.getElementById('exportModal');
  document.getElementById('exportCssBtn').addEventListener('click', () => {
    document.getElementById('exportCodePre').textContent = buildExportCssText();
    modal.hidden = false;
  });
  document.getElementById('closeModalBtn').addEventListener('click', () => {
    modal.hidden = true;
  });
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.hidden = true;
  });

  document.getElementById('copyCssCodeBtn').addEventListener('click', async () => {
    await navigator.clipboard.writeText(buildExportCssText());
    showToast('📋 Códigos CSS copiados al portapapeles');
  });

  document.getElementById('downloadJsonBtn').addEventListener('click', () => {
    const blob = new Blob([buildExportCssText()], { type: 'text/css;charset=utf-8' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'paleta-crm-vectorial.css';
    a.click();
    URL.revokeObjectURL(a.href);
  });
});

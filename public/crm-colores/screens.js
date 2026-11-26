// =========================================================================
// PANTALLAS EXACTAS DE LOS 16 MOCKUPS DE CRM VECTORIAL (ESCRITORIO + MÓVIL)
// =========================================================================

const ICONS = {
  home: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5"/><path d="M9 21v-6h6v6"/></svg>`,
  list: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/></svg>`,
  user: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M5 20a7 7 0 0 1 14 0"/></svg>`,
  logout: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>`,
  plus: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M12 5v14M5 12h14"/></svg>`,
  check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
  clock: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>`,
  arrowRight: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width:15px;height:15px"><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg>`,
  image: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="8.5" cy="9.5" r="1.5"/><path d="m21 15-5-5L5 20"/></svg>`,
  burger: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M4 7h16M4 12h16M4 17h16"/></svg>`,
  close: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>`,
  avatarSilhouette: `<svg viewBox="0 0 36 36" fill="none" style="width:100%;height:100%"><rect width="36" height="36" rx="18" fill="#94A3B8"/><circle cx="18" cy="13.5" r="5.5" fill="#F8FAFC"/><path d="M7.5 31c1.8-5.2 5.7-8 10.5-8s8.7 2.8 10.5 8" fill="#F8FAFC"/></svg>`,
  curves: `<svg viewBox="0 0 160 160" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" aria-hidden="true"><path d="M44 32a62 62 0 0 0 6 100"/><path d="M36 28a70 70 0 0 0 4 110" opacity="0.6"/><path d="M44 32l-1 13M44 32l12 3"/><path d="M118 128a62 62 0 0 0 4-96"/><path d="M126 134a70 70 0 0 0 6-110" opacity="0.6"/><path d="M118 128l2-13M118 128l-12-2"/><path d="M60 140a62 62 0 0 0 52-6" opacity="0.8"/></svg>`
};

// Ilustraciones arquitectónicas exactas de los mockups (Casa, Edificio, Living, Terraza)
const ILLUSTRATIONS = {
  casa: `<svg viewBox="0 0 360 200" xmlns="http://www.w3.org/2000/svg">
    <defs><linearGradient id="sky1" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stop-color="#d5e6ef"/><stop offset="100%" stop-color="#e8f1f5"/></linearGradient></defs>
    <rect width="360" height="145" fill="url(#sky1)"/>
    <rect y="135" width="360" height="22" fill="#9fb29f"/>
    <rect y="155" width="360" height="45" fill="#bfcab9"/>
    <polygon points="145,155 215,155 255,200 105,200" fill="#c7d0c2" stroke="#aab6a5" stroke-width="1"/>
    <!-- Casa moderna 1 piso -->
    <rect x="74" y="78" width="105" height="72" fill="#dfd9c8"/>
    <rect x="70" y="73" width="112" height="6" fill="#7d7868"/>
    <rect x="88" y="94" width="62" height="42" fill="#cdb38b" stroke="#b39870"/>
    <line x1="100" y1="94" x2="100" y2="136" stroke="#b39870"/><line x1="112" y1="94" x2="112" y2="136" stroke="#b39870"/><line x1="124" y1="94" x2="124" y2="136" stroke="#b39870"/><line x1="136" y1="94" x2="136" y2="136" stroke="#b39870"/>
    <rect x="158" y="102" width="16" height="48" fill="#525a54"/>
    <rect x="176" y="64" width="114" height="86" fill="#eceae2"/>
    <rect x="172" y="58" width="122" height="7" fill="#5e6563"/>
    <rect x="190" y="75" width="88" height="54" fill="#7b939e" stroke="#5b6d75" stroke-width="3"/>
    <line x1="218" y1="75" x2="218" y2="129" stroke="#d8e3e7" stroke-width="2"/>
    <line x1="250" y1="75" x2="250" y2="129" stroke="#d8e3e7" stroke-width="2"/>
    <!-- Árboles laterales -->
    <rect x="46" y="112" width="4" height="42" fill="#6d6558"/><ellipse cx="48" cy="102" rx="11" ry="18" fill="#7d9683"/>
    <rect x="309" y="112" width="4" height="42" fill="#6d6558"/><ellipse cx="311" cy="102" rx="11" ry="18" fill="#7d9683"/>
  </svg>`,
  depto: `<svg viewBox="0 0 360 200" xmlns="http://www.w3.org/2000/svg">
    <rect width="360" height="145" fill="#d8e8f0"/>
    <rect y="138" width="360" height="18" fill="#9fb29f"/>
    <rect y="155" width="360" height="45" fill="#bfcab9"/>
    <rect x="86" y="75" width="52" height="80" fill="#c9cec9"/>
    <rect x="132" y="50" width="98" height="105" fill="#e5e7e2"/>
    <rect x="230" y="82" width="48" height="73" fill="#cfd4cf"/>
    <!-- Ventanas edificio -->
    <g fill="#6d8491">
      <rect x="146" y="62" width="16" height="14"/><rect x="172" y="62" width="16" height="14"/><rect x="198" y="62" width="16" height="14"/>
      <rect x="146" y="84" width="16" height="14"/><rect x="172" y="84" width="16" height="14"/><rect x="198" y="84" width="16" height="14"/>
      <rect x="146" y="106" width="16" height="14"/><rect x="172" y="106" width="16" height="14"/><rect x="198" y="106" width="16" height="14"/>
      <rect x="100" y="88" width="20" height="14"/><rect x="100" y="110" width="20" height="14"/>
    </g>
    <rect x="171" y="130" width="20" height="25" fill="#4f5856"/>
    <rect x="52" y="112" width="4" height="42" fill="#6d6558"/><ellipse cx="54" cy="102" rx="10" ry="16" fill="#7d9683"/>
    <rect x="304" y="112" width="4" height="42" fill="#6d6558"/><ellipse cx="306" cy="102" rx="10" ry="16" fill="#7d9683"/>
  </svg>`,
  living: `<svg viewBox="0 0 360 200" xmlns="http://www.w3.org/2000/svg">
    <rect width="360" height="145" fill="#ebe7de"/>
    <rect y="145" width="360" height="55" fill="#cbb698"/>
    <rect x="195" y="34" width="118" height="111" fill="#cfe2ea" stroke="#6c7d84" stroke-width="4"/>
    <line x1="254" y1="34" x2="254" y2="145" stroke="#6c7d84" stroke-width="3"/>
    <rect x="58" y="106" width="112" height="36" rx="6" fill="#d8cfc0"/>
    <rect x="120" y="146" width="82" height="14" rx="4" fill="#8c6d4f"/>
  </svg>`,
  terraza: `<svg viewBox="0 0 360 200" xmlns="http://www.w3.org/2000/svg">
    <rect width="360" height="125" fill="#d7e7f0"/>
    <rect y="125" width="360" height="75" fill="#c7b9a5"/>
    <line x1="0" y1="112" x2="360" y2="112" stroke="#5d6a6e" stroke-width="3"/>
    <g stroke="#6c7a7e" stroke-width="2"><line x1="40" y1="112" x2="40" y2="132"/><line x1="100" y1="112" x2="100" y2="132"/><line x1="160" y1="112" x2="160" y2="132"/><line x1="220" y1="112" x2="220" y2="132"/><line x1="280" y1="112" x2="280" y2="132"/><line x1="340" y1="112" x2="340" y2="132"/></g>
    <rect x="92" y="124" width="46" height="34" rx="6" fill="#9c8b78"/>
    <rect x="222" y="124" width="46" height="34" rx="6" fill="#9c8b78"/>
    <rect x="155" y="142" width="50" height="16" rx="3" fill="#705842"/>
  </svg>`
};

function badge(type, label) {
  const map = {
    ambar: 'badge-ambar',
    azul: 'badge-azul',
    verde: 'badge-verde',
    morado: 'badge-morado',
    rojo: 'badge-rojo'
  };
  return `<span class="crm-badge ${map[type]}" data-edit-group="etiquetas">${label}</span>`;
}

// Marco envolvente de Escritorio (Barra lateral + Barra superior + Contenido)
function renderDesktopShell({ role, activeNav, topIcon, breadcrumb, contentHtml }) {
  const isBroker = role === 'broker';
  const roleLabel = isBroker ? 'Broker' : 'Administrador';
  const userName = isBroker ? 'Camila Soto' : 'Equipo Vectorial';
  const navItems = isBroker
    ? [
        { id: 'inicio', label: 'Inicio', icon: ICONS.home, screen: '01' },
        { id: 'propiedades', label: 'Propiedades', icon: ICONS.list, screen: '02' },
        { id: 'solicitudes', label: 'Solicitudes', icon: ICONS.list, screen: '08' },
        { id: 'perfil', label: 'Mi perfil', icon: ICONS.user, screen: '09' }
      ]
    : [
        { id: 'inicio', label: 'Inicio', icon: ICONS.home, screen: '10' },
        { id: 'solicitudes', label: 'Solicitudes', icon: ICONS.list, screen: '11' },
        { id: 'brokers', label: 'Brokers', icon: ICONS.user, screen: '13' }
      ];

  const crumbsHtml = breadcrumb
    .map((b, i) => (i === 0 ? `<span>${b}</span>` : `<span class="sep">/</span><span>${b}</span>`))
    .join('');

  return `
    <div class="crm-desktop-grid">
      <aside class="crm-sidebar" data-edit-group="barras">
        <div class="crm-brand" data-goto-screen="${isBroker ? '01' : '10'}">
          <span class="crm-brand-logo"><img src="./simbolo-vectorial.png" alt="" /></span>
          <div>
            <div class="crm-brand-name">CRM Vectorial</div>
            <div class="crm-brand-role">${roleLabel}</div>
          </div>
        </div>
        <div class="crm-sidebar-panel" data-edit-group="barras">
          <ul class="crm-nav-list">
            ${navItems
              .map(
                (item) => `
              <li>
                <button type="button" class="crm-nav-btn ${item.id === activeNav ? 'active' : ''}" data-goto-screen="${item.screen}" data-edit-group="barras">
                  ${item.icon}
                  <span>${item.label}</span>
                </button>
              </li>`
              )
              .join('')}
          </ul>
          <div class="crm-sidebar-curves">${ICONS.curves}</div>
          <div class="crm-sidebar-footer">
            <button type="button" class="crm-logout-btn" data-edit-group="fondos">
              ${ICONS.logout}
              <span>Cerrar sesión</span>
            </button>
          </div>
        </div>
      </aside>

      <div class="crm-main-col" data-edit-group="fondos">
        <header class="crm-topbar" data-edit-group="barras">
          <span class="crm-topbar-icon" data-edit-group="botones">${ICONS[topIcon] || ICONS.home}</span>
          <div class="crm-breadcrumb" data-edit-group="textos">${crumbsHtml}</div>
          <div class="crm-user-pill" data-edit-group="fondos">
            <span class="crm-avatar">${ICONS.avatarSilhouette}</span>
            <span>${userName}</span>
          </div>
        </header>
        <div class="crm-content" data-edit-group="fondos">
          ${contentHtml}
        </div>
      </div>
    </div>
  `;
}

// Marco envolvente Móvil 390 px
function renderMobileShell({ role, contentHtml, drawerOpen = false, modalHtml = '' }) {
  const isBroker = role === 'broker';
  const navItems = isBroker
    ? [
        { id: 'inicio', label: 'Inicio', icon: ICONS.home, screen: '01', active: true },
        { id: 'propiedades', label: 'Propiedades', icon: ICONS.list, screen: '02' },
        { id: 'solicitudes', label: 'Solicitudes', icon: ICONS.list, screen: '08' },
        { id: 'perfil', label: 'Mi perfil', icon: ICONS.user, screen: '09' }
      ]
    : [
        { id: 'inicio', label: 'Inicio', icon: ICONS.home, screen: '10', active: true },
        { id: 'solicitudes', label: 'Solicitudes', icon: ICONS.list, screen: '11' },
        { id: 'brokers', label: 'Brokers', icon: ICONS.user, screen: '13' }
      ];

  return `
    <div style="position:relative;display:flex;flex-direction:column;flex:1;min-height:810px;background:var(--fondo);" data-edit-group="fondos">
      <header class="crm-mobile-topbar" data-edit-group="barras">
        <div class="crm-brand" data-goto-screen="${isBroker ? '01' : '10'}">
          <span class="crm-brand-logo" style="width:34px;height:34px;"><img src="./simbolo-vectorial.png" alt="" style="width:22px;height:22px;" /></span>
          <span class="crm-brand-name" style="font-size:15.5px;">CRM Vectorial</span>
        </div>
        <button type="button" class="crm-burger-btn" data-goto-screen="14" title="Ver menú móvil">${ICONS.burger}</button>
      </header>

      <div class="crm-mobile-content">
        ${contentHtml}
      </div>

      ${
        drawerOpen
          ? `
        <div style="position:absolute;inset:0;background:rgba(15,23,42,0.48);z-index:20;display:flex;">
          <div style="width:312px;background:var(--marco-lateral-bg);height:100%;padding:14px 12px;display:flex;flex-direction:column;gap:14px;box-shadow:8px 0 28px rgba(0,0,0,0.22);" data-edit-group="barras">
            <div style="display:flex;align-items:center;justify-content:space-between;">
              <div class="crm-brand">
                <span class="crm-brand-logo"><img src="./simbolo-vectorial.png" alt="" /></span>
                <div>
                  <div class="crm-brand-name">CRM Vectorial</div>
                  <div class="crm-brand-role">${isBroker ? 'Broker' : 'Administrador'}</div>
                </div>
              </div>
              <button type="button" class="crm-burger-btn" data-goto-screen="01">${ICONS.close}</button>
            </div>
            <div class="crm-sidebar-panel" style="flex:1;" data-edit-group="barras">
              <ul class="crm-nav-list">
                ${navItems
                  .map(
                    (it, idx) => `
                  <li>
                    <button type="button" class="crm-nav-btn ${idx === 0 ? 'active' : ''}" data-goto-screen="${it.screen}">
                      ${it.icon}<span>${it.label}</span>
                    </button>
                  </li>`
                  )
                  .join('')}
              </ul>
              <div class="crm-sidebar-curves">${ICONS.curves}</div>
              <div class="crm-sidebar-footer">
                <button type="button" class="crm-logout-btn">${ICONS.logout}<span>Cerrar sesión</span></button>
              </div>
            </div>
          </div>
        </div>`
          : ''
      }

      ${modalHtml}
    </div>
  `;
}

// Datos compartidos de propiedades y solicitudes
const PROPS_DATA = [
  { title: 'Calle Los Robles 123', comuna: 'Concepción', meta: 'Casa · Venta', price: 'UF 5.450', status: 'Publicada', badgeType: 'verde', art: 'casa' },
  { title: 'Av. del Parque 45', comuna: 'San Pedro de la Paz', meta: 'Departamento · Venta', price: 'UF 3.890', status: 'Publicada', badgeType: 'verde', art: 'depto' },
  { title: 'Pasaje Los Aromos 27', comuna: 'Chiguayante', meta: 'Casa · Venta', price: 'UF 4.120', status: 'Borrador', badgeType: 'ambar', art: 'casa' },
  { title: 'Camino del Sol 802', comuna: 'Concepción', meta: 'Casa · Arriendo', price: '$690.000 / mes', status: 'Publicada', badgeType: 'verde', art: 'casa' },
  { title: 'Los Canelos 156', comuna: 'Talcahuano', meta: 'Departamento · Venta', price: 'UF 3.300', status: 'Borrador', badgeType: 'ambar', art: 'depto' },
  { title: 'Av. Mirador 480', comuna: 'San Pedro de la Paz', meta: 'Casa · Venta', price: 'UF 5.980', status: 'Publicada', badgeType: 'verde', art: 'casa' }
];

const BROKER_REQUESTS = [
  { tipo: 'Tasación', nota: 'Confirmar el horario de la visita.', prop: 'Calle Los Robles 123', comuna: 'Concepción', fecha: '19 nov 2026', hora: '10:32', estado: 'Pendiente', b: 'ambar' },
  { tipo: 'Estudio de título', nota: 'Revisar los antecedentes vigentes.', prop: 'Av. del Parque 45', comuna: 'San Pedro de la Paz', fecha: '17 nov 2026', hora: '16:15', estado: 'En proceso', b: 'azul' },
  { tipo: 'Marketing', nota: '', prop: 'Pasaje Los Aromos 27', comuna: 'Chiguayante', fecha: '14 nov 2026', hora: '11:05', estado: 'Resuelta', b: 'verde' },
  { tipo: 'Contrato', nota: 'Preparar contrato de arriendo.', prop: 'Calle Nueva 180', comuna: 'Concepción', fecha: '10 nov 2026', hora: '09:46', estado: 'Facturada', b: 'morado' },
  { tipo: 'Tasación', nota: '', prop: 'Camino Mirador 62', comuna: 'Talcahuano', fecha: '6 nov 2026', hora: '17:50', estado: 'Resuelta', b: 'verde' }
];

const ADMIN_REQUESTS = [
  { tipo: 'Tasación', broker: 'Camila Soto', prop: 'Calle Los Robles 123', comuna: 'Concepción', fecha: '19 nov 2026', estado: 'Pendiente', b: 'ambar' },
  { tipo: 'Estudio de título', broker: 'Elena Silva', prop: 'Av. del Parque 45', comuna: 'San Pedro de la Paz', fecha: '17 nov 2026', estado: 'En proceso', b: 'azul' },
  { tipo: 'Marketing', broker: 'Daniel Rojas', prop: 'Pasaje Los Aromos 27', comuna: 'Chiguayante', fecha: '14 nov 2026', estado: 'Resuelta', b: 'verde' },
  { tipo: 'Contrato', broker: 'Martín Vidal', prop: 'Calle Nueva 180', comuna: 'Concepción', fecha: '10 nov 2026', estado: 'Facturada', b: 'morado' },
  { tipo: 'Tasación', broker: 'Isabel Moreno', prop: 'Camino Mirador 62', comuna: 'Talcahuano', fecha: '6 nov 2026', estado: 'Pendiente', b: 'ambar' },
  { tipo: 'Marketing', broker: 'Lucía Flores', prop: 'Camino de la Costa 16', comuna: 'Tomé', fecha: '4 nov 2026', estado: 'En proceso', b: 'azul' }
];

// Definición de las 16 pantallas
window.CRM_SCREENS = [
  // ================= 01 BROKER INICIO =================
  {
    id: '01',
    group: 'Broker (Camila Soto)',
    name: '01 · Broker — Inicio',
    boardTitle: '01 / CONTRASTE AZUL',
    render() {
      const desktopContent = `
        <div class="crm-page-head">
          <div data-edit-group="textos">
            <h1 class="crm-page-title">Hola, Camila</h1>
            <p class="crm-page-sub">Consulta tu cartera y sigue las gestiones solicitadas a Vectorial.</p>
          </div>
          <button type="button" class="crm-btn crm-btn-primary" data-goto-screen="07" data-edit-group="botones">${ICONS.plus} Solicitar gestión</button>
        </div>

        <div class="crm-kpi-grid">
          <div class="crm-kpi-featured" data-goto-screen="08" data-edit-group="destacada" style="cursor:pointer;">
            <span class="kpi-label">Solicitudes pendientes</span>
            <span class="kpi-val">4</span>
            <span class="kpi-foot">Ver mis solicitudes ${ICONS.arrowRight}</span>
            <div class="kpi-curves">${ICONS.curves}</div>
          </div>
          <div class="crm-kpi-normal" data-goto-screen="02" data-edit-group="fondos" style="cursor:pointer;">
            <div class="crm-kpi-top"><span class="kpi-label">Propiedades</span><span class="crm-icon-box" data-edit-group="botones">${ICONS.list}</span></div>
            <span class="kpi-val">12</span>
            <span class="kpi-foot">En tu cartera</span>
          </div>
          <div class="crm-kpi-normal" data-edit-group="fondos">
            <div class="crm-kpi-top"><span class="kpi-label">Gestiones cerradas</span><span class="crm-icon-box" data-edit-group="botones">${ICONS.check}</span></div>
            <span class="kpi-val">8</span>
            <span class="kpi-foot">Resueltas o facturadas</span>
          </div>
        </div>

        <div class="crm-card-flush" data-edit-group="fondos">
          <div class="crm-list-header">
            <h2 class="crm-section-title" data-edit-group="textos">Últimas solicitudes</h2>
            <button type="button" class="crm-link" data-goto-screen="08" data-edit-group="botones">Ver todas ${ICONS.arrowRight}</button>
          </div>
          <table class="crm-table">
            <thead data-edit-group="fondos"><tr><th>Gestión</th><th>Propiedad</th><th>Fecha</th><th>Estado</th></tr></thead>
            <tbody>
              ${BROKER_REQUESTS.map(
                (r) => `
                <tr>
                  <td class="crm-cell-primary">${r.tipo}</td>
                  <td><div>${r.prop}</div><div class="crm-cell-sub">${r.comuna}</div></td>
                  <td style="color:var(--tinta-600)">${r.fecha}</td>
                  <td>${badge(r.b, r.estado)}</td>
                </tr>`
              ).join('')}
            </tbody>
          </table>
        </div>
      `;

      const mobileContent = `
        <div data-edit-group="textos">
          <h1 class="crm-page-title">Hola, Camila</h1>
          <p class="crm-page-sub">Tu cartera y gestiones recientes.</p>
        </div>
        <button type="button" class="crm-btn crm-btn-primary crm-btn-full" data-goto-screen="07" data-edit-group="botones">${ICONS.plus} Solicitar gestión</button>
        <div class="crm-mobile-kpi-pair">
          <div class="crm-kpi-featured" data-edit-group="destacada"><span class="kpi-label" style="font-size:12px;">Solicitudes pendientes</span><span class="kpi-val">4</span></div>
          <div class="crm-kpi-normal" data-edit-group="fondos"><span class="kpi-label" style="font-size:12px;">Propiedades</span><span class="kpi-val">12</span></div>
        </div>
        <div class="crm-mobile-kpi-row" data-edit-group="fondos">
          <span style="color:var(--azul-600);display:flex;width:18px;height:18px;">${ICONS.check}</span>
          <span style="flex:1;font-size:13px;color:var(--tinta-600);font-weight:500;">Gestiones cerradas</span>
          <span style="font-size:20px;font-weight:300;">8</span>
        </div>
        <div style="display:flex;align-items:center;justify-content:space-between;margin-top:4px;">
          <h2 class="crm-section-title">Últimas solicitudes</h2>
          <button type="button" class="crm-link" data-goto-screen="08">Ver todas</button>
        </div>
        ${BROKER_REQUESTS.slice(0, 4)
          .map(
            (r) => `
          <div class="crm-mobile-list-card" data-edit-group="fondos">
            <div style="display:flex;justify-content:space-between;align-items:center;">
              <span class="crm-cell-primary">${r.tipo}</span>
              ${badge(r.b, r.estado)}
            </div>
            <div style="font-size:12.5px;color:var(--tinta-600);">${r.prop}</div>
            <div style="font-size:11.5px;color:var(--tinta-600);">${r.fecha}</div>
          </div>`
          )
          .join('')}
      `;

      return {
        desktop: renderDesktopShell({ role: 'broker', activeNav: 'inicio', topIcon: 'home', breadcrumb: ['Inicio'], contentHtml: desktopContent }),
        mobile: renderMobileShell({ role: 'broker', contentHtml: mobileContent })
      };
    }
  },

  // ================= 02 MIS PROPIEDADES =================
  {
    id: '02',
    group: 'Broker (Camila Soto)',
    name: '02 · Broker — Mis propiedades',
    boardTitle: '02 / MIS PROPIEDADES',
    render() {
      const desktopContent = `
        <div class="crm-page-head">
          <div data-edit-group="textos">
            <h1 class="crm-page-title">Mis propiedades</h1>
            <p class="crm-page-sub">Consulta y administra las propiedades de tu cartera.</p>
          </div>
          <button type="button" class="crm-btn crm-btn-primary" data-goto-screen="04" data-edit-group="botones">${ICONS.plus} Agregar propiedad</button>
        </div>
        <div class="crm-filter-bar" data-edit-group="fondos">
          <input class="crm-input" style="max-width:280px;" placeholder="Buscar por dirección o comuna" data-edit-group="fondos" />
          <div style="display:flex;gap:8px;margin-left:8px;">
            <button type="button" class="crm-pill-tab active-soft" data-edit-group="botones">Todas · 12</button>
            <button type="button" class="crm-pill-tab">Publicadas · 8</button>
            <button type="button" class="crm-pill-tab">Borradores · 4</button>
          </div>
        </div>
        <div class="crm-props-grid">
          ${PROPS_DATA.map(
            (p) => `
            <div class="crm-prop-card" data-goto-screen="03" data-edit-group="fondos">
              <div class="crm-prop-thumb">
                ${ILLUSTRATIONS[p.art]}
                ${badge(p.badgeType, p.status)}
              </div>
              <div>
                <div class="crm-prop-title">${p.title}</div>
                <div class="crm-cell-sub">${p.comuna}</div>
              </div>
              <div class="crm-prop-meta-row">
                <span>${p.meta}</span>
                <span class="crm-prop-price">${p.price}</span>
              </div>
              <div class="crm-prop-foot" data-edit-group="botones">
                <span>Ver propiedad</span>${ICONS.arrowRight}
              </div>
            </div>`
          ).join('')}
        </div>
      `;

      const mobileContent = `
        <div><h1 class="crm-page-title">Mis propiedades</h1><p class="crm-page-sub">Administra tu cartera de propiedades.</p></div>
        <button type="button" class="crm-btn crm-btn-primary crm-btn-full" data-goto-screen="04" data-edit-group="botones">${ICONS.plus} Agregar propiedad</button>
        <input class="crm-input" placeholder="Buscar por dirección o comuna" />
        <div style="display:flex;gap:6px;flex-wrap:wrap;">
          <button type="button" class="crm-pill-tab active-soft" style="height:32px;padding:0 10px;font-size:12px;">Todas · 12</button>
          <button type="button" class="crm-pill-tab" style="height:32px;padding:0 10px;font-size:12px;">Publicadas · 8</button>
          <button type="button" class="crm-pill-tab" style="height:32px;padding:0 10px;font-size:12px;">Borradores · 4</button>
        </div>
        ${PROPS_DATA.slice(0, 2)
          .map(
            (p) => `
          <div class="crm-prop-card" data-goto-screen="03" data-edit-group="fondos">
            <div class="crm-prop-thumb">${ILLUSTRATIONS[p.art]}${badge(p.badgeType, p.status)}</div>
            <div class="crm-prop-title">${p.title}</div>
            <div class="crm-prop-meta-row"><span>${p.comuna}</span><span class="crm-prop-price">${p.price}</span></div>
            <div class="crm-prop-foot"><span>Ver propiedad</span>${ICONS.arrowRight}</div>
          </div>`
          )
          .join('')}
      `;

      return {
        desktop: renderDesktopShell({ role: 'broker', activeNav: 'propiedades', topIcon: 'list', breadcrumb: ['Propiedades'], contentHtml: desktopContent }),
        mobile: renderMobileShell({ role: 'broker', contentHtml: mobileContent })
      };
    }
  },

  // ================= 03 DETALLE Y GALERÍA =================
  {
    id: '03',
    group: 'Broker (Camila Soto)',
    name: '03 · Broker — Detalle y galería',
    boardTitle: '03 / DETALLE Y GALERÍA',
    render() {
      const desktopContent = `
        <div class="crm-page-head">
          <div><h1 class="crm-page-title">Calle Los Robles 123</h1><p class="crm-page-sub">Concepción · Casa en venta</p></div>
          <button type="button" class="crm-btn crm-btn-outline" data-goto-screen="05">Editar propiedad</button>
        </div>
        <div class="crm-two-col">
          <div class="crm-card" data-edit-group="fondos">
            <div style="position:relative;border-radius:12px;overflow:hidden;margin-bottom:14px;">
              ${ILLUSTRATIONS.casa}
              <span style="position:absolute;right:12px;bottom:12px;background:#1e293b;color:#fff;font-size:12px;font-weight:600;padding:4px 10px;border-radius:7px;">1 de 3</span>
            </div>
            <div style="font-family:var(--font-titulares);font-size:14px;font-weight:700;margin-bottom:10px;">Fotos de la propiedad</div>
            <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;">
              <div style="border:2px solid var(--azul-600);border-radius:9px;overflow:hidden;padding:2px;">${ILLUSTRATIONS.casa}</div>
              <div style="border:1px solid var(--borde);border-radius:9px;overflow:hidden;">${ILLUSTRATIONS.living}</div>
              <div style="border:1px solid var(--borde);border-radius:9px;overflow:hidden;">${ILLUSTRATIONS.terraza}</div>
            </div>
          </div>
          <div style="display:flex;flex-direction:column;gap:14px;">
            <div class="crm-card" style="display:flex;flex-direction:column;gap:12px;" data-edit-group="fondos">
              <div>${badge('verde', 'Publicada')}</div>
              <div>
                <div style="font-family:var(--font-titulares);font-size:26px;font-weight:700;">UF 5.450</div>
                <div class="crm-cell-sub">Precio de venta</div>
              </div>
              <div style="border-top:1px solid var(--borde);padding-top:12px;display:flex;flex-direction:column;gap:6px;font-size:13.5px;">
                <div style="font-family:var(--font-titulares);font-weight:700;">Características</div>
                <div>3 dormitorios · 2 baños</div>
                <div>108 m² construidos</div>
                <div style="color:var(--tinta-600);">Calle Los Robles 123, Concepción</div>
              </div>
              <button type="button" class="crm-btn crm-btn-primary crm-btn-full" data-goto-screen="07" data-edit-group="botones">${ICONS.plus} Solicitar gestión</button>
            </div>
            <div class="crm-card" data-edit-group="fondos">
              <div style="font-family:var(--font-titulares);font-size:15px;font-weight:700;margin-bottom:6px;">Descripción</div>
              <p style="font-size:13.5px;color:var(--tinta-600);line-height:1.55;">Casa de un piso con terraza y patio privado.</p>
            </div>
          </div>
        </div>
      `;

      const mobileContent = `
        <div><h1 class="crm-page-title">Calle Los Robles 123</h1><p class="crm-page-sub">Concepción · Casa en venta</p></div>
        <div class="crm-card" style="padding:12px;" data-edit-group="fondos">
          <div style="position:relative;border-radius:10px;overflow:hidden;margin-bottom:10px;">
            ${ILLUSTRATIONS.casa}
            <span style="position:absolute;right:10px;bottom:10px;background:#1e293b;color:#fff;font-size:11.5px;font-weight:600;padding:3px 9px;border-radius:6px;">1 de 3</span>
          </div>
          <div style="font-weight:700;font-size:13px;margin-bottom:8px;">Fotos</div>
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;">
            <div style="border:2px solid var(--azul-600);border-radius:7px;overflow:hidden;">${ILLUSTRATIONS.casa}</div>
            <div style="border-radius:7px;overflow:hidden;">${ILLUSTRATIONS.living}</div>
            <div style="border-radius:7px;overflow:hidden;">${ILLUSTRATIONS.terraza}</div>
          </div>
        </div>
        <div class="crm-card" style="display:flex;flex-direction:column;gap:10px;" data-edit-group="fondos">
          <div>${badge('verde', 'Publicada')}</div>
          <div style="font-family:var(--font-titulares);font-size:22px;font-weight:700;">UF 5.450</div>
          <div style="font-size:13px;color:var(--tinta-600);">3 dormitorios · 2 baños · 108 m²</div>
          <button type="button" class="crm-btn crm-btn-primary crm-btn-full" data-goto-screen="07" data-edit-group="botones">${ICONS.plus} Solicitar gestión</button>
        </div>
        <button type="button" class="crm-btn crm-btn-outline crm-btn-full" data-goto-screen="05" style="justify-content:flex-start;">Editar propiedad</button>
      `;

      return {
        desktop: renderDesktopShell({ role: 'broker', activeNav: 'propiedades', topIcon: 'list', breadcrumb: ['Propiedades', 'Detalle'], contentHtml: desktopContent }),
        mobile: renderMobileShell({ role: 'broker', contentHtml: mobileContent })
      };
    }
  },

  // ================= 04 NUEVA PROPIEDAD =================
  {
    id: '04',
    group: 'Broker (Camila Soto)',
    name: '04 · Broker — Nueva propiedad',
    boardTitle: '04 / NUEVA PROPIEDAD',
    render() {
      const desktopContent = `
        <div class="crm-page-head">
          <div><h1 class="crm-page-title">Nueva propiedad</h1><p class="crm-page-sub">Completa la ficha para incorporar una propiedad a tu cartera.</p></div>
          <button type="button" class="crm-btn crm-btn-outline" data-goto-screen="02">Cancelar</button>
        </div>
        <div class="crm-two-col">
          <div style="display:flex;flex-direction:column;gap:16px;">
            <div class="crm-card" style="display:flex;flex-direction:column;gap:14px;" data-edit-group="fondos">
              <h2 class="crm-section-title">Datos de la propiedad</h2>
              <div class="crm-field"><label class="crm-label">Dirección</label><input class="crm-input" placeholder="Ej. Calle Los Robles 123" /></div>
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
                <div class="crm-field"><label class="crm-label">Comuna</label><select class="crm-select"><option>Seleccionar comuna</option></select></div>
                <div class="crm-field"><label class="crm-label">Tipo de propiedad</label><select class="crm-select"><option>Seleccionar tipo</option></select></div>
              </div>
              <div style="display:grid;grid-template-columns:1.2fr 1fr 0.6fr;gap:12px;">
                <div class="crm-field"><label class="crm-label">Operación</label><select class="crm-select"><option>Venta o arriendo</option></select></div>
                <div class="crm-field"><label class="crm-label">Precio</label><input class="crm-input" placeholder="Ingresar monto" /></div>
                <div class="crm-field"><label class="crm-label">Moneda</label><select class="crm-select"><option>UF</option><option>CLP</option></select></div>
              </div>
              <div class="crm-field">
                <label class="crm-label">Descripción</label>
                <textarea class="crm-textarea" placeholder="Describe las características principales."></textarea>
                <span class="crm-help">Hasta 1.000 caracteres.</span>
              </div>
            </div>
            <div style="display:flex;gap:10px;">
              <button type="button" class="crm-btn crm-btn-primary" data-edit-group="botones">${ICONS.check} Guardar propiedad</button>
              <button type="button" class="crm-btn crm-btn-outline" data-goto-screen="02">Cancelar</button>
            </div>
          </div>
          <div style="display:flex;flex-direction:column;gap:14px;">
            <div class="crm-card" style="display:flex;flex-direction:column;gap:12px;" data-edit-group="fondos">
              <span class="crm-icon-box" data-edit-group="botones">${ICONS.list}</span>
              <h3 class="crm-section-title" style="font-size:15.5px;">Características</h3>
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
                <div class="crm-field"><label class="crm-label">Dormitorios</label><input class="crm-input" value="0" /></div>
                <div class="crm-field"><label class="crm-label">Baños</label><input class="crm-input" value="0" /></div>
              </div>
              <div class="crm-field"><label class="crm-label">Superficie construida (m²)</label><input class="crm-input" placeholder="Ingresar superficie" /></div>
            </div>
            <div class="crm-card" style="display:flex;flex-direction:column;gap:8px;" data-edit-group="fondos">
              <span class="crm-icon-box" data-edit-group="botones">${ICONS.image}</span>
              <h3 class="crm-section-title" style="font-size:15.5px;">Fotos de la propiedad</h3>
              <p class="crm-cell-sub" style="line-height:1.5;">Guarda la ficha para subir fotos y escoger la portada.</p>
            </div>
          </div>
        </div>
      `;

      const mobileContent = `
        <div><h1 class="crm-page-title">Nueva propiedad</h1><p class="crm-page-sub">Completa los datos de la propiedad.</p></div>
        <div class="crm-card" style="display:flex;flex-direction:column;gap:12px;padding:15px;" data-edit-group="fondos">
          <h2 class="crm-section-title" style="font-size:15.5px;">Datos de la propiedad</h2>
          <div class="crm-field"><label class="crm-label">Dirección</label><input class="crm-input" placeholder="Ej. Calle Los Robles 123" /></div>
          <div class="crm-field"><label class="crm-label">Comuna</label><select class="crm-select"><option>Seleccionar comuna</option></select></div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
            <div class="crm-field"><label class="crm-label">Tipo</label><select class="crm-select"><option>Seleccionar</option></select></div>
            <div class="crm-field"><label class="crm-label">Operación</label><select class="crm-select"><option>Venta o arriendo</option></select></div>
          </div>
          <div style="display:grid;grid-template-columns:1.4fr 0.8fr;gap:8px;">
            <div class="crm-field"><label class="crm-label">Precio</label><input class="crm-input" placeholder="Ingresar monto" /></div>
            <div class="crm-field"><label class="crm-label">Moneda</label><select class="crm-select"><option>UF</option></select></div>
          </div>
          <div style="display:grid;grid-template-columns:1fr 1fr 1.2fr;gap:8px;">
            <div class="crm-field"><label class="crm-label">Dormitorios</label><input class="crm-input" value="0" /></div>
            <div class="crm-field"><label class="crm-label">Baños</label><input class="crm-input" value="0" /></div>
            <div class="crm-field"><label class="crm-label">Superficie (m²)</label><input class="crm-input" value="0" /></div>
          </div>
          <div class="crm-field"><label class="crm-label">Descripción</label><textarea class="crm-textarea" style="min-height:66px;" placeholder="Describe la propiedad."></textarea><span class="crm-help">Hasta 1.000 caracteres.</span></div>
        </div>
        <button type="button" class="crm-btn crm-btn-primary crm-btn-full" data-edit-group="botones">${ICONS.check} Guardar propiedad</button>
      `;

      return {
        desktop: renderDesktopShell({ role: 'broker', activeNav: 'propiedades', topIcon: 'list', breadcrumb: ['Propiedades', 'Nueva'], contentHtml: desktopContent }),
        mobile: renderMobileShell({ role: 'broker', contentHtml: mobileContent })
      };
    }
  },

  // ================= 05 EDITAR PROPIEDAD =================
  {
    id: '05',
    group: 'Broker (Camila Soto)',
    name: '05 · Broker — Editar propiedad',
    boardTitle: '05 / EDITAR PROPIEDAD',
    render() {
      const desktopContent = `
        <div class="crm-page-head">
          <div><h1 class="crm-page-title">Editar propiedad</h1><p class="crm-page-sub">Calle Los Robles 123, Concepción</p></div>
          <button type="button" class="crm-btn crm-btn-outline" data-goto-screen="03">Ver propiedad</button>
        </div>
        <div style="display:flex;gap:8px;">
          <button type="button" class="crm-pill-tab active-soft" data-edit-group="botones">Datos</button>
          <button type="button" class="crm-pill-tab" data-goto-screen="06">Fotos</button>
        </div>
        <div class="crm-two-col">
          <div class="crm-card" style="display:flex;flex-direction:column;gap:14px;" data-edit-group="fondos">
            <h2 class="crm-section-title">Datos de la propiedad</h2>
            <div class="crm-field"><label class="crm-label">Dirección</label><input class="crm-input" value="Calle Los Robles 123" /></div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
              <div class="crm-field"><label class="crm-label">Comuna</label><select class="crm-select"><option>Concepción</option></select></div>
              <div class="crm-field"><label class="crm-label">Tipo de propiedad</label><select class="crm-select"><option>Casa</option></select></div>
            </div>
            <div style="display:grid;grid-template-columns:1.2fr 1fr 0.6fr;gap:12px;">
              <div class="crm-field"><label class="crm-label">Operación</label><select class="crm-select"><option>Venta</option></select></div>
              <div class="crm-field"><label class="crm-label">Precio</label><input class="crm-input" value="5.450" /></div>
              <div class="crm-field"><label class="crm-label">Moneda</label><select class="crm-select"><option>UF</option></select></div>
            </div>
            <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:12px;">
              <div class="crm-field"><label class="crm-label">Dormitorios</label><input class="crm-input" value="3" /></div>
              <div class="crm-field"><label class="crm-label">Baños</label><input class="crm-input" value="2" /></div>
              <div class="crm-field"><label class="crm-label">Superficie (m²)</label><input class="crm-input" value="108" /></div>
            </div>
            <div class="crm-field"><label class="crm-label">Descripción</label><textarea class="crm-textarea">Casa de un piso con terraza y patio privado.</textarea></div>
            <div style="display:flex;gap:10px;padding-top:6px;border-top:1px solid var(--borde);">
              <button type="button" class="crm-btn crm-btn-primary" data-edit-group="botones">${ICONS.check} Guardar cambios</button>
              <button type="button" class="crm-btn crm-btn-outline">Cancelar</button>
            </div>
          </div>
          <div style="display:flex;flex-direction:column;gap:14px;">
            <div class="crm-card" style="display:flex;flex-direction:column;gap:10px;" data-edit-group="fondos">
              <div style="border-radius:9px;overflow:hidden;">${ILLUSTRATIONS.casa}</div>
              <div>${badge('verde', 'Publicada')}</div>
              <div class="crm-cell-sub">3 fotos cargadas</div>
              <button type="button" class="crm-btn crm-btn-outline" style="align-self:flex-start;" data-goto-screen="06">Gestionar fotos</button>
            </div>
            <div class="crm-card" style="display:flex;flex-direction:column;gap:10px;" data-edit-group="avisos">
              <h3 class="crm-section-title" style="font-size:15px;">Eliminar propiedad</h3>
              <p class="crm-cell-sub" style="line-height:1.5;">La propiedad saldrá de tu cartera. Sus solicitudes se conservarán.</p>
              <button type="button" class="crm-btn crm-btn-soft-danger" style="align-self:flex-start;" data-edit-group="avisos">Eliminar propiedad</button>
            </div>
          </div>
        </div>
      `;

      const mobileContent = `
        <div><h1 class="crm-page-title">Editar propiedad</h1><p class="crm-page-sub">Calle Los Robles 123, Concepción</p></div>
        <div style="display:flex;gap:8px;">
          <button type="button" class="crm-pill-tab active-soft">Datos</button>
          <button type="button" class="crm-pill-tab" data-goto-screen="06">Fotos</button>
        </div>
        <div class="crm-card" style="display:flex;flex-direction:column;gap:11px;padding:15px;" data-edit-group="fondos">
          <h2 class="crm-section-title" style="font-size:15.5px;">Datos de la propiedad</h2>
          <div class="crm-field"><label class="crm-label">Dirección</label><input class="crm-input" value="Calle Los Robles 123" /></div>
          <div class="crm-field"><label class="crm-label">Comuna</label><select class="crm-select"><option>Concepción</option></select></div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
            <div class="crm-field"><label class="crm-label">Tipo</label><select class="crm-select"><option>Casa</option></select></div>
            <div class="crm-field"><label class="crm-label">Operación</label><select class="crm-select"><option>Venta</option></select></div>
          </div>
          <div style="display:grid;grid-template-columns:1.4fr 0.8fr;gap:8px;" data-edit-group="avisos">
            <div class="crm-field">
              <label class="crm-label">Precio</label>
              <input class="crm-input invalid" value="-5.450" />
            </div>
            <div class="crm-field"><label class="crm-label">Moneda</label><select class="crm-select"><option>UF</option></select></div>
          </div>
          <div style="font-size:12px;font-weight:600;color:var(--peligro);margin-top:-6px;" data-edit-group="avisos">Ingresa un precio mayor a cero.</div>
          <div style="display:grid;grid-template-columns:1fr 1fr 1.2fr;gap:8px;">
            <div class="crm-field"><label class="crm-label">Dormitorios</label><input class="crm-input" value="3" /></div>
            <div class="crm-field"><label class="crm-label">Baños</label><input class="crm-input" value="2" /></div>
            <div class="crm-field"><label class="crm-label">Superficie (m²)</label><input class="crm-input" value="108" /></div>
          </div>
          <button type="button" class="crm-btn crm-btn-primary crm-btn-full" data-edit-group="botones">${ICONS.check} Guardar cambios</button>
          <button type="button" class="crm-link" data-goto-screen="03">Ver propiedad ${ICONS.arrowRight}</button>
        </div>
      `;

      return {
        desktop: renderDesktopShell({ role: 'broker', activeNav: 'propiedades', topIcon: 'list', breadcrumb: ['Propiedades', 'Editar'], contentHtml: desktopContent }),
        mobile: renderMobileShell({ role: 'broker', contentHtml: mobileContent })
      };
    }
  },

  // ================= 06 FOTOS Y CARGA =================
  {
    id: '06',
    group: 'Broker (Camila Soto)',
    name: '06 · Broker — Fotos y carga',
    boardTitle: '06 / FOTOS Y CARGA',
    render() {
      const photos = [
        { n: 1, name: 'fachada-principal.jpg', cover: true, art: 'casa', up: false, down: true },
        { n: 2, name: 'living-comedor.jpg', cover: false, art: 'living', up: true, down: true },
        { n: 3, name: 'terraza-patio.jpg', cover: false, art: 'terraza', up: true, down: false }
      ];

      const desktopContent = `
        <div class="crm-page-head">
          <div><h1 class="crm-page-title">Fotos de la propiedad</h1><p class="crm-page-sub">Calle Los Robles 123, Concepción</p></div>
          <button type="button" class="crm-btn crm-btn-outline" data-goto-screen="03">Ver propiedad</button>
        </div>
        <div style="display:flex;gap:8px;">
          <button type="button" class="crm-pill-tab" data-goto-screen="05">Datos</button>
          <button type="button" class="crm-pill-tab active-soft" data-edit-group="botones">Fotos</button>
        </div>
        <div class="crm-two-col">
          <div class="crm-card" style="display:flex;flex-direction:column;gap:12px;" data-edit-group="fondos">
            <div><h2 class="crm-section-title">Galería</h2><p class="crm-section-sub">3 de 10 fotos. La primera se usa como portada.</p></div>
            ${photos
              .map(
                (ph) => `
              <div style="display:flex;align-items:center;gap:12px;padding:12px;border-radius:11px;background:var(--fondo);border:1px solid var(--borde);">
                <span class="crm-icon-box" style="width:26px;height:26px;font-size:12px;font-weight:700;">${ph.n}</span>
                <div style="width:86px;border-radius:7px;overflow:hidden;flex-shrink:0;">${ILLUSTRATIONS[ph.art]}</div>
                <div style="flex:1;min-width:0;">
                  <div class="crm-cell-primary">${ph.name}</div>
                  ${ph.cover ? `<div style="font-size:12px;color:var(--azul-600);font-weight:600;">Foto de portada</div>` : ''}
                  <div style="display:flex;gap:6px;margin-top:6px;">
                    ${ph.up ? `<button type="button" class="crm-btn crm-btn-outline" style="height:28px;padding:0 10px;font-size:12px;">↑</button>` : ''}
                    ${ph.down ? `<button type="button" class="crm-btn crm-btn-outline" style="height:28px;padding:0 10px;font-size:12px;">↓</button>` : ''}
                  </div>
                </div>
                <button type="button" style="background:none;border:none;color:var(--peligro);font-weight:600;font-size:12.5px;cursor:pointer;" data-edit-group="avisos">Eliminar</button>
              </div>`
              )
              .join('')}
          </div>
          <div class="crm-card" style="display:flex;flex-direction:column;gap:14px;" data-edit-group="fondos">
            <div><h2 class="crm-section-title">Agregar fotos</h2><p class="crm-section-sub">JPG, PNG o WebP</p></div>
            <div style="background:var(--azul-50);border:1px solid color-mix(in srgb, var(--azul-600) 25%, var(--borde));border-radius:12px;padding:22px;text-align:center;display:flex;flex-direction:column;align-items:center;gap:8px;" data-edit-group="botones">
              <span style="color:var(--azul-600);width:24px;height:24px;">${ICONS.image}</span>
              <div style="font-weight:600;font-size:13.5px;">Arrastra tus fotos aquí</div>
              <button type="button" class="crm-btn crm-btn-outline" style="height:34px;">Elegir fotos</button>
            </div>
            <div>
              <div style="font-weight:700;font-size:13px;margin-bottom:6px;">Carga en curso</div>
              <div style="font-size:12.5px;color:var(--tinta-600);margin-bottom:8px;">los-robles-123-vista-del-patio-y-acceso-desde-terraza.jpg</div>
              <div style="height:6px;border-radius:999px;background:var(--superficie-tenue);overflow:hidden;">
                <div style="width:68%;height:100%;background:var(--azul-600);" data-edit-group="botones"></div>
              </div>
              <div style="text-align:right;font-size:11.5px;font-weight:600;color:var(--azul-600);margin-top:4px;">68 %</div>
            </div>
            <div style="border-top:1px solid var(--borde);padding-top:12px;display:flex;align-items:center;gap:8px;font-size:13px;">
              <span style="color:var(--exito-texto);width:16px;height:16px;" data-edit-group="avisos">${ICONS.check}</span>
              <div>
                <div class="crm-cell-primary">hall-de-entrada.jpg</div>
                <div style="font-size:12px;color:var(--exito-texto);" data-edit-group="avisos">Cargada</div>
              </div>
            </div>
          </div>
        </div>
      `;

      const mobileContent = `
        <div><h1 class="crm-page-title">Fotos de la propiedad</h1><p class="crm-page-sub">Calle Los Robles 123, Concepción</p></div>
        <div style="display:flex;gap:8px;"><button type="button" class="crm-pill-tab" data-goto-screen="05">Datos</button><button type="button" class="crm-pill-tab active-soft">Fotos</button></div>
        <div class="crm-card" style="padding:14px;display:flex;flex-direction:column;gap:10px;" data-edit-group="fondos">
          <div><div class="crm-section-title" style="font-size:15.5px;">Galería</div><div class="crm-section-sub">3 de 10 fotos · La primera es la portada</div></div>
          ${photos
            .map(
              (ph) => `
            <div style="display:flex;align-items:center;gap:10px;padding:9px;border-radius:9px;background:var(--fondo);border:1px solid var(--borde);">
              <div style="width:62px;border-radius:6px;overflow:hidden;">${ILLUSTRATIONS[ph.art]}</div>
              <div style="flex:1;min-width:0;font-size:12.5px;font-weight:600;"><span style="color:var(--azul-600);margin-right:4px;">${ph.n}</span>${ph.name}</div>
              <span style="color:var(--peligro);font-size:12px;font-weight:600;">Eliminar</span>
            </div>`
            )
            .join('')}
        </div>
        <div class="crm-card" style="padding:14px;display:flex;flex-direction:column;gap:10px;" data-edit-group="fondos">
          <div class="crm-section-title" style="font-size:15.5px;">Agregar fotos</div>
          <button type="button" class="crm-btn crm-btn-outline crm-btn-full">Elegir fotos</button>
          <div style="height:6px;border-radius:999px;background:var(--superficie-tenue);overflow:hidden;"><div style="width:68%;height:100%;background:var(--azul-600);"></div></div>
          <div style="font-size:12px;color:var(--exito-texto);font-weight:600;">✓ hall-de-entrada.jpg · Cargada</div>
        </div>
      `;

      return {
        desktop: renderDesktopShell({ role: 'broker', activeNav: 'propiedades', topIcon: 'list', breadcrumb: ['Propiedades', 'Editar', 'Fotos'], contentHtml: desktopContent }),
        mobile: renderMobileShell({ role: 'broker', contentHtml: mobileContent })
      };
    }
  },

  // ================= 07 SOLICITAR GESTIÓN =================
  {
    id: '07',
    group: 'Broker (Camila Soto)',
    name: '07 · Broker — Solicitar gestión',
    boardTitle: '07 / BROKER · SOLICITAR GESTIÓN',
    render() {
      const tipos = [
        { label: 'Tasación', checked: true },
        { label: 'Estudio de título', checked: true },
        { label: 'Contrato', checked: false },
        { label: 'Marketing', checked: false },
        { label: 'Otro', checked: false }
      ];

      const desktopContent = `
        <div data-edit-group="textos">
          <h1 class="crm-page-title">Solicitar gestión</h1>
          <p class="crm-page-sub">Envía una solicitud al equipo Vectorial.</p>
        </div>
        <div class="crm-two-col">
          <div class="crm-card" style="display:flex;flex-direction:column;gap:14px;" data-edit-group="fondos">
            <div><h2 class="crm-section-title">Tipos de gestión</h2><p class="crm-section-sub">Puedes elegir más de un tipo.</p></div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
              ${tipos
                .map(
                  (t) => `
                <div class="crm-check-card ${t.checked ? 'checked' : ''}" data-edit-group="botones">
                  <span class="crm-checkbox-box">${t.checked ? `<svg viewBox="0 0 16 16" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="3 8 6.5 11.5 13 4.5"/></svg>` : ''}</span>
                  <span>${t.label}</span>
                </div>`
                )
                .join('')}
            </div>
            <div style="border-top:1px solid var(--borde);padding-top:12px;" class="crm-field">
              <label class="crm-label">Propiedad (opcional)</label>
              <select class="crm-select"><option>Calle Los Robles 123, Concepción</option></select>
            </div>
            <div class="crm-field">
              <label class="crm-label">Notas</label>
              <textarea class="crm-textarea" placeholder="Ej. Confirmar el horario de la visita."></textarea>
              <span class="crm-help">Obligatorias si eliges «Otro».</span>
            </div>
            <div style="display:flex;justify-content:space-between;align-items:center;padding-top:4px;">
              <button type="button" class="crm-btn crm-btn-outline" data-goto-screen="08">Cancelar</button>
              <button type="button" class="crm-btn crm-btn-primary" data-edit-group="botones">${ICONS.plus} Solicitar gestión</button>
            </div>
          </div>

          <div class="crm-kpi-featured" style="min-height:auto;padding:20px;" data-edit-group="destacada">
            <div style="font-family:var(--font-titulares);font-size:16px;font-weight:700;">2 gestiones seleccionadas</div>
            <div style="font-size:13px;opacity:0.92;">Tasación y Estudio de título</div>
            <div style="font-size:12.5px;opacity:0.85;margin-top:4px;">Se creará una solicitud por cada tipo.</div>
          </div>
        </div>
      `;

      const mobileContent = `
        <div><h1 class="crm-page-title">Solicitar gestión</h1><p class="crm-page-sub">Envía una solicitud al equipo Vectorial.</p></div>
        <div class="crm-card" style="padding:15px;display:flex;flex-direction:column;gap:12px;" data-edit-group="fondos">
          <div><div class="crm-section-title" style="font-size:15.5px;">Tipos de gestión</div><div class="crm-section-sub">Puedes elegir más de un tipo.</div></div>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">
            ${tipos
              .map(
                (t) => `
              <div class="crm-check-card ${t.checked ? 'checked' : ''}" style="height:40px;padding:0 10px;font-size:12.5px;">
                <span class="crm-checkbox-box">${t.checked ? '✓' : ''}</span><span>${t.label}</span>
              </div>`
              )
              .join('')}
          </div>
          <div class="crm-field"><label class="crm-label">Propiedad (opcional)</label><select class="crm-select"><option>Calle Los Robles 123, Concepción</option></select></div>
          <div class="crm-field"><label class="crm-label">Notas</label><textarea class="crm-textarea" style="min-height:68px;" placeholder="Ej. Confirmar el horario de la visita."></textarea></div>
          <div style="font-size:12.5px;font-weight:600;">Se enviarán 2 solicitudes.</div>
          <button type="button" class="crm-btn crm-btn-primary crm-btn-full" data-edit-group="botones">${ICONS.plus} Solicitar gestión</button>
          <button type="button" class="crm-btn crm-btn-outline crm-btn-full">Cancelar</button>
        </div>
      `;

      return {
        desktop: renderDesktopShell({ role: 'broker', activeNav: 'solicitudes', topIcon: 'list', breadcrumb: ['Mis solicitudes', 'Solicitar gestión'], contentHtml: desktopContent }),
        mobile: renderMobileShell({ role: 'broker', contentHtml: mobileContent })
      };
    }
  },

  // ================= 08 MIS SOLICITUDES =================
  {
    id: '08',
    group: 'Broker (Camila Soto)',
    name: '08 · Broker — Mis solicitudes',
    boardTitle: '08 / BROKER · MIS SOLICITUDES',
    render() {
      const desktopContent = `
        <div class="crm-page-head">
          <div><h1 class="crm-page-title">Mis solicitudes</h1><p class="crm-page-sub">Consulta el estado de las gestiones que has solicitado.</p></div>
          <button type="button" class="crm-btn crm-btn-primary" data-goto-screen="07" data-edit-group="botones">${ICONS.plus} Solicitar gestión</button>
        </div>
        <div class="crm-card-flush" data-edit-group="fondos">
          <div class="crm-list-header"><div><h2 class="crm-section-title">Historial de solicitudes</h2><p class="crm-section-sub">De la más reciente a la más antigua</p></div></div>
          <table class="crm-table">
            <thead><tr><th>Gestión / Notas</th><th>Propiedad</th><th>Fecha de solicitud</th><th>Estado</th></tr></thead>
            <tbody>
              ${BROKER_REQUESTS.map(
                (r) => `
                <tr>
                  <td><div class="crm-cell-primary">${r.tipo}</div>${r.nota ? `<div class="crm-cell-sub">${r.nota}</div>` : ''}</td>
                  <td><div>${r.prop}</div><div class="crm-cell-sub">${r.comuna}</div></td>
                  <td><div>${r.fecha}</div><div class="crm-cell-sub">${r.hora}</div></td>
                  <td>${badge(r.b, r.estado)}</td>
                </tr>`
              ).join('')}
            </tbody>
          </table>
        </div>
      `;

      const mobileContent = `
        <div><h1 class="crm-page-title">Mis solicitudes</h1><p class="crm-page-sub">Consulta el estado de tus gestiones.</p></div>
        <button type="button" class="crm-btn crm-btn-primary crm-btn-full" data-goto-screen="07" data-edit-group="botones">${ICONS.plus} Solicitar gestión</button>
        <div><h2 class="crm-section-title">Historial de solicitudes</h2><p class="crm-section-sub">De la más reciente a la más antigua</p></div>
        ${BROKER_REQUESTS.map(
          (r) => `
          <div class="crm-mobile-list-card" data-edit-group="fondos">
            <div style="display:flex;justify-content:space-between;align-items:center;"><span class="crm-cell-primary">${r.tipo}</span>${badge(r.b, r.estado)}</div>
            <div style="font-size:12.5px;color:var(--tinta-600);">${r.prop}</div>
            <div style="font-size:11.5px;color:var(--tinta-600);">${r.fecha} · ${r.hora}</div>
            ${r.nota ? `<div style="border-top:1px solid var(--borde);padding-top:6px;font-size:12px;color:var(--tinta-600);">${r.nota}</div>` : ''}
          </div>`
        ).join('')}
      `;

      return {
        desktop: renderDesktopShell({ role: 'broker', activeNav: 'solicitudes', topIcon: 'list', breadcrumb: ['Mis solicitudes'], contentHtml: desktopContent }),
        mobile: renderMobileShell({ role: 'broker', contentHtml: mobileContent })
      };
    }
  },

  // ================= 09 MI PERFIL =================
  {
    id: '09',
    group: 'Broker (Camila Soto)',
    name: '09 · Broker — Mi perfil',
    boardTitle: '09 / BROKER · MI PERFIL',
    render() {
      const desktopContent = `
        <div><h1 class="crm-page-title">Mi perfil</h1><p class="crm-page-sub">Actualiza los datos que usa el equipo Vectorial para contactarte.</p></div>
        <div class="crm-card" style="display:flex;align-items:center;gap:14px;" data-edit-group="fondos">
          <span class="crm-avatar lg">${ICONS.avatarSilhouette}</span>
          <div><div style="font-family:var(--font-titulares);font-size:18px;font-weight:700;">Camila Soto</div><div class="crm-cell-sub">Broker</div></div>
        </div>
        <div class="crm-two-col">
          <div class="crm-card" style="display:flex;flex-direction:column;gap:14px;" data-edit-group="fondos">
            <h2 class="crm-section-title">Datos de contacto</h2>
            <div class="crm-field"><label class="crm-label">Nombre completo</label><input class="crm-input" value="Camila Soto" /></div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
              <div class="crm-field"><label class="crm-label">Teléfono</label><input class="crm-input" value="+56 9 0000 0000" /></div>
              <div class="crm-field"><label class="crm-label">Comuna</label><select class="crm-select"><option>Concepción</option></select></div>
            </div>
            <div style="border-top:1px solid var(--borde);padding-top:12px;display:flex;justify-content:flex-end;">
              <button type="button" class="crm-btn crm-btn-primary" data-edit-group="botones">${ICONS.check} Guardar cambios</button>
            </div>
          </div>
          <div class="crm-card" style="display:flex;flex-direction:column;gap:12px;" data-edit-group="fondos">
            <h2 class="crm-section-title">Datos de la cuenta</h2>
            <div><div class="crm-cell-sub">Correo electrónico</div><div class="crm-cell-primary" style="margin-top:2px;">camila.soto@example.test</div></div>
            <div style="border-top:1px solid var(--borde);padding-top:12px;"><div class="crm-cell-sub">Rol</div><div class="crm-cell-primary" style="margin-top:2px;">Broker</div></div>
          </div>
        </div>
      `;

      const mobileContent = `
        <div><h1 class="crm-page-title">Mi perfil</h1><p class="crm-page-sub">Actualiza tus datos de contacto.</p></div>
        <div class="crm-card" style="display:flex;align-items:center;gap:12px;padding:14px;" data-edit-group="fondos">
          <span class="crm-avatar lg">${ICONS.avatarSilhouette}</span>
          <div><div style="font-family:var(--font-titulares);font-size:16px;font-weight:700;">Camila Soto</div><div class="crm-cell-sub">Broker</div></div>
        </div>
        <div class="crm-card" style="display:flex;flex-direction:column;gap:12px;padding:15px;" data-edit-group="fondos">
          <h2 class="crm-section-title" style="font-size:15.5px;">Datos de contacto</h2>
          <div class="crm-field"><label class="crm-label">Nombre completo</label><input class="crm-input" value="Camila Soto" /></div>
          <div class="crm-field"><label class="crm-label">Teléfono</label><input class="crm-input" value="+56 9 0000 0000" /></div>
          <div class="crm-field"><label class="crm-label">Comuna</label><select class="crm-select"><option>Concepción</option></select></div>
          <button type="button" class="crm-btn crm-btn-primary crm-btn-full" data-edit-group="botones">${ICONS.check} Guardar cambios</button>
        </div>
        <div class="crm-card" style="padding:15px;display:flex;flex-direction:column;gap:10px;" data-edit-group="fondos">
          <h2 class="crm-section-title" style="font-size:15.5px;">Datos de la cuenta</h2>
          <div><div class="crm-cell-sub">Correo electrónico</div><div class="crm-cell-primary">camila.soto@example.test</div></div>
          <div style="border-top:1px solid var(--borde);padding-top:8px;display:flex;justify-content:space-between;"><span class="crm-cell-sub">Rol</span><span class="crm-cell-primary">Broker</span></div>
        </div>
      `;

      return {
        desktop: renderDesktopShell({ role: 'broker', activeNav: 'perfil', topIcon: 'user', breadcrumb: ['Mi perfil'], contentHtml: desktopContent }),
        mobile: renderMobileShell({ role: 'broker', contentHtml: mobileContent })
      };
    }
  },

  // ================= 10 ADMIN INICIO =================
  {
    id: '10',
    group: 'Administrador (Equipo Vectorial)',
    name: '10 · Admin — Inicio',
    boardTitle: '10 / ADMINISTRACIÓN · INICIO',
    render() {
      const desktopContent = `
        <div data-edit-group="textos">
          <h1 class="crm-page-title">Panel de Vectorial</h1>
          <p class="crm-page-sub">Sigue las solicitudes de gestión y la activación de brokers.</p>
        </div>
        <div class="crm-kpi-grid">
          <div class="crm-kpi-featured" data-goto-screen="11" data-edit-group="destacada" style="cursor:pointer;">
            <span class="kpi-label">Solicitudes pendientes</span>
            <span class="kpi-val">4</span>
            <span class="kpi-foot">Ver solicitudes pendientes ${ICONS.arrowRight}</span>
            <div class="kpi-curves">${ICONS.curves}</div>
          </div>
          <div class="crm-kpi-normal" data-edit-group="fondos">
            <div class="crm-kpi-top"><span class="kpi-label">En proceso</span><span class="crm-icon-box" data-edit-group="botones">${ICONS.clock}</span></div>
            <span class="kpi-val">3</span>
            <span class="kpi-foot">Gestiones en curso</span>
          </div>
          <div class="crm-kpi-normal" data-edit-group="fondos">
            <div class="crm-kpi-top"><span class="kpi-label">Cerradas</span><span class="crm-icon-box" data-edit-group="botones">${ICONS.check}</span></div>
            <span class="kpi-val">8</span>
            <span class="kpi-foot">Resueltas o facturadas</span>
          </div>
        </div>

        <div class="crm-card" data-edit-group="fondos">
          <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:14px;">
            <div><h2 class="crm-section-title">Activación de brokers</h2><p class="crm-section-sub">Durante los primeros 30 días</p></div>
            <button type="button" class="crm-link" data-goto-screen="13">Ver brokers ${ICONS.arrowRight}</button>
          </div>
          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px;">
            <div><div class="crm-cell-sub">Registrados</div><div class="crm-cell-primary" style="font-size:15px;margin-top:2px;">24 brokers</div></div>
            <div style="border-left:1px solid var(--borde);padding-left:16px;"><div class="crm-cell-sub">Activados</div><div class="crm-cell-primary" style="font-size:15px;margin-top:2px;">13 brokers</div></div>
            <div style="border-left:1px solid var(--borde);padding-left:16px;"><div class="crm-cell-sub">En plazo</div><div class="crm-cell-primary" style="font-size:15px;margin-top:2px;">7 brokers</div></div>
          </div>
        </div>

        <div class="crm-card-flush" data-edit-group="fondos">
          <div class="crm-list-header">
            <h2 class="crm-section-title">Últimas solicitudes</h2>
            <button type="button" class="crm-link" data-goto-screen="11">Ver todas ${ICONS.arrowRight}</button>
          </div>
          <table class="crm-table">
            <thead><tr><th>Gestión / Broker</th><th>Propiedad</th><th>Fecha</th><th>Estado</th><th></th></tr></thead>
            <tbody>
              ${ADMIN_REQUESTS.slice(0, 3)
                .map(
                  (r) => `
                <tr>
                  <td><div class="crm-cell-primary">${r.tipo}</div><div class="crm-cell-sub">${r.broker}</div></td>
                  <td><div>${r.prop}</div><div class="crm-cell-sub">${r.comuna}</div></td>
                  <td style="color:var(--tinta-600);">${r.fecha}</td>
                  <td>${badge(r.b, r.estado)}</td>
                  <td style="text-align:right;"><button type="button" class="crm-link" data-goto-screen="12">Ver detalle ${ICONS.arrowRight}</button></td>
                </tr>`
                )
                .join('')}
            </tbody>
          </table>
        </div>
      `;

      const mobileContent = `
        <div><h1 class="crm-page-title">Panel de Vectorial</h1><p class="crm-page-sub">Solicitudes y activación de brokers.</p></div>
        <div class="crm-mobile-kpi-pair">
          <div class="crm-kpi-featured" data-edit-group="destacada"><span class="kpi-label" style="font-size:12px;">Solicitudes pendientes</span><span class="kpi-val">4</span></div>
          <div class="crm-kpi-normal" data-edit-group="fondos"><span class="kpi-label" style="font-size:12px;">En proceso</span><span class="kpi-val">3</span></div>
        </div>
        <div class="crm-mobile-kpi-row" data-edit-group="fondos">
          <span style="color:var(--azul-600);width:18px;height:18px;">${ICONS.check}</span>
          <span style="flex:1;font-size:13px;color:var(--tinta-600);font-weight:500;">Gestiones cerradas</span>
          <span style="font-size:20px;font-weight:300;">8</span>
        </div>
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <h2 class="crm-section-title">Últimas solicitudes</h2>
          <button type="button" class="crm-link" data-goto-screen="11">Ver todas</button>
        </div>
        ${ADMIN_REQUESTS.slice(0, 2)
          .map(
            (r) => `
          <div class="crm-mobile-list-card" data-edit-group="fondos">
            <div style="display:flex;justify-content:space-between;align-items:center;"><span class="crm-cell-primary">${r.tipo}</span>${badge(r.b, r.estado)}</div>
            <div class="crm-cell-sub">${r.broker}</div>
            <div class="crm-cell-sub">${r.prop}</div>
            <div style="border-top:1px solid var(--borde);padding-top:7px;display:flex;justify-content:space-between;align-items:center;">
              <button type="button" class="crm-link" data-goto-screen="12">Ver detalle</button>
              <span class="crm-cell-sub">${r.fecha}</span>
            </div>
          </div>`
          )
          .join('')}
        <div class="crm-card" style="padding:14px;" data-edit-group="fondos">
          <div style="display:flex;justify-content:space-between;align-items:center;"><span class="crm-section-title" style="font-size:15px;">Activación de brokers</span><button type="button" class="crm-link" data-goto-screen="13">Ver brokers</button></div>
          <div class="crm-section-sub" style="margin-bottom:10px;">Primeros 30 días</div>
          <div style="display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid var(--borde);padding-top:10px;font-size:12px;">
            <div><div class="crm-cell-sub">Registro</div><strong>24</strong></div>
            <div><div class="crm-cell-sub">Activados</div><strong>13</strong></div>
            <div><div class="crm-cell-sub">En plazo</div><strong>7</strong></div>
          </div>
        </div>
      `;

      return {
        desktop: renderDesktopShell({ role: 'admin', activeNav: 'inicio', topIcon: 'home', breadcrumb: ['Inicio'], contentHtml: desktopContent }),
        mobile: renderMobileShell({ role: 'admin', contentHtml: mobileContent })
      };
    }
  },

  // ================= 11 ADMIN SOLICITUDES =================
  {
    id: '11',
    group: 'Administrador (Equipo Vectorial)',
    name: '11 · Admin — Solicitudes',
    boardTitle: '11 / ADMINISTRACIÓN · SOLICITUDES',
    render() {
      const desktopContent = `
        <div><h1 class="crm-page-title">Solicitudes de gestión</h1><p class="crm-page-sub">Consulta el estado de las solicitudes de los brokers y gestiona sus derivaciones.</p></div>
        <div style="display:flex;gap:8px;flex-wrap:wrap;">
          <button type="button" class="crm-pill-tab active-solid" data-edit-group="botones">Todas</button>
          <button type="button" class="crm-pill-tab">Pendiente</button>
          <button type="button" class="crm-pill-tab">En proceso</button>
          <button type="button" class="crm-pill-tab" data-goto-screen="16">Resuelta</button>
          <button type="button" class="crm-pill-tab">Facturada</button>
        </div>
        <div class="crm-card-flush" data-edit-group="fondos">
          <div class="crm-list-header"><h2 class="crm-section-title">Solicitudes recibidas</h2><span class="crm-cell-sub">Más recientes primero</span></div>
          <table class="crm-table">
            <thead><tr><th>Gestión / Broker</th><th>Propiedad</th><th>Fecha</th><th>Estado</th><th></th></tr></thead>
            <tbody>
              ${ADMIN_REQUESTS.map(
                (r) => `
                <tr>
                  <td><div class="crm-cell-primary">${r.tipo}</div><div class="crm-cell-sub">${r.broker}</div></td>
                  <td><div>${r.prop}</div><div class="crm-cell-sub">${r.comuna}</div></td>
                  <td style="color:var(--tinta-600);">${r.fecha}</td>
                  <td>${badge(r.b, r.estado)}</td>
                  <td style="text-align:right;"><button type="button" class="crm-link" data-goto-screen="12">Ver detalle ${ICONS.arrowRight}</button></td>
                </tr>`
              ).join('')}
            </tbody>
          </table>
        </div>
      `;

      const mobileContent = `
        <div><h1 class="crm-page-title">Solicitudes de gestión</h1><p class="crm-page-sub">Consulta las gestiones de los brokers.</p></div>
        <div class="crm-field"><label class="crm-label">Filtrar por estado</label><select class="crm-select"><option>Todas</option></select></div>
        <div><h2 class="crm-section-title">Solicitudes recibidas</h2><p class="crm-section-sub">Más recientes primero</p></div>
        ${ADMIN_REQUESTS.slice(0, 4)
          .map(
            (r) => `
          <div class="crm-mobile-list-card" data-edit-group="fondos">
            <div style="display:flex;justify-content:space-between;align-items:center;"><span class="crm-cell-primary">${r.tipo}</span>${badge(r.b, r.estado)}</div>
            <div class="crm-cell-sub">${r.broker}</div>
            <div class="crm-cell-sub">${r.prop}</div>
            <div style="border-top:1px solid var(--borde);padding-top:7px;display:flex;justify-content:space-between;align-items:center;">
              <button type="button" class="crm-link" data-goto-screen="12">Ver detalle</button>
              <span class="crm-cell-sub">${r.fecha}</span>
            </div>
          </div>`
          )
          .join('')}
      `;

      return {
        desktop: renderDesktopShell({ role: 'admin', activeNav: 'solicitudes', topIcon: 'list', breadcrumb: ['Solicitudes'], contentHtml: desktopContent }),
        mobile: renderMobileShell({ role: 'admin', contentHtml: mobileContent })
      };
    }
  },

  // ================= 12 ADMIN DETALLE DE SOLICITUD =================
  {
    id: '12',
    group: 'Administrador (Equipo Vectorial)',
    name: '12 · Admin — Detalle de solicitud',
    boardTitle: '12 / ADMINISTRACIÓN · DETALLE DE SOLICITUD',
    render() {
      const desktopContent = `
        <div>
          <h1 class="crm-page-title">Tasación · Camila Soto</h1>
          <p class="crm-page-sub">Calle Los Robles 123, Concepción</p>
          <div style="margin-top:10px;">${badge('ambar', 'Pendiente')}</div>
        </div>
        <div class="crm-two-col">
          <div style="display:flex;flex-direction:column;gap:14px;">
            <div class="crm-card" style="display:flex;flex-direction:column;gap:14px;" data-edit-group="fondos">
              <h2 class="crm-section-title">Resumen de la gestión</h2>
              <div style="border-top:1px solid var(--borde);padding-top:12px;display:grid;grid-template-columns:1fr 1fr;gap:14px;">
                <div><div class="crm-cell-sub">Fecha de solicitud</div><div class="crm-cell-primary" style="margin-top:2px;">19 nov 2026 · 10:42</div></div>
                <div><div class="crm-cell-sub">Origen</div><div class="crm-cell-primary" style="margin-top:2px;">Formulario</div></div>
                <div><div class="crm-cell-sub">Fecha de resolución</div><div class="crm-cell-primary" style="margin-top:2px;">Sin resolver</div></div>
                <div><div class="crm-cell-sub">Proveedor asignado</div><div class="crm-cell-primary" style="margin-top:2px;">Sin proveedor</div></div>
              </div>
            </div>
            <div class="crm-card" style="display:flex;flex-direction:column;gap:12px;" data-edit-group="fondos">
              <h2 class="crm-section-title">Broker</h2>
              <div style="display:flex;align-items:center;gap:10px;">
                <span class="crm-avatar md">${ICONS.avatarSilhouette}</span>
                <div><div class="crm-cell-primary">Camila Soto</div><div class="crm-cell-sub">Concepción</div></div>
              </div>
              <div style="border-top:1px solid var(--borde);padding-top:12px;display:grid;grid-template-columns:1fr 1fr;gap:12px;">
                <div><div class="crm-cell-sub">Correo</div><div class="crm-cell-primary">camila.soto@example.test</div></div>
                <div><div class="crm-cell-sub">Teléfono</div><div class="crm-cell-primary">+56 9 5555 0142</div></div>
              </div>
            </div>
            <div class="crm-card" style="display:flex;flex-direction:column;gap:12px;" data-edit-group="fondos">
              <h2 class="crm-section-title">Propiedad y notas</h2>
              <div style="display:flex;align-items:center;gap:10px;">
                <span class="crm-icon-box">${ICONS.home}</span>
                <div><div class="crm-cell-primary">Calle Los Robles 123</div><div class="crm-cell-sub">Concepción</div></div>
              </div>
              <div style="border-top:1px solid var(--borde);padding-top:10px;font-size:13.5px;color:var(--tinta-600);">Coordinar visita para la próxima semana.</div>
            </div>
          </div>

          <div class="crm-card" style="display:flex;flex-direction:column;gap:14px;" data-edit-group="fondos">
            <h2 class="crm-section-title">Estado y proveedor</h2>
            <div class="crm-field"><label class="crm-label">Estado</label><select class="crm-select"><option>Pendiente</option><option>En proceso</option><option>Resuelta</option><option>Facturada</option></select></div>
            <div class="crm-field"><label class="crm-label">Proveedor asignado (opcional)</label><input class="crm-input" placeholder="Sin proveedor" /></div>
            <button type="button" class="crm-btn crm-btn-primary crm-btn-full" data-edit-group="botones">${ICONS.check} Guardar gestión</button>
          </div>
        </div>
      `;

      const mobileContent = `
        <div><h1 class="crm-page-title">Tasación · Camila Soto</h1><p class="crm-page-sub">Calle Los Robles 123, Concepción</p><div style="margin-top:8px;">${badge('ambar', 'Pendiente')}</div></div>
        <div class="crm-card" style="padding:14px;" data-edit-group="fondos">
          <div class="crm-section-title" style="font-size:15px;margin-bottom:10px;">Resumen de la gestión</div>
          <div style="border-top:1px solid var(--borde);padding-top:10px;display:grid;grid-template-columns:1.2fr 0.8fr;gap:8px;font-size:12.5px;">
            <div><div class="crm-cell-sub">Fecha de solicitud</div><strong>19 nov 2026 · 10:42</strong></div>
            <div><div class="crm-cell-sub">Origen</div><strong>Formulario</strong></div>
          </div>
        </div>
        <div class="crm-card" style="padding:14px;display:flex;flex-direction:column;gap:12px;" data-edit-group="fondos">
          <div class="crm-section-title" style="font-size:15px;">Estado y proveedor</div>
          <div class="crm-field"><label class="crm-label">Estado</label><select class="crm-select"><option>Pendiente</option></select></div>
          <div class="crm-field"><label class="crm-label">Proveedor asignado (opcional)</label><input class="crm-input" placeholder="Sin proveedor" /></div>
          <button type="button" class="crm-btn crm-btn-primary crm-btn-full" data-edit-group="botones">${ICONS.check} Guardar gestión</button>
        </div>
        <div class="crm-mobile-kpi-row" style="justify-content:space-between;"><span class="crm-cell-primary" style="font-size:13.5px;">Broker</span><span style="color:var(--azul-600);">∨</span></div>
        <div class="crm-mobile-kpi-row" style="justify-content:space-between;"><span class="crm-cell-primary" style="font-size:13.5px;">Propiedad y notas</span><span style="color:var(--azul-600);">∨</span></div>
      `;

      return {
        desktop: renderDesktopShell({ role: 'admin', activeNav: 'solicitudes', topIcon: 'list', breadcrumb: ['Solicitudes', 'Detalle'], contentHtml: desktopContent }),
        mobile: renderMobileShell({ role: 'admin', contentHtml: mobileContent })
      };
    }
  },

  // ================= 13 ADMIN BROKERS =================
  {
    id: '13',
    group: 'Administrador (Equipo Vectorial)',
    name: '13 · Admin — Brokers',
    boardTitle: '13 / ADMINISTRACIÓN · BROKERS',
    render() {
      const brokers = [
        { name: 'Camila Soto', email: 'camila.soto@example.test', reg: '4 nov 2026', sol: '19 nov 2026', st: 'Activado', b: 'verde' },
        { name: 'Elena Silva', email: 'elena.silva@example.test', reg: '6 nov 2026', sol: '17 nov 2026', st: 'Activado', b: 'verde' },
        { name: 'Eva Torres', email: 'eva.torres@example.test', reg: '16 nov 2026', sol: '—', st: 'En plazo', b: 'azul' },
        { name: 'Mateo Muñoz', email: 'mateo.munoz@example.test', reg: '19 nov 2026', sol: '—', st: 'En plazo', b: 'azul' },
        { name: 'Isabel Moreno', email: 'isabel.moreno@example.test', reg: '3 oct 2026', sol: '6 nov 2026', st: 'No activado', b: 'rojo' }
      ];

      const desktopContent = `
        <div><h1 class="crm-page-title">Brokers</h1><p class="crm-page-sub">Revisa el registro y la primera gestión de cada broker en sus primeros 30 días.</p></div>
        <div class="crm-kpi-grid">
          <div class="crm-kpi-featured" data-edit-group="destacada">
            <span class="kpi-label">Activados a 30 días</span>
            <span class="kpi-val">13</span>
            <span class="kpi-foot">Al menos una gestión solicitada</span>
            <div class="kpi-curves">${ICONS.curves}</div>
          </div>
          <div class="crm-kpi-normal" data-edit-group="fondos">
            <div class="crm-kpi-top"><span class="kpi-label">Registrados</span><span class="crm-icon-box" data-edit-group="botones">${ICONS.user}</span></div>
            <span class="kpi-val">24</span>
            <span class="kpi-foot">Brokers en el CRM</span>
          </div>
          <div class="crm-kpi-normal" data-edit-group="fondos">
            <div class="crm-kpi-top"><span class="kpi-label">En plazo</span><span class="crm-icon-box" data-edit-group="botones">${ICONS.clock}</span></div>
            <span class="kpi-val">7</span>
            <span class="kpi-foot">Dentro de sus primeros 30 días</span>
          </div>
        </div>

        <div class="crm-card-flush" data-edit-group="fondos">
          <div class="crm-list-header"><h2 class="crm-section-title">Registro de brokers</h2></div>
          <table class="crm-table">
            <thead><tr><th>Broker</th><th>Fecha de registro</th><th>Primera solicitud</th><th>Activación</th></tr></thead>
            <tbody>
              ${brokers
                .map(
                  (br) => `
                <tr>
                  <td>
                    <div style="display:flex;align-items:center;gap:10px;">
                      <span class="crm-avatar md">${ICONS.avatarSilhouette}</span>
                      <div><div class="crm-cell-primary">${br.name}</div><div class="crm-cell-sub">${br.email}</div></div>
                    </div>
                  </td>
                  <td style="color:var(--tinta-600);">${br.reg}</td>
                  <td style="color:var(--tinta-600);">${br.sol}</td>
                  <td>${badge(br.b, br.st)}</td>
                </tr>`
                )
                .join('')}
            </tbody>
          </table>
        </div>
      `;

      const mobileContent = `
        <div><h1 class="crm-page-title">Brokers</h1><p class="crm-page-sub">Seguimiento durante los primeros 30 días.</p></div>
        <div class="crm-mobile-kpi-pair">
          <div class="crm-kpi-featured" data-edit-group="destacada"><span class="kpi-label" style="font-size:12px;">Activados a 30 días</span><span class="kpi-val">13</span></div>
          <div class="crm-kpi-normal" data-edit-group="fondos"><span class="kpi-label" style="font-size:12px;">Registrados</span><span class="kpi-val">24</span></div>
        </div>
        <div class="crm-mobile-kpi-row" data-edit-group="fondos">
          <span style="color:var(--azul-600);width:18px;height:18px;">${ICONS.clock}</span>
          <span style="flex:1;font-size:13px;color:var(--tinta-600);font-weight:500;">En plazo</span>
          <span style="font-size:20px;font-weight:300;">7</span>
        </div>
        <h2 class="crm-section-title">Registro de brokers</h2>
        ${brokers
          .slice(0, 4)
          .map(
            (br) => `
          <div class="crm-mobile-list-card" data-edit-group="fondos">
            <div style="display:flex;align-items:center;gap:10px;">
              <span class="crm-avatar">${ICONS.avatarSilhouette}</span>
              <div style="flex:1;min-width:0;"><div class="crm-cell-primary">${br.name}</div><div class="crm-cell-sub">${br.email}</div></div>
              ${badge(br.b, br.st)}
            </div>
            <div style="border-top:1px solid var(--borde);padding-top:7px;display:grid;grid-template-columns:1fr 1fr;font-size:12px;">
              <div><div class="crm-cell-sub">Registrado</div><strong>${br.reg}</strong></div>
              <div><div class="crm-cell-sub">Primera solicitud</div><strong>${br.sol}</strong></div>
            </div>
          </div>`
          )
          .join('')}
      `;

      return {
        desktop: renderDesktopShell({ role: 'admin', activeNav: 'brokers', topIcon: 'user', breadcrumb: ['Brokers'], contentHtml: desktopContent }),
        mobile: renderMobileShell({ role: 'admin', contentHtml: mobileContent })
      };
    }
  },

  // ================= 14 NAVEGACIÓN Y MENÚ MÓVIL =================
  {
    id: '14',
    group: 'Componentes y Estados',
    name: '14 · Navegación y menú móvil',
    boardTitle: '14 / NAVEGACIÓN',
    render() {
      const base = window.CRM_SCREENS[0].render();
      const mobileWithDrawer = renderMobileShell({
        role: 'broker',
        drawerOpen: true,
        contentHtml: `<div><h1 class="crm-page-title">Hola, Camila</h1></div>`
      });
      return {
        desktop: base.desktop,
        mobile: mobileWithDrawer
      };
    }
  },

  // ================= 15 ESTADOS, AVISOS Y CONFIRMACIÓN =================
  {
    id: '15',
    group: 'Componentes y Estados',
    name: '15 · Estados, avisos y confirmación',
    boardTitle: '15 / ESTADOS Y AVISOS',
    render() {
      const desktopContent = `
        <div><h1 class="crm-page-title">Estados y avisos</h1><p class="crm-page-sub">Respuesta del sistema durante los flujos del CRM.</p></div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">
          <div class="crm-card" style="display:flex;flex-direction:column;gap:14px;" data-edit-group="avisos">
            <h2 class="crm-section-title">Confirmación</h2>
            <div class="crm-alert-success">
              <span style="width:26px;height:26px;border-radius:50%;background:rgba(31,99,75,0.12);display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;">✓</span>
              <div>
                <div style="font-weight:700;font-size:14px;">Gestión solicitada</div>
                <div style="font-size:13px;margin-top:2px;opacity:0.9;">La solicitud está disponible en Mis solicitudes.</div>
              </div>
            </div>
            <button type="button" class="crm-link" data-goto-screen="08" style="align-self:flex-start;">Ver mis solicitudes ${ICONS.arrowRight}</button>
          </div>

          <div class="crm-card" style="display:flex;flex-direction:column;gap:12px;" data-edit-group="fondos">
            <h2 class="crm-section-title">Estado vacío</h2>
            <span class="crm-icon-box" data-edit-group="botones">${ICONS.list}</span>
            <div style="font-family:var(--font-titulares);font-weight:700;font-size:15px;">Aún no tienes solicitudes</div>
            <div class="crm-cell-sub">Cuando solicites una gestión, aparecerá aquí.</div>
            <button type="button" class="crm-btn crm-btn-primary" style="align-self:flex-start;" data-goto-screen="07" data-edit-group="botones">${ICONS.plus} Solicitar gestión</button>
          </div>

          <div class="crm-card" style="display:flex;flex-direction:column;gap:12px;" data-edit-group="fondos">
            <div><h2 class="crm-section-title">Cargando</h2><p class="crm-section-sub">Buscando tus solicitudes…</p></div>
            <div style="height:28px;border-radius:8px;background:var(--superficie-tenue);"></div>
            <div style="display:grid;grid-template-columns:1fr 1fr 0.6fr;gap:12px;padding:8px 0;border-bottom:1px solid var(--borde);"><div class="crm-skeleton-bar"></div><div class="crm-skeleton-bar"></div><div class="crm-skeleton-bar" style="height:16px;"></div></div>
            <div style="display:grid;grid-template-columns:1fr 1fr 0.6fr;gap:12px;padding:8px 0;border-bottom:1px solid var(--borde);"><div class="crm-skeleton-bar"></div><div class="crm-skeleton-bar"></div><div class="crm-skeleton-bar" style="height:16px;"></div></div>
            <div style="display:grid;grid-template-columns:1fr 1fr 0.6fr;gap:12px;padding:8px 0;"><div class="crm-skeleton-bar"></div><div class="crm-skeleton-bar"></div><div class="crm-skeleton-bar" style="height:16px;"></div></div>
          </div>

          <div class="crm-card" style="display:flex;flex-direction:column;gap:14px;" data-edit-group="avisos">
            <h2 class="crm-section-title">Error de carga</h2>
            <div class="crm-alert-error">
              <span style="width:26px;height:26px;border-radius:50%;background:rgba(133,47,44,0.12);display:inline-flex;align-items:center;justify-content:center;font-weight:800;flex-shrink:0;">!</span>
              <div>
                <div style="font-weight:700;font-size:14px;">No pudimos cargar tus solicitudes</div>
                <div style="font-size:13px;margin-top:2px;">Inténtalo de nuevo.</div>
              </div>
            </div>
            <button type="button" class="crm-btn crm-btn-outline" style="align-self:flex-start;">Reintentar</button>
          </div>
        </div>
      `;

      const modalHtml = `
        <div style="position:absolute;inset:0;background:rgba(30,41,59,0.48);z-index:25;display:flex;align-items:center;justify-content:center;padding:18px;">
          <div class="crm-card" style="width:100%;display:flex;flex-direction:column;gap:12px;box-shadow:0 20px 40px rgba(0,0,0,0.25);" data-edit-group="avisos">
            <span style="width:34px;height:34px;border-radius:10px;background:var(--error-fondo);color:var(--peligro);display:inline-flex;align-items:center;justify-content:center;font-weight:800;">!</span>
            <h3 class="crm-section-title" style="font-size:18px;">¿Eliminar la foto?</h3>
            <p style="font-size:13px;color:var(--tinta-600);line-height:1.5;">La foto se quitará de la galería.<br/>Esta acción no se puede deshacer.</p>
            <div style="border-top:1px solid var(--borde);padding-top:12px;display:grid;grid-template-columns:1fr 1.2fr;gap:10px;">
              <button type="button" class="crm-btn crm-btn-outline">Cancelar</button>
              <button type="button" class="crm-btn crm-btn-danger" data-edit-group="avisos">Eliminar foto</button>
            </div>
          </div>
        </div>
      `;

      return {
        desktop: renderDesktopShell({ role: 'broker', activeNav: 'solicitudes', topIcon: 'list', breadcrumb: ['Solicitudes'], contentHtml: desktopContent }),
        mobile: renderMobileShell({
          role: 'broker',
          contentHtml: `<div><h1 class="crm-page-title">Editar propiedad</h1><p class="crm-page-sub">Calle Los Robles 123, Concepción</p></div>`,
          modalHtml
        })
      };
    }
  },

  // ================= 16 ADMIN FILTRO SIN RESULTADOS =================
  {
    id: '16',
    group: 'Componentes y Estados',
    name: '16 · Admin — Filtro sin resultados',
    boardTitle: '16 / ADMINISTRACIÓN · FILTRO SIN RESULTADOS',
    render() {
      const desktopContent = `
        <div><h1 class="crm-page-title">Solicitudes de gestión</h1><p class="crm-page-sub">Consulta el estado de las solicitudes de los brokers y gestiona sus derivaciones.</p></div>
        <div style="display:flex;gap:8px;flex-wrap:wrap;">
          <button type="button" class="crm-pill-tab" data-goto-screen="11">Todas</button>
          <button type="button" class="crm-pill-tab">Pendiente</button>
          <button type="button" class="crm-pill-tab">En proceso</button>
          <button type="button" class="crm-pill-tab active-solid" data-edit-group="botones">Resuelta</button>
          <button type="button" class="crm-pill-tab">Facturada</button>
        </div>
        <div class="crm-card-flush" data-edit-group="fondos">
          <div class="crm-list-header" style="border-bottom:1px solid var(--borde);"><h2 class="crm-section-title">Solicitudes recibidas</h2></div>
          <div style="padding:52px 24px;display:flex;flex-direction:column;align-items:center;text-align:center;gap:10px;">
            <span class="crm-icon-box" style="width:42px;height:42px;" data-edit-group="botones">${ICONS.list}</span>
            <h3 class="crm-section-title">Sin solicitudes resueltas</h3>
            <p class="crm-cell-sub">Prueba con otro estado o vuelve a ver todas las solicitudes.</p>
            <button type="button" class="crm-btn crm-btn-outline" style="margin-top:6px;" data-goto-screen="11">Ver todas las solicitudes</button>
          </div>
        </div>
      `;

      const mobileContent = `
        <div><h1 class="crm-page-title">Solicitudes de gestión</h1><p class="crm-page-sub">Consulta las gestiones de los brokers.</p></div>
        <div class="crm-field"><label class="crm-label">Filtrar por estado</label><select class="crm-select"><option>Resuelta</option></select></div>
        <h2 class="crm-section-title">Solicitudes recibidas</h2>
        <div class="crm-card" style="display:flex;flex-direction:column;gap:10px;" data-edit-group="fondos">
          <span class="crm-icon-box" data-edit-group="botones">${ICONS.list}</span>
          <div class="crm-section-title" style="font-size:15.5px;">Sin solicitudes resueltas</div>
          <p class="crm-cell-sub">Prueba con otro estado o vuelve a ver todas las solicitudes.</p>
          <button type="button" class="crm-btn crm-btn-outline" style="align-self:flex-start;" data-goto-screen="11">Ver todas las solicitudes</button>
        </div>
      `;

      return {
        desktop: renderDesktopShell({ role: 'admin', activeNav: 'solicitudes', topIcon: 'list', breadcrumb: ['Solicitudes'], contentHtml: desktopContent }),
        mobile: renderMobileShell({ role: 'admin', contentHtml: mobileContent })
      };
    }
  }
];

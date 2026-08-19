/* Demo local del Sistema de Control de Acceso Vehicular.
   No realiza peticiones ni guarda datos fuera de esta pestaña. */

const now = new Date();
const todayAt = (hours, minutes = 0) => {
  const date = new Date(now);
  date.setHours(hours, minutes, 0, 0);
  return date;
};

const DEMO_ACCOUNTS = {
  admin: { username: 'admin', password: 'cambiar123456', name: 'Administrador', role: 'admin', title: 'Dashboard Administrador' },
  supervisor: { username: 'supervisor', password: 'supervisor123456', name: 'Supervisor', role: 'supervisor', title: 'Dashboard Supervisor' },
  operador: { username: 'operador', password: 'operador123456', name: 'Operador', role: 'operador', title: 'Dashboard Operador' },
};

const state = {
  user: DEMO_ACCOUNTS.admin.name,
  username: DEMO_ACCOUNTS.admin.username,
  role: DEMO_ACCOUNTS.admin.role,
  threshold: 6,
  photoSelected: false,
  records: [
    { id: 12, enteredAt: todayAt(14, 15), exitedAt: null, conductor: 'Camila Fuentes', rut: '17.845.632-1', phone: '+56 9 7356 4412', companions: '—', purpose: 'Entrega de mercadería', origin: 'CD Sur', plate: 'RKTC42', type: 'Camión', brand: 'Mercedes-Benz Atego', photo: true, createdBy: 'admin.demo' },
    { id: 11, enteredAt: todayAt(12, 40), exitedAt: null, conductor: 'Matías Rojas', rut: '16.234.887-4', phone: '+56 9 6120 0534', companions: 'Pedro Lagos', purpose: 'Mantenimiento', origin: 'Servicios Externos', plate: 'KSDP77', type: 'Furgón', brand: 'Peugeot Partner', photo: true, createdBy: 'admin.demo' },
    { id: 10, enteredAt: todayAt(10, 5), exitedAt: null, conductor: 'Daniela Muñoz', rut: '18.992.531-8', phone: '+56 9 8230 5148', companions: '—', purpose: 'Visita', origin: 'Particular', plate: 'LVRH18', type: 'Auto', brand: 'Toyota Yaris', photo: false, createdBy: 'operador.1' },
    { id: 9, enteredAt: todayAt(7, 20), exitedAt: null, conductor: 'Ignacio Araya', rut: '15.604.320-7', phone: '+56 9 4908 7653', companions: '—', purpose: 'Retiro', origin: 'Proveedor Norte', plate: 'HJPC65', type: 'Camioneta', brand: 'Nissan Navara', photo: true, createdBy: 'operador.1' },
    { id: 8, enteredAt: todayAt(8, 45), exitedAt: todayAt(10, 32), conductor: 'Valentina Soto', rut: '19.204.366-9', phone: '+56 9 7843 2260', companions: '—', purpose: 'Entrega de mercadería', origin: 'CD Sur', plate: 'PPZX40', type: 'Camión', brand: 'Volvo VM', photo: true, createdBy: 'admin.demo' },
    { id: 7, enteredAt: todayAt(8, 4), exitedAt: todayAt(9, 20), conductor: 'Cristóbal Vera', rut: '14.529.102-3', phone: '+56 9 6699 1152', companions: '—', purpose: 'Visita', origin: 'Particular', plate: 'GDWJ92', type: 'Auto', brand: 'Mazda 3', photo: false, createdBy: 'operador.1' },
    { id: 6, enteredAt: todayAt(7, 35), exitedAt: todayAt(11, 40), conductor: 'Francisco Silva', rut: '13.987.231-5', phone: '+56 9 5576 0108', companions: 'Luis Espinoza', purpose: 'Entrega de mercadería', origin: 'Proveedor Norte', plate: 'BTKZ84', type: 'Camión', brand: 'Scania P 250', photo: true, createdBy: 'admin.demo' },
    { id: 5, enteredAt: todayAt(6, 50), exitedAt: todayAt(8, 18), conductor: 'Antonia Pérez', rut: '20.120.638-2', phone: '+56 9 8843 9034', companions: '—', purpose: 'Mantenimiento', origin: 'Planta Central', plate: 'SYHD29', type: 'Furgón', brand: 'Renault Kangoo', photo: true, createdBy: 'operador.1' },
    { id: 4, enteredAt: todayAt(6, 20), exitedAt: todayAt(7, 35), conductor: 'Javiera Castro', rut: '18.346.120-6', phone: '+56 9 7012 6370', companions: '—', purpose: 'Entrega de mercadería', origin: 'CD Sur', plate: 'TJKD56', type: 'Camioneta', brand: 'Kia Frontier', photo: true, createdBy: 'admin.demo' },
    { id: 3, enteredAt: todayAt(5, 55), exitedAt: todayAt(6, 38), conductor: 'Rodrigo López', rut: '12.843.512-0', phone: '+56 9 6204 5768', companions: '—', purpose: 'Retiro', origin: 'Planta Central', plate: 'BKFP13', type: 'Camioneta', brand: 'Chevrolet D-Max', photo: true, createdBy: 'operador.1' },
    { id: 2, enteredAt: todayAt(5, 10), exitedAt: todayAt(6, 14), conductor: 'Fernanda Díaz', rut: '17.310.445-9', phone: '+56 9 4955 3879', companions: '—', purpose: 'Visita', origin: 'Servicios Externos', plate: 'ZJHT34', type: 'Auto', brand: 'Hyundai Accent', photo: false, createdBy: 'admin.demo' },
    { id: 1, enteredAt: todayAt(4, 35), exitedAt: todayAt(5, 25), conductor: 'Sebastián Torres', rut: '16.299.842-6', phone: '+56 9 6288 0381', companions: '—', purpose: 'Entrega de mercadería', origin: 'CD Sur', plate: 'RVPK91', type: 'Camión', brand: 'MAN TGM', photo: false, createdBy: 'operador.1' },
  ],
  users: [
    { name: 'Administrador', username: 'admin', role: 'admin', status: 'Activo' },
    { name: 'Supervisor', username: 'supervisor', role: 'supervisor', status: 'Activo' },
    { name: 'Operador', username: 'operador', role: 'operador', status: 'Activo' },
  ],
  blacklist: [
    { id: 2, plate: 'JKLP35', reason: 'Incidente de seguridad 06/2026', addedBy: 'admin.demo', date: todayAt(8, 10) },
    { id: 1, plate: 'ABCD12', reason: 'Acceso restringido por administración', addedBy: 'admin.demo', date: todayAt(7, 45) },
  ],
  audit: [
    { id: 6, date: todayAt(14, 15), user: 'admin.demo', action: 'REGISTRO CREADO', detail: 'Ingreso registrado: RKTC42 — Camila Fuentes', ip: '127.0.0.1' },
    { id: 5, date: todayAt(12, 40), user: 'admin.demo', action: 'REGISTRO CREADO', detail: 'Ingreso registrado: KSDP77 — Matías Rojas', ip: '127.0.0.1' },
    { id: 4, date: todayAt(10, 32), user: 'operador.1', action: 'SALIDA REGISTRADA', detail: 'Salida registrada: PPZX40 — Valentina Soto', ip: '127.0.0.1' },
    { id: 3, date: todayAt(9, 10), user: 'admin.demo', action: 'LISTA NEGRA', detail: 'Patente ABCD12 agregada a lista negra', ip: '127.0.0.1' },
    { id: 2, date: todayAt(8, 5), user: 'admin.demo', action: 'USUARIO CREADO', detail: 'Usuario supervisor.1 creado con rol supervisor', ip: '127.0.0.1' },
    { id: 1, date: todayAt(7, 42), user: 'admin.demo', action: 'INICIO DE SESIÓN', detail: 'Sesión iniciada correctamente', ip: '127.0.0.1' },
  ],
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];
let toastTimer;

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>'"]/g, (character) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#039;', '"': '&quot;',
  })[character]);
}

function formatDate(date) {
  return new Intl.DateTimeFormat('es-CL', { dateStyle: 'short', timeStyle: 'short' }).format(date);
}

function formatTime(date) {
  return new Intl.DateTimeFormat('es-CL', { hour: '2-digit', minute: '2-digit' }).format(date);
}

function hoursInside(record) {
  return (Date.now() - record.enteredAt.getTime()) / 36e5;
}

function insideRecords() {
  return state.records.filter((record) => !record.exitedAt).sort((a, b) => b.enteredAt - a.enteredAt);
}

function showToast(message, type = 'success') {
  const toast = $('#toast');
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.toggle('error', type === 'error');
  toast.hidden = false;
  toastTimer = window.setTimeout(() => { toast.hidden = true; }, 4300);
}

function closeDrawer() {
  $('#mobileDrawer').classList.remove('show');
  $('#mobileOverlay').classList.remove('show');
}

function switchTab(tab) {
  if (state.role !== 'admin' && ['usuarios', 'lista-negra', 'auditoria'].includes(tab)) tab = 'dashboard';
  $$('[data-view]').forEach((view) => { view.hidden = view.dataset.view !== tab; });
  $$('[data-tab]').forEach((button) => button.classList.toggle('active', button.dataset.tab === tab));
  closeDrawer();
  if (tab === 'dashboard') window.setTimeout(drawFlowChart, 30);
  if (tab === 'reportes') renderReports();
  if (tab === 'usuarios') renderUsers();
  if (tab === 'lista-negra') renderBlacklist();
  if (tab === 'auditoria') renderAudit();
}

function addAudit(action, detail) {
  state.audit.unshift({ id: Date.now(), date: new Date(), user: state.username, action, detail, ip: '127.0.0.1' });
}

function applyDemoAccount(account) {
  state.user = account.name;
  state.username = account.username;
  state.role = account.role;
  $('#userName').textContent = account.name;
  $('#drawerUserName').textContent = account.name;
  $('#userRole').textContent = account.role.toUpperCase();
  $('#drawerUserRole').textContent = account.role.toUpperCase();
  $('#dashboardTitle').textContent = account.title;
  $$('[data-admin-only]').forEach((element) => { element.hidden = account.role !== 'admin'; });
}

function markExit(recordId) {
  const record = state.records.find((entry) => entry.id === Number(recordId));
  if (!record || record.exitedAt) return;
  record.exitedAt = new Date();
  addAudit('SALIDA REGISTRADA', `Salida registrada: ${record.plate} — ${record.conductor}`);
  renderAll();
  showToast(`Salida registrada para ${record.conductor}.`);
}

function renderDashboard() {
  const records = insideRecords();
  $('#insideCountLabel').textContent = `(${records.length})`;
  $('#insideTableBody').innerHTML = records.map((record) => `
    <tr class="${hoursInside(record) >= state.threshold ? 'row-alert' : ''}">
      <td>${formatTime(record.enteredAt)}</td>
      <td>${escapeHtml(record.conductor)}</td>
      <td class="td-main uppercase">${escapeHtml(record.plate)}</td>
      <td class="centered"><button class="btn-primary exit-button" type="button" data-exit-id="${record.id}">Marcar Salida</button></td>
    </tr>`).join('') || '<tr><td colspan="4" class="muted centered">No hay vehículos adentro en este momento.</td></tr>';
  $('#donutTotal').textContent = state.records.length;
  drawFlowChart();
}

function drawFlowChart() {
  const canvas = $('#flowChart');
  if (!canvas || canvas.offsetParent === null) return;
  const bounds = canvas.getBoundingClientRect();
  const ratio = Math.max(window.devicePixelRatio || 1, 1);
  const width = Math.max(Math.round(bounds.width), 300);
  const height = Math.max(Math.round(bounds.height), 180);
  canvas.width = Math.round(width * ratio);
  canvas.height = Math.round(height * ratio);
  const context = canvas.getContext('2d');
  context.scale(ratio, ratio);

  const values = [0, 1, 2, 3, 2, 5, 6, 4, 3, 2, 1, 1];
  const labels = ['04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00'];
  const padding = { top: 26, right: 28, bottom: 47, left: 42 };
  const plotWidth = width - padding.left - padding.right;
  const plotHeight = height - padding.top - padding.bottom;
  const max = 7;

  context.clearRect(0, 0, width, height);
  context.font = '11px Inter, system-ui, sans-serif';
  context.strokeStyle = '#e5e7eb';
  context.fillStyle = '#6b7280';
  context.lineWidth = 1;
  for (let value = 0; value <= 6; value += 2) {
    const y = padding.top + plotHeight - (value / max) * plotHeight;
    context.beginPath();
    context.moveTo(padding.left, y);
    context.lineTo(width - padding.right, y);
    context.stroke();
    context.textAlign = 'right';
    context.textBaseline = 'middle';
    context.fillText(value, padding.left - 10, y);
  }

  const points = values.map((value, index) => ({
    x: padding.left + (index / (values.length - 1)) * plotWidth,
    y: padding.top + plotHeight - (value / max) * plotHeight,
  }));
  const gradient = context.createLinearGradient(0, padding.top, 0, padding.top + plotHeight);
  gradient.addColorStop(0, 'rgba(255, 90, 11, .20)');
  gradient.addColorStop(1, 'rgba(255, 90, 11, 0)');
  context.beginPath();
  points.forEach((point, index) => index === 0 ? context.moveTo(point.x, point.y) : context.lineTo(point.x, point.y));
  context.lineTo(points[points.length - 1].x, padding.top + plotHeight);
  context.lineTo(points[0].x, padding.top + plotHeight);
  context.closePath();
  context.fillStyle = gradient;
  context.fill();

  context.beginPath();
  points.forEach((point, index) => index === 0 ? context.moveTo(point.x, point.y) : context.lineTo(point.x, point.y));
  context.lineJoin = 'round';
  context.lineCap = 'round';
  context.lineWidth = 3.5;
  context.strokeStyle = '#ff5a0b';
  context.stroke();

  points.forEach((point, index) => {
    context.beginPath();
    context.arc(point.x, point.y, 4, 0, Math.PI * 2);
    context.fillStyle = '#ffffff';
    context.fill();
    context.lineWidth = 2.5;
    context.strokeStyle = '#ff5a0b';
    context.stroke();
    context.textAlign = 'center';
    context.textBaseline = 'top';
    context.fillStyle = '#6b7280';
    context.fillText(labels[index], point.x, height - padding.bottom + 17);
  });
}

function renderReports() {
  const search = $('#reportSearch').value.trim().toLocaleLowerCase('es-CL');
  const status = $('#reportStatus').value;
  const filtered = [...state.records]
    .filter((record) => {
      const haystack = [record.conductor, record.plate, record.rut, record.origin, record.purpose].join(' ').toLocaleLowerCase('es-CL');
      const matchesSearch = !search || haystack.includes(search);
      const matchesStatus = status === 'all' || (status === 'inside' ? !record.exitedAt : Boolean(record.exitedAt));
      return matchesSearch && matchesStatus;
    })
    .sort((a, b) => b.enteredAt - a.enteredAt);

  const inside = insideRecords();
  const alertCount = inside.filter((record) => hoursInside(record) >= state.threshold).length;
  $('#totalRecords').textContent = state.records.length;
  $('#insideRecords').textContent = inside.length;
  $('#alertRecords').textContent = alertCount;
  $('#photoRecords').textContent = state.records.filter((record) => record.photo).length;
  const last = [...state.records].sort((a, b) => b.enteredAt - a.enteredAt)[0];
  $('#lastAction').textContent = last ? `${last.createdBy} — ${formatDate(last.enteredAt)}` : '—';

  $('#historyTableBody').innerHTML = filtered.map((record) => {
    const alert = !record.exitedAt && hoursInside(record) >= state.threshold;
    const exit = record.exitedAt
      ? `<span class="muted">${formatDate(record.exitedAt)}</span>`
      : `${alert ? `<span class="status-alert">⚠ Dentro hace ${hoursInside(record).toFixed(1)} h</span>` : ''}<button class="btn-small exit-button" type="button" data-exit-id="${record.id}">Marcar salida</button>`;
    return `<tr class="${alert ? 'row-alert' : ''}">
      <td>${formatDate(record.enteredAt)}</td><td>${exit}</td><td class="td-main">${escapeHtml(record.conductor)}</td><td>${escapeHtml(record.rut)}</td><td>${escapeHtml(record.phone)}</td><td>${escapeHtml(record.companions)}</td><td>${escapeHtml(record.purpose)}</td><td>${escapeHtml(record.origin)}</td><td class="td-main uppercase">${escapeHtml(record.plate)}</td><td>${escapeHtml(record.type)}</td><td>${escapeHtml(record.brand)}</td><td>${record.photo ? '📷 Con foto' : '<span class="muted">Sin foto</span>'}</td><td class="muted">${escapeHtml(record.createdBy)}</td><td><div class="action-buttons"><button class="btn-small edit-button" type="button" data-edit-id="${record.id}">Editar</button><button class="btn-small delete-button" type="button" data-delete-id="${record.id}">Eliminar</button></div></td>
    </tr>`;
  }).join('') || '<tr><td colspan="14" class="muted centered">No hay movimientos que coincidan con los filtros.</td></tr>';
}

function renderUsers() {
  $('#usersTableBody').innerHTML = state.users.map((user) => `<tr><td>${escapeHtml(user.name)}</td><td><b>${escapeHtml(user.username)}</b></td><td class="uppercase">${escapeHtml(user.role)}</td><td><span style="color:#28a745">✅ ${escapeHtml(user.status)}</span></td><td><div class="action-buttons"><button type="button" class="btn-small edit-button" data-user-reset="${escapeHtml(user.username)}">Resetear clave</button><button type="button" class="btn-small muted-button" data-user-sessions="${escapeHtml(user.username)}">Cerrar sesiones</button><button type="button" class="btn-small delete-button" data-user-delete="${escapeHtml(user.username)}">Eliminar</button></div></td></tr>`).join('');
}

function renderBlacklist() {
  $('#blacklistTableBody').innerHTML = state.blacklist.sort((a, b) => b.date - a.date).map((entry) => `<tr><td class="td-main uppercase">${escapeHtml(entry.plate)}</td><td>${escapeHtml(entry.reason)}</td><td class="muted">${escapeHtml(entry.addedBy)}</td><td class="muted">${formatDate(entry.date)}</td><td><button type="button" class="btn-small delete-button" data-remove-plate="${entry.id}">Quitar</button></td></tr>`).join('') || '<tr><td colspan="5" class="muted centered">No hay patentes bloqueadas.</td></tr>';
}

function renderAudit() {
  const search = $('#auditSearch').value.trim().toLocaleLowerCase('es-CL');
  $('#auditTableBody').innerHTML = state.audit
    .filter((item) => !search || [item.user, item.action, item.detail, item.ip].join(' ').toLocaleLowerCase('es-CL').includes(search))
    .sort((a, b) => b.date - a.date)
    .map((item) => `<tr><td>${formatDate(item.date)}</td><td><b>${escapeHtml(item.user)}</b></td><td class="td-main">${escapeHtml(item.action)}</td><td>${escapeHtml(item.detail)}</td><td class="muted">${escapeHtml(item.ip)}</td></tr>`)
    .join('') || '<tr><td colspan="5" class="muted centered">No se encontraron eventos.</td></tr>';
}

function renderAll() {
  renderDashboard();
  renderReports();
  renderUsers();
  renderBlacklist();
  renderAudit();
}

function updateClock() {
  const current = new Intl.DateTimeFormat('es-CL', { dateStyle: 'medium', timeStyle: 'medium' }).format(new Date());
  $('#clock').textContent = current;
}

function showModal(title, content) {
  $('#modalContent').innerHTML = `<h3>${escapeHtml(title)}</h3>${content}`;
  $('#modal').hidden = false;
}

function closeModal() { $('#modal').hidden = true; }

function logout() {
  closeDrawer();
  $('#accountMenu').hidden = true;
  $('#dashboardView').hidden = true;
  $('#loginView').classList.add('active');
  $('#loginView').hidden = false;
  $('#loginPassword').value = '';
  $('#loginUser').focus();
}

function downloadCsv(filename, rows) {
  const csv = rows.map((row) => row.map((cell) => `"${String(cell ?? '').replaceAll('"', '""')}"`).join(',')).join('\n');
  const anchor = document.createElement('a');
  anchor.href = URL.createObjectURL(new Blob([`\ufeff${csv}`], { type: 'text/csv;charset=utf-8;' }));
  anchor.download = filename;
  document.body.append(anchor);
  anchor.click();
  anchor.remove();
  window.setTimeout(() => URL.revokeObjectURL(anchor.href), 0);
}

function handleAccountAction(action) {
  $('#accountMenu').hidden = true;
  if (action === 'usuario') {
    showModal('Cambiar nombre de usuario', `<form id="changeUserForm" class="mt-15"><div class="input-group"><label for="changedUser">Nombre visible</label><input id="changedUser" value="${escapeHtml(state.user)}" required /></div><button class="btn-primary mt-25" type="submit">Guardar cambio</button></form>`);
    $('#changeUserForm').addEventListener('submit', (event) => {
      event.preventDefault();
      state.user = $('#changedUser').value.trim() || state.user;
      $('#userName').textContent = state.user;
      $('#drawerUserName').textContent = state.user;
      const currentUser = state.users.find((user) => user.username === state.username);
      if (currentUser) currentUser.name = state.user;
      addAudit('USUARIO ACTUALIZADO', 'Nombre visible de la cuenta actualizado');
      renderUsers();
      closeModal();
      showToast('Nombre de usuario actualizado.');
    });
  } else if (action === 'clave') {
    showModal('Cambiar contraseña', '<p>En esta demo la contraseña no se almacena. En el sistema productivo este formulario solicitaría y validaría la contraseña actual y la nueva.</p>');
  } else if (action === 'global') {
    if (window.confirm('Esto va a cerrar tu sesión en todos los dispositivos, incluido este. ¿Continuar?')) logout();
  }
}

function bindEvents() {
  $('#loginForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const username = $('#loginUser').value.trim();
    const password = $('#loginPassword').value;
    const account = DEMO_ACCOUNTS[username.toLowerCase()];
    if (!account || account.password !== password) {
      $('#loginError').textContent = 'Usuario o contraseña incorrectos. Revisa las credenciales de prueba.';
      $('#loginError').hidden = false;
      return;
    }
    $('#loginError').hidden = true;
    applyDemoAccount(account);
    $('#loginView').classList.remove('active');
    $('#loginView').hidden = true;
    $('#dashboardView').hidden = false;
    addAudit('INICIO DE SESIÓN', 'Sesión de demostración iniciada correctamente');
    renderAll();
    showToast(`Sesión de ${account.name} iniciada.`);
  });

  $$('[data-demo-account]').forEach((button) => button.addEventListener('click', () => {
    const account = DEMO_ACCOUNTS[button.dataset.demoAccount];
    $('#loginUser').value = account.username;
    $('#loginPassword').value = account.password;
    $('#loginError').hidden = true;
    $('#loginPassword').focus();
  }));

  $$('[data-tab]').forEach((button) => button.addEventListener('click', () => switchTab(button.dataset.tab)));
  $('#mobileToggle').addEventListener('click', () => { $('#mobileDrawer').classList.add('show'); $('#mobileOverlay').classList.add('show'); });
  $('#closeDrawer').addEventListener('click', closeDrawer);
  $('#mobileOverlay').addEventListener('click', closeDrawer);
  $('#logoutButton').addEventListener('click', logout);
  $$('[data-action="logout"]').forEach((button) => button.addEventListener('click', logout));

  $('#accountToggle').addEventListener('click', (event) => { event.stopPropagation(); $('#accountMenu').hidden = !$('#accountMenu').hidden; });
  $$('[data-account-action]').forEach((button) => button.addEventListener('click', () => handleAccountAction(button.dataset.accountAction)));
  document.addEventListener('click', (event) => { if (!event.target.closest('.account-wrap')) $('#accountMenu').hidden = true; });
  $('#modalClose').addEventListener('click', closeModal);
  $('#modal').addEventListener('click', (event) => { if (event.target.id === 'modal') closeModal(); });

  $('#insideSearch').addEventListener('input', () => {
    const search = $('#insideSearch').value.trim().toLocaleLowerCase('es-CL');
    const rows = [...$('#insideTableBody').querySelectorAll('tr')];
    rows.forEach((row) => { row.hidden = Boolean(search) && !row.textContent.toLocaleLowerCase('es-CL').includes(search); });
  });
  $('#insideTableBody').addEventListener('click', (event) => { const button = event.target.closest('[data-exit-id]'); if (button) markExit(button.dataset.exitId); });
  $('#historyTableBody').addEventListener('click', (event) => {
    const exitButton = event.target.closest('[data-exit-id]');
    if (exitButton) return markExit(exitButton.dataset.exitId);
    const editButton = event.target.closest('[data-edit-id]');
    if (editButton) { showModal('Edición de registro', '<p>La demo muestra la acción de edición. En la aplicación completa este flujo abre el formulario de edición con historial de cambios.</p>'); return; }
    const deleteButton = event.target.closest('[data-delete-id]');
    if (deleteButton && window.confirm('¿Eliminar este registro de demostración?')) {
      const record = state.records.find((entry) => entry.id === Number(deleteButton.dataset.deleteId));
      state.records = state.records.filter((entry) => entry.id !== Number(deleteButton.dataset.deleteId));
      addAudit('REGISTRO ELIMINADO', `Registro eliminado: ${record.plate} — ${record.conductor}`);
      renderAll();
      showToast('Registro eliminado.');
    }
  });

  $('#reportSearch').addEventListener('input', renderReports);
  $('#reportStatus').addEventListener('change', renderReports);
  $('#threshold').addEventListener('change', () => { state.threshold = Math.max(1, Number($('#threshold').value) || 1); $('#threshold').value = state.threshold; renderAll(); });
  $('#clearFilters').addEventListener('click', () => { $('#reportSearch').value = ''; $('#reportStatus').value = 'all'; renderReports(); });
  $('#exportButton').addEventListener('click', () => {
    downloadCsv('movimientos-demo.csv', [['Entrada', 'Salida', 'Conductor', 'Patente', 'Motivo', 'Procedencia'], ...state.records.map((record) => [formatDate(record.enteredAt), record.exitedAt ? formatDate(record.exitedAt) : 'Dentro', record.conductor, record.plate, record.purpose, record.origin])]);
    showToast('Archivo CSV generado.');
  });

  const syncPlate = (event) => { event.target.value = event.target.value.toUpperCase().replace(/[^A-Z0-9]/g, ''); };
  $('#plate').addEventListener('input', (event) => {
    syncPlate(event);
    const entry = state.blacklist.find((item) => item.plate === event.target.value);
    $('#blacklistWarning').hidden = !entry;
    $('#blacklistWarning').textContent = entry ? `⚠️ Lista negra: ${entry.reason}` : '';
  });
  $('#blockedPlate').addEventListener('input', syncPlate);
  ['galleryFile', 'cameraFile'].forEach((id) => $( `#${id}` ).addEventListener('change', (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    state.photoSelected = true;
    $('#photoStatus').textContent = `✅ ${file.name}`;
    $('#photoStatus').hidden = false;
  }));
  $('#registerForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const plate = String(form.get('patente')).toUpperCase();
    const record = {
      id: Date.now(), enteredAt: new Date(), exitedAt: null, conductor: String(form.get('conductor')).trim(), rut: String(form.get('rut')).trim(), phone: String(form.get('telefono')).trim(), companions: String(form.get('acompanantes')).trim() || '—', purpose: String(form.get('motivo')), origin: String(form.get('procedencia')).trim() || '—', plate, type: String(form.get('tipo')), brand: String(form.get('marca')).trim() || '—', photo: state.photoSelected, createdBy: state.username,
    };
    state.records.push(record);
    addAudit('REGISTRO CREADO', `Ingreso registrado: ${record.plate} — ${record.conductor}`);
    const blocked = state.blacklist.find((entry) => entry.plate === plate);
    event.currentTarget.reset();
    state.photoSelected = false;
    $('#photoStatus').hidden = true;
    $('#blacklistWarning').hidden = true;
    renderAll();
    showToast(blocked ? `Registrado con alerta: ${plate} está en lista negra.` : 'Movimiento registrado exitosamente.', blocked ? 'error' : 'success');
  });

  $('#userForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const username = $('#newUserLogin').value.trim().toLowerCase();
    if (state.users.some((user) => user.username === username)) return showToast('Ese nombre de usuario ya existe.', 'error');
    const user = { name: $('#newUserName').value.trim(), username, role: $('#newUserRole').value, status: 'Activo' };
    state.users.push(user);
    addAudit('USUARIO CREADO', `Usuario ${username} creado con rol ${user.role}`);
    event.currentTarget.reset();
    renderAll();
    showToast('Usuario creado correctamente.');
  });
  $('#usersTableBody').addEventListener('click', (event) => {
    const reset = event.target.closest('[data-user-reset]');
    if (reset) return showModal('Restablecer contraseña', `<p>Se enviaría un flujo seguro de restablecimiento para <b>${escapeHtml(reset.dataset.userReset)}</b>.</p>`);
    const sessions = event.target.closest('[data-user-sessions]');
    if (sessions) return showToast(`Sesiones de ${sessions.dataset.userSessions} cerradas.`);
    const remove = event.target.closest('[data-user-delete]');
    if (remove && window.confirm(`¿Eliminar al usuario ${remove.dataset.userDelete}?`)) {
      state.users = state.users.filter((user) => user.username !== remove.dataset.userDelete);
      addAudit('USUARIO ELIMINADO', `Usuario ${remove.dataset.userDelete} eliminado`);
      renderAll();
      showToast('Usuario eliminado.');
    }
  });

  $('#blacklistForm').addEventListener('submit', (event) => {
    event.preventDefault();
    const plate = $('#blockedPlate').value.trim().toUpperCase();
    if (state.blacklist.some((item) => item.plate === plate)) return showToast('La patente ya está en la lista negra.', 'error');
    const entry = { id: Date.now(), plate, reason: $('#blockedReason').value.trim(), addedBy: state.username, date: new Date() };
    state.blacklist.push(entry);
    addAudit('LISTA NEGRA', `Patente ${plate} agregada a lista negra`);
    event.currentTarget.reset();
    renderAll();
    showToast('Patente agregada a la lista negra.');
  });
  $('#blacklistTableBody').addEventListener('click', (event) => {
    const button = event.target.closest('[data-remove-plate]');
    if (!button || !window.confirm('¿Quitar esta patente de la lista negra?')) return;
    const entry = state.blacklist.find((item) => item.id === Number(button.dataset.removePlate));
    state.blacklist = state.blacklist.filter((item) => item.id !== Number(button.dataset.removePlate));
    addAudit('LISTA NEGRA', `Patente ${entry.plate} quitada de lista negra`);
    renderAll();
    showToast('Patente quitada de la lista negra.');
  });

  $('#auditSearch').addEventListener('input', renderAudit);
  $('#auditExport').addEventListener('click', () => {
    downloadCsv('auditoria-demo.csv', [['Fecha', 'Usuario', 'Acción', 'Detalle', 'IP'], ...state.audit.map((item) => [formatDate(item.date), item.user, item.action, item.detail, item.ip])]);
    showToast('Archivo de auditoría generado.');
  });
  window.addEventListener('resize', drawFlowChart);
}

function init() {
  bindEvents();
  updateClock();
  window.setInterval(updateClock, 1000);
  renderAll();
}

init();

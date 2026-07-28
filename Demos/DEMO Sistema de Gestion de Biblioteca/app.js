/* ==========================================================================
   Sistema de Gestión de Bibliotecas — Demo web (HTML/CSS/JS)
   ----------------------------------------------------------------------
   Réplica funcional y visual de la app de escritorio (WPF / .NET +
   MaterialDesignInXaml, tema Indigo/Teal) contenida en el proyecto
   original. No se conecta a MySQL real: toda la "base de datos" vive en
   memoria (objeto DB) para que la demo funcione 100% en el navegador.
   ========================================================================== */

(function () {
  'use strict';

  /* ------------------------------------------------------------------ *
   *  Helpers de fecha relativos a "ahora" (para que la demo siempre
   *  luzca con datos vivos y coherentes sin importar cuándo se abra)
   * ------------------------------------------------------------------ */
  const NOW = new Date();
  function daysAgo(n, hourOffset) {
    const d = new Date(NOW);
    d.setDate(d.getDate() - n);
    if (hourOffset !== undefined) d.setHours(hourOffset, (n * 7) % 60, 0, 0);
    return d;
  }
  function daysFromNow(n) { return daysAgo(-n); }

  /* ------------------------------------------------------------------ *
   *  Datos semilla — Autores
   * ------------------------------------------------------------------ */
  const autores = [
    { id: 1,  nombre: 'Gabriel García Márquez',      nacionalidad: 'Colombiana' },
    { id: 2,  nombre: 'Isaac Asimov',                 nacionalidad: 'Estadounidense' },
    { id: 3,  nombre: 'Isabel Allende',                nacionalidad: 'Chilena' },
    { id: 4,  nombre: 'Jorge Luis Borges',             nacionalidad: 'Argentina' },
    { id: 5,  nombre: 'Pablo Neruda',                  nacionalidad: 'Chilena' },
    { id: 6,  nombre: 'George Orwell',                 nacionalidad: 'Británica' },
    { id: 7,  nombre: 'J.K. Rowling',                  nacionalidad: 'Británica' },
    { id: 8,  nombre: 'Stephen King',                  nacionalidad: 'Estadounidense' },
    { id: 9,  nombre: 'Julio Cortázar',                nacionalidad: 'Argentina' },
    { id: 10, nombre: 'Mario Vargas Llosa',            nacionalidad: 'Peruana' },
    { id: 11, nombre: 'Agatha Christie',               nacionalidad: 'Británica' },
    { id: 12, nombre: 'Antoine de Saint-Exupéry',      nacionalidad: 'Francesa' },
    { id: 13, nombre: 'Yuval Noah Harari',             nacionalidad: 'Israelí' },
    { id: 14, nombre: 'Eckhart Tolle',                 nacionalidad: 'Alemana' }
  ];

  /* ------------------------------------------------------------------ *
   *  Datos semilla — Categorías
   * ------------------------------------------------------------------ */
  const categorias = [
    { id: 1,  nombre: 'Ficción' },
    { id: 2,  nombre: 'Ciencia Ficción' },
    { id: 3,  nombre: 'Fantasía' },
    { id: 4,  nombre: 'Historia' },
    { id: 5,  nombre: 'Poesía' },
    { id: 6,  nombre: 'Biografía' },
    { id: 7,  nombre: 'Terror' },
    { id: 8,  nombre: 'Infantil' },
    { id: 9,  nombre: 'Autoayuda' },
    { id: 10, nombre: 'Clásicos' }
  ];

  // Paleta para las "portadas" generadas (no hay imágenes reales de portada)
  const coverPalette = [
    ['#5C6BC0', '#3949AB'], ['#26A69A', '#00796B'], ['#FF8A65', '#E64A19'],
    ['#AB47BC', '#7B1FA2'], ['#42A5F5', '#1565C0'], ['#EC407A', '#AD1457'],
    ['#8D6E63', '#5D4037'], ['#78909C', '#455A64'], ['#9CCC65', '#558B2F'],
    ['#FFCA28', '#F57F17']
  ];
  function coverStyle(id) {
    const c = coverPalette[id % coverPalette.length];
    return 'background:linear-gradient(155deg,' + c[0] + ',' + c[1] + ')';
  }
  function coverInitials(titulo) {
    return titulo.split(' ').filter(w => w.length > 2 || /^[A-ZÁÉÍÓÚ]/.test(w))
      .slice(0, 2).map(w => w[0].toUpperCase()).join('') || titulo.slice(0, 2).toUpperCase();
  }

  /* ------------------------------------------------------------------ *
   *  Datos semilla — Libros  (id, titulo, isbn, idAutor, idCategoria,
   *  anioPublicacion, stockTotal, stockDisponible, precioReposicion,
   *  diasDesdeRegistro)
   * ------------------------------------------------------------------ */
  const librosSeed = [
    [1,  'Cien Años de Soledad',                       '978-0307474728', 1,  10, 1967, 5,  4, 15000, 280],
    [2,  'El Amor en los Tiempos del Cólera',           '978-1400034899', 1,  1,  1985, 4,  3, 14000, 260],
    [3,  'Yo, Robot',                                    '978-0553294385', 2,  2,  1950, 6,  5, 12000, 245],
    [4,  'Fundación',                                    '978-0553293357', 2,  2,  1951, 5,  5, 13000, 230],
    [5,  'La Casa de los Espíritus',                     '978-8401341840', 3,  1,  1982, 4,  3, 13500, 210],
    [6,  'Ficciones',                                    '978-8420633348', 4,  10, 1944, 3,  3, 11000, 195],
    [7,  'Veinte Poemas de Amor y una Canción Desesperada','978-8498387509', 5, 5,  1924, 6,  6, 9000,  180],
    [8,  '1984',                                         '978-0451524935', 6,  1,  1949, 8,  7, 12500, 165],
    [9,  'Rebelión en la Granja',                        '978-0451526342', 6,  1,  1945, 5,  5, 10000, 150],
    [10, 'Harry Potter y la Piedra Filosofal',            '978-8478884452', 7,  3,  1997, 10, 8, 16000, 135],
    [11, 'Harry Potter y la Cámara Secreta',              '978-8478884469', 7,  3,  1998, 7,  7, 16000, 120],
    [12, 'It',                                            '978-8401352836', 8,  7,  1986, 4,  2, 18000, 105],
    [13, 'El Resplandor',                                 '978-8497592375', 8,  7,  1977, 5,  5, 15500, 90],
    [14, 'Rayuela',                                       '978-8437604572', 9,  10, 1963, 3,  2, 14500, 75],
    [15, 'La Ciudad y los Perros',                        '978-8420471879', 10, 1,  1963, 4,  4, 13000, 60],
    [16, 'Asesinato en el Orient Express',                '978-8445071223', 11, 1,  1934, 6,  6, 11500, 45],
    [17, 'El Principito',                                 '978-8498381498', 12, 8,  1943, 9,  9, 8500,  30],
    [18, 'Sapiens: De Animales a Dioses',                 '978-8499926223', 13, 4,  2011, 6,  5, 17000, 18],
    [19, 'El Poder del Ahora',                            '978-8478085537', 14, 9,  1997, 5,  5, 12000, 9],
    [20, 'Harry Potter y el Prisionero de Azkaban',       '978-8478885201', 7,  3,  1999, 6,  5, 16500, 2]
  ].map(r => ({
    id: r[0], titulo: r[1], isbn: r[2], idAutor: r[3], idCategoria: r[4],
    anioPublicacion: r[5], stockTotal: r[6], stockDisponible: r[7], precioReposicion: r[8],
    fechaRegistro: daysAgo(r[9], 10)
  }));

  /* ------------------------------------------------------------------ *
   *  Datos semilla — Lectores
   * ------------------------------------------------------------------ */
  const lectoresSeed = [
    [1,  'Camila Fuentes Rojas',      '18.245.632-1', 'camila.fuentes@mail.com',    '+56 9 8123 4567', true,  200],
    [2,  'Matías Contreras Soto',     '19.887.213-5', 'matias.contreras@mail.com',  '+56 9 7234 5678', true,  195],
    [3,  'Valentina Muñoz Pizarro',   '17.654.921-3', 'valentina.munoz@mail.com',   '+56 9 6345 6789', true,  190],
    [4,  'Benjamín Torres Vega',      '20.112.345-6', 'benjamin.torres@mail.com',   '+56 9 5456 7890', true,  180],
    [5,  'Antonia Silva Bravo',       '16.998.204-7', 'antonia.silva@mail.com',     '+56 9 4567 8901', true,  170],
    [6,  'Diego Alarcón Reyes',       '19.334.876-2', 'diego.alarcon@mail.com',     '+56 9 3678 9012', true,  160],
    [7,  'Francisca Morales Díaz',    '18.776.543-9', 'francisca.morales@mail.com', '+56 9 2789 0123', true,  150],
    [8,  'Tomás Espinoza Cid',        '21.045.632-K', 'tomas.espinoza@mail.com',    '+56 9 1890 1234', true,  140],
    [9,  'Javiera Castro León',       '17.223.890-4', 'javiera.castro@mail.com',    '+56 9 8901 2345', true,  130],
    [10, 'Sebastián Rojas Herrera',   '19.556.712-8', 'sebastian.rojas@mail.com',   '+56 9 7012 3456', true,  120],
    [11, 'Josefa Vargas Núñez',       '18.889.001-2', 'josefa.vargas@mail.com',     '+56 9 6123 4567', false, 110],
    [12, 'Cristóbal Pizarro Fuentes', '20.334.221-9', 'cristobal.pizarro@mail.com', '+56 9 5234 5678', true,  95],
    [13, 'Fernanda Soto Aránguiz',    '16.554.887-1', 'fernanda.soto@mail.com',     '+56 9 4345 6789', true,  80],
    [14, 'Ignacio Bravo Tapia',       '19.112.998-3', 'ignacio.bravo@mail.com',     '+56 9 3456 7890', false, 60]
  ].map(r => ({
    id: r[0], nombreCompleto: r[1], rut: r[2], email: r[3], telefono: r[4],
    activo: r[5], fechaRegistro: daysAgo(r[6], 11)
  }));

  /* ------------------------------------------------------------------ *
   *  Datos semilla — Usuarios del sistema (empleados)
   *  Rol: 1 = Administrador, 2 = Operador   (igual que BaseDatos.sql)
   * ------------------------------------------------------------------ */
  const usuariosSeed = [
    [1, 'Administrador Principal',  'admin',     'admin123', 1, true,  300],
    [2, 'Operador Biblioteca',      'operador',  'op123',    2, true,  300],
    [3, 'Patricia Núñez Contreras', 'patricia',  'pat456',   2, true,  140],
    [4, 'Roberto Díaz Salas',       'rdiaz',     'rob789',   2, false, 70]
  ].map(r => ({
    id: r[0], nombreCompleto: r[1], username: r[2], password: r[3], rol: r[4],
    activo: r[5], fechaRegistro: daysAgo(r[6], 9)
  }));

  /* ------------------------------------------------------------------ *
   *  Datos semilla — Préstamos
   *  [id, idLibro, idLector, prestamoDiasAtras, diasPlazo, estado, devueltoDiasAtras?]
   * ------------------------------------------------------------------ */
  const prestamos = [
    [1,  1,  1,  20, 14, 'Activo'],
    [2,  3,  2,  10, 14, 'Activo'],
    [3,  5,  5,  25, 14, 'Activo'],
    [4,  8,  3,  5,  14, 'Activo'],
    [5,  8,  9,  40, 14, 'Devuelto', 20],
    [6,  10, 4,  8,  14, 'Activo'],
    [7,  10, 6,  15, 14, 'Activo'],
    [8,  10, 8,  30, 14, 'Devuelto', 12],
    [9,  12, 7,  18, 14, 'Activo'],
    [10, 12, 10, 45, 14, 'Devuelto', 29],
    [11, 12, 12, 3,  14, 'Activo'],
    [12, 14, 13, 22, 14, 'Activo'],
    [13, 18, 2,  6,  14, 'Activo'],
    [14, 18, 9,  60, 14, 'Devuelto', 40],
    [15, 20, 1,  12, 14, 'Activo'],
    [16, 20, 6,  35, 14, 'Devuelto', 18],
    [17, 2,  12, 4,  14, 'Activo'],
    [18, 6,  5,  50, 14, 'Devuelto', 33]
  ].map(raw => {
    const [id, idLibro, idLector, diasAtras, plazo, estado, devueltoDiasAtras] = raw;
    const fechaPrestamo = daysAgo(diasAtras, 9);
    const fechaDevolucionEsperada = daysAgo(diasAtras - plazo, 23);
    const fechaDevolucionReal = (estado === 'Devuelto') ? daysAgo(devueltoDiasAtras, 16) : null;
    return { id, idLibro, idLector, fechaPrestamo, fechaDevolucionEsperada, fechaDevolucionReal, estado };
  });

  /* ------------------------------------------------------------------ *
   *  Datos semilla — Multas
   *  [id, idPrestamo, monto, motivo, pagada, diasDesdeGeneracion]
   * ------------------------------------------------------------------ */
  const multas = [
    [1, 1,  3000, 'Atraso en devolución', false, 4],
    [2, 3,  5500, 'Atraso en devolución', false, 2],
    [3, 7,  500,  'Atraso en devolución', false, 1],
    [4, 9,  2000, 'Atraso en devolución', true,  3],
    [5, 12, 4000, 'Atraso en devolución', false, 5],
    [6, 5,  3000, 'Atraso en devolución', true,  19],
    [7, 10, 1000, 'Atraso en devolución', true,  28],
    [8, 16, 1500, 'Atraso en devolución', false, 17]
  ].map(r => ({
    id: r[0], idPrestamo: r[1], monto: r[2], motivo: r[3], pagada: r[4],
    fechaGeneracion: daysAgo(r[5], 12)
  }));

  /* ------------------------------------------------------------------ *
   *  Datos semilla — Auditoría
   * ------------------------------------------------------------------ */
  const auditoria = [
    [1,  'Administrador Principal', 'INICIÓ SESIÓN',        'El usuario inició sesión en el sistema.', 60, 8],
    [2,  'Administrador Principal', 'AGREGÓ LIBRO',          'Título: Sapiens: De Animales a Dioses.', 18, 9],
    [3,  'Operador Biblioteca',     'REGISTRÓ PRÉSTAMO',     'Libro: Harry Potter y la Piedra Filosofal, Lector: Benjamín Torres Vega.', 8, 11],
    [4,  'Operador Biblioteca',     'REGISTRÓ DEVOLUCIÓN',   'Libro: It, Lector: Sebastián Rojas Herrera.', 12, 15],
    [5,  'Administrador Principal', 'GENERÓ MULTA',          'Lector: Fernanda Soto Aránguiz, Monto: $4.000.', 5, 10],
    [6,  'Administrador Principal', 'PAGÓ MULTA',            'Lector: Josefa Vargas Núñez, Monto: $1.000.', 28, 14],
    [7,  'Operador Biblioteca',     'AGREGÓ LECTOR',         'Nombre: Ignacio Bravo Tapia.', 60, 10],
    [8,  'Administrador Principal', 'ACTUALIZÓ CONFIGURACIÓN','Se modificaron los parámetros generales.', 9, 17],
    [9,  'Administrador Principal', 'GENERÓ RESPALDO',       'El administrador generó un respaldo de la base de datos.', 2, 9],
    [10, 'Operador Biblioteca',     'INICIÓ SESIÓN',         'El usuario inició sesión en el sistema.', 1, 8]
  ].map(r => ({
    id: r[0], usuario: r[1], accion: r[2], detalle: r[3], fechaHora: daysAgo(r[4], r[5])
  }));

  /* ------------------------------------------------------------------ *
   *  Configuración del sistema
   * ------------------------------------------------------------------ */
  const configuracion = {
    bibliotecaNombre: 'Biblioteca Pública Central',
    multaDiaria: 500,
    smtpHost: '',
    smtpPort: '',
    smtpEmail: '',
    smtpPassword: ''
  };

  /* ------------------------------------------------------------------ *
   *  "Base de datos" en memoria + contadores de autoincremento
   * ------------------------------------------------------------------ */
  const DB = {
    autores, categorias, libros: librosSeed, lectores: lectoresSeed,
    usuarios: usuariosSeed, prestamos, multas, auditoria, configuracion
  };

  const seq = {
    libro: Math.max(...DB.libros.map(l => l.id)),
    lector: Math.max(...DB.lectores.map(l => l.id)),
    autor: Math.max(...DB.autores.map(a => a.id)),
    categoria: Math.max(...DB.categorias.map(c => c.id)),
    usuario: Math.max(...DB.usuarios.map(u => u.id)),
    prestamo: Math.max(...DB.prestamos.map(p => p.id)),
    multa: Math.max(...DB.multas.map(m => m.id)),
    auditoria: Math.max(...DB.auditoria.map(a => a.id))
  };
  function nextId(entity) { seq[entity] += 1; return seq[entity]; }

  // Exponer en el ámbito del módulo (usado por el resto de app.js)
  window.__DB__ = DB;
  window.__SEQ__ = { nextId };
  window.__COVER__ = { coverStyle, coverInitials };
  window.__NOW__ = NOW;
  window.__DAYSAGO__ = daysAgo;

})();

/* ==========================================================================
   APLICACIÓN — estado, utilidades, autenticación, navegación y páginas
   ========================================================================== */
(function () {
  'use strict';

  const DB = window.__DB__;
  const { nextId } = window.__SEQ__;
  const { coverStyle, coverInitials } = window.__COVER__;

  const state = {
    user: null,          // { id, nombreCompleto, rol }
    currentPage: 'dashboard',
    selected: {},         // { libros: id|null, lectores:..., prestamos:..., multas:..., usuarios:... }
    search: {}            // { libros: 'texto', ... }
  };

  /* ------------------------------------------------------------------ *
   *  Utilidades de formato
   * ------------------------------------------------------------------ */
  function pad2(n) { return String(n).padStart(2, '0'); }

  function formatCLP(amount) {
    const n = Math.round(Number(amount) || 0);
    return '$' + n.toLocaleString('es-CL');
  }
  function formatDate(date) {
    if (!date) return '';
    const d = new Date(date);
    if (isNaN(d)) return '';
    return pad2(d.getDate()) + '/' + pad2(d.getMonth() + 1) + '/' + d.getFullYear();
  }
  function formatDateTime(date) {
    if (!date) return '';
    const d = new Date(date);
    if (isNaN(d)) return '';
    return formatDate(d) + ' ' + pad2(d.getHours()) + ':' + pad2(d.getMinutes());
  }
  function escapeHtml(str) {
    if (str === null || str === undefined) return '';
    return String(str)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }
  function timestampSuffix() {
    const d = new Date();
    return d.getFullYear() + pad2(d.getMonth() + 1) + pad2(d.getDate()) + '_' +
           pad2(d.getHours()) + pad2(d.getMinutes()) + pad2(d.getSeconds());
  }

  /* ------------------------------------------------------------------ *
   *  Lookups entre entidades relacionadas
   * ------------------------------------------------------------------ */
  function getAutor(id) { return DB.autores.find(a => a.id === id) || null; }
  function getCategoria(id) { return DB.categorias.find(c => c.id === id) || null; }
  function getLibro(id) { return DB.libros.find(l => l.id === id) || null; }
  function getLector(id) { return DB.lectores.find(l => l.id === id) || null; }
  function getUsuario(id) { return DB.usuarios.find(u => u.id === id) || null; }
  function getAutorNombre(id) { const a = getAutor(id); return a ? a.nombre : 'Desconocido'; }
  function getCategoriaNombre(id) { const c = getCategoria(id); return c ? c.nombre : 'Sin Categoría'; }
  function getLibroTitulo(id) { const l = getLibro(id); return l ? l.titulo : '(libro eliminado)'; }
  function getLectorNombre(id) { const l = getLector(id); return l ? l.nombreCompleto : '(lector eliminado)'; }
  function nombreRol(rol) { return rol === 1 ? 'Administrador' : (rol === 2 ? 'Operador' : 'Desconocido'); }
  function diasRetraso(p) {
    if (p.estado === 'Activo' && new Date() > p.fechaDevolucionEsperada) {
      return Math.floor((new Date() - p.fechaDevolucionEsperada) / 86400000);
    }
    return 0;
  }

  /* ------------------------------------------------------------------ *
   *  Auditoría
   * ------------------------------------------------------------------ */
  function registrarAuditoria(accion, detalle) {
    const entry = {
      id: nextId('auditoria'),
      usuario: state.user ? state.user.nombreCompleto : 'Sistema',
      accion, detalle,
      fechaHora: new Date()
    };
    DB.auditoria.push(entry);
    return entry;
  }

  /* ------------------------------------------------------------------ *
   *  Cuadro de mensaje personalizado (réplica de CustomMessageBoxWindow)
   *  buttons: 'ok' | 'okcancel' | 'yesno'   icon: 'info'|'warning'|'error'|'question'
   *  Devuelve una Promise<'ok'|'cancel'|'yes'|'no'>
   * ------------------------------------------------------------------ */
  const MSGBOX_ICONS = {
    info:     { cls: 'mdi-information-outline', color: '#2196F3' },
    warning:  { cls: 'mdi-alert-outline',        color: '#FF9800' },
    error:    { cls: 'mdi-close-circle-outline', color: '#F44336' },
    question: { cls: 'mdi-help-circle-outline',  color: '#9C27B0' }
  };

  function showMessageBox(opts) {
    const message = opts.message || '';
    const title = opts.title || 'Sistema';
    const buttons = opts.buttons || 'ok';
    const icon = MSGBOX_ICONS[opts.icon] ? opts.icon : 'info';
    const ic = MSGBOX_ICONS[icon];

    let buttonsHtml;
    if (buttons === 'yesno') {
      buttonsHtml =
        '<button class="btn btn-flat" data-result="no" style="color:var(--accent-gray)">NO</button>' +
        '<button class="btn btn-flat" data-result="yes">SÍ</button>';
    } else if (buttons === 'okcancel') {
      buttonsHtml =
        '<button class="btn btn-flat" data-result="cancel" style="color:var(--accent-gray)">CANCELAR</button>' +
        '<button class="btn btn-raised" data-result="ok">ACEPTAR</button>';
    } else {
      buttonsHtml = '<button class="btn btn-raised" data-result="ok">ACEPTAR</button>';
    }

    return new Promise(function (resolve) {
      const root = document.getElementById('msgbox-root');
      const overlay = document.createElement('div');
      overlay.className = 'msgbox-overlay';
      overlay.innerHTML =
        '<div class="msgbox" role="alertdialog" aria-modal="true">' +
          '<div class="msgbox-title">' + escapeHtml(title) + '</div>' +
          '<div class="msgbox-body">' +
            '<span class="mdi ' + ic.cls + '" style="color:' + ic.color + '"></span>' +
            '<div class="msgbox-message">' + escapeHtml(message) + '</div>' +
          '</div>' +
          '<div class="msgbox-actions">' + buttonsHtml + '</div>' +
        '</div>';
      root.appendChild(overlay);
      requestAnimationFrame(function () { overlay.classList.add('open'); });

      function finish(result) {
        overlay.classList.remove('open');
        setTimeout(function () { overlay.remove(); }, 150);
        document.removeEventListener('keydown', onKey);
        resolve(result);
      }
      function onKey(e) {
        if (e.key === 'Escape') finish(buttons === 'yesno' ? 'no' : 'cancel');
        if (e.key === 'Enter') finish(buttons === 'yesno' ? 'yes' : 'ok');
      }
      document.addEventListener('keydown', onKey);
      overlay.querySelectorAll('[data-result]').forEach(function (btn) {
        btn.addEventListener('click', function () { finish(btn.dataset.result); });
      });
    });
  }

  /* ------------------------------------------------------------------ *
   *  Combo buscable (réplica de ComboBox IsEditable=True)
   * ------------------------------------------------------------------ */
  function initCombo(cfg) {
    const input = document.getElementById(cfg.inputId);
    const menu = document.getElementById(cfg.menuId);
    let items = cfg.items;
    let selectedId = null;

    function syncFloating() {
      const field = input.closest('.field');
      if (field) field.classList.toggle('has-value', input.value.trim().length > 0);
    }

    function renderMenu() {
      const f = input.value.toLowerCase().trim();
      const filtered = items.filter(function (it) {
        if (!f) return true;
        const label = cfg.getLabel(it).toLowerCase();
        const sub = cfg.getSub ? (cfg.getSub(it) || '').toLowerCase() : '';
        return label.indexOf(f) !== -1 || sub.indexOf(f) !== -1;
      });
      if (!filtered.length) {
        menu.innerHTML = '<div class="combo-empty">Sin resultados</div>';
      } else {
        menu.innerHTML = filtered.slice(0, 60).map(function (it) {
          const sub = cfg.getSub ? cfg.getSub(it) : '';
          return '<div class="combo-item" data-id="' + escapeHtml(String(cfg.getId(it))) + '">' +
            escapeHtml(cfg.getLabel(it)) +
            (sub ? '<span class="sub">' + escapeHtml(sub) + '</span>' : '') +
            '</div>';
        }).join('');
      }
      menu.classList.add('open');
    }

    input.addEventListener('focus', renderMenu);
    input.addEventListener('input', function () {
      selectedId = null;
      renderMenu();
      syncFloating();
    });
    input.addEventListener('blur', function () {
      setTimeout(function () { menu.classList.remove('open'); }, 150);
    });
    menu.addEventListener('mousedown', function (e) {
      const item = e.target.closest('.combo-item');
      if (!item) return;
      const id = item.getAttribute('data-id');
      const found = items.find(function (it) { return String(cfg.getId(it)) === String(id); });
      if (found) {
        input.value = cfg.getLabel(found);
        selectedId = cfg.getId(found);
        if (cfg.onSelect) cfg.onSelect(found);
      }
      menu.classList.remove('open');
      syncFloating();
    });

    if (cfg.initial) {
      input.value = cfg.getLabel(cfg.initial);
      selectedId = cfg.getId(cfg.initial);
    }
    syncFloating();

    return {
      getSelectedId: function () { return selectedId; },
      getSelectedItem: function () { return items.find(function (it) { return String(cfg.getId(it)) === String(selectedId); }); },
      setItems: function (newItems) { items = newItems; }
    };
  }

  /* ------------------------------------------------------------------ *
   *  Sincroniza el estado "has-value" de inputs de texto simples
   *  (para el efecto floating-label en formularios generados dinámicamente)
   * ------------------------------------------------------------------ */
  function wireFloatingFields(container) {
    container.querySelectorAll('.field > input, .field > select, .field > textarea').forEach(function (el) {
      const field = el.closest('.field');
      const sync = function () { field.classList.toggle('has-value', el.value.trim().length > 0); };
      el.addEventListener('input', sync);
      el.addEventListener('change', sync);
      sync();
    });
  }

  /* ------------------------------------------------------------------ *
   *  Autenticación
   * ------------------------------------------------------------------ */
  function handleLoginSubmit(e) {
    e.preventDefault();
    const userInput = document.getElementById('txtUsername');
    const passInput = document.getElementById('txtPassword');
    const errorEl = document.getElementById('txtError');
    const user = userInput.value.trim();
    const pass = passInput.value;

    errorEl.hidden = true;

    if (!user || !pass) {
      errorEl.textContent = 'Ingrese usuario y contraseña.';
      errorEl.hidden = false;
      return;
    }

    const found = DB.usuarios.find(function (u) {
      return u.username.toLowerCase() === user.toLowerCase() && u.activo;
    });

    if (!found) {
      errorEl.textContent = 'Usuario no encontrado.';
      errorEl.hidden = false;
      return;
    }
    if (found.password !== pass) {
      errorEl.textContent = 'Contraseña incorrecta.';
      errorEl.hidden = false;
      return;
    }

    state.user = { id: found.id, nombreCompleto: found.nombreCompleto, rol: found.rol };
    registrarAuditoria('INICIÓ SESIÓN', 'El usuario inició sesión en el sistema.');

    document.getElementById('login-screen').hidden = true;
    document.getElementById('app').hidden = false;
    document.getElementById('txtUserName').textContent = found.nombreCompleto;
    document.getElementById('txtUserRole').textContent = nombreRol(found.rol);

    applyRolePermissions();
    navigateTo('dashboard');

    userInput.value = '';
    passInput.value = '';
  }

  function handleLogout() {
    state.user = null;
    state.currentPage = 'dashboard';
    state.selected = {};
    state.search = {};
    document.getElementById('app').hidden = true;
    document.getElementById('login-screen').hidden = false;
    document.getElementById('txtError').hidden = true;
    document.getElementById('login-form').reset();
    document.querySelectorAll('.field').forEach(function (f) { f.classList.remove('has-value'); });
    closeSidebarMobile();
  }

  function applyRolePermissions() {
    const isAdmin = state.user.rol === 1;
    ['btnNavUsuarios', 'btnNavAuditoria', 'btnNavBackup', 'btnNavConfiguracion'].forEach(function (id) {
      document.getElementById(id).style.display = isAdmin ? '' : 'none';
    });
  }

  /* ------------------------------------------------------------------ *
   *  Navegación / Sidebar  (equivalente al Frame de MainWindow)
   * ------------------------------------------------------------------ */
  const NAV_BUTTON_MAP = {
    dashboard: 'btnNavDashboard', libros: 'btnNavLibros', lectores: 'btnNavLectores',
    prestamos: 'btnNavPrestamos', multas: 'btnNavMultas', usuarios: 'btnNavUsuarios',
    auditoria: 'btnNavAuditoria'
  };

  function highlightNav(page) {
    document.querySelectorAll('.nav-btn').forEach(function (btn) { btn.classList.remove('active'); });
    const id = NAV_BUTTON_MAP[page];
    if (id) document.getElementById(id).classList.add('active');
  }

  function closeSidebarMobile() {
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('sidebarScrim').classList.remove('open');
  }

  function navigateTo(page) {
    state.currentPage = page;
    highlightNav(page);
    const main = document.getElementById('main-content');
    const isAdmin = state.user && state.user.rol === 1;

    switch (page) {
      case 'dashboard': renderDashboard(main); break;
      case 'libros': renderLibros(main); break;
      case 'lectores': renderLectores(main); break;
      case 'prestamos': renderPrestamos(main); break;
      case 'multas': renderMultas(main); break;
      case 'usuarios':
        isAdmin ? renderUsuarios(main) : renderAccessDenied(main); break;
      case 'auditoria':
        isAdmin ? renderAuditoria(main) : renderAccessDenied(main); break;
      case 'configuracion':
        isAdmin ? renderConfiguracion(main) : renderAccessDenied(main); break;
      default: renderDashboard(main);
    }
    main.scrollTop = 0;
    closeSidebarMobile();
  }

  function renderAccessDenied(main) {
    main.innerHTML =
      '<div class="page"><div class="access-denied">' +
        '<span class="mdi mdi-lock-alert-outline"></span>' +
        '<h2 style="font-size:18px;font-weight:700;margin-bottom:6px;">Acceso Denegado</h2>' +
        '<p>No tiene permisos para acceder a esta sección.</p>' +
      '</div></div>';
  }

  async function handleBackupClick() {
    if (state.user.rol !== 1) {
      await showMessageBox({
        message: 'Solo los administradores pueden generar respaldos de la base de datos.',
        title: 'Sistema', buttons: 'ok', icon: 'warning'
      });
      return;
    }
    const backup = {
      generadoEl: new Date().toISOString(),
      biblioteca: DB.configuracion.bibliotecaNombre,
      autores: DB.autores, categorias: DB.categorias, libros: DB.libros,
      lectores: DB.lectores, usuarios: DB.usuarios.map(function (u) { const c = Object.assign({}, u); delete c.password; return c; }),
      prestamos: DB.prestamos, multas: DB.multas, auditoria: DB.auditoria
    };
    const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' });
    downloadBlob(blob, 'Backup_Biblioteca_' + timestampSuffix() + '.json');
    registrarAuditoria('GENERÓ RESPALDO', 'El administrador generó un respaldo de la base de datos.');
    await showMessageBox({ message: 'Respaldo generado exitosamente.', title: 'Éxito', buttons: 'ok', icon: 'info' });
  }

  function downloadBlob(blob, filename) {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = filename;
    document.body.appendChild(a); a.click();
    setTimeout(function () { document.body.removeChild(a); URL.revokeObjectURL(url); }, 100);
  }

  function exportCSV(filename, headers, rows) {
    const escapeCsv = function (v) {
      const s = (v === null || v === undefined) ? '' : String(v);
      return /[",;\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
    };
    const lines = [headers.map(escapeCsv).join(';')]
      .concat(rows.map(function (r) { return r.map(escapeCsv).join(';'); }));
    const blob = new Blob(['\uFEFF' + lines.join('\r\n')], { type: 'text/csv;charset=utf-8;' });
    downloadBlob(blob, filename);
  }

  /* ==================================================================== *
   *  DASHBOARD  (réplica de DashboardHome.xaml)
   * ==================================================================== */
  const PIE_COLORS = ['#3F51B5', '#FF9800', '#009688', '#f44336', '#9C27B0', '#795548', '#5C6BC0'];

  function renderDashboard(main) {
    const totalLibros = DB.libros.length;
    const totalLectoresActivos = DB.lectores.filter(function (l) { return l.activo; }).length;
    const prestamosActivos = DB.prestamos.filter(function (p) { return p.estado === 'Activo'; }).length;
    const multasPendientes = DB.multas.filter(function (m) { return !m.pagada; }).length;

    const ultimosLibros = DB.libros.slice().sort(function (a, b) { return b.id - a.id; }).slice(0, 5);
    const ultimosPrestamos = DB.prestamos.slice().sort(function (a, b) { return b.id - a.id; }).slice(0, 5);
    const now = new Date();
    const morosos = DB.prestamos
      .filter(function (p) { return p.estado === 'Activo' && p.fechaDevolucionEsperada < now; })
      .sort(function (a, b) { return a.fechaDevolucionEsperada - b.fechaDevolucionEsperada; });

    main.innerHTML =
      '<div class="page">' +
        '<h1 class="dash-title">Resumen de la Biblioteca</h1>' +

        '<div class="stat-grid">' +
          '<div class="stat-card c-libros"><span class="mdi mdi-book-multiple"></span>' +
            '<div class="stat-label">Total Libros</div><div class="stat-value">' + totalLibros + '</div></div>' +
          '<div class="stat-card c-lectores"><span class="mdi mdi-account-group"></span>' +
            '<div class="stat-label">Lectores Activos</div><div class="stat-value">' + totalLectoresActivos + '</div></div>' +
          '<div class="stat-card c-prestamos"><span class="mdi mdi-book-open-page-variant"></span>' +
            '<div class="stat-label">Préstamos Activos</div><div class="stat-value">' + prestamosActivos + '</div></div>' +
          '<div class="stat-card c-multas"><span class="mdi mdi-cash-multiple"></span>' +
            '<div class="stat-label">Multas Pendientes</div><div class="stat-value">' + multasPendientes + '</div></div>' +
        '</div>' +

        '<div class="dash-row">' +
          '<div class="card card-pad">' +
            '<div class="section-heading">Últimos Libros Incorporados</div>' +
            '<div class="table-scroll"><table class="data-grid compact">' +
              '<thead><tr><th>Libro</th><th>Autor</th><th>Stock</th></tr></thead>' +
              '<tbody>' + (ultimosLibros.length ? ultimosLibros.map(function (l) {
                return '<tr><td>' + escapeHtml(l.titulo) + '</td><td>' + escapeHtml(getAutorNombre(l.idAutor)) +
                  '</td><td>' + l.stockTotal + '</td></tr>';
              }).join('') : '<tr><td colspan="3" class="grid-empty">Sin datos</td></tr>') + '</tbody>' +
            '</table></div>' +
          '</div>' +

          '<div class="card card-pad">' +
            '<div class="section-heading orange">Últimos Libros Prestados</div>' +
            '<div class="table-scroll"><table class="data-grid compact">' +
              '<thead><tr><th>Libro</th><th>Lector</th><th>Devolución</th></tr></thead>' +
              '<tbody>' + (ultimosPrestamos.length ? ultimosPrestamos.map(function (p) {
                return '<tr><td>' + escapeHtml(getLibroTitulo(p.idLibro)) + '</td><td>' + escapeHtml(getLectorNombre(p.idLector)) +
                  '</td><td>' + formatDate(p.fechaDevolucionEsperada) + '</td></tr>';
              }).join('') : '<tr><td colspan="3" class="grid-empty">Sin datos</td></tr>') + '</tbody>' +
            '</table></div>' +
          '</div>' +
        '</div>' +

        '<div class="dash-row dash-row-uneven">' +
          '<div class="card card-pad dash-card-danger">' +
            '<div class="section-heading red">Alertas de Morosidad (Devoluciones Vencidas)</div>' +
            '<div class="table-scroll"><table class="data-grid danger">' +
              '<thead><tr><th>Lector</th><th>Libro</th><th>Fecha Esperada</th><th>Días de Retraso</th></tr></thead>' +
              '<tbody>' + (morosos.length ? morosos.map(function (p) {
                return '<tr><td>' + escapeHtml(getLectorNombre(p.idLector)) + '</td><td>' + escapeHtml(getLibroTitulo(p.idLibro)) +
                  '</td><td>' + formatDate(p.fechaDevolucionEsperada) + '</td><td class="cell-danger">' + diasRetraso(p) + '</td></tr>';
              }).join('') : '<tr><td colspan="4" class="grid-empty">No hay préstamos vencidos.</td></tr>') + '</tbody>' +
            '</table></div>' +
          '</div>' +

          '<div class="card card-pad">' +
            '<div class="section-heading">Libros Más Prestados</div>' +
            '<div id="pieChartHost"></div>' +
          '</div>' +
        '</div>' +
      '</div>';

    renderPieChartLibrosPrestados(document.getElementById('pieChartHost'));
  }

  function renderPieChartLibrosPrestados(host) {
    const counts = {};
    DB.prestamos.forEach(function (p) { counts[p.idLibro] = (counts[p.idLibro] || 0) + 1; });
    const top = Object.keys(counts)
      .map(function (idLibro) { return { idLibro: Number(idLibro), count: counts[idLibro], titulo: getLibroTitulo(Number(idLibro)) }; })
      .sort(function (a, b) { return b.count - a.count; })
      .slice(0, 5);

    if (!top.length) {
      host.innerHTML = '<div class="pie-empty">Aún no hay préstamos registrados.</div>';
      return;
    }

    const total = top.reduce(function (s, t) { return s + t.count; }, 0);
    let acc = 0;
    const stops = top.map(function (t, i) {
      const start = (acc / total) * 360; acc += t.count;
      const end = (acc / total) * 360;
      return PIE_COLORS[i % PIE_COLORS.length] + ' ' + start.toFixed(2) + 'deg ' + end.toFixed(2) + 'deg';
    }).join(', ');

    host.innerHTML =
      '<div class="pie-wrap">' +
        '<div class="pie-chart" style="background:conic-gradient(' + stops + ')"></div>' +
        '<div class="pie-legend">' +
          top.map(function (t, i) {
            return '<div class="pie-legend-item">' +
              '<span class="pie-legend-dot" style="background:' + PIE_COLORS[i % PIE_COLORS.length] + '"></span>' +
              '<span class="pie-legend-label" title="' + escapeHtml(t.titulo) + '">' + escapeHtml(t.titulo) + '</span>' +
              '<span class="pie-legend-value">' + t.count + '</span></div>';
          }).join('') +
        '</div>' +
      '</div>';
  }

  /* ------------------------------------------------------------------ *
   *  Helpers compartidos por las páginas de listado (selección de fila)
   * ------------------------------------------------------------------ */
  function wireRowSelection(tbody, pageKey) {
    tbody.addEventListener('click', (e) => {
      if (e.target.closest('button')) return;
      const row = e.target.closest('tr[data-id]');
      if (!row) return;
      state.selected[pageKey] = Number(row.getAttribute('data-id'));
      tbody.querySelectorAll('tr[data-id]').forEach(r => {
        r.classList.toggle('selected', Number(r.getAttribute('data-id')) === state.selected[pageKey]);
      });
    });
  }
  function getSelectedRecord(pageKey, arrayKey) {
    const id = state.selected[pageKey];
    if (id === undefined || id === null) return null;
    return DB[arrayKey].find(r => r.id === id) || null;
  }
  function wireSearchField(inputId, pageKey, onChange) {
    const input = document.getElementById(inputId);
    input.addEventListener('input', () => {
      state.search[pageKey] = input.value;
      input.closest('.field').classList.toggle('has-value', input.value.trim().length > 0);
      onChange();
    });
  }

  /* ------------------------------------------------------------------ *
   *  Modales genéricos (overlay + tarjeta central)
   * ------------------------------------------------------------------ */
  function openModal(bodyHtml) {
    const root = document.getElementById('modal-root');
    root.innerHTML = '';
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.innerHTML = `<div class="modal">${bodyHtml}</div>`;
    root.appendChild(overlay);
    requestAnimationFrame(() => overlay.classList.add('open'));
    function onKey(e) { if (e.key === 'Escape') closeModal(); }
    overlay.__onKey = onKey;
    document.addEventListener('keydown', onKey);
    return overlay;
  }
  function closeModal() {
    const root = document.getElementById('modal-root');
    const overlay = root.querySelector('.modal-overlay');
    if (!overlay) return;
    overlay.classList.remove('open');
    if (overlay.__onKey) document.removeEventListener('keydown', overlay.__onKey);
    setTimeout(() => overlay.remove(), 150);
  }
  function modalTitlebar(title) {
    return `<div class="modal-titlebar"><h2>${escapeHtml(title)}</h2>
      <button type="button" class="modal-close" id="modalCloseBtn"><span class="mdi mdi-close"></span></button></div>`;
  }
  function modalFooter(saveLabel, saveExtraClass) {
    return `<div class="modal-footer">
      <button type="button" class="btn btn-flat" id="btnCancelarModal" style="color:var(--accent-gray)">CANCELAR</button>
      <button type="button" class="btn btn-raised ${saveExtraClass || ''}" id="btnGuardarModal">${escapeHtml(saveLabel)}</button>
    </div>`;
  }
  function wireModalChrome(onCancel) {
    document.getElementById('modalCloseBtn').addEventListener('click', () => { if (onCancel) onCancel(); closeModal(); });
    document.getElementById('btnCancelarModal').addEventListener('click', () => { if (onCancel) onCancel(); closeModal(); });
  }

  /* ==================================================================== *
   *  LIBROS  (réplica de LibrosPage.xaml + NuevoLibroWindow.xaml)
   * ==================================================================== */
  function filteredLibros() {
    const f = (state.search.libros || '').toLowerCase();
    return DB.libros.filter(l => {
      if (!f) return true;
      return String(l.id).includes(f) ||
        l.titulo.toLowerCase().includes(f) ||
        getAutorNombre(l.idAutor).toLowerCase().includes(f) ||
        getCategoriaNombre(l.idCategoria).toLowerCase().includes(f) ||
        String(l.anioPublicacion).includes(f) ||
        (l.isbn || '').toLowerCase().includes(f);
    }).sort((a, b) => b.id - a.id);
  }

  function renderLibros(main) {
    if (state.search.libros === undefined) state.search.libros = '';
    const isAdmin = state.user.rol === 1;

    main.innerHTML = `
      <div class="page">
        <div class="page-header">
          <div class="page-title">Catálogo de Libros</div>
          <div class="page-search"><div class="field ${state.search.libros ? 'has-value' : ''}">
            <input type="text" id="txtBuscarLibros" placeholder=" " value="${escapeHtml(state.search.libros)}" autocomplete="off">
            <label for="txtBuscarLibros">Buscar libro...</label>
          </div></div>
          <div class="toolbar-actions">
            ${isAdmin ? '<button class="btn btn-raised btn-gray" id="btnEditarLibro">EDITAR</button>' : ''}
            <button class="btn btn-raised btn-green" id="btnExportarLibros">EXPORTAR A EXCEL</button>
            ${isAdmin ? '<button class="btn btn-raised btn-red" id="btnEliminarLibro">ELIMINAR</button>' : ''}
            <button class="btn btn-raised" id="btnNuevoLibro">NUEVO LIBRO</button>
          </div>
        </div>
        <div class="table-scroll"><table class="data-grid">
          <thead><tr><th>ID</th><th>Portada</th><th>Título</th><th>Autor</th><th>Categoría</th><th>Año</th>
            <th>ISBN</th><th>Stock Total</th><th>Disponible</th><th>Precio Reposición</th><th>Fecha Creación</th></tr></thead>
          <tbody id="libros-tbody"></tbody>
        </table></div>
      </div>`;

    renderLibrosTbody();
    wireSearchField('txtBuscarLibros', 'libros', renderLibrosTbody);
    document.getElementById('btnNuevoLibro').addEventListener('click', () => openLibroModal(null));
    document.getElementById('btnExportarLibros').addEventListener('click', handleExportarLibros);
    if (isAdmin) {
      document.getElementById('btnEditarLibro').addEventListener('click', async () => {
        const sel = getSelectedRecord('libros', 'libros');
        if (!sel) { await showMessageBox({ message: 'Por favor, selecciona un libro para editar.', title: 'Aviso', buttons: 'ok', icon: 'warning' }); return; }
        openLibroModal(sel);
      });
      document.getElementById('btnEliminarLibro').addEventListener('click', handleEliminarLibro);
    }
  }

  function renderLibrosTbody() {
    const tbody = document.getElementById('libros-tbody');
    const rows = filteredLibros();
    tbody.innerHTML = rows.length ? rows.map(l => `
      <tr data-id="${l.id}" class="${state.selected.libros === l.id ? 'selected' : ''}">
        <td>${l.id}</td>
        <td>${l.imagenDataUrl
          ? `<img src="${l.imagenDataUrl}" alt="" style="width:40px;height:56px;object-fit:cover;border-radius:2px;box-shadow:var(--el-1);">`
          : `<div class="cell-cover" style="${coverStyle(l.id)}">${escapeHtml(coverInitials(l.titulo))}</div>`}</td>
        <td class="cell-strong">${escapeHtml(l.titulo)}</td>
        <td>${escapeHtml(getAutorNombre(l.idAutor))}</td>
        <td>${escapeHtml(getCategoriaNombre(l.idCategoria))}</td>
        <td>${l.anioPublicacion || ''}</td>
        <td>${escapeHtml(l.isbn || '')}</td>
        <td>${l.stockTotal}</td>
        <td>${l.stockDisponible}</td>
        <td>${formatCLP(l.precioReposicion)}</td>
        <td>${formatDateTime(l.fechaRegistro)}</td>
      </tr>`).join('') : `<tr><td colspan="11" class="grid-empty">No se encontraron libros.</td></tr>`;
    wireRowSelection(tbody, 'libros');
  }

  async function handleEliminarLibro() {
    const sel = getSelectedRecord('libros', 'libros');
    if (!sel) { await showMessageBox({ message: 'Por favor, selecciona un libro para eliminar.', title: 'Aviso', buttons: 'ok', icon: 'warning' }); return; }
    const result = await showMessageBox({ message: `¿Estás seguro de que deseas eliminar "${sel.titulo}"?`, title: 'Confirmar Eliminación', buttons: 'okcancel', icon: 'warning' });
    if (result !== 'ok') return;

    const tienePrestamos = DB.prestamos.some(p => p.idLibro === sel.id);
    if (tienePrestamos) {
      await showMessageBox({ message: 'No se puede eliminar este libro porque tiene préstamos asociados.', title: 'Error', buttons: 'ok', icon: 'error' });
      return;
    }
    DB.libros = DB.libros.filter(l => l.id !== sel.id);
    state.selected.libros = null;
    registrarAuditoria('ELIMINÓ LIBRO', `Id: ${sel.id}, Título: ${sel.titulo}`);
    renderLibrosTbody();
    await showMessageBox({ message: 'Libro eliminado correctamente.', title: 'Éxito', buttons: 'ok', icon: 'info' });
  }

  async function handleExportarLibros() {
    const rows = filteredLibros();
    const headers = ['ID', 'Título', 'Autor', 'Categoría', 'Año', 'ISBN', 'Stock Total', 'Stock Disponible', 'Precio Reposición', 'Fecha Creación'];
    const data = rows.map(l => [l.id, l.titulo, getAutorNombre(l.idAutor), getCategoriaNombre(l.idCategoria), l.anioPublicacion, l.isbn, l.stockTotal, l.stockDisponible, l.precioReposicion, formatDateTime(l.fechaRegistro)]);
    exportCSV(`Libros_Export_${timestampSuffix()}.csv`, headers, data);
    await showMessageBox({ message: 'Exportación exitosa.', title: 'Éxito', buttons: 'ok', icon: 'info' });
  }

  function updateCoverPreview(dataUrl, titulo, id) {
    const el = document.getElementById('coverPreview');
    if (!el) return;
    if (dataUrl) {
      el.removeAttribute('style');
      el.innerHTML = `<img src="${dataUrl}" alt="" style="width:100%;height:100%;object-fit:cover;border-radius:3px;">`;
    } else {
      el.setAttribute('style', coverStyle(id || 0));
      el.textContent = titulo ? coverInitials(titulo) : '';
    }
  }

  function openLibroModal(libro) {
    const isEdit = !!libro;
    openModal(`
      ${modalTitlebar(isEdit ? 'Editar Libro' : 'Agregar Nuevo Libro')}
      <div class="modal-body">
        <h3>Datos del Libro</h3>
        <form id="libroForm" novalidate>
          <div class="field"><input type="text" id="txtTitulo" placeholder=" " value="${isEdit ? escapeHtml(libro.titulo) : ''}">
            <label for="txtTitulo">Título del Libro</label></div>
          <div class="field"><input type="text" id="txtIsbn" placeholder=" " value="${isEdit ? escapeHtml(libro.isbn || '') : ''}">
            <label for="txtIsbn">ISBN</label></div>
          <div class="field combo"><input type="text" id="cmbAutor" placeholder=" " autocomplete="off">
            <label for="cmbAutor">Autor</label><div class="combo-menu" id="cmbAutorMenu"></div></div>
          <div class="field combo"><input type="text" id="cmbCategoria" placeholder=" " autocomplete="off">
            <label for="cmbCategoria">Categoría</label><div class="combo-menu" id="cmbCategoriaMenu"></div></div>
          <div class="field-row">
            <div class="field"><input type="number" id="txtAnio" placeholder=" " value="${isEdit ? libro.anioPublicacion : ''}">
              <label for="txtAnio">Año Publicación</label></div>
            <div class="field"><input type="number" min="0" id="txtStock" placeholder=" " value="${isEdit ? libro.stockTotal : ''}">
              <label for="txtStock">Stock Inicial</label></div>
          </div>
          <div class="field"><input type="number" min="0" id="txtPrecio" placeholder=" " value="${isEdit ? libro.precioReposicion : ''}">
            <label for="txtPrecio">Precio Reposición (CLP)</label></div>
          <div class="cover-picker">
            <div>
              <button type="button" class="btn btn-outlined" id="btnSubirPortada">SUBIR PORTADA</button>
              <div class="cover-hint" id="txtRutaImagen">${isEdit && libro.imagenDataUrl ? 'Imagen cargada' : 'Ningún archivo seleccionado'}</div>
              <input type="file" id="fileImagen" accept="image/*" hidden>
            </div>
            <div class="cover-preview" id="coverPreview"></div>
          </div>
        </form>
      </div>
      ${modalFooter('GUARDAR')}
    `);

    wireFloatingFields(document.querySelector('.modal-body'));
    updateCoverPreview(isEdit ? libro.imagenDataUrl : null, isEdit ? libro.titulo : '', isEdit ? libro.id : 0);
    wireModalChrome();

    const autorCombo = initCombo({
      inputId: 'cmbAutor', menuId: 'cmbAutorMenu', items: DB.autores,
      getLabel: a => a.nombre, getSub: a => a.nacionalidad, getId: a => a.id,
      initial: isEdit ? getAutor(libro.idAutor) : null
    });
    const categoriaCombo = initCombo({
      inputId: 'cmbCategoria', menuId: 'cmbCategoriaMenu', items: DB.categorias,
      getLabel: c => c.nombre, getId: c => c.id,
      initial: isEdit ? getCategoria(libro.idCategoria) : null
    });

    let pendingImageDataUrl = isEdit ? libro.imagenDataUrl : null;
    document.getElementById('btnSubirPortada').addEventListener('click', () => document.getElementById('fileImagen').click());
    document.getElementById('fileImagen').addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = () => {
        pendingImageDataUrl = reader.result;
        document.getElementById('txtRutaImagen').textContent = file.name;
        updateCoverPreview(pendingImageDataUrl, '', 0);
      };
      reader.readAsDataURL(file);
    });

    document.getElementById('btnGuardarModal').addEventListener('click', async () => {
      const titulo = document.getElementById('txtTitulo').value.trim();
      const isbn = document.getElementById('txtIsbn').value.trim();
      const anio = parseInt(document.getElementById('txtAnio').value, 10);
      const stock = parseInt(document.getElementById('txtStock').value, 10);
      const precio = parseInt(document.getElementById('txtPrecio').value, 10);

      if (!titulo) { await showMessageBox({ message: 'El título del libro es obligatorio.', title: 'Datos incompletos', buttons: 'ok', icon: 'warning' }); return; }

      function resolveComboEntity(combo, inputId, list, entityKey, extra) {
        let item = combo.getSelectedItem();
        const texto = document.getElementById(inputId).value.trim();
        if (!item && texto) {
          item = list.find(x => x.nombre.toLowerCase() === texto.toLowerCase());
          if (!item) { item = Object.assign({ id: nextId(entityKey), nombre: texto }, extra || {}); list.push(item); }
        }
        return item;
      }
      const autorItem = resolveComboEntity(autorCombo, 'cmbAutor', DB.autores, 'autor', { nacionalidad: '' });
      const categoriaItem = resolveComboEntity(categoriaCombo, 'cmbCategoria', DB.categorias, 'categoria');

      if (isEdit) {
        const nuevoStock = isNaN(stock) ? libro.stockTotal : Math.max(0, stock);
        const delta = nuevoStock - libro.stockTotal;
        libro.titulo = titulo;
        libro.isbn = isbn;
        if (autorItem) libro.idAutor = autorItem.id;
        if (categoriaItem) libro.idCategoria = categoriaItem.id;
        libro.anioPublicacion = isNaN(anio) ? libro.anioPublicacion : anio;
        libro.stockTotal = nuevoStock;
        libro.stockDisponible = Math.max(0, libro.stockDisponible + delta);
        libro.precioReposicion = isNaN(precio) ? libro.precioReposicion : precio;
        if (pendingImageDataUrl) libro.imagenDataUrl = pendingImageDataUrl;
        registrarAuditoria('EDITÓ LIBRO', `Id: ${libro.id}, Título: ${libro.titulo}`);
      } else {
        const stockInicial = isNaN(stock) ? 1 : Math.max(0, stock);
        const nuevo = {
          id: nextId('libro'), titulo, isbn,
          idAutor: autorItem ? autorItem.id : null,
          idCategoria: categoriaItem ? categoriaItem.id : null,
          anioPublicacion: isNaN(anio) ? new Date().getFullYear() : anio,
          stockTotal: stockInicial, stockDisponible: stockInicial,
          precioReposicion: isNaN(precio) ? 0 : precio,
          fechaRegistro: new Date(),
          imagenDataUrl: pendingImageDataUrl || null
        };
        DB.libros.push(nuevo);
        registrarAuditoria('AGREGÓ LIBRO', `Título: ${nuevo.titulo}`);
      }
      closeModal();
      renderLibrosTbody();
    });
  }

  /* ==================================================================== *
   *  LECTORES  (réplica de LectoresPage.xaml + NuevoLectorWindow.xaml)
   * ==================================================================== */
  function filteredLectores() {
    const f = (state.search.lectores || '').toLowerCase();
    return DB.lectores.filter(l => {
      if (!f) return true;
      return String(l.id).includes(f) ||
        l.nombreCompleto.toLowerCase().includes(f) ||
        l.rut.toLowerCase().includes(f) ||
        (l.email || '').toLowerCase().includes(f) ||
        (l.telefono || '').toLowerCase().includes(f);
    }).sort((a, b) => b.id - a.id);
  }

  function checkIcon(checked, greenTone) {
    return `<span class="grid-check ${checked ? 'checked' : ''} ${greenTone ? 'green' : ''}">${checked ? '<span class="mdi mdi-check-bold"></span>' : ''}</span>`;
  }

  function renderLectores(main) {
    if (state.search.lectores === undefined) state.search.lectores = '';
    const isAdmin = state.user.rol === 1;

    main.innerHTML = `
      <div class="page">
        <div class="page-header">
          <div class="page-title">Control de Lectores</div>
          <div class="page-search"><div class="field ${state.search.lectores ? 'has-value' : ''}">
            <input type="text" id="txtBuscarLectores" placeholder=" " value="${escapeHtml(state.search.lectores)}" autocomplete="off">
            <label for="txtBuscarLectores">Buscar lector...</label>
          </div></div>
          <div class="toolbar-actions">
            ${isAdmin ? '<button class="btn btn-raised btn-gray" id="btnEditarLector">EDITAR</button>' : ''}
            <button class="btn btn-raised btn-green" id="btnExportarLectores">EXPORTAR A EXCEL</button>
            ${isAdmin ? '<button class="btn btn-raised btn-red" id="btnEliminarLector">ELIMINAR</button>' : ''}
            <button class="btn btn-raised" id="btnNuevoLector">NUEVO LECTOR</button>
          </div>
        </div>
        <div class="table-scroll"><table class="data-grid">
          <thead><tr><th>ID</th><th>Nombre Completo</th><th>RUT/DNI</th><th>Email</th><th>Teléfono</th>
            <th>Fecha Registro</th><th>Activo</th></tr></thead>
          <tbody id="lectores-tbody"></tbody>
        </table></div>
      </div>`;

    renderLectoresTbody();
    wireSearchField('txtBuscarLectores', 'lectores', renderLectoresTbody);
    document.getElementById('btnNuevoLector').addEventListener('click', () => openLectorModal(null));
    document.getElementById('btnExportarLectores').addEventListener('click', handleExportarLectores);
    if (isAdmin) {
      document.getElementById('btnEditarLector').addEventListener('click', async () => {
        const sel = getSelectedRecord('lectores', 'lectores');
        if (!sel) { await showMessageBox({ message: 'Por favor, selecciona un lector para editar.', title: 'Aviso', buttons: 'ok', icon: 'warning' }); return; }
        openLectorModal(sel);
      });
      document.getElementById('btnEliminarLector').addEventListener('click', handleEliminarLector);
    }
  }

  function renderLectoresTbody() {
    const tbody = document.getElementById('lectores-tbody');
    const rows = filteredLectores();
    tbody.innerHTML = rows.length ? rows.map(l => `
      <tr data-id="${l.id}" class="${state.selected.lectores === l.id ? 'selected' : ''}">
        <td>${l.id}</td>
        <td class="cell-strong">${escapeHtml(l.nombreCompleto)}</td>
        <td>${escapeHtml(l.rut)}</td>
        <td>${escapeHtml(l.email || '')}</td>
        <td>${escapeHtml(l.telefono || '')}</td>
        <td>${formatDateTime(l.fechaRegistro)}</td>
        <td>${checkIcon(l.activo)}</td>
      </tr>`).join('') : `<tr><td colspan="7" class="grid-empty">No se encontraron lectores.</td></tr>`;
    wireRowSelection(tbody, 'lectores');
  }

  async function handleEliminarLector() {
    const sel = getSelectedRecord('lectores', 'lectores');
    if (!sel) { await showMessageBox({ message: 'Por favor, selecciona un lector para eliminar.', title: 'Aviso', buttons: 'ok', icon: 'warning' }); return; }
    const result = await showMessageBox({ message: `¿Estás seguro de que deseas eliminar a "${sel.nombreCompleto}"?`, title: 'Confirmar Eliminación', buttons: 'okcancel', icon: 'warning' });
    if (result !== 'ok') return;

    const tienePrestamos = DB.prestamos.some(p => p.idLector === sel.id);
    if (tienePrestamos) {
      await showMessageBox({ message: 'No se puede eliminar este lector porque tiene préstamos asociados.', title: 'Error', buttons: 'ok', icon: 'error' });
      return;
    }
    DB.lectores = DB.lectores.filter(l => l.id !== sel.id);
    state.selected.lectores = null;
    registrarAuditoria('ELIMINÓ LECTOR', `Id: ${sel.id}, Nombre: ${sel.nombreCompleto}`);
    renderLectoresTbody();
    await showMessageBox({ message: 'Lector eliminado correctamente.', title: 'Éxito', buttons: 'ok', icon: 'info' });
  }

  async function handleExportarLectores() {
    const rows = filteredLectores();
    const headers = ['ID', 'Nombre Completo', 'RUT/DNI', 'Email', 'Teléfono', 'Fecha Registro', 'Activo'];
    const data = rows.map(l => [l.id, l.nombreCompleto, l.rut, l.email, l.telefono, formatDateTime(l.fechaRegistro), l.activo ? 'Sí' : 'No']);
    exportCSV(`Lectores_Export_${timestampSuffix()}.csv`, headers, data);
    await showMessageBox({ message: 'Exportación exitosa.', title: 'Éxito', buttons: 'ok', icon: 'info' });
  }

  function openLectorModal(lector) {
    const isEdit = !!lector;
    openModal(`
      ${modalTitlebar(isEdit ? 'Editar Lector' : 'Agregar Nuevo Lector')}
      <div class="modal-body">
        <h3>Datos del Lector (Cliente)</h3>
        <form id="lectorForm" novalidate>
          <div class="field"><input type="text" id="txtNombre" placeholder=" " value="${isEdit ? escapeHtml(lector.nombreCompleto) : ''}">
            <label for="txtNombre">Nombre Completo</label></div>
          <div class="field"><input type="text" id="txtRut" placeholder=" " value="${isEdit ? escapeHtml(lector.rut) : ''}">
            <label for="txtRut">RUT / DNI</label></div>
          <div class="field"><input type="email" id="txtEmail" placeholder=" " value="${isEdit ? escapeHtml(lector.email || '') : ''}">
            <label for="txtEmail">Correo Electrónico</label></div>
          <div class="field"><input type="text" id="txtTelefono" placeholder=" " value="${isEdit ? escapeHtml(lector.telefono || '') : ''}">
            <label for="txtTelefono">Teléfono</label></div>
        </form>
      </div>
      ${modalFooter('GUARDAR')}
    `);
    wireFloatingFields(document.querySelector('.modal-body'));
    wireModalChrome();

    document.getElementById('btnGuardarModal').addEventListener('click', async () => {
      const nombreCompleto = document.getElementById('txtNombre').value.trim();
      const rut = document.getElementById('txtRut').value.trim();
      const email = document.getElementById('txtEmail').value.trim();
      const telefono = document.getElementById('txtTelefono').value.trim();

      if (!nombreCompleto || !rut) {
        await showMessageBox({ message: 'El nombre completo y el RUT/DNI son obligatorios.', title: 'Datos incompletos', buttons: 'ok', icon: 'warning' });
        return;
      }
      const duplicado = DB.lectores.find(l => l.rut.toLowerCase() === rut.toLowerCase() && (!isEdit || l.id !== lector.id));
      if (duplicado) {
        await showMessageBox({ message: 'Ya existe un lector registrado con ese RUT/DNI.', title: 'Error', buttons: 'ok', icon: 'error' });
        return;
      }

      if (isEdit) {
        lector.nombreCompleto = nombreCompleto; lector.rut = rut; lector.email = email; lector.telefono = telefono;
        registrarAuditoria('EDITÓ LECTOR', `Id: ${lector.id}, Nombre: ${lector.nombreCompleto}`);
      } else {
        const nuevo = { id: nextId('lector'), nombreCompleto, rut, email, telefono, activo: true, fechaRegistro: new Date() };
        DB.lectores.push(nuevo);
        registrarAuditoria('AGREGÓ LECTOR', `Nombre: ${nuevo.nombreCompleto}`);
      }
      closeModal();
      renderLectoresTbody();
    });
  }

  /* ------------------------------------------------------------------ *
   *  Helpers de fecha para inputs <input type="date">
   * ------------------------------------------------------------------ */
  function addDays(date, n) { const d = new Date(date); d.setDate(d.getDate() + n); return d; }
  function dateInputValue(date) {
    const d = new Date(date);
    return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
  }

  /* ==================================================================== *
   *  PRÉSTAMOS  (réplica de PrestamosPage.xaml + NuevoPrestamoWindow.xaml)
   * ==================================================================== */
  function filteredPrestamos() {
    const f = (state.search.prestamos || '').toLowerCase();
    return DB.prestamos.filter(p => {
      if (!f) return true;
      return String(p.id).includes(f) ||
        getLibroTitulo(p.idLibro).toLowerCase().includes(f) ||
        getLectorNombre(p.idLector).toLowerCase().includes(f);
    }).sort((a, b) => b.id - a.id);
  }

  function estadoPrestamoBadge(p) {
    if (p.estado === 'Devuelto') return `<span class="badge badge-devuelto">Devuelto</span>`;
    const d = diasRetraso(p);
    if (d > 0) return `<span class="badge badge-activo">Activo</span> <span class="cell-danger" style="font-size:11.5px;white-space:nowrap;">(${d} ${d === 1 ? 'día' : 'días'} atraso)</span>`;
    return `<span class="badge badge-activo">Activo</span>`;
  }

  function renderPrestamos(main) {
    if (state.search.prestamos === undefined) state.search.prestamos = '';
    const isAdmin = state.user.rol === 1;

    main.innerHTML = `
      <div class="page">
        <div class="page-header">
          <div class="page-title">Control de Préstamos</div>
          <div class="page-search"><div class="field ${state.search.prestamos ? 'has-value' : ''}">
            <input type="text" id="txtBuscarPrestamos" placeholder=" " value="${escapeHtml(state.search.prestamos)}" autocomplete="off">
            <label for="txtBuscarPrestamos">Buscar préstamo...</label>
          </div></div>
          <div class="toolbar-actions">
            ${isAdmin ? '<button class="btn btn-raised btn-gray" id="btnEditarPrestamo">EDITAR</button>' : ''}
            <button class="btn btn-raised btn-green" id="btnExportarPrestamos">EXPORTAR A EXCEL</button>
            ${isAdmin ? '<button class="btn btn-raised btn-red" id="btnEliminarPrestamo">ELIMINAR</button>' : ''}
            <button class="btn btn-outlined" id="btnDevolucionPrestamo">REGISTRAR DEVOLUCIÓN</button>
            <button class="btn btn-raised" id="btnNuevoPrestamo">REGISTRAR PRÉSTAMO</button>
          </div>
        </div>
        <div class="table-scroll"><table class="data-grid">
          <thead><tr><th>ID</th><th>Libro</th><th>Lector</th><th>Fecha Préstamo</th><th>Devolución Esperada</th><th>Estado</th><th>Ticket</th></tr></thead>
          <tbody id="prestamos-tbody"></tbody>
        </table></div>
      </div>`;

    renderPrestamosTbody();
    wireSearchField('txtBuscarPrestamos', 'prestamos', renderPrestamosTbody);
    document.getElementById('btnNuevoPrestamo').addEventListener('click', () => openPrestamoModal(null));
    document.getElementById('btnExportarPrestamos').addEventListener('click', handleExportarPrestamos);
    document.getElementById('btnDevolucionPrestamo').addEventListener('click', handleRegistrarDevolucion);
    if (isAdmin) {
      document.getElementById('btnEditarPrestamo').addEventListener('click', async () => {
        const sel = getSelectedRecord('prestamos', 'prestamos');
        if (!sel) { await showMessageBox({ message: 'Por favor, selecciona un préstamo para editar.', title: 'Aviso', buttons: 'ok', icon: 'warning' }); return; }
        openPrestamoModal(sel);
      });
      document.getElementById('btnEliminarPrestamo').addEventListener('click', handleEliminarPrestamo);
    }
  }

  function renderPrestamosTbody() {
    const tbody = document.getElementById('prestamos-tbody');
    const rows = filteredPrestamos();
    tbody.innerHTML = rows.length ? rows.map(p => `
      <tr data-id="${p.id}" class="${state.selected.prestamos === p.id ? 'selected' : ''}">
        <td>${p.id}</td>
        <td class="cell-strong">${escapeHtml(getLibroTitulo(p.idLibro))}</td>
        <td>${escapeHtml(getLectorNombre(p.idLector))}</td>
        <td>${formatDateTime(p.fechaPrestamo)}</td>
        <td>${formatDateTime(p.fechaDevolucionEsperada)}</td>
        <td>${estadoPrestamoBadge(p)}</td>
        <td><button class="link-btn" data-ticket-id="${p.id}">IMPRIMIR</button></td>
      </tr>`).join('') : `<tr><td colspan="7" class="grid-empty">No se encontraron préstamos.</td></tr>`;
    wireRowSelection(tbody, 'prestamos');
    tbody.querySelectorAll('[data-ticket-id]').forEach(btn => {
      btn.addEventListener('click', () => {
        const p = DB.prestamos.find(x => x.id === Number(btn.getAttribute('data-ticket-id')));
        if (p) mostrarTicketPrestamo(p);
      });
    });
  }

  async function handleEliminarPrestamo() {
    const sel = getSelectedRecord('prestamos', 'prestamos');
    if (!sel) { await showMessageBox({ message: 'Por favor, selecciona un préstamo para eliminar.', title: 'Aviso', buttons: 'ok', icon: 'warning' }); return; }
    const result = await showMessageBox({ message: '¿Estás seguro de que deseas eliminar este préstamo?', title: 'Confirmar Eliminación', buttons: 'okcancel', icon: 'warning' });
    if (result !== 'ok') return;

    if (sel.estado === 'Activo') {
      const libro = getLibro(sel.idLibro);
      if (libro) libro.stockDisponible = Math.min(libro.stockTotal, libro.stockDisponible + 1);
    }
    DB.prestamos = DB.prestamos.filter(p => p.id !== sel.id);
    state.selected.prestamos = null;
    registrarAuditoria('ELIMINÓ PRÉSTAMO', `Id: ${sel.id}, Libro: ${getLibroTitulo(sel.idLibro)}`);
    renderPrestamosTbody();
    await showMessageBox({ message: 'Préstamo eliminado correctamente.', title: 'Éxito', buttons: 'ok', icon: 'info' });
  }

  async function handleRegistrarDevolucion() {
    const prestamo = getSelectedRecord('prestamos', 'prestamos');
    if (!prestamo) { await showMessageBox({ message: 'Por favor, selecciona un préstamo de la lista primero.', title: 'Sistema', buttons: 'ok', icon: 'warning' }); return; }
    if (prestamo.estado === 'Devuelto') { await showMessageBox({ message: 'Este libro ya fue devuelto.', title: 'Sistema', buttons: 'ok', icon: 'warning' }); return; }

    const result = await showMessageBox({
      message: `¿Confirmas la devolución del libro "${getLibroTitulo(prestamo.idLibro)}" por parte de ${getLectorNombre(prestamo.idLector)}?`,
      title: 'Confirmar Devolución', buttons: 'okcancel', icon: 'question'
    });
    if (result !== 'ok') return;

    prestamo.estado = 'Devuelto';
    prestamo.fechaDevolucionReal = new Date();
    const libro = getLibro(prestamo.idLibro);
    if (libro) libro.stockDisponible = Math.min(libro.stockTotal, libro.stockDisponible + 1);

    registrarAuditoria('REGISTRÓ DEVOLUCIÓN', `Libro: ${getLibroTitulo(prestamo.idLibro)}, Lector: ${getLectorNombre(prestamo.idLector)}`);
    renderPrestamosTbody();
    await showMessageBox({ message: 'Devolución registrada correctamente.', title: 'Éxito', buttons: 'ok', icon: 'info' });
  }

  async function handleExportarPrestamos() {
    const rows = filteredPrestamos();
    const headers = ['ID', 'Libro', 'Lector', 'Fecha Préstamo', 'Devolución Esperada', 'Estado'];
    const data = rows.map(p => [p.id, getLibroTitulo(p.idLibro), getLectorNombre(p.idLector), formatDateTime(p.fechaPrestamo), formatDateTime(p.fechaDevolucionEsperada), p.estado]);
    exportCSV(`Prestamos_Export_${timestampSuffix()}.csv`, headers, data);
    await showMessageBox({ message: 'Exportación exitosa.', title: 'Éxito', buttons: 'ok', icon: 'info' });
  }

  function openPrestamoModal(prestamo) {
    const isEdit = !!prestamo;
    const defaultDate = isEdit ? prestamo.fechaDevolucionEsperada : addDays(new Date(), 14);

    openModal(`
      ${modalTitlebar(isEdit ? 'Editar Préstamo' : 'Registrar Préstamo')}
      <div class="modal-body">
        <h3>${isEdit ? 'Editar Préstamo' : 'Nuevo Préstamo'}</h3>
        <form id="prestamoForm" novalidate>
          <div class="field combo"><input type="text" id="cmbLibro" placeholder=" " autocomplete="off">
            <label for="cmbLibro">Seleccionar Libro</label><div class="combo-menu" id="cmbLibroMenu"></div></div>
          <div class="field combo"><input type="text" id="cmbLector" placeholder=" " autocomplete="off">
            <label for="cmbLector">Seleccionar Lector</label><div class="combo-menu" id="cmbLectorMenu"></div></div>
          <div class="field floated"><input type="date" id="dpFechaDevolucion" value="${dateInputValue(defaultDate)}">
            <label for="dpFechaDevolucion">Fecha de Devolución Esperada</label></div>
        </form>
      </div>
      ${modalFooter('GUARDAR')}
    `);
    wireFloatingFields(document.querySelector('.modal-body'));
    wireModalChrome();

    const libroCombo = initCombo({
      inputId: 'cmbLibro', menuId: 'cmbLibroMenu',
      items: DB.libros.filter(l => l.stockDisponible > 0 || (isEdit && l.id === prestamo.idLibro)),
      getLabel: l => l.titulo, getSub: l => `Disponibles: ${l.stockDisponible}/${l.stockTotal}`, getId: l => l.id,
      initial: isEdit ? getLibro(prestamo.idLibro) : null
    });
    const lectorCombo = initCombo({
      inputId: 'cmbLector', menuId: 'cmbLectorMenu', items: DB.lectores.filter(l => l.activo),
      getLabel: l => l.nombreCompleto, getSub: l => l.rut, getId: l => l.id,
      initial: isEdit ? getLector(prestamo.idLector) : null
    });

    document.getElementById('btnGuardarModal').addEventListener('click', async () => {
      const libroItem = libroCombo.getSelectedItem();
      const lectorItem = lectorCombo.getSelectedItem();
      const fechaStr = document.getElementById('dpFechaDevolucion').value;

      if (!libroItem || !lectorItem || !fechaStr) {
        await showMessageBox({ message: 'Debes seleccionar un libro, un lector y una fecha de devolución.', title: 'Datos incompletos', buttons: 'ok', icon: 'warning' });
        return;
      }
      const fechaDevolucionEsperada = new Date(fechaStr + 'T23:59:00');

      if (isEdit) {
        if (libroItem.id !== prestamo.idLibro && prestamo.estado === 'Activo') {
          if (libroItem.stockDisponible <= 0) {
            await showMessageBox({ message: 'No hay ejemplares disponibles de ese libro.', title: 'Sin stock', buttons: 'ok', icon: 'warning' });
            return;
          }
          const anterior = getLibro(prestamo.idLibro);
          if (anterior) anterior.stockDisponible = Math.min(anterior.stockTotal, anterior.stockDisponible + 1);
          libroItem.stockDisponible -= 1;
        }
        prestamo.idLibro = libroItem.id;
        prestamo.idLector = lectorItem.id;
        prestamo.fechaDevolucionEsperada = fechaDevolucionEsperada;
        registrarAuditoria('EDITÓ PRÉSTAMO', `Id: ${prestamo.id}, Libro: ${libroItem.titulo}`);
      } else {
        if (libroItem.stockDisponible <= 0) {
          await showMessageBox({ message: 'No hay ejemplares disponibles de ese libro.', title: 'Sin stock', buttons: 'ok', icon: 'warning' });
          return;
        }
        const nuevo = {
          id: nextId('prestamo'), idLibro: libroItem.id, idLector: lectorItem.id,
          fechaPrestamo: new Date(), fechaDevolucionEsperada, fechaDevolucionReal: null, estado: 'Activo'
        };
        DB.prestamos.push(nuevo);
        libroItem.stockDisponible -= 1;
        registrarAuditoria('REGISTRÓ PRÉSTAMO', `Libro: ${libroItem.titulo}, Lector: ${lectorItem.nombreCompleto}`);
      }
      closeModal();
      renderPrestamosTbody();
    });
  }

  /* ------------------------------------------------------------------ *
   *  Tickets de impresión (réplica de TicketPrinter.cs)
   * ------------------------------------------------------------------ */
  function mostrarTicketModal(titulo, contenido) {
    openModal(`
      ${modalTitlebar(titulo)}
      <div class="modal-body">
        <div id="print-area"><div class="ticket-paper">${escapeHtml(contenido)}</div></div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-flat" id="btnCancelarModal" style="color:var(--accent-gray)">CERRAR</button>
        <button type="button" class="btn btn-raised" id="btnImprimirTicket"><span class="mdi mdi-printer"></span> IMPRIMIR</button>
      </div>
    `);
    wireModalChrome();
    document.getElementById('btnImprimirTicket').addEventListener('click', async () => {
      window.print();
      await showMessageBox({ message: 'Ticket enviado a la impresora.', title: 'Éxito', buttons: 'ok', icon: 'info' });
    });
  }

  function mostrarTicketPrestamo(p) {
    const nombreBiblioteca = (DB.configuracion.bibliotecaNombre || 'Biblioteca Municipal').toUpperCase();
    const contenido = [
      '===================================',
      `       ${nombreBiblioteca}`,
      '       TICKET DE PRÉSTAMO',
      '===================================',
      '',
      `Fecha: ${formatDateTime(new Date())}`,
      `Lector: ${getLectorNombre(p.idLector)}`,
      `Libro: ${getLibroTitulo(p.idLibro)}`,
      `Fecha Préstamo: ${formatDate(p.fechaPrestamo)}`,
      `Devolución Esperada: ${formatDate(p.fechaDevolucionEsperada)}`,
      '',
      '===================================',
      'Recuerde devolver el libro a tiempo',
      'para evitar multas.',
      '==================================='
    ].join('\n');
    mostrarTicketModal('Ticket de Préstamo', contenido);
  }

  /* ==================================================================== *
   *  MULTAS  (réplica de MultasPage.xaml + NuevaMultaWindow.xaml)
   * ==================================================================== */
  function multaPrestamo(m) { return DB.prestamos.find(p => p.id === m.idPrestamo) || null; }
  function multaLectorNombre(m) { const p = multaPrestamo(m); return p ? getLectorNombre(p.idLector) : '(préstamo eliminado)'; }
  function multaLibroTitulo(m) { const p = multaPrestamo(m); return p ? getLibroTitulo(p.idLibro) : '(préstamo eliminado)'; }

  function filteredMultas() {
    const f = (state.search.multas || '').toLowerCase();
    return DB.multas.filter(m => {
      if (!f) return true;
      return String(m.id).includes(f) ||
        multaLectorNombre(m).toLowerCase().includes(f) ||
        multaLibroTitulo(m).toLowerCase().includes(f) ||
        m.motivo.toLowerCase().includes(f);
    }).sort((a, b) => b.id - a.id);
  }

  function renderMultas(main) {
    if (state.search.multas === undefined) state.search.multas = '';
    const isAdmin = state.user.rol === 1;

    main.innerHTML = `
      <div class="page">
        <div class="page-header">
          <div class="page-title">Control de Multas</div>
          <div class="page-search"><div class="field ${state.search.multas ? 'has-value' : ''}">
            <input type="text" id="txtBuscarMultas" placeholder=" " value="${escapeHtml(state.search.multas)}" autocomplete="off">
            <label for="txtBuscarMultas">Buscar multa...</label>
          </div></div>
          <div class="toolbar-actions">
            ${isAdmin ? '<button class="btn btn-raised btn-gray" id="btnEditarMulta">EDITAR</button>' : ''}
            <button class="btn btn-raised btn-green" id="btnExportarMultas">EXPORTAR A EXCEL</button>
            ${isAdmin ? '<button class="btn btn-raised btn-red" id="btnEliminarMulta">ELIMINAR</button>' : ''}
            <button class="btn btn-raised btn-red" id="btnNuevaMulta">GENERAR MULTA</button>
          </div>
        </div>
        <div class="table-scroll"><table class="data-grid">
          <thead><tr><th>ID</th><th>Lector</th><th>Libro</th><th>Motivo</th><th>Monto (CLP)</th><th>Fecha Emisión</th><th>Pagada</th><th>Acción</th></tr></thead>
          <tbody id="multas-tbody"></tbody>
        </table></div>
      </div>`;

    renderMultasTbody();
    wireSearchField('txtBuscarMultas', 'multas', renderMultasTbody);
    document.getElementById('btnNuevaMulta').addEventListener('click', () => openMultaModal(null));
    document.getElementById('btnExportarMultas').addEventListener('click', handleExportarMultas);
    if (isAdmin) {
      document.getElementById('btnEditarMulta').addEventListener('click', async () => {
        const sel = getSelectedRecord('multas', 'multas');
        if (!sel) { await showMessageBox({ message: 'Por favor, selecciona una multa para editar.', title: 'Aviso', buttons: 'ok', icon: 'warning' }); return; }
        openMultaModal(sel);
      });
      document.getElementById('btnEliminarMulta').addEventListener('click', handleEliminarMulta);
    }
  }

  function renderMultasTbody() {
    const tbody = document.getElementById('multas-tbody');
    const rows = filteredMultas();
    tbody.innerHTML = rows.length ? rows.map(m => `
      <tr data-id="${m.id}" class="${state.selected.multas === m.id ? 'selected' : ''}">
        <td>${m.id}</td>
        <td>${escapeHtml(multaLectorNombre(m))}</td>
        <td>${escapeHtml(multaLibroTitulo(m))}</td>
        <td>${escapeHtml(m.motivo)}</td>
        <td class="cell-danger">${formatCLP(m.monto)}</td>
        <td>${formatDateTime(m.fechaGeneracion)}</td>
        <td>${checkIcon(m.pagada, true)}</td>
        <td><div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;">
          <button class="btn btn-raised btn-green btn-sm" data-pagar-id="${m.id}"${m.pagada ? ' disabled style="opacity:.4;cursor:default;box-shadow:none;"' : ''}>
            <span class="mdi mdi-cash-register"></span>PAGAR</button>
          <button class="link-btn" data-ticket-multa-id="${m.id}">TICKET</button>
        </div></td>
      </tr>`).join('') : `<tr><td colspan="8" class="grid-empty">No se encontraron multas.</td></tr>`;
    wireRowSelection(tbody, 'multas');
    tbody.querySelectorAll('[data-pagar-id]').forEach(btn => {
      btn.addEventListener('click', () => handlePagarMulta(Number(btn.getAttribute('data-pagar-id'))));
    });
    tbody.querySelectorAll('[data-ticket-multa-id]').forEach(btn => {
      btn.addEventListener('click', () => {
        const m = DB.multas.find(x => x.id === Number(btn.getAttribute('data-ticket-multa-id')));
        if (m) mostrarTicketMulta(m);
      });
    });
  }

  async function handlePagarMulta(id) {
    const multa = DB.multas.find(m => m.id === id);
    if (!multa) return;
    if (multa.pagada) { await showMessageBox({ message: 'Esta multa ya está pagada.', title: 'Información', buttons: 'ok', icon: 'info' }); return; }

    const result = await showMessageBox({ message: `¿Confirmas el pago de ${formatCLP(multa.monto)} por ${multa.motivo}?`, title: 'Pagar Multa', buttons: 'okcancel', icon: 'question' });
    if (result !== 'ok') return;

    multa.pagada = true;
    registrarAuditoria('PAGÓ MULTA', `Lector: ${multaLectorNombre(multa)}, Libro: ${multaLibroTitulo(multa)}, Monto: ${formatCLP(multa.monto)}`);
    renderMultasTbody();
    await showMessageBox({ message: '¡Pago registrado exitosamente!', title: 'Éxito', buttons: 'ok', icon: 'info' });
  }

  async function handleEliminarMulta() {
    const sel = getSelectedRecord('multas', 'multas');
    if (!sel) { await showMessageBox({ message: 'Por favor, selecciona una multa para eliminar.', title: 'Aviso', buttons: 'ok', icon: 'warning' }); return; }
    const result = await showMessageBox({ message: '¿Estás seguro de que deseas eliminar esta multa?', title: 'Confirmar Eliminación', buttons: 'okcancel', icon: 'warning' });
    if (result !== 'ok') return;
    DB.multas = DB.multas.filter(m => m.id !== sel.id);
    state.selected.multas = null;
    registrarAuditoria('ELIMINÓ MULTA', `Id: ${sel.id}, Monto: ${formatCLP(sel.monto)}`);
    renderMultasTbody();
    await showMessageBox({ message: 'Multa eliminada correctamente.', title: 'Éxito', buttons: 'ok', icon: 'info' });
  }

  async function handleExportarMultas() {
    const rows = filteredMultas();
    const headers = ['ID', 'Lector', 'Libro', 'Motivo', 'Monto', 'Fecha Emisión', 'Pagada'];
    const data = rows.map(m => [m.id, multaLectorNombre(m), multaLibroTitulo(m), m.motivo, m.monto, formatDateTime(m.fechaGeneracion), m.pagada ? 'Sí' : 'No']);
    exportCSV(`Multas_Export_${timestampSuffix()}.csv`, headers, data);
    await showMessageBox({ message: 'Exportación exitosa.', title: 'Éxito', buttons: 'ok', icon: 'info' });
  }

  function openMultaModal(multa) {
    const isEdit = !!multa;
    const overdue = DB.prestamos.filter(p => p.estado === 'Activo' && diasRetraso(p) > 0);
    const yaAsociado = isEdit ? multaPrestamo(multa) : null;
    const comboItems = (yaAsociado && !overdue.some(p => p.id === yaAsociado.id)) ? [yaAsociado].concat(overdue) : overdue;

    openModal(`
      ${modalTitlebar(isEdit ? 'Editar Multa' : 'Generar Multa')}
      <div class="modal-body">
        <h3>${isEdit ? 'Editar Multa' : 'Generar Nueva Multa'}</h3>
        <form id="multaForm" novalidate>
          <div class="field combo"><input type="text" id="cmbPrestamo" placeholder=" " autocomplete="off" ${isEdit ? 'disabled' : ''}>
            <label for="cmbPrestamo">Seleccionar Préstamo Atrasado</label><div class="combo-menu" id="cmbPrestamoMenu"></div></div>
          <div class="field"><input type="text" id="txtMotivo" placeholder=" " value="${isEdit ? escapeHtml(multa.motivo) : 'Atraso en devolución'}">
            <label for="txtMotivo">Motivo de la Multa</label></div>
          <div class="field has-prefix"><span class="prefix">$</span>
            <input type="number" min="0" id="txtMonto" placeholder=" " value="${isEdit ? multa.monto : ''}">
            <label for="txtMonto">Monto de la Multa (CLP)</label></div>
        </form>
      </div>
      ${modalFooter(isEdit ? 'GUARDAR' : 'GENERAR MULTA', 'btn-red')}
    `);
    wireFloatingFields(document.querySelector('.modal-body'));
    wireModalChrome();

    const prestamoCombo = initCombo({
      inputId: 'cmbPrestamo', menuId: 'cmbPrestamoMenu', items: comboItems,
      getLabel: p => `${getLibroTitulo(p.idLibro)} — ${getLectorNombre(p.idLector)}`,
      getSub: p => `Venció el ${formatDate(p.fechaDevolucionEsperada)} · ${diasRetraso(p)} día(s) de atraso`,
      getId: p => p.id,
      initial: yaAsociado,
      onSelect: (p) => {
        const montoField = document.getElementById('txtMonto');
        const sugerido = diasRetraso(p) * (DB.configuracion.multaDiaria || 0);
        if (sugerido > 0 && !montoField.value) {
          montoField.value = sugerido;
          montoField.closest('.field').classList.add('has-value');
        }
      }
    });

    document.getElementById('btnGuardarModal').addEventListener('click', async () => {
      const prestamoItem = isEdit ? yaAsociado : prestamoCombo.getSelectedItem();
      const motivo = document.getElementById('txtMotivo').value.trim() || 'Atraso en devolución';
      const monto = parseInt(document.getElementById('txtMonto').value, 10);

      if (!prestamoItem) { await showMessageBox({ message: 'Debes seleccionar un préstamo atrasado.', title: 'Datos incompletos', buttons: 'ok', icon: 'warning' }); return; }
      if (isNaN(monto) || monto <= 0) { await showMessageBox({ message: 'Ingresa un monto de multa válido.', title: 'Datos incompletos', buttons: 'ok', icon: 'warning' }); return; }

      if (isEdit) {
        multa.motivo = motivo; multa.monto = monto;
        registrarAuditoria('EDITÓ MULTA', `Id: ${multa.id}, Monto: ${formatCLP(multa.monto)}`);
      } else {
        const nueva = { id: nextId('multa'), idPrestamo: prestamoItem.id, monto, motivo, pagada: false, fechaGeneracion: new Date() };
        DB.multas.push(nueva);
        registrarAuditoria('GENERÓ MULTA', `Lector: ${getLectorNombre(prestamoItem.idLector)}, Monto: ${formatCLP(nueva.monto)}`);
      }
      closeModal();
      renderMultasTbody();
    });
  }

  function mostrarTicketMulta(m) {
    const nombreBiblioteca = (DB.configuracion.bibliotecaNombre || 'Biblioteca Municipal').toUpperCase();
    const contenido = [
      '===================================',
      `       ${nombreBiblioteca}`,
      '       TICKET DE MULTA',
      '===================================',
      '',
      `Fecha: ${formatDateTime(new Date())}`,
      `Lector: ${multaLectorNombre(m)}`,
      `Libro: ${multaLibroTitulo(m)}`,
      `Motivo: ${m.motivo}`,
      `Monto: ${formatCLP(m.monto)}`,
      `Estado: ${m.pagada ? 'PAGADA' : 'PENDIENTE'}`,
      '',
      '===================================',
      'Conserve este ticket como',
      'comprobante.',
      '==================================='
    ].join('\n');
    mostrarTicketModal('Ticket de Multa', contenido);
  }

  /* ==================================================================== *
   *  USUARIOS / EMPLEADOS  (réplica de UsuariosPage.xaml + NuevoUsuarioWindow.xaml)
   *  Solo Administrador
   * ==================================================================== */
  function filteredUsuarios() {
    const f = (state.search.usuarios || '').toLowerCase();
    return DB.usuarios.filter(u => {
      if (!f) return true;
      return String(u.id).includes(f) || u.nombreCompleto.toLowerCase().includes(f) ||
        u.username.toLowerCase().includes(f) || nombreRol(u.rol).toLowerCase().includes(f);
    }).sort((a, b) => b.id - a.id);
  }

  function renderUsuarios(main) {
    if (state.search.usuarios === undefined) state.search.usuarios = '';
    main.innerHTML = `
      <div class="page">
        <div class="page-header">
          <div class="page-title">Control de Empleados</div>
          <div class="page-search"><div class="field ${state.search.usuarios ? 'has-value' : ''}">
            <input type="text" id="txtBuscarUsuarios" placeholder=" " value="${escapeHtml(state.search.usuarios)}" autocomplete="off">
            <label for="txtBuscarUsuarios">Buscar empleado...</label>
          </div></div>
          <div class="toolbar-actions">
            <button class="btn btn-raised btn-gray" id="btnEditarUsuario">EDITAR</button>
            <button class="btn btn-raised btn-red" id="btnEliminarUsuario">ELIMINAR</button>
            <button class="btn btn-raised" id="btnNuevoUsuario">NUEVO USUARIO</button>
          </div>
        </div>
        <div class="table-scroll"><table class="data-grid">
          <thead><tr><th>ID</th><th>Nombre Completo</th><th>Usuario</th><th>Rol</th><th>Activo</th><th>Fecha Creación</th></tr></thead>
          <tbody id="usuarios-tbody"></tbody>
        </table></div>
      </div>`;

    renderUsuariosTbody();
    wireSearchField('txtBuscarUsuarios', 'usuarios', renderUsuariosTbody);
    document.getElementById('btnNuevoUsuario').addEventListener('click', () => openUsuarioModal(null));
    document.getElementById('btnEditarUsuario').addEventListener('click', async () => {
      const sel = getSelectedRecord('usuarios', 'usuarios');
      if (!sel) { await showMessageBox({ message: 'Por favor, selecciona un empleado para editar.', title: 'Aviso', buttons: 'ok', icon: 'warning' }); return; }
      openUsuarioModal(sel);
    });
    document.getElementById('btnEliminarUsuario').addEventListener('click', handleEliminarUsuario);
  }

  function renderUsuariosTbody() {
    const tbody = document.getElementById('usuarios-tbody');
    const rows = filteredUsuarios();
    tbody.innerHTML = rows.length ? rows.map(u => `
      <tr data-id="${u.id}" class="${state.selected.usuarios === u.id ? 'selected' : ''}">
        <td>${u.id}</td>
        <td class="cell-strong">${escapeHtml(u.nombreCompleto)}</td>
        <td>${escapeHtml(u.username)}</td>
        <td><span class="badge ${u.rol === 1 ? 'badge-admin' : 'badge-operador'}">${nombreRol(u.rol)}</span></td>
        <td>${checkIcon(u.activo)}</td>
        <td>${formatDateTime(u.fechaRegistro)}</td>
      </tr>`).join('') : `<tr><td colspan="6" class="grid-empty">No se encontraron empleados.</td></tr>`;
    wireRowSelection(tbody, 'usuarios');
  }

  async function handleEliminarUsuario() {
    const sel = getSelectedRecord('usuarios', 'usuarios');
    if (!sel) { await showMessageBox({ message: 'Por favor, selecciona un empleado para eliminar.', title: 'Aviso', buttons: 'ok', icon: 'warning' }); return; }
    if (sel.id === state.user.id) { await showMessageBox({ message: 'No puedes eliminar tu propio usuario mientras tienes la sesión iniciada.', title: 'Acción no permitida', buttons: 'ok', icon: 'error' }); return; }
    const result = await showMessageBox({ message: `¿Estás seguro de que deseas eliminar a "${sel.nombreCompleto}"?`, title: 'Confirmar Eliminación', buttons: 'okcancel', icon: 'warning' });
    if (result !== 'ok') return;
    DB.usuarios = DB.usuarios.filter(u => u.id !== sel.id);
    state.selected.usuarios = null;
    registrarAuditoria('ELIMINÓ EMPLEADO', `Id: ${sel.id}, Nombre: ${sel.nombreCompleto}`);
    renderUsuariosTbody();
    await showMessageBox({ message: 'Empleado eliminado correctamente.', title: 'Éxito', buttons: 'ok', icon: 'info' });
  }

  function openUsuarioModal(usuario) {
    const isEdit = !!usuario;
    openModal(`
      ${modalTitlebar(isEdit ? 'Editar Empleado' : 'Agregar Nuevo Usuario')}
      <div class="modal-body">
        <h3>Datos del Empleado</h3>
        <form id="usuarioForm" novalidate>
          <div class="field"><input type="text" id="txtNombreUsuario" placeholder=" " value="${isEdit ? escapeHtml(usuario.nombreCompleto) : ''}">
            <label for="txtNombreUsuario">Nombre Completo</label></div>
          <div class="field"><input type="text" id="txtUsernameEmp" placeholder=" " value="${isEdit ? escapeHtml(usuario.username) : ''}" autocomplete="off">
            <label for="txtUsernameEmp">Nombre de Usuario</label></div>
          <div class="field"><input type="password" id="txtPasswordUsuario" placeholder=" " autocomplete="new-password">
            <label for="txtPasswordUsuario">Contraseña${isEdit ? ' (dejar en blanco para no cambiar)' : ''}</label></div>
          <div class="field floated"><select id="selRol">
              <option value="1" ${isEdit && usuario.rol === 1 ? 'selected' : ''}>Administrador</option>
              <option value="2" ${!isEdit || usuario.rol === 2 ? 'selected' : ''}>Operador</option>
            </select><label for="selRol">Rol</label></div>
        </form>
      </div>
      ${modalFooter('GUARDAR')}
    `);
    wireFloatingFields(document.querySelector('.modal-body'));
    wireModalChrome();

    document.getElementById('btnGuardarModal').addEventListener('click', async () => {
      const nombreCompleto = document.getElementById('txtNombreUsuario').value.trim();
      const username = document.getElementById('txtUsernameEmp').value.trim();
      const password = document.getElementById('txtPasswordUsuario').value;
      const rol = parseInt(document.getElementById('selRol').value, 10);

      if (!nombreCompleto || !username || (!isEdit && !password)) {
        await showMessageBox({ message: 'Completa nombre, usuario y contraseña.', title: 'Datos incompletos', buttons: 'ok', icon: 'warning' });
        return;
      }
      const duplicado = DB.usuarios.find(u => u.username.toLowerCase() === username.toLowerCase() && (!isEdit || u.id !== usuario.id));
      if (duplicado) {
        await showMessageBox({ message: 'Ya existe un empleado con ese nombre de usuario.', title: 'Error', buttons: 'ok', icon: 'error' });
        return;
      }

      if (isEdit) {
        usuario.nombreCompleto = nombreCompleto; usuario.username = username; usuario.rol = rol;
        if (password) usuario.password = password;
        registrarAuditoria('EDITÓ EMPLEADO', `Id: ${usuario.id}, Nombre: ${usuario.nombreCompleto}`);
      } else {
        const nuevo = { id: nextId('usuario'), nombreCompleto, username, password, rol, activo: true, fechaRegistro: new Date() };
        DB.usuarios.push(nuevo);
        registrarAuditoria('AGREGÓ EMPLEADO', `Nombre: ${nuevo.nombreCompleto}, Usuario: ${nuevo.username}`);
      }
      closeModal();
      renderUsuariosTbody();
    });
  }

  /* ==================================================================== *
   *  AUDITORÍA  (réplica de AuditoriaPage.xaml) — solo lectura, solo Admin
   * ==================================================================== */
  function filteredAuditoria() {
    const f = (state.search.auditoria || '').toLowerCase();
    return DB.auditoria.filter(a => {
      if (!f) return true;
      return String(a.id).includes(f) || a.usuario.toLowerCase().includes(f) ||
        a.accion.toLowerCase().includes(f) || a.detalle.toLowerCase().includes(f);
    }).sort((a, b) => b.fechaHora - a.fechaHora);
  }

  function renderAuditoria(main) {
    if (state.search.auditoria === undefined) state.search.auditoria = '';
    main.innerHTML = `
      <div class="page">
        <div class="page-header">
          <div class="page-title">Registro de Auditoría</div>
          <div class="page-search"><div class="field ${state.search.auditoria ? 'has-value' : ''}">
            <input type="text" id="txtBuscarAuditoria" placeholder=" " value="${escapeHtml(state.search.auditoria)}" autocomplete="off">
            <label for="txtBuscarAuditoria">Buscar en el registro...</label>
          </div></div>
          <div class="toolbar-actions">
            <button class="btn btn-outlined" id="btnActualizarAuditoria"><span class="mdi mdi-refresh"></span>ACTUALIZAR</button>
          </div>
        </div>
        <div class="table-scroll"><table class="data-grid">
          <thead><tr><th>ID</th><th>Fecha y Hora</th><th>Usuario</th><th>Acción</th><th>Detalle</th></tr></thead>
          <tbody id="auditoria-tbody"></tbody>
        </table></div>
      </div>`;

    renderAuditoriaTbody();
    wireSearchField('txtBuscarAuditoria', 'auditoria', renderAuditoriaTbody);
    document.getElementById('btnActualizarAuditoria').addEventListener('click', renderAuditoriaTbody);
  }

  function renderAuditoriaTbody() {
    const tbody = document.getElementById('auditoria-tbody');
    const rows = filteredAuditoria();
    tbody.innerHTML = rows.length ? rows.map(a => `
      <tr data-id="${a.id}">
        <td>${a.id}</td>
        <td>${formatDateTime(a.fechaHora)}</td>
        <td class="cell-strong">${escapeHtml(a.usuario)}</td>
        <td>${escapeHtml(a.accion)}</td>
        <td>${escapeHtml(a.detalle)}</td>
      </tr>`).join('') : `<tr><td colspan="5" class="grid-empty">Sin registros de auditoría.</td></tr>`;
  }

  /* ==================================================================== *
   *  CONFIGURACIÓN  (réplica de ConfiguracionPage.xaml) — solo Admin
   * ==================================================================== */
  function renderConfiguracion(main) {
    const cfg = DB.configuracion;
    main.innerHTML = `
      <div class="page config-wrap">
        <h1 class="page-title-lg" style="margin-bottom:24px;">Configuración del Sistema</h1>

        <div class="card card-pad">
          <div class="section-heading">Parámetros Generales</div>
          <form id="formGeneral" novalidate>
            <div class="field"><input type="text" id="cfgNombreBiblioteca" placeholder=" " value="${escapeHtml(cfg.bibliotecaNombre)}">
              <label for="cfgNombreBiblioteca">Nombre de la Biblioteca</label></div>
            <div class="field has-prefix"><span class="prefix">$</span>
              <input type="number" min="0" id="cfgMultaDiaria" placeholder=" " value="${cfg.multaDiaria}">
              <label for="cfgMultaDiaria">Valor de Multa Diaria (CLP)</label></div>
          </form>
        </div>

        <div class="card card-pad">
          <div class="section-heading">Configuración de Correo (SMTP)</div>
          <form id="formSmtp" novalidate>
            <div class="field-row">
              <div class="field"><input type="text" id="cfgSmtpHost" placeholder=" " value="${escapeHtml(cfg.smtpHost)}">
                <label for="cfgSmtpHost">Servidor SMTP</label></div>
              <div class="field"><input type="number" id="cfgSmtpPort" placeholder=" " value="${escapeHtml(cfg.smtpPort)}">
                <label for="cfgSmtpPort">Puerto</label></div>
            </div>
            <div class="field"><input type="email" id="cfgSmtpEmail" placeholder=" " value="${escapeHtml(cfg.smtpEmail)}">
              <label for="cfgSmtpEmail">Correo Emisor</label></div>
            <div class="field"><input type="password" id="cfgSmtpPassword" placeholder=" " autocomplete="new-password">
              <label for="cfgSmtpPassword">Contraseña${cfg.smtpPassword ? ' (dejar en blanco para no cambiar)' : ''}</label></div>
          </form>
        </div>

        <div style="display:flex;justify-content:flex-end;">
          <button class="btn btn-raised" id="btnGuardarConfig">GUARDAR CAMBIOS</button>
        </div>
      </div>`;

    wireFloatingFields(main);

    document.getElementById('btnGuardarConfig').addEventListener('click', async () => {
      cfg.bibliotecaNombre = document.getElementById('cfgNombreBiblioteca').value.trim() || cfg.bibliotecaNombre;
      cfg.multaDiaria = parseInt(document.getElementById('cfgMultaDiaria').value, 10) || 0;
      cfg.smtpHost = document.getElementById('cfgSmtpHost').value.trim();
      cfg.smtpPort = document.getElementById('cfgSmtpPort').value.trim();
      cfg.smtpEmail = document.getElementById('cfgSmtpEmail').value.trim();
      const pass = document.getElementById('cfgSmtpPassword').value;
      if (pass) cfg.smtpPassword = pass;

      registrarAuditoria('ACTUALIZÓ CONFIGURACIÓN', 'Se modificaron los parámetros generales.');
      await showMessageBox({ message: 'Configuración guardada correctamente.', title: 'Éxito', buttons: 'ok', icon: 'info' });
    });
  }

  /* ==================================================================== *
   *  INICIALIZACIÓN
   * ==================================================================== */
  function wireGlobalEvents() {
    document.getElementById('login-form').addEventListener('submit', handleLoginSubmit);
    wireFloatingFields(document.getElementById('login-screen'));

    document.getElementById('sidebarNav').addEventListener('click', async (e) => {
      const btn = e.target.closest('.nav-btn');
      if (!btn) return;
      const page = btn.getAttribute('data-nav');

      if (page === 'logout') { handleLogout(); return; }
      if (page === 'backup') { await handleBackupClick(); return; }
      if ((page === 'configuracion' || page === 'usuarios' || page === 'auditoria') && state.user.rol !== 1) {
        await showMessageBox({ message: 'No tiene permisos para acceder a esta sección.', title: 'Acceso Denegado', buttons: 'ok', icon: 'warning' });
        return;
      }
      navigateTo(page);
    });

    document.getElementById('btnToggleSidebar').addEventListener('click', () => {
      document.getElementById('sidebar').classList.toggle('open');
      document.getElementById('sidebarScrim').classList.toggle('open');
    });
    document.getElementById('sidebarScrim').addEventListener('click', closeSidebarMobile);
  }

  document.addEventListener('DOMContentLoaded', wireGlobalEvents);

})();

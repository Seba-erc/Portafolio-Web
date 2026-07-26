export const projectsData = [
  {
    id: 1,
    title: "Portafolio Web Profesional",
    shortDescription: "Portafolio personal interactivo y responsivo. Cuenta con un diseño moderno (Glassmorphism), despliegue automatizado con GitHub Actions y configuración de dominio personalizado.",
    longDescription: "Este portafolio web fue creado desde cero utilizando React y Vite para asegurar un rendimiento óptimo y tiempos de carga rápidos. \n\nEl diseño se basa en la tendencia Glassmorphism (efecto cristal) combinada con paletas de colores oscuros y acentos neón para dar un aspecto profesional y futurista. Todo el CSS es puro (Vanilla CSS) para mantener el control total sobre las animaciones y estilos responsivos.\n\nEl proyecto cuenta con un flujo de CI/CD configurado a través de GitHub Actions que despliega automáticamente el sitio en GitHub Pages cada vez que se hace un 'push' a la rama principal. Además, está enlazado a un dominio personalizado con certificado SSL gestionado por Cloudflare.",
    tech: ["React", "Vite", "CSS", "GitHub Actions"],
    github: "https://github.com/Seba-erc/Portafolio-Web",
    demo: "https://devseba.cl",
    icon: "devicon-react-original"
  },
  {
    id: 2,
    title: "Control de Acceso de Vehículos",
    shortDescription: "Plataforma web para el registro y control de vehículos. Incluye panel de administración, roles de usuario y vistas de ingreso/salida.",
    longDescription: "Este proyecto es un demo interactivo de un sistema de control de acceso vehicular.\n\nCuenta con interfaz de login, panel de recepción para registrar ingresos y salidas, y un panel de administrador para gestionar usuarios y reportes.\n\nEl diseño está optimizado para uso ágil en porterías o casetas de seguridad, con validación de formularios en tiempo real, modo oscuro y una experiencia de usuario fluida desarrollada íntegramente con tecnologías web estándar.",
    tech: ["HTML5", "CSS3", "JavaScript", "UI/UX"],
    github: "https://github.com/Seba-erc",
    demo: "/demos/Demo-Control-Acceso-Vehiculos.html",
    icon: "devicon-javascript-plain"
  },
  {
    id: 3,
    title: "App Móvil de Tareas",
    shortDescription: "Aplicación móvil desarrollada nativamente para Android usando Kotlin. Permite sincronización offline y manejo de base de datos local.",
    longDescription: "Aplicación móvil enfocada en la productividad y gestión del tiempo personal, desarrollada bajo los estándares de Material Design.\n\nLa aplicación utiliza Room Database para el almacenamiento local, lo que permite su funcionamiento sin conexión a internet. Implementa corrutinas de Kotlin para operaciones asíncronas fluidas y LiveData para actualizar la interfaz de usuario en tiempo real.\n\nCaracterísticas principales:\n- Creación, edición y eliminación de tareas\n- Recordatorios con notificaciones locales\n- Modo oscuro automático\n- Arquitectura MVVM",
    tech: ["Kotlin", "Android Studio", "SQLite"],
    github: "https://github.com/Seba-erc",
    demo: "#",
    icon: "devicon-android-plain"
  }
];

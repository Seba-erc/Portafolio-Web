export const projectsData = [
  {
    id: 1,
    urlSlug: "Portafolio-Web-Profesional",
    title: "Portafolio Web Profesional",
    shortDescription: "",
    image: "/images/DEMO Pantallazos/Portafolio/Pantallazo-Portafolio-web-inicio.png",
    longDescription: "Este portafolio web fue creado desde cero utilizando React y Vite para asegurar un rendimiento óptimo y tiempos de carga rápidos. \n\nEl diseño se basa en la tendencia Glassmorphism (efecto cristal) combinada con paletas de colores oscuros y acentos neón para dar un aspecto profesional y futurista. Todo el CSS es puro (Vanilla CSS) para mantener el control total sobre las animaciones y estilos responsivos.\n\nEl proyecto cuenta con un flujo de CI/CD configurado a través de GitHub Actions que despliega automáticamente el sitio en GitHub Pages cada vez que se hace un 'push' a la rama principal. Además, está enlazado a un dominio personalizado con certificado SSL gestionado por Cloudflare.",
    tech: ["React", "Vite", "CSS", "GitHub Actions"],
    github: "https://github.com/Seba-erc/Portafolio-Web",
    demo: "https://devseba.cl",
    icon: "devicon-react-original"
  },
  {
    id: 2,
    urlSlug: "Control-Acceso-Vehiculos",
    title: "Sistema de Control de Acceso de Vehículos | WEB",
    shortDescription: "Plataforma web para el registro y control de vehículos. Incluye panel de administración, roles de usuario y vistas de ingreso/salida.",
    image: "/images/DEMO Pantallazos/Sistema de Acceso de Vehiculos/Pantallazo-Login.png",
    longDescription: "Este proyecto es un demo interactivo de un sistema de control de acceso vehicular.\n\nCuenta con interfaz de login, panel de recepción para registrar ingresos y salidas, y un panel de administrador para gestionar usuarios y reportes.\n\nEl diseño está optimizado para uso ágil en porterías o casetas de seguridad, con validación de formularios en tiempo real, modo oscuro y una experiencia de usuario fluida desarrollada íntegramente con tecnologías web estándar.",
    tech: ["React", "HTML5", "CSS3", "JavaScript", "MySQL", "DBeaver"],
    github: "https://github.com/Seba-erc",
    demo: "/demos/Demo-Control-Acceso-Vehiculos.html",
    icon: "devicon-react-original"
  },
  {
    id: 3,
    urlSlug: "Sistema-Gestion-Biblioteca",
    title: "Sistema de Gestión de Biblioteca",
    shortDescription: "Aplicación de escritorio para la administración integral de bibliotecas, incluyendo inventario, préstamos, morosos y reportes.",
    image: "/images/Dashboard-Biblioteca.png",
    gallery: [
      "/images/biblioteca/Dashboard.png",
      "/images/biblioteca/Inicio-Sesion.png",
      "/images/biblioteca/Gestion-de-Libros.png",
      "/images/biblioteca/Gestion-de-Lectores.png",
      "/images/biblioteca/Prestamos-y-Reservas.png",
      "/images/biblioteca/Multas-y-Morosos.png",
      "/images/biblioteca/Gestion-de-Empleados.png",
      "/images/biblioteca/Auditoria.png",
      "/images/biblioteca/Configuracion.png"
    ],
    longDescription: "Este sistema de gestión fue desarrollado en .NET utilizando Windows Presentation Foundation (WPF) para la interfaz gráfica y MySQL para la base de datos.\n\nEl sistema permite administrar el ciclo completo de una biblioteca: registro de lectores, catalogación de libros, control de préstamos y devoluciones, además de un módulo automático de multas para usuarios morosos.\n\nTambién incluye un Dashboard interactivo para visualizar métricas en tiempo real y un sistema de auditoría interno.",
    tech: [".NET", "C#", "WPF", "Visual Studio", "MySQL"],
    github: "https://github.com/Seba-erc",
    demo: "/demos/biblioteca/index.html",
    icon: "devicon-csharp-line"
  }
];

export const projectsData = [
  {
    id: 1,
    urlSlug: "Portafolio-Web-Profesional",
    title: "Portafolio Web Profesional",
    shortDescription: "Desarrollé un sitio personal para centralizar currículum, contacto y portafolio de proyectos; integré visualización de certificados directamente en la página.",
    image: "/images/DEMO Pantallazos/Portafolio/Pantallazo-Portafolio-web-inicio.png",
    longDescription: "Este portafolio web fue creado desde cero utilizando React y Vite para asegurar un rendimiento óptimo y tiempos de carga rápidos. \n\nEl diseño se basa en la tendencia Glassmorphism (efecto cristal) combinada con paletas de colores oscuros y acentos neón para dar un aspecto profesional y futurista. Todo el CSS es puro (Vanilla CSS) para mantener el control total sobre las animaciones y estilos responsivos.\n\nEl proyecto cuenta con un flujo de CI/CD configurado a través de GitHub Actions que despliega automáticamente el sitio en GitHub Pages cada vez que se hace un 'push' a la rama principal. Además, está enlazado a un dominio personalizado con certificado SSL gestionado por Cloudflare.\n\nDesarrollé un sitio personal para centralizar currículum, contacto y portafolio de proyectos; integré visualización de certificados directamente en la página.",
    tech: ["React 19", "Vite", "GitHub Actions", "Cloudflare"],
    github: "https://github.com/Seba-erc/Portafolio-Web",
    demo: "https://devseba.cl",
    icon: "devicon-react-original"
  },
  {
    id: 2,
    urlSlug: "Control-Acceso-Vehiculos",
    title: "Sistema de Control de Acceso de Vehículos | WEB",
    shortDescription: "Construí una plataforma con login, panel de recepción (ingresos/salidas) y panel de administrador (usuarios y reportes). Implementé validación de formularios en tiempo real, modo oscuro y una experiencia de uso pensada para porterías o casetas de seguridad.",
    image: "/images/DEMO Pantallazos/Sistema de Acceso de Vehiculos/Pantallazo-Login.png",
    longDescription: "Este proyecto es un demo interactivo de un sistema de control de acceso vehicular.\n\nConstruí una plataforma con login, panel de recepción (ingresos/salidas) y panel de administrador (usuarios y reportes). Implementé validación de formularios en tiempo real, modo oscuro y una experiencia de uso pensada para porterías o casetas de seguridad.\n\nEl diseño está optimizado para uso ágil, desarrollado con React en el frontend y Node.js con MySQL para el backend, utilizando JWT para la autenticación.",
    tech: ["React", "Node.js", "MySQL", "JWT", "DBeaver"],
    github: "https://github.com/Seba-erc",
    demo: "/demos/Demo-Control-Acceso-Vehiculos.html",
    icon: "devicon-react-original"
  },
  {
    id: 3,
    urlSlug: "Sistema-Gestion-Biblioteca",
    title: "Sistema de Gestión de Biblioteca",
    shortDescription: "Gestioné el ciclo completo: lectores, catalogación, préstamos/devoluciones y multas automáticas para usuarios morosos. Implementé un dashboard interactivo con métricas en tiempo real y sistema de auditoría interno.",
    image: "/images/Dashboard-Biblioteca.png",
    gallery: [
      "/images/biblioteca/Inicio-Sesion.png",
      "/images/biblioteca/Dashboard.png",
      "/images/biblioteca/Gestion-de-Libros.png",
      "/images/biblioteca/Gestion-de-Lectores.png",
      "/images/biblioteca/Prestamos-y-Reservas.png",
      "/images/biblioteca/Multas-y-Morosos.png",
      "/images/biblioteca/Gestion-de-Empleados.png",
      "/images/biblioteca/Auditoria.png",
      "/images/biblioteca/Configuracion.png"
    ],
    longDescription: "Este sistema de gestión fue desarrollado en .NET utilizando Windows Presentation Foundation (WPF) para la interfaz gráfica y MySQL para la base de datos.\n\nGestioné el ciclo completo: lectores, catalogación, préstamos/devoluciones y multas automáticas para usuarios morosos. Implementé un dashboard interactivo con métricas en tiempo real y sistema de auditoría interno.",
    tech: ["WPF", ".NET (C#)", "MySQL"],
    github: "https://github.com/Seba-erc",
    demo: "/demos/biblioteca/index.html",
    icon: "devicon-csharp-line"
  },
  {
    id: 4,
    urlSlug: "Pagina-Sastreria",
    title: "Página Web para Sastrería (En Desarrollo)",
    shortDescription: "Desarrollé una página web estática para una sastrería.",
    longDescription: "Desarrollé una página web estática para una sastrería.",
    tech: ["React"],
    github: "#",
    demo: "#",
    icon: "devicon-react-original"
  },
  {
    id: 5,
    urlSlug: "Pagina-Automotora-Gestion-Vehiculos",
    title: "Plataforma Automotora y Gestión de Vehículos (En Desarrollo)",
    shortDescription: "Estoy desarrollando una aplicación web para la gestión de procesos automotrices y exhibición de vehículos.",
    longDescription: "Estoy desarrollando una aplicación web para la gestión de procesos automotrices y exhibición de vehículos.",
    tech: ["React", "MySQL"],
    github: "#",
    demo: "#",
    icon: "devicon-react-original"
  }
];

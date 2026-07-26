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
    title: "API REST para E-Commerce",
    shortDescription: "Arquitectura backend escalable construida con C# y .NET Core. Manejo de carrito de compras, pasarelas de pago y notificaciones automáticas.",
    longDescription: "Una API robusta diseñada para manejar toda la lógica de negocio de una plataforma de comercio electrónico. \n\nImplementa principios de arquitectura limpia y patrones de diseño sólidos. La base de datos está gestionada con SQL Server utilizando Entity Framework Core para las consultas.\n\nCaracterísticas principales:\n- Autenticación segura con JWT\n- Gestión de usuarios y roles\n- CRUD de productos y categorías\n- Lógica de carrito de compras y procesamiento de pagos\n- Documentación con Swagger",
    tech: ["C#", ".NET Core", "SQL Server"],
    github: "https://github.com/Seba-erc",
    demo: "#",
    icon: "devicon-csharp-plain"
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

export const certificatesData = [
  { title: "Programación Básica", file: "/images/certificados/Certificado Programación Básica.pdf" },
  { title: "Diseño de Software y Base de Datos", file: "/images/certificados/Certificado Diseño de Software y Base de Datos.pdf" },
  { title: "Administración de Sistemas", file: "/images/certificados/Certificado Administración de Sistemas.pdf" },
  { title: "Arquitectura de Software", file: "/images/certificados/Certificado Arquitectura de Software.pdf" },
  { title: "Análisis de Datos", file: "/images/certificados/Certificado Análisis de Datos.pdf" },
  { title: "Gestión de Proyectos Informáticos", file: "/images/certificados/Certificado Gestión de Proyectos Informáticos.pdf" },
  { title: "Redes y Enrutamiento", file: "/images/certificados/Certificado Redes y Enrutamiento.pdf" },
  { title: "Seguridad Informática", file: "/images/certificados/Certificado Seguridad Informática.pdf" },
  { title: "Programación Avanzada", file: null, pending: true },
  { title: "Excel - de Básico a Intermedio", file: null, pending: true }
];

export const completedCertificates = certificatesData.filter(c => !c.pending).length;

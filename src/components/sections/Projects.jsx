import React from 'react';

export default function Projects() {
  const projects = [
    {
      title: "Sistema de Gestión Web",
      description: "Aplicación web full-stack para el control de inventario y facturación. Incluye autenticación segura y panel de administración en tiempo real.",
      tech: ["React", "Node.js", "PostgreSQL"],
      github: "https://github.com/Seba-erc",
      demo: "#", // Reemplazar por link real o dejar "#" si no hay demo
      icon: "devicon-react-original"
    },
    {
      title: "API REST para E-Commerce",
      description: "Arquitectura backend escalable construida con C# y .NET Core. Manejo de carrito de compras, pasarelas de pago y notificaciones automáticas.",
      tech: ["C#", ".NET Core", "SQL Server"],
      github: "https://github.com/Seba-erc",
      demo: "#",
      icon: "devicon-csharp-plain"
    },
    {
      title: "App Móvil de Tareas",
      description: "Aplicación móvil desarrollada nativamente para Android usando Kotlin. Permite sincronización offline y manejo de base de datos local.",
      tech: ["Kotlin", "Android Studio", "SQLite"],
      github: "https://github.com/Seba-erc",
      demo: "#",
      icon: "devicon-android-plain"
    }
  ];

  return (
    <section id="proyectos" className="container">
      <h2 className="section-title">Proyectos Destacados</h2>
      
      <div className="projects-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
        {projects.map((project, index) => (
          <div key={index} className="glass-card project-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden', transition: 'all 0.3s ease' }}>
            
            {/* Fondo de ícono de agua */}
            <i className={`${project.icon} colored`} style={{ position: 'absolute', right: '-20px', bottom: '-20px', fontSize: '10rem', opacity: '0.04', transform: 'rotate(-15deg)', pointerEvents: 'none' }}></i>
            
            <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: 'var(--text-primary)', zIndex: 1 }}>
              {project.title}
            </h3>
            
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', flexGrow: 1, lineHeight: '1.6', zIndex: 1 }}>
              {project.description}
            </p>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem', zIndex: 1 }}>
              {project.tech.map((tech, tIndex) => (
                <span key={tIndex} style={{ backgroundColor: 'rgba(0, 210, 255, 0.08)', color: 'var(--accent-hover)', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '600', border: '1px solid rgba(0, 210, 255, 0.2)' }}>
                  {tech}
                </span>
              ))}
            </div>
            
            <div style={{ display: 'flex', gap: '1rem', zIndex: 1 }}>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flex: 1, justifyContent: 'center', fontSize: '0.9rem', padding: '0.6rem' }}>
                <i className="devicon-github-original" style={{ fontSize: '1.2rem' }}></i> Código
              </a>
              {project.demo !== "#" && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flex: 1, justifyContent: 'center', fontSize: '0.9rem', padding: '0.6rem' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM6.5 11.5L12 8 6.5 4.5v7Z"/>
                  </svg>
                  Demo
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
      
      <style>{`
        .project-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 15px 35px rgba(0, 210, 255, 0.15);
          border-color: rgba(0, 210, 255, 0.3);
        }
      `}</style>
    </section>
  );
}

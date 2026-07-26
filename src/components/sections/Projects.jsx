import React from 'react';
import { projectsData } from '../../data/projectsData';

export default function Projects({ onViewMore }) {
  return (
    <section id="proyectos" className="container">
      <h2 className="section-title">Proyectos Destacados</h2>
      
      <div className="projects-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
        {projectsData.map((project) => (
          <div key={project.id} className="glass-card project-card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden', transition: 'all 0.3s ease' }}>
            
            {/* Fondo de ícono de agua */}
            <i className={`${project.icon} colored`} style={{ position: 'absolute', right: '-20px', bottom: '-20px', fontSize: '10rem', opacity: '0.04', transform: 'rotate(-15deg)', pointerEvents: 'none' }}></i>
            
            <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: 'var(--text-primary)', zIndex: 1 }}>
              {project.title}
            </h3>
            
            <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', flexGrow: 1, lineHeight: '1.6', zIndex: 1 }}>
              {project.shortDescription}
            </p>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem', zIndex: 1 }}>
              {project.tech.map((tech, tIndex) => (
                <span key={tIndex} style={{ backgroundColor: 'rgba(0, 210, 255, 0.08)', color: 'var(--accent-hover)', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '600', border: '1px solid rgba(0, 210, 255, 0.2)' }}>
                  {tech}
                </span>
              ))}
            </div>
            
            <div style={{ display: 'flex', gap: '1rem', zIndex: 1 }}>
              {/* Botón Ver Más */}
              <button onClick={() => onViewMore(project)} className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flex: 1, justifyContent: 'center', fontSize: '0.9rem', padding: '0.6rem' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                  <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                </svg>
                Ver más
              </button>
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

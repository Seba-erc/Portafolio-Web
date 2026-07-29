import React, { useState } from 'react';
import { projectsData } from '../../data/projectsData';
import { useLanguage } from '../../context/LanguageContext';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function Projects({ onViewMore }) {
  const { t } = useLanguage();
  const revealRef = useScrollReveal();
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = [
    { id: 'All', label: t('projects_filter_all') },
    { id: 'React', label: 'React' },
    { id: '.NET', label: '.NET / C#' }
  ];

  const filteredProjects = projectsData.filter(project => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'React') return project.tech.includes('React');
    if (activeFilter === '.NET') return project.tech.includes('.NET (WPF)') || project.tech.includes('C#');
    return true;
  });

  return (
    <section id="proyectos" className="container" ref={revealRef}>
      <h2 className="section-title reveal-element">{t('projects_title')}</h2>
      
      {/* Botones de Filtro */}
      <div className="reveal-element delay-100" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
        {filters.map(filter => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`btn ${activeFilter === filter.id ? 'btn-primary' : 'btn-outline'}`}
            style={{ padding: '0.5rem 1.5rem', borderRadius: '20px' }}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div 
        className="projects-grid" 
        style={{ 
          display: 'grid', 
          gridTemplateColumns: filteredProjects.length === 1 ? 'minmax(320px, 360px)' : 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '2rem', 
          justifyContent: filteredProjects.length === 1 ? 'center' : 'initial' 
        }}
      >
        {filteredProjects.map((project, idx) => (
          <div key={project.id} className={`glass-card project-card reveal-element delay-${Math.min((idx + 1) * 100, 300)}`} style={{ padding: '2rem', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden', transition: 'all 0.3s ease' }}>
            
            {/* Fondo de ícono de agua */}
            <i className={project.icon} style={{ position: 'absolute', right: '-20px', bottom: '-20px', fontSize: '10rem', color: '#ffffff', opacity: '0.07', transform: 'rotate(-15deg)', pointerEvents: 'none' }}></i>
            
            <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: 'var(--text-primary)', zIndex: 1, minHeight: '3.5rem' }}>
              {project.title}
            </h3>
            
            {project.image ? (
              <img src={project.image} alt={project.title} style={{ width: '100%', height: '160px', objectFit: 'cover', borderRadius: '8px', marginBottom: '1.5rem', zIndex: 1, position: 'relative', border: '1px solid rgba(255,255,255,0.1)' }} />
            ) : (
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', flexGrow: 1, lineHeight: '1.6', zIndex: 1 }}>
                {project.shortDescription}
              </p>
            )}
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2rem', zIndex: 1 }}>
              {project.tech.map((tech, tIndex) => (
                <span key={tIndex} style={{ backgroundColor: 'rgba(0, 210, 255, 0.08)', color: 'var(--accent-hover)', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.85rem', fontWeight: '600', border: '1px solid rgba(0, 210, 255, 0.2)' }}>
                  {tech}
                </span>
              ))}
            </div>
            
            <div style={{ display: 'flex', gap: '1rem', zIndex: 1, marginTop: 'auto' }}>
              <button onClick={() => onViewMore(project)} className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flex: 1, justifyContent: 'center', fontSize: '0.9rem', padding: '0.6rem' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                  <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                </svg>
                {t('projects_btn_more')}
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

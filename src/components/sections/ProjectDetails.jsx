import React, { useEffect, useState, useRef } from 'react';
import Lightbox from '../ui/Lightbox';

export default function ProjectDetails({ project, onBack }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  
  // Variables de estado y referencia para el Drag-to-Scroll
  const sliderRef = useRef(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = (e) => {
    setIsDown(true);
    setIsDragging(false);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };
  const handleMouseLeave = () => {
    setIsDown(false);
  };
  const handleMouseUp = () => {
    setIsDown(false);
  };
  const handleMouseMove = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Multiplicador de velocidad de arrastre
    if (Math.abs(walk) > 5) setIsDragging(true);
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  // Hacer scroll hacia arriba cuando se abre el proyecto
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  if (!project) return null;

  return (
    <section className="container" style={{ minHeight: '100vh', paddingTop: '6rem' }}>
      <button 
        onClick={onBack}
        className="btn btn-outline" 
        style={{ marginBottom: '2rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
        </svg>
        Volver atrás
      </button>

      <div className="glass-card" style={{ padding: '3rem', position: 'relative', overflow: 'hidden' }}>
        {/* Fondo de ícono de agua gigante */}
        <i className={project.icon} style={{ position: 'absolute', right: '-50px', top: '-50px', fontSize: '25rem', color: '#ffffff', opacity: '0.04', transform: 'rotate(-15deg)', pointerEvents: 'none' }}></i>

        <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--text-primary)', zIndex: 1, position: 'relative' }}>
          {project.title}
        </h1>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', marginBottom: '3rem', zIndex: 1, position: 'relative' }}>
          {project.tech.map((tech, tIndex) => (
            <span key={tIndex} style={{ backgroundColor: 'rgba(0, 210, 255, 0.1)', color: 'var(--accent-hover)', padding: '0.5rem 1.2rem', borderRadius: '20px', fontSize: '1rem', fontWeight: '600', border: '1px solid rgba(0, 210, 255, 0.2)' }}>
              {tech}
            </span>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', zIndex: 1, position: 'relative', flexWrap: 'wrap', marginBottom: '3rem' }}>
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '1.1rem', padding: '0.8rem 2rem' }}>
            <i className="devicon-github-original" style={{ fontSize: '1.5rem' }}></i> Ver Código Fuente
          </a>
          {project.demo !== "#" && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontSize: '1.1rem', padding: '0.8rem 2rem' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM6.5 11.5L12 8 6.5 4.5v7Z"/>
              </svg>
              Visitar Demo en Vivo
            </a>
          )}
        </div>

        <div style={{ zIndex: 1, position: 'relative', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-secondary)' }}>Sobre el proyecto</h2>
          <div style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.8', whiteSpace: 'pre-wrap' }}>
            {project.longDescription}
          </div>
        </div>

        {project.gallery && project.gallery.length > 0 && (
          <div style={{ zIndex: 1, position: 'relative', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-secondary)' }}>Galería del Sistema</h2>
            <div 
              className="custom-scrollbar drag-scroll-container" 
              ref={sliderRef}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
              style={{ 
              display: 'flex', 
              overflowX: 'auto', 
              gap: '1rem', 
              paddingBottom: '1.5rem',
              scrollSnapType: isDown ? 'none' : 'x mandatory',
              maxWidth: '100%',
              WebkitOverflowScrolling: 'touch',
              cursor: isDown ? 'grabbing' : 'grab'
            }}>
              {project.gallery.map((img, idx) => (
                <img 
                  key={idx} 
                  src={img} 
                  alt={`${project.title} screenshot ${idx + 1}`} 
                  onClick={(e) => {
                    if (isDragging) {
                      e.stopPropagation();
                      return;
                    }
                    setLightboxIndex(idx);
                  }}
                  style={{ 
                    height: 'auto',
                    maxHeight: '350px',
                    width: '85vw',
                    maxWidth: '600px',
                    borderRadius: '12px', 
                    objectFit: 'contain',
                    border: '1px solid rgba(255,255,255,0.1)',
                    backgroundColor: 'rgba(0,0,0,0.3)',
                    scrollSnapAlign: 'center',
                    flexShrink: 0,
                    boxShadow: '0 10px 20px rgba(0,0,0,0.2)',
                    userSelect: 'none',
                    WebkitUserDrag: 'none'
                  }} 
                />
              ))}
            </div>
            <style>{`
              .custom-scrollbar::-webkit-scrollbar {
                height: 8px;
              }
              .custom-scrollbar::-webkit-scrollbar-track {
                background: rgba(255, 255, 255, 0.02);
                border-radius: 4px;
              }
              .custom-scrollbar::-webkit-scrollbar-thumb {
                background: rgba(0, 210, 255, 0.2);
                border-radius: 4px;
              }
              .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                background: rgba(0, 210, 255, 0.4);
              }
            `}</style>
          </div>
        )}

      </div>

      {lightboxIndex !== null && (
        <Lightbox 
          images={project.gallery} 
          initialIndex={lightboxIndex} 
          onClose={() => setLightboxIndex(null)} 
        />
      )}
    </section>
  );
}

import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function Timeline() {
  const { t, language } = useLanguage();
  const revealRef = useScrollReveal();

  const timelineData = [
    {
      id: 1,
      year: "2021 - " + t('timeline_present'),
      title: "Ingeniería en Informática",
      subtitle: "Instituto Profesional Santo Tomás",
      description: "Estudio de algoritmos, estructuras de datos, desarrollo de software, arquitectura de sistemas y bases de datos. Actualmente cursando los últimos semestres.",
      icon: "devicon-react-original"
    },
    {
      id: 2,
      year: "2023",
      title: "Proyecto: Sistema de Biblioteca",
      subtitle: "Desarrollo Académico",
      description: "Desarrollo de un sistema completo utilizando .NET (WPF) y MySQL, con un módulo especial para calcular multas automáticamente.",
      icon: "devicon-csharp-plain"
    },
    {
      id: 3,
      year: "2020",
      title: "Licenciatura de Educación Media",
      subtitle: "Colegio de Educación Secundaria",
      description: "Finalización de los estudios secundarios.",
      icon: "devicon-javascript-plain"
    }
  ];

  return (
    <section id="experiencia" className="container" ref={revealRef}>
      <h2 className="section-title reveal-element">{t('timeline_title')}</h2>
      
      <div className="timeline-container reveal-element delay-100" style={{
        position: 'relative',
        maxWidth: '800px',
        margin: '0 auto',
        padding: '2rem 0'
      }}>
        {/* Línea central */}
        <div style={{
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '4px',
          height: '100%',
          backgroundColor: 'var(--glass-border)',
          borderRadius: '4px'
        }}></div>

        {timelineData.map((item, index) => (
          <div key={item.id} style={{
            display: 'flex',
            justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end',
            position: 'relative',
            marginBottom: '3rem',
            width: '100%'
          }}>
            {/* Punto en la línea */}
            <div style={{
              position: 'absolute',
              left: '50%',
              top: '20px',
              transform: 'translate(-50%, -50%)',
              width: '20px',
              height: '20px',
              backgroundColor: 'var(--accent-color)',
              border: '4px solid var(--bg-color)',
              borderRadius: '50%',
              zIndex: 2
            }}></div>

            {/* Tarjeta */}
            <div className="glass-card" style={{
              width: '45%',
              position: 'relative',
              padding: '1.5rem',
              textAlign: index % 2 === 0 ? 'right' : 'left'
            }}>
              <span style={{ 
                color: 'var(--accent-hover)', 
                fontWeight: 'bold', 
                fontSize: '0.9rem',
                display: 'block',
                marginBottom: '0.5rem'
              }}>
                {item.year}
              </span>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.3rem', color: 'var(--text-primary)' }}>{item.title}</h3>
              <h4 style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', marginBottom: '1rem', fontWeight: 'normal' }}>{item.subtitle}</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

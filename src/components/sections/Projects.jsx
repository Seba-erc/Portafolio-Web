import React from 'react';

export default function Projects() {
  return (
    <section id="proyectos" className="container">
      <h2 className="section-title">Proyectos</h2>
      <div className="glass-card" style={{ textAlign: 'center', padding: '4rem 2rem', borderStyle: 'dashed', borderWidth: '2px', borderColor: 'rgba(255,255,255,0.2)' }}>
        <i className="devicon-github-original" style={{ fontSize: '3rem', color: 'var(--text-secondary)', marginBottom: '1rem', display: 'block' }}></i>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Próximamente...</h3>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
          Espacio reservado para los proyectos que introduciré más adelante. Aquí se mostrarán demostraciones, descripciones y enlaces al código fuente.
        </p>
      </div>
    </section>
  );
}

import React from 'react';

export default function Contact() {
  return (
    <section id="contacto" className="container" style={{ paddingBottom: '8rem' }}>
      <h2 className="section-title">Contacto</h2>
      <div className="glass-card" style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
        
        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', textAlign: 'center' }}>
          ¿Interesado en mi perfil? Estoy buscando activamente mi primera práctica profesional. Me encantaría conversar sobre cómo puedo aportar a tu equipo.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
          
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
            <h3 style={{ color: 'var(--accent-hover)', marginBottom: '1rem', fontSize: '1.1rem' }}>Correos Electrónicos</h3>
            <p style={{ margin: '0.5rem 0', display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Personal:</span>
              <a href="mailto:sebastian31reinoso10@gmail.com" style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 'bold' }}>sebastian31reinoso10@gmail.com</a>
            </p>
            <div style={{ height: '1px', background: 'var(--glass-border)', margin: '1rem 0' }}></div>
            <p style={{ margin: '0.5rem 0', display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Institucional (Santo Tomás):</span>
              <a href="mailto:s.reinoso4@alumnos.santotomas.cl" style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 'bold', wordBreak: 'break-word' }}>s.reinoso4@alumnos.santotomas.cl</a>
            </p>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--glass-border)', display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ color: 'var(--accent-hover)', marginBottom: '1rem', fontSize: '1.1rem' }}>Teléfono</h3>
            <p style={{ margin: '0.5rem 0', fontSize: '1.2rem' }}>
              <a href="tel:+56935487150" style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 'bold' }}>+56 9 3548 7150</a>
            </p>
            
            <h3 style={{ color: 'var(--accent-hover)', marginBottom: '1rem', marginTop: '2rem', fontSize: '1.1rem' }}>Redes Profesionales</h3>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <a href="https://www.linkedin.com/in/sebastian-esteban-reinoso-concha-6630b133a" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)', fontSize: '2.5rem', transition: 'transform 0.2s ease', display: 'inline-block' }} onMouseOver={(e)=>e.currentTarget.style.transform='scale(1.1)'} onMouseOut={(e)=>e.currentTarget.style.transform='scale(1)'} title="Perfil de LinkedIn">
                <i className="devicon-linkedin-plain colored"></i>
              </a>
              <a href="https://github.com/Seba-erc" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)', fontSize: '2.5rem', transition: 'transform 0.2s ease', display: 'inline-block' }} onMouseOver={(e)=>e.currentTarget.style.transform='scale(1.1)'} onMouseOut={(e)=>e.currentTarget.style.transform='scale(1)'} title="Perfil de GitHub">
                <i className="devicon-github-original"></i>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

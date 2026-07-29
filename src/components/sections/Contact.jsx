import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useScrollReveal } from '../../hooks/useScrollReveal';

const CopyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path fillRule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
  </svg>
);

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
  </svg>
);

export default function Contact() {
  const { t, language } = useLanguage();
  const revealRef = useScrollReveal();
  const [status, setStatus] = useState('');
  const [copiedItem, setCopiedItem] = useState('');

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(text);
    setTimeout(() => setCopiedItem(''), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    const form = e.target;
    
    try {
      const formData = new FormData(form);
      // Convertir FormData a JSON
      const dataObj = Object.fromEntries(formData);
      // Opciones adicionales para formsubmit
      dataObj['_subject'] = dataObj.subject || 'Nuevo mensaje del Portafolio';
      dataObj['_captcha'] = 'false';

      // Usamos el código seguro generado por FormSubmit en lugar del correo en texto plano
      const response = await fetch('https://formsubmit.co/ajax/dac4c606d6e9216ab0aa2d5ba8f5cab3', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(dataObj)
      });
      
      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contacto" className="container" ref={revealRef} style={{ paddingBottom: '8rem' }}>
      <h2 className="section-title reveal-element">{t('contact_title')}</h2>
      
      <div className="glass-card reveal-element delay-100" style={{ maxWidth: '1000px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
        
        {/* Columna Izquierda: Info de contacto original */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
            ¿Interesado en mi perfil? Estoy buscando activamente mi primera práctica profesional. Me encantaría conversar sobre cómo puedo aportar a tu equipo.
          </p>

          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
            <h3 style={{ color: 'var(--accent-hover)', marginBottom: '1rem', fontSize: '1.1rem' }}>Correos Electrónicos</h3>
            <div style={{ margin: '0.5rem 0', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Personal:</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <a href="mailto:sebastian31reinoso10@gmail.com" style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 'bold' }}>sebastian31reinoso10@gmail.com</a>
                <button onClick={() => handleCopy('sebastian31reinoso10@gmail.com')} className={`copy-btn ${copiedItem === 'sebastian31reinoso10@gmail.com' ? 'copied' : ''}`} title="Copiar correo">
                  {copiedItem === 'sebastian31reinoso10@gmail.com' ? <CheckIcon /> : <CopyIcon />}
                </button>
              </div>
            </div>
            <div style={{ height: '1px', background: 'var(--glass-border)', margin: '1rem 0' }}></div>
            <div style={{ margin: '0.5rem 0', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Institucional (Santo Tomás):</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <a href="mailto:s.reinoso4@alumnos.santotomas.cl" style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 'bold', wordBreak: 'break-word' }}>s.reinoso4@alumnos.santotomas.cl</a>
                <button onClick={() => handleCopy('s.reinoso4@alumnos.santotomas.cl')} className={`copy-btn ${copiedItem === 's.reinoso4@alumnos.santotomas.cl' ? 'copied' : ''}`} title="Copiar correo">
                  {copiedItem === 's.reinoso4@alumnos.santotomas.cl' ? <CheckIcon /> : <CopyIcon />}
                </button>
              </div>
            </div>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
            <h3 style={{ color: 'var(--accent-hover)', marginBottom: '1rem', fontSize: '1.1rem' }}>Teléfono / Redes</h3>
            <div style={{ margin: '0.5rem 0 1.5rem 0', display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
              <a href="tel:+56935487150" style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.2rem' }}>+56 9 3548 7150</a>
              <button onClick={() => handleCopy('+56935487150')} className={`copy-btn ${copiedItem === '+56935487150' ? 'copied' : ''}`} title="Copiar teléfono">
                {copiedItem === '+56935487150' ? <CheckIcon /> : <CopyIcon />}
              </button>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
              <a href="https://www.linkedin.com/in/sebastian-esteban-reinoso-concha-6630b133a" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)', fontSize: '2rem', transition: 'transform 0.2s ease' }} onMouseOver={(e)=>e.currentTarget.style.transform='scale(1.1)'} onMouseOut={(e)=>e.currentTarget.style.transform='scale(1)'} title="Perfil de LinkedIn">
                <i className="devicon-linkedin-plain colored"></i>
              </a>
              <a href="https://github.com/Seba-erc" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)', fontSize: '2rem', transition: 'transform 0.2s ease' }} onMouseOver={(e)=>e.currentTarget.style.transform='scale(1.1)'} onMouseOut={(e)=>e.currentTarget.style.transform='scale(1)'} title="Perfil de GitHub">
                <i className="devicon-github-original"></i>
              </a>
              <a href="https://wa.me/56935487150" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#25D366', color: 'white', padding: '0.4rem 0.8rem', borderRadius: '8px', textDecoration: 'none', fontWeight: '600', fontSize: '0.9rem', transition: 'all 0.2s', boxShadow: '0 4px 15px rgba(37, 211, 102, 0.3)' }} onMouseOver={(e)=>e.currentTarget.style.transform='translateY(-2px)'} onMouseOut={(e)=>e.currentTarget.style.transform='translateY(0)'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Columna Derecha: Formulario de Formspree */}
        <div style={{ background: 'rgba(255,255,255,0.02)', padding: '2rem', borderRadius: '12px', border: '1px solid var(--glass-border)' }}>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="name" style={{ color: 'var(--text-primary)', fontWeight: '600' }}>{t('contact_name')}</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required 
                style={{
                  padding: '0.8rem',
                  borderRadius: '8px',
                  border: '1px solid var(--glass-border)',
                  background: 'transparent',
                  color: 'var(--text-primary)',
                  fontFamily: 'inherit'
                }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="email" style={{ color: 'var(--text-primary)', fontWeight: '600' }}>{t('contact_email')}</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                style={{
                  padding: '0.8rem',
                  borderRadius: '8px',
                  border: '1px solid var(--glass-border)',
                  background: 'transparent',
                  color: 'var(--text-primary)',
                  fontFamily: 'inherit'
                }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="subject" style={{ color: 'var(--text-primary)', fontWeight: '600' }}>{language === 'es' ? 'Asunto' : 'Subject'}</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                required 
                style={{
                  padding: '0.8rem',
                  borderRadius: '8px',
                  border: '1px solid var(--glass-border)',
                  background: 'transparent',
                  color: 'var(--text-primary)',
                  fontFamily: 'inherit'
                }}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="message" style={{ color: 'var(--text-primary)', fontWeight: '600' }}>{t('contact_message')}</label>
              <textarea 
                id="message" 
                name="message" 
                rows="8" 
                required 
                style={{
                  padding: '0.8rem',
                  borderRadius: '8px',
                  border: '1px solid var(--glass-border)',
                  background: 'transparent',
                  color: 'var(--text-primary)',
                  fontFamily: 'inherit',
                  resize: 'vertical'
                }}
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary" disabled={status === 'sending'} style={{ marginTop: '0.5rem' }}>
              {status === 'sending' ? t('contact_sending') : t('contact_send')}
            </button>
            
            {status === 'success' && (
              <p style={{ color: '#3ddc84', textAlign: 'center', marginTop: '1rem', fontWeight: 'bold' }}>
                {t('contact_success')}
              </p>
            )}
            {status === 'error' && (
              <p style={{ color: '#ff4d4d', textAlign: 'center', marginTop: '1rem', fontWeight: 'bold' }}>
                {t('contact_error')}
              </p>
            )}
          </form>
        </div>

      </div>
    </section>
  );
}

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

export default function Hero() {
  const [copiedItem, setCopiedItem] = useState('');
  const { t } = useLanguage();
  const revealRef = useScrollReveal();

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(text);
    setTimeout(() => setCopiedItem(''), 2000);
  };

  return (
    <section id="inicio" className="container" ref={revealRef} style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '6rem 2rem 2rem' }}>
      
      <div className="hero-split">
        
        {/* COLUMNA IZQUIERDA: Contacto / Perfil */}
        <div className="glass-card reveal-element delay-100" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', padding: '3rem 2rem' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
            <img src="/assets/logos/logo-serc.png" alt="Logo SERC" style={{ width: '100%', maxWidth: '140px', objectFit: 'contain', marginBottom: '1.5rem', borderRadius: '24px', filter: 'drop-shadow(0px 4px 12px rgba(0,0,0,0.6))' }} />
            <h2 style={{ fontSize: '1.4rem', margin: '0', color: 'var(--text-primary)', lineHeight: '1.2' }}>Sebastián Esteban Reinoso Concha</h2>
            <p style={{ margin: '0.5rem 0 0 0', color: 'var(--accent-hover)', fontWeight: '600' }}>{t('hero_career')}</p>
            <p style={{ margin: '0.2rem 0 0 0', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{t('hero_school')}</p>
          </div>

          <div>
            <h3 style={{ color: 'var(--accent-hover)', marginBottom: '0.8rem', fontSize: '1.1rem' }}>{t('hero_emails')}</h3>
            <div style={{ margin: '0.5rem 0', display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{t('hero_personal')}</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <a href="mailto:sebastian31reinoso10@gmail.com" style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 'bold', wordBreak: 'break-all' }}>sebastian31reinoso10@gmail.com</a>
                <button onClick={() => handleCopy('sebastian31reinoso10@gmail.com')} className={`copy-btn ${copiedItem === 'sebastian31reinoso10@gmail.com' ? 'copied' : ''}`} title="Copiar correo">
                  {copiedItem === 'sebastian31reinoso10@gmail.com' ? <CheckIcon /> : <CopyIcon />}
                </button>
              </div>
            </div>
            <div style={{ height: '1px', background: 'var(--glass-border)', margin: '1rem 0' }}></div>
            <div style={{ margin: '0.5rem 0', display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
              <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{t('hero_institutional')}</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <a href="mailto:s.reinoso4@alumnos.santotomas.cl" style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 'bold', wordBreak: 'break-all' }}>s.reinoso4@alumnos.santotomas.cl</a>
                <button onClick={() => handleCopy('s.reinoso4@alumnos.santotomas.cl')} className={`copy-btn ${copiedItem === 's.reinoso4@alumnos.santotomas.cl' ? 'copied' : ''}`} title="Copiar correo">
                  {copiedItem === 's.reinoso4@alumnos.santotomas.cl' ? <CheckIcon /> : <CopyIcon />}
                </button>
              </div>
            </div>
          </div>

          <div>
            <h3 style={{ color: 'var(--accent-hover)', marginBottom: '0.8rem', fontSize: '1.1rem' }}>{t('hero_phone')}</h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', margin: '0.5rem 0' }}>
              <a href="tel:+56935487150" style={{ color: 'var(--text-primary)', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem', whiteSpace: 'nowrap' }}>+56 9 3548 7150</a>
              <button onClick={() => handleCopy('+56935487150')} className={`copy-btn ${copiedItem === '+56935487150' ? 'copied' : ''}`} title="Copiar teléfono">
                {copiedItem === '+56935487150' ? <CheckIcon /> : <CopyIcon />}
              </button>
            </div>
            <a href="https://wa.me/56935487150" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: '#25D366', color: 'white', padding: '0.5rem 1rem', borderRadius: '8px', textDecoration: 'none', fontWeight: '600', fontSize: '0.9rem', marginTop: '0.5rem', transition: 'all 0.2s', boxShadow: '0 4px 15px rgba(37, 211, 102, 0.3)' }} onMouseOver={(e)=>e.currentTarget.style.transform='translateY(-2px)'} onMouseOut={(e)=>e.currentTarget.style.transform='translateY(0)'}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
              </svg>
              {t('hero_whatsapp_btn')}
            </a>
          </div>

          <div>
            <h3 style={{ color: 'var(--accent-hover)', marginBottom: '0.8rem', fontSize: '1.1rem' }}>{t('hero_socials')}</h3>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <a href="https://www.linkedin.com/in/devserc" target="_blank" rel="noopener noreferrer" className="social-link" title="Perfil de LinkedIn">
                <i className="devicon-linkedin-plain colored" style={{ fontSize: '2.5rem' }}></i>
              </a>
              <a href="https://github.com/Seba-erc" target="_blank" rel="noopener noreferrer" className="social-link" title="Perfil de GitHub">
                <i className="devicon-github-original" style={{ fontSize: '2.5rem', color: 'white' }}></i>
              </a>
            </div>
          </div>
        </div>

        {/* COLUMNA DERECHA: Presentación */}
        <div className="glass-card reveal-element delay-300" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '3rem 2.5rem' }}>
          
          <h1 style={{ fontSize: '3.5rem', marginBottom: '0.5rem', lineHeight: '1.2' }}>
            {t('hero_greeting')} <br/>
            <span style={{ color: 'var(--accent-hover)' }}>Sebastián Reinoso</span>
          </h1>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', color: 'var(--text-primary)', fontWeight: '400' }}>
            {t('hero_subtitle')}
          </h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '2.5rem' }}>
            {t('hero_description')}
          </p>
          
          <div className="hero-actions" style={{ justifyContent: 'flex-start' }}>
            <a href="#proyectos" className="btn btn-primary">{t('hero_btn_projects')}</a>
            <a href="#certificados" className="btn btn-outline">{t('hero_btn_certificates')}</a>
            <a href="/docs/Curriculum.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary">{t('hero_btn_cv')}</a>
            <a href="/docs/Malla.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline">{t('hero_btn_malla')}</a>
          </div>
        </div>

      </div>
    </section>
  );
}

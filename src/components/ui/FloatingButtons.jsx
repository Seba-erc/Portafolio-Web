import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
export default function FloatingButtons() {
  const { language, toggleLanguage } = useLanguage();
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div style={{
      position: 'fixed',
      bottom: '2rem',
      right: '2rem',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      zIndex: 9999
    }}>
      
      {/* Botón de Idioma */}
      <button 
        onClick={toggleLanguage}
        className="glass-card floating-btn"
        title="Cambiar Idioma / Change Language"
        style={{
          padding: '0',
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          fontWeight: 'bold',
          fontSize: '1.1rem',
          color: 'var(--text-primary)',
          border: '1px solid var(--glass-border)'
        }}
      >
        {language === 'es' ? 'EN' : 'ES'}
      </button>


      {/* Botón Volver Arriba */}
      {showTopBtn && (
        <button 
          onClick={scrollToTop}
          className="glass-card floating-btn"
          title="Volver arriba"
          style={{
            padding: '0',
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: 'var(--text-primary)',
            border: '1px solid var(--glass-border)',
            animation: 'fadeIn 0.3s ease'
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M8 12a.5.5 0 0 0 .5-.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 .5.5z"/>
          </svg>
        </button>
      )}

      <style>{`
        .floating-btn:hover {
          background-color: var(--accent-color);
          color: white !important;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

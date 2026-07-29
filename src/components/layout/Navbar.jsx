import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav className="smart-navbar" style={{
      transform: `translate(-50%, ${isVisible ? '0' : '-150%'})`
    }}>
      <a href="#inicio" className="nav-link">{t('nav_home')}</a>
      <a href="#habilidades" className="nav-link">{t('nav_skills')}</a>
      <a href="#proyectos" className="nav-link">{t('nav_projects')}</a>
      <a href="#certificados" className="nav-link">{t('nav_certificates')}</a>
      <a href="#contacto" className="nav-link">{t('nav_contact')}</a>
    </nav>
  );
}

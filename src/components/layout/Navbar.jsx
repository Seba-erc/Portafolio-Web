import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const SECTIONS = ['inicio', 'habilidades', 'proyectos', 'certificados'];

export default function Navbar() {
  const { t } = useLanguage();
  const [isHidden, setIsHidden] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const lastScrollY = useRef(0);

  // Ocultar al bajar, mostrar al subir + fondo al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setIsScrolled(y > 10);
      setIsHidden(y > lastScrollY.current && y > 120);
      lastScrollY.current = y;
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Resaltar la sección visible en la barra
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const links = [
    { id: 'inicio', label: t('nav_home') },
    { id: 'habilidades', label: t('nav_skills') },
    { id: 'proyectos', label: t('nav_projects') },
    { id: 'certificados', label: t('nav_certificates') }
  ];

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''} ${isHidden ? 'hidden' : ''}`}>
      <div className="container header-inner">
        <a href="#inicio" className="brand" aria-label="Inicio">
          <span className="brand-bracket">&lt;</span>SERC<span className="brand-bracket">/&gt;</span>
        </a>

        <nav className="nav-links" aria-label="Navegación principal">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a href="/docs/Curriculum.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm">
          {t('hero_btn_cv')}
        </a>
      </div>
    </header>
  );
}

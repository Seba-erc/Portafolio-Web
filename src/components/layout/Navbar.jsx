import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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
      <a href="#inicio" className="nav-link">Inicio</a>
      <a href="#contacto" className="nav-link">Contacto</a>
      <a href="#habilidades" className="nav-link">Habilidades</a>
      <a href="#proyectos" className="nav-link">Proyectos</a>
      <a href="#certificados" className="nav-link">Certificados</a>
    </nav>
  );
}

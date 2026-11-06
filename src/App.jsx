import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Certificates from './components/sections/Certificates';
import ProjectDetails from './components/sections/ProjectDetails';
import FloatingButtons from './components/ui/FloatingButtons';
import InteractiveBackground from './components/ui/InteractiveBackground';
import { projectsData } from './data/projectsData';
import './styles/background.css';

function App() {
  const [activeProject, setActiveProject] = useState(null);

  useEffect(() => {
    // Al cargar la página, verificamos si hay una URL que corresponda a un proyecto
    const path = window.location.pathname.replace(/^\//, ''); // quitamos el slash inicial
    if (path) {
      const project = projectsData.find(p => p.urlSlug === path);
      if (project) {
        setActiveProject(project);
      }
    }

    // Escuchar el botón de "Atrás" del navegador
    const handlePopState = () => {
      const currentPath = window.location.pathname.replace(/^\//, '');
      if (currentPath) {
        const project = projectsData.find(p => p.urlSlug === currentPath);
        setActiveProject(project || null);
      } else {
        setActiveProject(null);
      }
    };

    window.addEventListener('popstate', handlePopState);

    // Si se entra con un ancla (ej: devseba.cl/#proyectos), bajar a esa sección cuando ya esté renderizada
    const hashTimer = window.location.hash
      ? setTimeout(() => {
          const target = document.querySelector(window.location.hash);
          if (target) target.scrollIntoView();
        }, 300)
      : null;

    return () => {
      window.removeEventListener('popstate', handlePopState);
      if (hashTimer) clearTimeout(hashTimer);
    };
  }, []);

  const [wasInProject, setWasInProject] = useState(false);

  useEffect(() => {
    if (activeProject) {
      setWasInProject(true);
    } else if (wasInProject) {
      // Cuando volvemos al inicio desde un proyecto, hacemos scroll a la sección de proyectos
      setTimeout(() => {
        const section = document.getElementById('proyectos');
        if (section) {
          // Usamos scrollIntoView con un pequeño ajuste para el navbar
          const y = section.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top: y, behavior: 'auto' });
        }
      }, 50);
      setWasInProject(false);
    }
  }, [activeProject, wasInProject]);

  const handleViewProject = (project) => {
    setActiveProject(project);
    window.history.pushState({}, '', `/${project.urlSlug}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setActiveProject(null);
    window.history.pushState({}, '', '/');
  };

  return (
    <>
      <InteractiveBackground />
      
      {/* Si hay un proyecto activo, ocultamos el Navbar y las secciones principales */}
      {activeProject ? (
        <main>
          <ProjectDetails 
            project={activeProject} 
            onBack={handleBackToHome} 
          />
        </main>
      ) : (
        <>
          <Navbar />
          <main>
            <Hero />
            <Skills />
            <Projects onViewMore={handleViewProject} />
            <Certificates />
          </main>
        </>
      )}

      <Footer />
      <FloatingButtons />
    </>
  );
}

export default App;

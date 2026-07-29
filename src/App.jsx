import React, { useState, useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Certificates from './components/sections/Certificates';
import Contact from './components/sections/Contact';
import ProjectDetails from './components/sections/ProjectDetails';
import FloatingButtons from './components/ui/FloatingButtons';
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
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

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
      <div className="animated-background"></div>
      
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
            <Contact />
          </main>
        </>
      )}

      <FloatingButtons />
    </>
  );
}

export default App;

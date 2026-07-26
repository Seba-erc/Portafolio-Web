import React, { useState } from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Certificates from './components/sections/Certificates';
import Contact from './components/sections/Contact';
import ProjectDetails from './components/sections/ProjectDetails';
import './styles/background.css';

function App() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <>
      <div className="animated-background"></div>
      
      {/* Si hay un proyecto activo, ocultamos el Navbar y las secciones principales */}
      {activeProject ? (
        <main>
          <ProjectDetails 
            project={activeProject} 
            onBack={() => setActiveProject(null)} 
          />
        </main>
      ) : (
        <>
          <Navbar />
          <main>
            <Hero />
            <Skills />
            <Projects onViewMore={(project) => setActiveProject(project)} />
            <Certificates />
          </main>
        </>
      )}
    </>
  );
}

export default App;

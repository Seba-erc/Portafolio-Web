import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Certificates from './components/sections/Certificates';
import Contact from './components/sections/Contact';
import './styles/background.css';

function App() {
  return (
    <>
      <div className="animated-background"></div>
      <Navbar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Certificates />
      </main>
    </>
  );
}

export default App;

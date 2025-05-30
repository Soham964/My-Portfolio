import React from 'react';
import About from './pages/About';
import Skills from './pages/Skills';
import Certifications from './pages/Certifications';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a0f1c] via-[#111827] to-[#0a0f1c] scroll-smooth">
      {/* Navigation Bar */}
      <nav className="bg-[#0a0f1c] bg-opacity-90 z-50 p-4 shadow-md" style={{ fontFamily: 'Press Start 2P, monospace' }}>
        <div className="container mx-auto flex justify-center space-x-8 text-white">
          <a href="#about" className="hover:text-green-400 transition ease-in-out">ABOUT</a>
          <a href="#skills" className="hover:text-green-400 transition ease-in-out">SKILLS</a>
           <a href="#certifications" className="hover:text-green-400 transition ease-in-out">CERTS</a>
          <a href="#projects" className="hover:text-green-400 transition ease-in-out">PROJECTS</a>
          <a href="#contact" className="hover:text-green-400 transition ease-in-out">CONTACT</a>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8 pt-20">
        {/* Add IDs to sections for linking */}
        <div id="about"><About /></div>
        <hr className="border-white my-12 w-full" />
        <div id="skills"><Skills /></div>
        <div id="certifications"><Certifications /></div>
        <div id="projects"><Projects /></div>
        <hr className="border-white my-12 w-full" />
        <div id="contact"><Contact /></div>
      </div>
    </div>
  );
};

export default App; 
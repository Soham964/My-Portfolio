import React from 'react';
import { useTypingAnimation } from '../hooks/useTypingAnimation';
import { Fade } from 'react-awesome-reveal';

const cardFont = { fontFamily: 'Inter, Roboto, Segoe UI, Arial, sans-serif', fontWeight: 'bold' };

const About = () => {
  const displayedRole = useTypingAnimation();

  return (
    <Fade triggerOnce={true}>
      <div
        className="w-full max-w-7xl border-2 border-white bg-[#0d1321] px-16 py-16 my-24 mx-auto relative flex flex-col items-center justify-center"
        style={{ borderRadius: 0, minHeight: '70vh', boxShadow: '0 0 0 2px #fff' }}
      >
        {/* Window Controls */}
        <div className="absolute right-8 top-8 flex gap-1">
          <div className="w-3 h-3 bg-red-500" style={{ borderRadius: 2 }} />
          <div className="w-3 h-3 bg-yellow-400" style={{ borderRadius: 2 }} />
          <div className="w-3 h-3 bg-green-400" style={{ borderRadius: 2 }} />
        </div>
        {/* Path */}
        <div className="text-green-400 font-mono text-lg mb-3 w-full text-left font-bold tracking-tight" style={{ fontFamily: 'Press Start 2P, monospace' }}>
          &gt;_ <span className="text-white" style={cardFont}>~/portfolio/soham-datta</span>
        </div>
        <hr className="border-white my-4 w-full" />
        {/* Hero Section */}
        <div className="flex items-center gap-12 mb-8 w-full">
          <div className="bg-[#00ff90] w-28 h-28 flex items-center justify-center overflow-hidden" style={{ borderRadius: 0 }}>
            <img src="/myoic.png" alt="Your Profile" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col items-start justify-center">
            <h1 className="text-4xl text-white mb-2 font-bold tracking-widest" style={{ fontFamily: 'Press Start 2P, monospace', letterSpacing: 2 }}>
              SOHAM DATTA
            </h1>
            <div className="text-green-400 text-2xl" style={cardFont}>
              &gt; <span className="text-[#7afcff] font-normal">{displayedRole}<span className="animate-pulse">|</span></span>
            </div>
          </div>
        </div>
        {/* Info Boxes */}
        <div className="grid grid-cols-3 gap-8 mb-8 w-full">
          <div className="border-2 border-white p-6 flex flex-col items-start bg-[#181f2a] w-full" style={{ borderRadius: 0 }}>
            <div className="text-green-400 text-lg mb-2" style={cardFont}>
              EXPERIENCE
            </div>
            <div className="text-white text-2xl" style={cardFont}>&lt;1 YEAR</div>
          </div>
          <div className="border-2 border-white p-6 flex flex-col items-start bg-[#181f2a] w-full" style={{ borderRadius: 0 }}>
            <div className="text-cyan-400 text-lg mb-2" style={cardFont}>
              PROJECTS
            </div>
            <div className="text-white text-2xl" style={cardFont}>MULTIPLE</div>
          </div>
          <div className="border-2 border-white p-6 flex flex-col items-start bg-[#181f2a] w-full" style={{ borderRadius: 0 }}>
            <div className="text-yellow-400 text-lg mb-2 flex items-center gap-1" style={cardFont}>
              <span className="mr-1" style={{ color: '#ffb800' }}>&#9749;</span> COFFEE
            </div>
            <div className="text-white text-2xl" style={cardFont}>&#8734; CUPS</div>
          </div>
        </div>
        {/* About Section */}
        <div className="border-2 border-white p-6 font-mono text-white bg-[#181f2a] w-full whitespace-pre-line" style={{ borderRadius: 0, fontSize: '1.15rem', marginTop: 12 }}>
          <div className="text-green-400 mb-3 font-bold text-lg" style={{ fontFamily: 'Press Start 2P, monospace' }}>$ cat about.txt</div>
          <div style={{ fontFamily: 'Inter, Roboto, Segoe UI, Arial, sans-serif', fontWeight: 'normal', color: '#b5c2d1' }}>
            Software engineer passionate about building elegant solutions to complex problems.
Specializing in full-stack development with a love for clean code, pixel-perfect UIs, and efficient algorithms.
When not coding, you can find me exploring new technologies or contributing to open-source projects.
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default About; 
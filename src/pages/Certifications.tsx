import React from 'react';
import { Fade } from 'react-awesome-reveal';

const cardFont = { fontFamily: 'Inter, Roboto, Segoe UI, Arial, sans-serif', fontWeight: 'bold' };

const certifications = [
  {
    icon: '🏅',
    color: 'text-yellow-400',
    text: 'IBM DevOPS and Software Engineering Professional Certificate',
  },
  {
    icon: '🏅',
    color: 'text-yellow-400',
    text: 'Building LLM Applications with Prompt Engineering (NVIDIA)',
  },
];

const Certifications = () => (
  <Fade triggerOnce={true}>
    <div className="w-full max-w-7xl border-2 border-white bg-[#0d1321] px-32 py-24 my-24 mx-auto relative flex flex-col items-start justify-start" style={{ borderRadius: 0, minHeight: 'auto', boxShadow: '0 0 0 2px #fff' }}>
      <h2
        className="text-yellow-400 text-2xl mb-6 tracking-widest"
        style={{ fontFamily: 'Press Start 2P, monospace', fontWeight: 'bold' }}
      >
        CERTIFICATIONS
      </h2>
      <div className="w-24 h-1 bg-yellow-400 mb-8 rounded" />
      <ul className="w-full space-y-2">
        {certifications.map((cert, idx) => (
          <li key={idx} className="flex items-center bg-[#111827] px-3 py-2 text-white text-sm" style={{ fontFamily: 'Press Start 2P, monospace', fontWeight: 'bold', borderRadius: 0 }}>
            <span className="w-2.5 h-2.5 bg-yellow-400 mr-2 inline-block" style={{ borderRadius: 2 }} />
            {cert.text}
          </li>
        ))}
      </ul>
    </div>
  </Fade>
);

export default Certifications; 
import React from 'react';
import { Fade } from 'react-awesome-reveal';

const skillCards = [
  {
    icon: '🌐',
    iconBg: 'bg-[#232b39]',
    color: 'text-cyan-400',
    title: 'FRONTEND',
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
  },
  {
    icon: '🗄️',
    iconBg: 'bg-[#232b39]',
    color: 'text-green-400',
    title: 'BACKEND',
    skills: ['Python', 'Java', 'Django'],
  },
  {
    icon: '🛢️',
    iconBg: 'bg-[#232b39]',
    color: 'text-pink-500',
    title: 'DATABASE',
    skills: ['MongoDB', 'PostgreSQL', 'LiveSQL'],
  },
  {
    icon: '🔗',
    iconBg: 'bg-[#232b39]',
    color: 'text-red-500',
    title: 'DEVOPS',
    skills: ['Docker', 'AWS', 'Git', 'Linux'],
  },
  {
    icon: '</>',
    iconBg: 'bg-[#232b39]',
    color: 'text-white',
    title: 'LANGUAGES',
    skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'C#'],
  },
];

const cardFont = { fontFamily: 'Inter, Roboto, Segoe UI, Arial, sans-serif', fontWeight: 'bold' };

const Skills = () => (
  <Fade triggerOnce={true}>
    <div className="w-full max-w-7xl px-32 py-24 my-24 mx-auto relative flex flex-col items-center justify-center" >
      <h2
        className="text-green-400 text-3xl font-bold tracking-widest mb-2"
        style={{ fontFamily: 'Press Start 2P, monospace', letterSpacing: 2, textShadow: '2px 2px 0 #000, 0 0 2px #000' }}
      >
        {'<SKILLS />'}
      </h2>
      <div className="w-32 h-1 bg-green-400 mb-12 rounded" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-24 w-full max-w-6xl mb-10">
        {/* Top row: Frontend, Backend, Database */}
        {skillCards.slice(0, 3).map((card) => (
          <div
            key={card.title}
            className="border-2 border-white bg-[#0a0f1c] p-8 flex flex-col min-w-[280px]"
            style={{ borderRadius: 0 }}
          >
            <div className="flex items-center mb-5">
              <div className={`w-14 h-14 flex items-center justify-center mr-5 border-2 border-white ${card.iconBg}`} style={{ borderRadius: 0 }}>
                <span className="text-2xl" style={cardFont}>{card.icon}</span>
              </div>
              <span className={`text-2xl ${card.color}`} style={cardFont}>{card.title}</span>
            </div>
            <ul className="flex flex-col gap-3 w-full">
              {card.skills.map((skill) => (
                <li key={skill} className="flex items-center bg-[#111827] px-4 py-2 text-white text-base" style={{ ...cardFont, borderRadius: 0 }}>
                  <span className="w-2.5 h-2.5 bg-green-400 mr-3 inline-block" style={{ borderRadius: 2 }} />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-4xl">
        {/* Bottom row: DevOps, Languages */}
        {skillCards.slice(3).map((card) => (
          <div
            key={card.title}
            className="border-2 border-white bg-[#0a0f1c] p-8 flex flex-col min-w-[280px]"
            style={{ borderRadius: 0 }}
          >
            <div className="flex items-center mb-5">
              <div className={`w-14 h-14 flex items-center justify-center mr-5 border-2 border-white ${card.iconBg}`} style={{ borderRadius: 0 }}>
                <span className="text-2xl" style={cardFont}>{card.icon}</span>
              </div>
              <span className={`text-2xl ${card.color}`} style={cardFont}>{card.title}</span>
            </div>
            <ul className="flex flex-col gap-3 w-full">
              {card.skills.map((skill) => (
                <li key={skill} className="flex items-center bg-[#111827] px-4 py-2 text-white text-base" style={{ ...cardFont, borderRadius: 0 }}>
                  <span className="w-2.5 h-2.5 bg-green-400 mr-3 inline-block" style={{ borderRadius: 2 }} />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </Fade>
);

export default Skills; 
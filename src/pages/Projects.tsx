import { Fade } from 'react-awesome-reveal';

const cardFont = { fontFamily: 'Inter, Roboto, Segoe UI, Arial, sans-serif', fontWeight: 'bold' };

const Projects = () => (
  <Fade triggerOnce={true}>
    <div
      className="w-full max-w-screen-2xl bg-[#0d1321] px-32 py-16 my-24 mx-auto relative flex flex-col items-center justify-center"
      style={{ borderRadius: 0, minHeight: '70vh' }}
    >
      <h2 className="text-green-400 text-3xl font-bold mb-12 tracking-widest" style={{ fontFamily: 'Press Start 2P, monospace', letterSpacing: 2 }}>
        {'{PROJECTS}'}
      </h2>
      {/* Projects Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl">
        {/* Project Card 1: AI-POWERED TALENT ACQUISITION ASSISTANT */}
        <div className="border-2 border-white p-6 bg-[#080c14] text-white flex flex-col" style={{ borderRadius: 0 }}>
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center">
              <span className="text-green-400 text-2xl mr-4 flex items-center justify-center w-12 h-12 border-2 border-white bg-[#232b39]" style={{ fontFamily: 'Press Start 2P, monospace', borderRadius: 0 }}>☮</span>
              <span className="text-green-400 text-2xl font-bold" style={cardFont}>AI-POWERED TALENT ACQUISITION ASSISTANT</span>
            </div>
            <span className="bg-green-400 text-black px-4 py-1.5 text-base font-bold" style={{ ...cardFont, borderRadius: 0 }}>COMPLETED</span>
          </div>
          <div className="mb-4 flex-grow" style={{ fontFamily: 'Inter, Roboto, Segoe UI, Arial, sans-serif', fontWeight: 'normal', color: '#b5c2d1', fontSize: '1.125rem' }}>
            Developed an AI-powered Intelligent Talent Acquisition platform leveraging Python, Streamlit, and OpenAI GPT-3.5, automating resume parsing and candidate screening, improving recruitment efficiency by over 50%. Engineered a robust resume parsing backend using NLP techniques (spaCy, NLTK) and GPT-3.5 integration to extract and categorize skills, education, experience, and certifications from diverse resume formats with 95% accuracy.
          </div>
          <div className="text-green-400 font-bold mb-2 text-base" style={cardFont}>TECH_STACK:</div>
          <div className="flex flex-wrap gap-3 mb-4">
            <span className="border border-white/40 px-3 py-1.5 text-white text-sm" style={cardFont}>Python</span>
            <span className="border border-white/40 px-3 py-1.5 text-white text-sm" style={cardFont}>Streamlit</span>
            <span className="border border-white/40 px-3 py-1.5 text-white text-sm" style={cardFont}>OpenAI GPT-3.5</span>
            <span className="border border-white/40 px-3 py-1.5 text-white text-sm" style={cardFont}>spaCy</span>
            <span className="border border-white/40 px-3 py-1.5 text-white text-sm" style={cardFont}>NLTK</span>
          </div>
          <a href="https://github.com/Soham964/Intelligent-Talent-Acquisition-Assistant" target="_blank" rel="noopener noreferrer" className="bg-green-400 text-black px-6 py-3 rounded-none mt-4 flex items-center gap-2 justify-center transition ease-in-out hover:bg-green-500 text-lg" style={{ ...cardFont, borderRadius: 0 }}><span className="text-2xl">��</span> GitHub</a>
        </div>

        {/* Project Card 2: EMOTION BASED MUSIC RECOMMENDATION SYSTEM */}
        <div className="border-2 border-white p-6 bg-[#080c14] text-white flex flex-col" style={{ borderRadius: 0 }}>
          <div className="flex items-start justify-between mb-4">
             <div className="flex items-center">
              <span className="text-cyan-400 text-2xl mr-4 flex items-center justify-center w-12 h-12 border-2 border-white bg-[#232b39]" style={{ fontFamily: 'Press Start 2P, monospace', borderRadius: 0 }}>&lt;&gt;</span>
              <span className="text-cyan-400 text-2xl font-bold" style={cardFont}>EMOTION BASED MUSIC RECOMMENDATION SYSTEM</span>
            </div>
            <span className="bg-green-400 text-black px-4 py-1.5 text-base font-bold" style={{ ...cardFont, borderRadius: 0 }}>COMPLETED</span>
          </div>
          <div className="mb-4 flex-grow" style={{ fontFamily: 'Inter, Roboto, Segoe UI, Arial, sans-serif', fontWeight: 'normal', color: '#b5c2d1', fontSize: '1.125rem' }}>
            Developed a Django-based music recommendation system supporting 6 distinct emotion categories (neutral, happy, fear, sad, angry, surprise) with 12+ web and REST API endpoints for playlist and emotion detection. Achieved real-time emotion detection on webcam video streams and uploaded images using MediaPipe and DeepFace, processing 30+ frames per second for dynamic music personalization.
          </div>
          <div className="text-green-400 font-bold mb-2 text-base" style={cardFont}>TECH_STACK:</div>
          <div className="flex flex-wrap gap-3 mb-4">
            <span className="border border-white/40 px-3 py-1.5 text-white text-sm" style={cardFont}>Django</span>
            <span className="border border-white/40 px-3 py-1.5 text-white text-sm" style={cardFont}>MediaPipe</span>
            <span className="border border-white/40 px-3 py-1.5 text-white text-sm" style={cardFont}>DeepFace</span>
            <span className="border border-white/40 px-3 py-1.5 text-white text-sm" style={cardFont}>REST API</span>
            <span className="border border-white/40 px-3 py-1.5 text-white text-sm" style={cardFont}>Python</span>
          </div>
          <a href="https://github.com/yourusername/emotion-based-music-recommendation-system" target="_blank" rel="noopener noreferrer" className="bg-green-400 text-black px-6 py-3 rounded-none mt-4 flex items-center gap-2 justify-center transition ease-in-out hover:bg-green-500 text-lg" style={{ ...cardFont, borderRadius: 0 }}><span className="text-2xl">🐙</span> GitHub</a>
        </div>

        {/* Project Card 3: SAAS CRYPTO PAYMENT APPLICATION */}
         <div className="border-2 border-white p-6 bg-[#080c14] text-white flex flex-col" style={{ borderRadius: 0 }}>
          <div className="flex items-start justify-between mb-4">
             <div className="flex items-center">
              <span className="text-pink-500 text-2xl mr-4 flex items-center justify-center w-12 h-12 border-2 border-white bg-[#232b39]" style={{ fontFamily: 'Press Start 2P, monospace', borderRadius: 0 }}>&#x1F4B8;</span> {/* Crypto icon */}
              <span className="text-pink-500 text-2xl font-bold" style={cardFont}>SAAS CRYPTO PAYMENT APPLICATION</span>
            </div>
            <span className="bg-green-400 text-black px-4 py-1.5 text-base font-bold" style={{ ...cardFont, borderRadius: 0 }}>COMPLETED</span>
          </div>
          <div className="mb-4 flex-grow" style={{ fontFamily: 'Inter, Roboto, Segoe UI, Arial, sans-serif', fontWeight: 'normal', color: '#b5c2d1', fontSize: '1.125rem' }}>
            Developed a secure SaaS-based crypto payment platform enabling real-time Ethereum transactions for businesses. Built with Next.js, Tailwind CSS, Python, Django, and REST APIs, supporting seamless Ethereum billing and fiat-to-crypto conversion. Designed a merchant dashboard for invoice management, transaction tracking, and automated exchange rate updates.
          </div>
          <div className="text-green-400 font-bold mb-2 text-base" style={cardFont}>TECH_STACK:</div>
          <div className="flex flex-wrap gap-3 mb-4">
            <span className="border border-white/40 px-3 py-1.5 text-white text-sm" style={cardFont}>Next.js</span>
            <span className="border border-white/40 px-3 py-1.5 text-white text-sm" style={cardFont}>Tailwind CSS</span>
            <span className="border border-white/40 px-3 py-1.5 text-white text-sm" style={cardFont}>Python</span>
            <span className="border border-white/40 px-3 py-1.5 text-white text-sm" style={cardFont}>Django</span>
            <span className="border border-white/40 px-3 py-1.5 text-white text-sm" style={cardFont}>Ethereum</span>
          </div>
          <a href="https://github.com/yourusername/saas-crypto-payment-application" target="_blank" rel="noopener noreferrer" className="bg-green-400 text-black px-6 py-3 rounded-none mt-4 flex items-center gap-2 justify-center transition ease-in-out hover:bg-green-500 text-lg" style={{ ...cardFont, borderRadius: 0 }}><span className="text-2xl">🐙</span> GitHub</a>
        </div>

        {/* Project Card 4: E-COMMERCE PLATFORM */}
         <div className="border-2 border-white p-6 bg-[#080c14] text-white flex flex-col" style={{ borderRadius: 0 }}>
          <div className="flex items-start justify-between mb-4">
             <div className="flex items-center">
              <span className="text-yellow-400 text-2xl mr-4 flex items-center justify-center w-12 h-12 border-2 border-white bg-[#232b39]" style={{ fontFamily: 'Press Start 2P, monospace', borderRadius: 0 }}>&#x1F310;</span> {/* Globe icon */}
              <span className="text-yellow-400 text-2xl font-bold" style={cardFont}>E-COMMERCE PLATFORM</span>
            </div>
            <span className="bg-green-400 text-black px-4 py-1.5 text-base font-bold" style={{ ...cardFont, borderRadius: 0 }}>COMPLETED</span>
          </div>
          <div className="mb-4 flex-grow" style={{ fontFamily: 'Inter, Roboto, Segoe UI, Arial, sans-serif', fontWeight: 'normal', color: '#b5c2d1', fontSize: '1.125rem' }}>
            Full-stack e-commerce solution with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.
          </div>
          <div className="text-green-400 font-bold mb-2 text-base" style={cardFont}>TECH_STACK:</div>
          <div className="flex flex-wrap gap-3 mb-4">
            <span className="border border-white/40 px-3 py-1.5 text-white text-sm" style={cardFont}>React</span>
            <span className="border border-white/40 px-3 py-1.5 text-white text-sm" style={cardFont}>Node.js</span>
            <span className="border border-white/40 px-3 py-1.5 text-white text-sm" style={cardFont}>PostgreSQL</span>
            <span className="border border-white/40 px-3 py-1.5 text-white text-sm" style={cardFont}>Stripe</span>
          </div>
          <a href="https://github.com/yourusername/e-commerce-platform" target="_blank" rel="noopener noreferrer" className="bg-green-400 text-black px-6 py-3 rounded-none mt-4 flex items-center gap-2 justify-center transition ease-in-out hover:bg-green-500 text-lg" style={{ ...cardFont, borderRadius: 0 }}><span className="text-2xl">🐙</span> GitHub</a>
        </div>
      </div>
    </div>
  </Fade>
);

export default Projects;
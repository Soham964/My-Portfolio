import { Fade } from 'react-awesome-reveal';

const cardFont = { fontFamily: 'Inter, Roboto, Segoe UI, Arial, sans-serif', fontWeight: 'bold' };

const Contact = () => (
  <Fade triggerOnce={true}>
    <div
      className="w-full max-w-7xl px-32 py-24 my-24 mx-auto relative flex flex-col items-center justify-center bg-[#0d1321]"
      style={{ borderRadius: 0 }}
    >
      <h2 className="text-green-400 text-3xl font-bold mb-12 tracking-widest" style={{ fontFamily: 'Press Start 2P, monospace', letterSpacing: 2 }}>
        &lt;/CONTACT&gt;
      </h2>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column: Get In Touch and Social Links */}
        <div className="flex flex-col gap-8">
          {/* Get In Touch */}
          <div className="border-2 border-white p-6 bg-[#0a0f1c] text-white" style={{ borderRadius: 0 }}>
            <div className="text-green-400 mb-4 text-lg" style={cardFont}>GET IN TOUCH</div>
            <div className="space-y-4">
              <div className="flex items-center gap-4" style={cardFont}>
                <span className="text-cyan-400 text-xl">✉️</span>
                <span>sd.sohamdatta@gmail.com</span>
              </div>
              <div className="flex items-center gap-4" style={cardFont}>
                <span className="text-cyan-400 text-xl">📞</span>
                <span>+91 7439170577</span>
              </div>
              <div className="flex items-center gap-4" style={cardFont}>
                <span className="text-pink-400 text-xl">📍</span>
                <span>Kolkata, India</span>
              </div>
            </div>
          </div>
          {/* Social Links */}
          <div className="border-2 border-white p-6 bg-[#0a0f1c] text-white" style={{ borderRadius: 0 }}>
             <div className="text-cyan-400 mb-4 text-lg" style={cardFont}>SOCIAL LINKS</div>
             <div className="grid grid-cols-2 gap-4">
               <a href="#" className="border border-white/40 px-4 py-3 text-white flex items-center justify-center gap-2 bg-[#111827]" style={{ ...cardFont, borderRadius: 0 }}>
                 <span className="text-xl">🐙</span> GitHub
               </a>
               <a href="#" className="border border-white/40 px-4 py-3 text-white flex items-center justify-center gap-2 bg-[#111827]" style={{ ...cardFont, borderRadius: 0 }}>
                 <span className="text-xl">🔗</span> LinkedIn
               </a>
               <a href="#" className="border border-white/40 px-4 py-3 text-white flex items-center justify-center gap-2 bg-[#111827]" style={{ ...cardFont, borderRadius: 0 }}>
                 <span className="text-xl">🐦</span> Twitter
               </a>
               <a href="#" className="border border-white/40 px-4 py-3 text-white flex items-center justify-center gap-2 bg-[#111827]" style={{ ...cardFont, borderRadius: 0 }}>
                 <span className="text-xl">✉️</span> Email
               </a>
             </div>
          </div>
        </div>
        {/* Right Column: Send Message Form */}
        <div className="border-2 border-white p-6 bg-[#0a0f1c] text-white flex flex-col" style={{ borderRadius: 0 }}>
          <div className="text-green-400 mb-4 text-lg" style={cardFont}>SEND MESSAGE</div>
          <form className="flex flex-col gap-4 w-full">
            <label className="text-white" style={cardFont}>NAME:</label>
            <input className="bg-[#111827] border border-white/30 p-3 text-white text-sm" style={{ ...cardFont, borderRadius: 0 }} placeholder="Enter your name..." />
            <label className="text-white" style={cardFont}>EMAIL:</label>
            <input className="bg-[#111827] border border-white/30 p-3 text-white text-sm" style={{ ...cardFont, borderRadius: 0 }} placeholder="Enter your email..." />
            <label className="text-pink-400" style={cardFont}>MESSAGE:</label>
            <textarea className="bg-[#111827] border border-white/30 p-3 text-white text-sm" style={{ ...cardFont, borderRadius: 0 }} rows={6} placeholder="Your message here..."></textarea>
            <button className="bg-green-400 text-black px-8 py-4 mt-4 flex items-center gap-2 justify-center transition ease-in-out hover:bg-green-500 text-lg" style={{ ...cardFont, borderRadius: 0 }}>
              <span>✈️</span> SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
       {/* Footer */}
       <div className="w-full border-2 border-white bg-[#0a0f1c] mt-8 p-4 text-center text-white text-sm" style={{ borderRadius: 0 }}>
          <div className="mb-2" style={cardFont}>$ echo "Thanks for visiting!"</div>
          <div style={cardFont}>© 2024 Soham Datta. Built with ❤️ and lots of 👾</div>
        </div>
    </div>
  </Fade>
);

export default Contact;
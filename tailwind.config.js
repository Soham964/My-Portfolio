/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Press Start 2P'", 'monospace'],
        mono: ["'Press Start 2P'", 'monospace'],
      },
      colors: {
        primary: "#0F172A",
        secondary: "#1E293B",
        accent: "#3B82F6",
        glow: "#60A5FA",
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #60A5FA, 0 0 10px #60A5FA, 0 0 15px #60A5FA' },
          '100%': { boxShadow: '0 0 10px #60A5FA, 0 0 20px #60A5FA, 0 0 30px #60A5FA' },
        },
      },
    },
  },
  plugins: [],
} 
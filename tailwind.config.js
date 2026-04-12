/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#0a0f1f',
        slateBlue: '#1a2542',
        accent: '#2d9cdb',
        accentSoft: '#7dcfff',
        pearl: '#f8fbff',
      },
      boxShadow: {
        luxe: '0 20px 60px rgba(6, 14, 38, 0.35)',
      },
      backgroundImage: {
        mesh: 'radial-gradient(circle at 10% 20%, rgba(45, 156, 219, 0.25), transparent 35%), radial-gradient(circle at 80% 10%, rgba(125, 207, 255, 0.2), transparent 30%), linear-gradient(140deg, #0a0f1f, #111b35 40%, #0c1227)'
      },
    },
  },
  plugins: [],
};

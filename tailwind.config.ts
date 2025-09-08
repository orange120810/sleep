import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        night: '#0B1220',
        star: '#1C2541',
        dawn: '#FBE8D3',
        ink: '#0E0E10',
      },
      borderRadius: {
        xl: '1rem',
      },
      boxShadow: {
        card: '0 2px 6px rgba(0,0,0,0.15)',
      },
      fontFamily: {
        sans: ['ui-rounded', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;

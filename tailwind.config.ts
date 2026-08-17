import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        doc: {
          paper: '#F7F4EC',
          ink: '#1B2A4A',
          seal: '#A02334',
          brass: '#B08D57',
          charcoal: '#2B2B2B',
          verified: '#3F6B4A',
          dark: {
            base: '#12192B',
            card: '#1A243B',
            paper: '#F0EDE4',
            border: '#2D3B59',
            muted: '#435478',
          }
        },
        category: {
          nadra: '#3F6B4A',
          passport: '#1B2A4A',
          education: '#2563eb',
          bills: '#B08D57',
          jobs: '#A02334',
          loans: '#B08D57',
          welfare: '#3F6B4A',
          traffic: '#6b21a8',
        },
        'pakistan-green': {
          50:  '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
          950: '#052e16',
        },
        'pakistan-gold': {
          50:  '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03',
        },
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Newsreader', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'IBM Plex Mono', 'monospace'],
        urdu: ['var(--font-urdu)', 'Noto Nastaliq Urdu', 'Segoe UI', 'serif'],
      },
      boxShadow: {
        'doc-seal': '0 0 20px -3px rgba(160, 35, 52, 0.35)',
        'doc-card': '0 4px 20px -2px rgba(27, 42, 74, 0.06)',
        'doc-dark': '0 4px 20px -2px rgba(0, 0, 0, 0.4)',
      },
    },
  },
  plugins: [],
};
export default config;

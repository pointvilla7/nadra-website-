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
        navy: {
          950: '#0B1120',
          900: '#111827',
          800: '#1E2A3F',
        },
        cream: {
          50: '#FAF9F6',
          100: '#F3F1EC',
        },
        gold: {
          600: '#B8860B',
          500: '#D4A017',
        },
        emerald: {
          600: '#0F9D6D',
        },
        red: {
          600: '#C0362C',
        },
        slate: {
          600: '#475569',
          300: '#CBD5E1',
          100: '#F1F5F9',
        },
        doc: {
          paper: '#FAF9F6', // MUST be --color-cream-50 (#FAF9F6)
          ink: '#0B1120',   // MUST be --color-navy-950 (#0B1120)
          seal: '#C0362C',  // MUST be --color-red-600 (#C0362C)
          brass: '#B8860B', // MUST be --color-gold-600 (#B8860B)
          'brass-dark': '#855F27',
          'brass-light': '#D4A017', // MUST be --color-gold-500 (#D4A017)
          charcoal: '#475569',      // MUST be --color-slate-600 (#475569)
          verified: '#0F9D6D',      // MUST be --color-emerald-600 (#0F9D6D)
          dark: {
            base: '#0B1120',
            card: '#1E2A3F',
            paper: '#FAF9F6',
            border: '#1E2A3F',
            muted: '#475569',
          }
        },
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Fraunces', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'Public Sans', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'IBM Plex Mono', 'monospace'],
        urdu: ['var(--font-urdu)', 'Noto Nastaliq Urdu', 'Segoe UI', 'serif'],
      },
      boxShadow: {
        'doc-card': '0 1px 2px rgba(11, 17, 32, 0.04), 0 4px 12px rgba(11, 17, 32, 0.06)',
        'doc-hover': '0 4px 8px rgba(11, 17, 32, 0.08), 0 8px 24px rgba(11, 17, 32, 0.10)',
        'doc-seal': '0 0 20px -3px rgba(184, 134, 11, 0.35)',
        'doc-dark': '0 4px 20px -2px rgba(0, 0, 0, 0.4)',
      },
      borderRadius: {
        card: '12px',
        btn: '8px',
        pill: '999px',
      },
    },
  },
  plugins: [],
};
export default config;

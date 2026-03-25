/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Nouvelle palette "Sauge Organique / Soft Industrial"
        'white': '#F8F9F5',
        'background': '#F8F9F5',      // Background (Surface) - Blanc Cassé / Lin
        'primary': '#B2C2A2',         // Primary (Brand) - Vert Sauge Clair
        'secondary': '#849673',       // Secondary (Interactive) - Vert Lichen
        'accent': '#E5A186',          // Accent (CTA) - Terre Cuite Douce
        'text': '#2F362C',            // Text (Typography) - Anthracite Chaud

        // Anciennes couleurs conservées pour compatibilité (seront remplacées progressivement)
        'electric-blue': '#3B82F6',
        'mint-green': '#34D399',
        'terracotta': '#E5A186',      // Mappé vers accent
        'mustard-yellow': '#F2CC8F',
        'deep-teal': '#2F362C',       // Mappé vers text
        'cream-white': '#F8F9F5',     // Mappé vers background
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],      // Pour les textes
        display: ['Space Grotesk', 'sans-serif'], // Pour les titres
        serif: ['DM Sans', 'sans-serif'],      // Conservé pour compatibilité
        mono: ['JetBrains Mono', 'monospace'], // Pour le code
      },
      boxShadow: {
        'soft': '0 10px 40px -10px rgba(47, 54, 44, 0.08)',
      },
      animation: {
        gradient: 'gradient 8s linear infinite',
        'border-beam': 'border-beam calc(var(--duration)*1s) infinite linear',
      },
      keyframes: {
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'border-beam': {
          '100%': {
            'offset-distance': '100%',
          },
        },
      },
    },
  },
  plugins: [],
};

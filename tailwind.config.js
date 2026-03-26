/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      'sm':  '375px',
      'md':  '768px',
      'lg':  '1024px',
      'xl':  '1280px',
      '2xl': '1440px',
    },
    extend: {
      colors: {
        melioz: {
          teal:     '#204F56',
          lavender: '#9EB8F9',
          mint:     '#DAE9D9',
          electric: '#3B54CC',
          navy:     '#0D1626',
          offwhite: '#EDEFEE',
        },
      },
      fontFamily: {
        display: ['Space Grotesk Variable', 'sans-serif'],
        body:    ['DM Sans', 'sans-serif'],
      },
      animation: {
        'border-beam': 'border-beam calc(var(--duration, 8)*1s) infinite linear',
      },
      keyframes: {
        'border-beam': {
          '100%': { 'offset-distance': '100%' },
        },
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['"Bebas Neue"', 'sans-serif'],
        serif: ['Cinzel', 'serif'],
      },
      colors: {
        gold: {
          DEFAULT: '#FFB627',
          light: '#FFD96A',
          deep: '#E89500',
        },
        crimson: {
          DEFAULT: '#DC2626',
          dark: '#991B1B',
          light: '#EF4444',
        },
        charcoal: {
          DEFAULT: '#0A0A0A',
          soft: '#1A1A1A',
          light: '#2A2A2A',
        },
        cream: '#FFF8E7',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

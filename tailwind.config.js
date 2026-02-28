/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        noir: '#090909',
        ivory: '#f5f3ee',
        gold: '#D4AF37',
        ink: '#1c1c1c',
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(212, 175, 55, 0.35), 0 12px 35px rgba(212, 175, 55, 0.12)',
      },
      backgroundImage: {
        'lux-gradient': 'radial-gradient(circle at top right, rgba(212,175,55,0.12), transparent 40%)',
      },
    },
  },
  plugins: [],
};

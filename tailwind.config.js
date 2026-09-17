/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './about.html', './js/**/*.js'],
  corePlugins: { preflight: true },
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: '#2C3569', dark: '#1E254D', light: '#525D91' }
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans Gujarati', 'sans-serif'],
        display: ['Manrope', 'Noto Sans Gujarati', 'sans-serif']
      }
    }
  }
};

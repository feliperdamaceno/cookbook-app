const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  safelist: ['bg-rose-700', 'bg-sky-800', 'bg-amber-500'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        brand: ['EB Garamond', 'serif'],
        header: ['Signika', 'sans-serif']
      }
    }
  },
  plugins: []
}

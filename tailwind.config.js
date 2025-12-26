/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'encourage-red': '#E63946',
        'empower-blue': '#0A4B84',
        'sunrise-orange': '#F77F00',
        'soft-gray': '#E8E8E8',
        'charcoal-gray': '#2C2C2C',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
        'open-sans': ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


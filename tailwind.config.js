/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"], // Make sure Tailwind processes all HTML files in your project root
  theme: {
    extend: {
      colors: {
        'portfolio-bg': '#000000', // Your custom background color
      },

      fontFamily: {
        'sfpro': ['SF Pro Rounded', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0 3px 26px rgba(0, 0, 0, 0.1)',
      },
      colors: {
        'greylight': '#B5BAD0',
        'greymed': '#8990AD',
        'greydark': '#495172'
      }  
    },
  },
  plugins: [],
}

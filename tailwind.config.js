/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'container': '1200px',
      },
      fontFamily: {
        fontBwfc: ['Manrope', 'sans-serif']
      }
    },
  },
  plugins: [],
}


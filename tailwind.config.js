/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    colors: {
      coffee: {
        50: '#fefefe',
        100: '#e3ded8',
        200: '#fad7ad',
        300: '#c6a186',
        400: '#ab8a79',
        500: '#ab8a79',
        600: '#44261c',
        700: '#43251b',
        800: '#13120e',
      } 
    },
    extend: {
      backgroundImage: {
        'main1': 'url("/src/Images/main_2.jpg")',
      }
    },
  },
  plugins: [],
}


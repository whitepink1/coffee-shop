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
      },
      red: {
        700: '#c30010',
        600:'#d1001f',
        500:'#de0a26',
        400:'#f01e2c',
        300:'#ff2c2c',
        200:'#f94449',
        100:'#ee6b6e',
        50: '#f69697',
      },
      green: {
        50: '#cce7c9',
        100: '#acd8a7',
        200: '#8bca84',
        300: '#72bf6a',
        400: '#5bb450',
        500: '#52a447',
        600: '#46923c',
        700: '#3b8132',
      }
    },
    extend: {
      backgroundImage: {
        'main1': 'url("/src/Images/main_2.jpg")',
        'main2': 'url("/src/Images/main_3.jpg")',
      },
      keyframes: {
        appear: {
            "0%": "opacity-0 scale-95",
            "100%":"opacity-100 scale-100",    
        }
      },
      animation: {
        "appear": "appear 0.5s ease-in "
      }
    },
  },
  plugins: [],
}


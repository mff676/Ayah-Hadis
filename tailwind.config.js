/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
    extend: {
      colors : {
        background : 'var(--color-background)',
        'green-primary' : 'var(--color-green-primary)',
        'grey-primary' : 'var(--color-grey-primary)',
        'grey-secondary' : 'var( --color-grey-secondary)',
        'white-text' : 'var(--text-white)'
      },
      fontFamily : {
        poppins : '"Poppins", sans-serif',
        montserrat : '"Montserrat", sans-serif',
        hafs : 'Hafs'
      },
      backgroundImage: {
        'kakba' : "url('./public/assets/images/bgkakbah.jpg')"
      }
    },

  },
  darkMode: "class",
  plugins: [nextui()],}


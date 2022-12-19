/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './src/**/*.{html,js}', 
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {
      backgroundImage:{
        'top-background':"url('/gojek-background.webp')",
        'background-3':"url('/bg3.webp')",
        'joinridebg':"url('/joinridebg.webp')",
        'cardbg':"url('/cardbg.webp')",
        'cardbg4':"url('/cardbg4.webp')",
        'cardbg2':"url('/cardbg2.webp')",
        'cardbg3':"url('/cardbg3.webp')",
        'prod':"url('/prod.svg')",


      },
      colors:{
        'dark-blue': "#101820",
        'lyt-dark-blue': "#182430"
      },
      borderRadius:{
        'curve':"7rem",
        'mini-curve':"4rem"

      },
      height:{
        '1k':"1000px",
        '2k':"2000px",
        '9h':"900px",
        '8h':"800px",
        '7h':"700px",
        '4h':"400px",
        '5h':"500px",
        '1.5k':"1500px"
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        'tilt': ['Tilt Warp', 'cursive']
      },
      colors: {
        'grey': '#BEBEBE',
        'dark-grey':'#262626'
      },
      margin: {
        0.45:0.45,
      },
      fontSize: {
        "2xs": '10px',
      },
      width: {
        92:"360px"
      },
      height: {
        46:"184px"
      }
    },
    
  },
  plugins: [],
}

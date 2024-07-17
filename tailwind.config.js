/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    
  ],
  theme: {
    extend: {
      fontFamily:{
        'Poppin':[ 'Poppins', 'sans-serif'],
        'Montserrat':[ 'Montserrat', 'sans-serif'],
        'Edu':['Edu TAS Beginner', 'cursive']
      },
      colors: {
        'custom-silver': '#c0c0c0',
        
      },

    },
  },
  plugins: [],
}


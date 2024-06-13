/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'Inter': ['Inter', 'sans-serif']
      },
      colors:{
        primary: '#28e98c',
        secondary: '#eaeaea',
      }
    },
    
    
  },
  plugins: [],
}


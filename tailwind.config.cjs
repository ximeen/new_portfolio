/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: 'Poppins, sans-serif'
      },


      colors:{
        gray:{
          900: "#202024",
          100: "#E1E1E6"
        },
        cian:{
          500: "#61DAFB"
        }
      }
    },
  },
  plugins: [],
}

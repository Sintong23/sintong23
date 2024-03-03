/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./*.html"],
  theme: {
    extend: {
      spacing:{
        "big":"48rem"
      }
    },
    fontFamily:{
      nunito:['Nunito', 'sans-serif']
    }
  },
  plugins: [],
}


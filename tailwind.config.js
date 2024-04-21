/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  // content: ["./*.html"],
  content: ["./regex_validate/*.{html,js}"],
  theme: {
    extend: {
      spacing:{
        "big":"48rem"
      }
    },
    fontFamily:{
      nunito:['Nunito', 'sans-serif'],
      serif: ['ui-serif', 'Georgia'],

    }
  },
  plugins: [],
}


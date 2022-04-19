const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'century': ['Century Gothic']
    },
    colors: {
      'green': {
        100: '#e1ebcf',
        200: '#76a340',
        300: '#5a7b31'

      }
    }
  },
  plugins: [],
}

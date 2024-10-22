/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#242742',
      },
      spacing: {
        '1.125': '1.125rem',
      },
      fontFamily: {
        custom: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


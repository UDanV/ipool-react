/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        gotham: ['Gotham Pro', 'sans-serif'], 
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
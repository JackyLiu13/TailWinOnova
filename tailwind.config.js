/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./dist/*.{html,js}"
  ],
  theme: {
    extend: {     
      colors: {
        onovaTeal: '#5ce2b2',
      }
    },
  },
  plugins: [],
}
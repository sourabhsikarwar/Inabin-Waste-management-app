/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green': '#21d06d',
        'yellow': '#fff830',
        'blue': '#3eadf1',
        'darkGreen': '#14b359',
      },
    },
  },
  plugins: [],
}

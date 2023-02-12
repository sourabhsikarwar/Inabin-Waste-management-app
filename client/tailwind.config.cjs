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
        'lightGreen': '#e1fded',
        'yellow': '#fff830',
        'blue': '#3eadf1',
        'darkBlue':"#1459b3",
        'darkGreen': '#14b359',
      },
    },
  },
  plugins: [
    // require('@tailwindcss/aspect-ratio'),
  ],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        grotesk: ['Space Grotesk', 'sans-serif'], 
        inter: ['Inter ', 'sans-serif'], 
      },
      animation: {
        slowSpin: 'spin 10s linear infinite', 
      },
    },
  },
  plugins: [],
}


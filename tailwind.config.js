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
        'reveal-left-to-right': 'revealLeftToRight 1s ease-out forwards',
      },
       keyframes: {
        revealLeftToRight: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
    },
  },
  plugins: [],
}


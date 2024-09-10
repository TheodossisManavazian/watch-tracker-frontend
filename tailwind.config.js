/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    colors: {
      background: "#060606",
      primary: "#151515",
      secondary: "#333333",
      text:{
        DEFAULT: "#FFFFFF",
        gray: "#b3b3b3",
      },
      accent: {
        primary: {
         DEFAULT: "#4bc0c0",
         100: "#1a4545",
         200: "#338787"
        },
        secondary:"#f7424b",
      },
    },

  },
  plugins: [],
}
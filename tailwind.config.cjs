/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        white:"#ffffff",
        primary:"#0b0226",
        red:"#dc2626",
        lightGray:"#D3D3D3",
        darkGray:"#333333",
      }
    },
  },
  plugins: [],
}
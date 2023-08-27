/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0 2px 3px #33333333'
      },
      fontFamily: {
        "poppins": ['Poppins', 'sans-serif'],
        "noto": ['Noto Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3a5a40',
        secondary: '#FF5733',
      },
     
    },
  },
  plugins: [],
}

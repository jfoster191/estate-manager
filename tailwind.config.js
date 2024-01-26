/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tailwind-datepicker-react/dist/**/*.js",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js"
  ],
  theme: {
    colors: {
      'hunter': '#FFF3E6',
      'smokeyTopaz': '#8f250c',
      'linen': '#E8DDD1',
      'grey': '#D9D9D9',
      'slate': '#3f3f46',
      'white': '#FFFFFF',
      'black': '000000',
      'red': 'FF0000',
    },
    extend: {
      display: ["group-hover", "group-click"]
    },
  },
  plugins: [],
  darkMode: 'class',
}


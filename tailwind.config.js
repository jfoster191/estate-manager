/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'hunter': '#FFF3E6',
      'smokeyTopaz': '#8f250c',
      'linen': '#E8DDD1',
      'grey': '#D9D9D9',
      'slate': '#3f3f46',
      'white': '#FFFFFF'
    },
    extend: {
      display: ["group-hover", "group-click"]
    },
  },
  plugins: [],
  // darkMode: 'media',
}


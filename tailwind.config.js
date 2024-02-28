/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        concert: "url('/src/assets/concert.jpg')",
        acadia: "url('/src/assets/acadia.jpg')"
      }
    },
  },
  plugins: [],
  corePlugins: {
    overscrollBehavior: 'none'
  }
}

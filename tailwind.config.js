module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'phone': {'min': '310px', 'max': '414px'}
      }
    },
  },
  plugins: [],
}

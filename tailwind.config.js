const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        teal: colors.teal,
        cyan: colors.cyan,
        rose: colors.rose,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
      require('@tailwindcss/typography'),
      require('@tailwindcss/aspect-ratio'),
  ],
}

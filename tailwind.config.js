const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/layouts/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        main: ['Inter', ...fontFamily.sans],
      },
      colors: {
        'base-content-neutral': 'hsl(var(--bc) / 0.6)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('tailwindcss-radix')(), require('daisyui')],
}

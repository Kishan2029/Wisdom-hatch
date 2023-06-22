/** @type {import('tailwindcss').Config} */
module.exports = {
  // prefix: 'tw-',
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      grayscale: {
        50: '50%',
        10: '10%'
      }
    },
    fontFamily: {
      sans: ['Lora'],
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        mplus: ["'M PLUS Rounded 1c'", 'Verdana', 'sans-serif']
      },
      colors: {
        beerus: '#EBEBEB',
        goku: '#F5F5F5',
        gohan: '#FFFFFF',
        goten: '#FFFFFF',
        bulma: '#000000',
        trunks: '#999CA0',
        piccolo: {
          50: '#EDEDF8',
          100: '#DCDAF1',
          200: '#B9B6E2',
          300: '#928DD3',
          400: '#6F68C4',
          500: '#4E46B4',
          600: '#3E388F',
          700: '#2E296A',
          800: '#201D49',
          900: '#100E25',
          950: '#080712'
        },
        hit: {
          50: '#EDF8F7',
          100: '#D7EFEE',
          200: '#AEE0DC',
          300: '#86D0CB',
          400: '#5DC1BA',
          500: '#40A69F',
          600: '#33847F',
          700: '#26635F',
          800: '#1A4240',
          900: '#0D2120',
          950: '#071212'
        }
      }
    }
  },
  plugins: []
}

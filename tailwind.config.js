/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        'mustard': '#f6b104',
        'moss': '#619740',
        'aqua': {
          500: '#2aabe4',
          600: '#0070ba',
        },
        'indigo': {
          500: '#007bff',
          600: '#0038a8',
          700: '#233480',
        },
        'black': {
          0: '#000000',
          300: '#fefefe',
          400: '#eeeeee',
          500: '#dfdfdf',
          600: '#aaaaaa',
          700: '#808080',
          800: '#333333',
        },
      }
    },
  },

  plugins: [],
}

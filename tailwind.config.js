/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}',
    './node_modules/tw-elements/dist/js/**/*.js',
    './index.html',
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
          300: '#fafafa',
          400: '#eeeeee',
          500: '#dfdfdf',
          600: '#aaaaaa',
          700: '#808080',
          800: '#333333',
        },
      },
      height: {
        104: '26rem',
        108: '27rem',
        112: '28rem',
        120: '30rem',
        128: '32rem',
        144: '36rem',
        160: '40rem',
      }
    },
  },

  plugins: [
    require('tw-elements/dist/plugin')
  ],
}

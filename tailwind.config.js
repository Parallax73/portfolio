/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.jsx',
    './index.html'
  ],
  theme: {
    extend: {
      colors: {
        firstBackground: '#111111',
        secondBackground: '#151515',
        purple: '#986DFF',
        green: '#04D361',
        lightGreen: '#A6FB98',
        red: '#E51D37',
      },
      fontFamily: {        
        archivo: ['Archivo', 'sans-serif'],
      }
    },
  },
  plugins: [],
}


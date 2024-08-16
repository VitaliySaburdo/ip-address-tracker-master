/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-gray': 'hsl(0, 0%, 17%)',
        'gray-lite': 'hsl(0, 0%, 59%)',
        },
      },
      screens: {
        sm: '375px',
        xl: '1440px',
      },
    },
    plugins: [],
  };

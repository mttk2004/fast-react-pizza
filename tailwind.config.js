/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      padding: {
        '2.5pc': '2.5%',
        '5pc': '5%',
        '7.5pc': '7.5%',
        '10pc': '10%',
      },
    },
  },
  plugins: [],
};

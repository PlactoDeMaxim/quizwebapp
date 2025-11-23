/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./Pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f4f7f4',
          100: '#e3e8e3',
          200: '#c8d1c8',
          300: '#a3b0a3',
          400: '#7a8a7a',
          500: '#5f6f5f',
          600: '#4a574a',
          700: '#3d473d',
          800: '#333c33',
          900: '#2b322b',
        },
      },
    },
  },
  plugins: [],
};


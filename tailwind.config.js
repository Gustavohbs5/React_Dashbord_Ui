/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode : 'class',
  theme: {
    screens: {
      'phone': '640px',
      // => @media (min-width: 640px) { ... }
      'phone-2': '785px',
      // => @media (min-width: 720px) { ... }
      'nav': '917px',
      // => @media (min-width: 917px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'computer': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {},
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: []
}


// const withMT = require("@material-tailwind/react/utils/withMT");

// module.exports = withMT({
//   // purge: [],
//   // darkMode: false, // or 'media' or 'class'
//   content: [
//     "./src/*/.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   variants: {
//     extend: {},
//   },
//   plugins: [],
// });
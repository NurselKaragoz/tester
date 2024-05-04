/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        cusred: "#462112",
        cusblue: "#1b2642",
        cusgreen: "#b3eeb1",
        cusgray: "#4c4f5c",
      },
    },
  },
  plugins: [],
};

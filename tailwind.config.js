/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Raleway: "'Raleway', sans-serif;",
        OpenSans: "'Open Sans', sans-serif;"
      },

      boxShadow: {
        lightShadow: "rgba(0, 0, 0, 0.1) -4px 9px 25px -6px;"
      }
    },
  },
  plugins: [],
}


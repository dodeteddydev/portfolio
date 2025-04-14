/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pirataone: ["Pirata One", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
    colors: {
      transparent: "transparent",
      white: "#f8f9fa",
      gray: "#ced4da",
      black: "#212529",
    },
  },
  plugins: [],
};

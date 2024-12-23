/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        font_1: ["Nunito", "sans-serif"],
      },
      colors: {
        background: "#D0E3F1",
      },
    },
  },
  plugins: [],
};

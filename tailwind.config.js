/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      Epilogue: ["Epilogue", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        hero1: "url('../src/assets/bg-aurora1.png')",
        hero3: "url('../src/assets/bg-aurora3.png')",
        hero4: "url('../src/assets/bg-aurora4.png')",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};

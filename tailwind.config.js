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
        image: "url('../src/assets/background.png')",
        image2: "url('../src/assets/background2.jfif')",
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

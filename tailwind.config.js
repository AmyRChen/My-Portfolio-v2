/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        white: "#F8F3F0",
        black: "#231F1C",
        content: "#544B43",
        olive: "#999887",
        tea: "#C6BBAF",
        "dark-grey": "#404040",
        "deep-white": "#E3E0D9",
        "deep-tea": "#B0A69B",
      },
      fontFamily: {
        roboto: ["Roboto Mono", "monospace"],
        ubuntu: ["Ubuntu", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};

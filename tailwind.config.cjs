/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontWeight: {
      hairline: "100",
      extralight: "200",
      light: "300",
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      black: "900",
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        main: "#77D123",
        lightblue: "#4977A6",
        secondary: "#E18886",
        accent: "#797D7F",
        background: "#F2f2f2",
        Gray: "#A7A2A2",
        text: "#333",
        darkgreen: "#165664",
        layout: "#F0F1F3",
      },
    },
    plugins: [],
  },
};

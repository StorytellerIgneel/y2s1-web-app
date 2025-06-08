/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          50: "#ebf4ff",
          100: "#daebff",
          200: "#bcd7ff",
          300: "#93bbff",
          400: "#6993ff",
          500: "#466bff",
          600: "#2641ff",
          700: "#1c31e8",
          800: "#192dba",
          900: "#1d2e92",
          950: "#111955",
        },
        red: {
          50: "#fff1f2",
          100: "#ffe0e1",
          200: "#ffc7c9",
          300: "#ff9fa3",
          400: "#ff686e",
          500: "#fa3941",
          600: "#e81c24",
          700: "#c31219",
          800: "#a11319",
          900: "#85171b",
          950: "#490609",
        },
      },
    },
  },
  plugins: [],
};


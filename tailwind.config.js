/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#09dba0",
        pri: "hsl(171, 86%, 40.1%)",
        sec: "hsl(381, 88%, 56.1%)",
        "pri-light": "hsla(171, 86%, 40.1%, 15%)",
        "sec-light": "hsla(381, 88%, 56.1%, 15%)",
        secondary: "#fee800"
      },
    },
  },  
  plugins: [],
}


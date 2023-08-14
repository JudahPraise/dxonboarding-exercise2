/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./node_modules/flowbite/**/*.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        "uplb-maroon": {
          100: "#c17171",
          200: "#a94c4c",
          300: "#924444",
          400: "#6d3636",
          500: "#562424",
        },
        "uplb-green": {
          100: "#4a6741",
          200: "#3f5a36",
          300: "#374f2f",
          400: "#304529",
          500: "#22311d",
        },
        "uplb-yellow": {
          100: "#4a6741",
          200: "#3f5a36",
          300: "#374f2f",
          400: "#304529",
          500: "#22311d",
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};


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
        "uplb-primary": {
          100: "#B24C63",
          200: "#BBDEFB",
          300: "#90CAF9",
          // ... define more shades if needed
        },
        "uplb-secondary": {
          100: "#E1F5FE",
          200: "#B3E0F2",
          300: "#81D4FA",
          // ... define more shades if needed
        },
        // ... define more custom color themes
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};


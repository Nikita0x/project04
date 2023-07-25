/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '270px': '270px',
        '320px': '320px',
        '480px': '480px',
        '576px': '576px',
      }
    },
  },
  plugins: [
    // require("daisyui"),
  ],
}


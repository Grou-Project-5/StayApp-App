/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-input": "#F4F2F2",
        "bg-button": "#EE4266",
        "text-input": "#283618",
        "stroke-nav": "#E4E4E4",
        "text-card": "#00A424",
        "bg-card": "#F8F7F7",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};

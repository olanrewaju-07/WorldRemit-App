/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        tablet: { max: "1024px" },
        mobile: { max: "768px" },
        ringColor: {
          'custom-color': "rgb(129,0,129)",
        },
      },
    },
  },
  plugins: [],
};


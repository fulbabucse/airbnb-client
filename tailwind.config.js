/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#FF385C",
        secondaryColor: "#19D3AE",
        ternaryColor: "#374151",
        baseColor: "#FFFFFF",
      },
    },
  },
  plugins: [],
};

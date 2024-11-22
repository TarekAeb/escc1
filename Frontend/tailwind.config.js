/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        grayA: "#867f7f",
        grayB: "#0e0e12",
        grayC: "#36363f",
        grayD: "#0a0a0a",
        grayE: "#727989",
        grayF: "#928c8c",
        grayG: "#15151c",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        border: {
          "0%": {
            "border-radius": "100px 70px 100px 70px",
          },
          "50%": {
            "border-radius": "70px 100px 70px 100px",
          },
          "75%": {
            "border-radius": "70px 100px 70px 100px",
          },
          "100%": {
            "border-radius": "100px 70px 100px 70px",
          },
        },
      },
      animation: {
        "border-anime": "border 4s linear infinite",
      },
    },
  },
  plugins: [],
};

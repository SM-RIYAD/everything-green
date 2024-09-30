/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        firstTheme: "#035661",
        secondTheme: "#189273",
        thirdTheme: "#97BCB6",
      },
    },
  },
  plugins: [require("daisyui")],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-900": "#111827",
        light: {
          primary: "#ffffff",
          secondary: "#f3f4f6",
        },
      },
    },
  },
  plugins: [require("daisyui")],
};


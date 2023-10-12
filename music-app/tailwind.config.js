/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,tsx,ts}"],
  theme: {
    extend: {
      colors: {
        dark: "#1D2123",
        "dark-bold": "#1A1E1F",
        "dark-5": "rgba(0 , 0 , 0 , 0.5)",
        yellow: "#FACD66",
        "white-4": "rgba(255 , 255 , 255 , 0.04)",
        "white-7": "rgba(255 , 255 , 255 , 0.07)",
        "white-10": "rgba(255, 255, 255, 0.10)",
        "white-11": "rgba(255, 255, 255, 0.11)",
        "white-25": "rgba(255, 255, 255, 0.25)",
        "white-44": "rgba(255, 255, 255, 0.44)",
        "white-50": "rgba(255, 255, 255, 0.50)",
        gray: "#EFEEE0",
        "gray-blur": "rgba(29, 33, 35, 0.30)",
        "gray-thin": "#EFEEE0",
        "dark-37": "rgba(51, 55, 59, 0.37)",
        blue: "#4a90e2",
        green: "#50e3c2",
        red: "#e35050",
        "green-blur": "#A4C7C6",
        light: "#EFEEE0",
      },
      keyframes: {
        InToOut: {
          from: { left: "0" },
          to: { left: "-686px" },
        },
      },
      animation: {
        fadeInToOut: "3s ease 0s InToOut",
      },
    },
  },
  plugins: [],
};

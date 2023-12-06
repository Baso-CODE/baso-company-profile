/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      primary: "Open Sans",
      secondary: "Nunito",
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        lg: "0",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1170px",
    },
    extend: {
      colors: {
        primary: "#99a98f", //hijau sage
        secondary: "#4B5D68", //biru ke abu2
        accent: {
          primary: "#96C9E2",
          primary_hover: "#3e4d34",
          secondary: "#7d9a68", //hijau sage lebih contras
          secondary_hover: "#E350A9",
          tertiary: "#263425", //warna hijau yang di backround navbar
          bijak: "#131419",
        },
      },
      backgroundImage: {
        hero: "url('../src/assets/img/hero_bg.png')",
      },
      dropShadow: {
        primary: " 0px 5px 5px rgba(75, 93, 104, 0.1)",
      },
    },
  },
  plugins: [],
};

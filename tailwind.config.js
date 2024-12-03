// tailwind.config.js
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "background-color": "#F6F5F0",
      },
      fontFamily: {
        Estedad: ["Estedad-regular"],
        EstedadMedium: ["Estedad-medium", "sans-serif"],
        EstedadBold: ["Estedad-bold", "sans-serif"],
        EstedadSemiBold: ["Estedad-semibold", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

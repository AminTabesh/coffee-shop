// tailwind.config.js
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "background-color": "#F6F5F0",
        "gold-brand": "#B0A27B",
        "custom-brand": "#4F2C19",
      },
      fontFamily: {
        Estedad: ["Estedad-regular"],
        EstedadMedium: ["Estedad-medium"],
        EstedadBold: ["Estedad-bold"],
        EstedadSemiBold: ["Estedad-semibold"],
        RokhLight: ["Rokh-light"],
        RokhMedium: ["Rokh-medium"],
        RokhNormal: ["Rokh-normal"],
        RokhSemiBold: ["Rokh-semibold"],
        RokhBold: ["Rokh-bold"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

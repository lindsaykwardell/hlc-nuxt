/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
const { colors, fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    colors: {
      ...colors,
      "hlc-magenta": {
        100: "#e4d4e4",
        200: "#c9a8c9",
        300: "#ae7daf",
        400: "#935194",
        500: "#782679",
        600: "#601e61",
        700: "#481749",
        800: "#300f30",
        900: "#180818"
      },
      "hlc-blue": {
        100: "#d7e0e4",
        200: "#aec2c8",
        300: "#86a3ad",
        400: "#5d8591",
        500: "#356676",
        600: "#2a525e",
        700: "#203d47",
        800: "#15292f",
        900: "#0b1418"
      },
      "hlc-yellow": {
        100: "#fcebd8",
        200: "#f9d7b1",
        300: "#f7c48b",
        400: "#f4b064",
        500: "#f19c3d",
        600: "#c17d31",
        700: "#915e25",
        800: "#603e18",
        900: "#301f0c"
      },
      "hlc-brown": {
        100: "#ede8e5",
        200: "#dad2cb",
        300: "#c8bbb1",
        400: "#b5a597",
        500: "#a38e7d",
        600: "#827264",
        700: "#62554b",
        800: "#413932",
        900: "#211c19"
      },
      "hlc-green": {
        100: "#d9e3d5",
        200: "#b3c7ab",
        300: "#8eaa80",
        400: "#688e56",
        500: "#42722c",
        600: "#355b23",
        700: "#28441a",
        800: "#1a2e12",
        900: "#0d1709"
      },
      "hlc-dark-green": {
        100: "#d3d5d1",
        200: "#a7aba4",
        300: "#7a8276",
        400: "#4e5849",
        500: "#222e1b",
        600: "#1b2516",
        700: "#141c10",
        800: "#0e120b",
        900: "#070905"
      }
    },
    fontFamily: {
      ...fontFamily,
      sans:
        "'Lato', 'Source Sans Pro',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',Arial,sans-serif",
      mulish: '"Mulish", sans-serif',
      playfair: '"Playfair Display", serif'
    }
  },
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === "production",
    content: [
      "components/**/*.vue",
      "layouts/**/*.vue",
      "pages/**/*.vue",
      "content/**/*.md",
      "plugins/**/*.js",
      "nuxt.config.js"
    ]
  },
  future: {
    removeDeprecatedGapUtilities: true
  }
};

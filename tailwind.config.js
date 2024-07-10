/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        darkblack: "#090909",
        black: "#121212",
        darkgray: "#393939",
        gunsmoke: "#888888",
        lightgray: "#CFCFCF",
        whitesmoke: "#F5F5F5"
      },
      fontFamily: {
        gsextralight: ["GeneralSans-Extralight", "sans-serif"],
        gslight: ["GeneralSans-Light", "sans-serif"],
        gsregular: ["GeneralSans-Regular", "sans-serif"],
        gsmedium: ["GeneralSans-Medium", "sans-serif"],
        gssemibold: ["GeneralSans-Semibold", "sans-serif"],
        gsbold: ["GeneralSans-Bold", "sans-serif"],
        playfairblack: ["PlayfairDisplay-Black", "serif"],
        playfairbolditalic: ["PlayfairDisplay-BoldItalic", "serif"],
        playfairbold: ["PlayfairDisplay-Bold", "serif"]
      }
    },
  },
  plugins: [],
}

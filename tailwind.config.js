import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
  plugins: [],
  theme: {
      extend: {
          colors: {
              gray: colors.zinc,
          }
      }
  },
  purge: ["./index.html",'./src/**/*.{svelte,js,ts}'], // for unused CSS
  variants: {
    extend: {},
  },
  darkMode: 'media', // or 'media' or 'class'
}
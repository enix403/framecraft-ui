/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{svelte,html}"],
  theme: {
    extend: {}
  },
  plugins: [
    require("rippleui")({
      // defaultStyle: false,
      // removeThemes: ['dark']
    })
  ]
};

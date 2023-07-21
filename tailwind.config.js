/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        careersPath: {
          primary: "rgb(0,32,63)",
          accent: "rgba(158, 0, 255, 0.45)",
          heading: "rgb(129, 127, 130)",
          paragraph: "rgb(193, 192, 192)",
          button: " rgba(0, 181, 255, 1)",
          message: 'rgba(49, 49, 49, 1)',
          background: 'rgba(190, 190, 190, 1)'

        },
      },
    },
  },
  plugins: [],
};

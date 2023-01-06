module.exports = {
  content: ["./components/**/*.{tsx,js,ts}", "./pages/**/*.{tsx,js,ts}"],
  theme: {
    debugScreens: {
      position: ["bottom", "right"],
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        primary: '#1aa6fc',
        secondary: 'rgb(136, 146, 176)',
        navLinkColor: '#ccd6f6',
        'icon-color': '#949fbc',
        heading: 'rgb(204, 214, 246)',
        dark: '#112340'
      },
      fontFamily: {
        calibreBlack: ['CalibreBlack', 'sans-serif'],
        'sf-mono': ['SF-Mono', 'sans-serif'],
        calibreBold: ['CalibreBold', 'sans-serif'],
        calibreLight: ['CalibreLight', 'sans-serif'],
        calibreMedium: ['CalibreMedium', 'sans-serif'],
        calibreRegular: ['CalibreRegular', 'sans-serif'],
        calibreSemibold: ['CalibreSemibold', 'sans-serif'],
        calibreThin: ['CalibreThin', 'sans-serif']
      }
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
    require("tailwindcss-debug-screens"),
  ],
};

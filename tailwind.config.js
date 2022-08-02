module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {

        fadeInAnimation: {
          "0%": { opacity: 0 },

          "100%": { opacity: 1 },
        },
      },

      animation: {
        heightModalAnimation: "heightModalAnimation 500ms ease-in-out",
      },
    },
  },
  plugins: [],
}

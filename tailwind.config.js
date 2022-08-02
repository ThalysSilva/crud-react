module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        heightModalAnimation: {
          "0%": {
            maxHeight: "0px",

            opacity: 0,
          },

          "100%": {
            maxHeight: "476px",

            opacity: 1,
          },
        },

        fadeInAnimation: {
          "0%": { opacity: 0 },

          "100%": { opacity: 1 },
        },
      },

      animation: {
        heightModalAnimation: "heightModalAnimation 500ms ease-in-out",
        fadeInAnimation:" fadeInAnimation 200ms ease-in-out"
      },
    },
  },
  plugins: [],
}

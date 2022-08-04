module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        fadeInAnimation: {
          '0%': { opacity: 0 },

          '100%': { opacity: 1 }
        }
      },
      boxShadow: {
        'inset-y': 'inset 0px 50px 20px -20px, inset 0px -50px 20px -20px ; ',
        'bottom': '0px 10px 5px ',
        'top': '0px -10px 5px'
      },
      animation: {
        heightModalAnimation: 'heightModalAnimation 500ms ease-in-out'
      }
    }
  },
  plugins: []
};



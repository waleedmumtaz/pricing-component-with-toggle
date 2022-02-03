const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      backgroundImage: {
        'linear-gradient':
          'linear-gradient(hsl(236, 72%, 79%), hsl(237, 63%, 64%))',
      },
      colors: {
        cstm: {
          'very-light-grayish-blue': 'hsl(240, 78%, 98%)',
          'light-grayish-blue': 'hsl(234, 14%, 74%)',
          'grayish-blue': 'hsl(233, 13%, 49%)',
          'dark-grayish-blue': 'hsl(232, 13%, 33%)',
        },
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },

  plugins: [],
}

module.exports = config

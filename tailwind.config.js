/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {},
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),

    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          padding: '0px 15px',
          '@screen sm': {
            maxWidth: '560px',
            margin:'auto',
          },
          '@screen md': {
            maxWidth: '740px',
          },
          '@screen lg': {
            maxWidth: '960px',
          },
            '@screen xl': {
              maxWidth: '1170px',
            },
            '@screen 2xl': {
              maxWidth: '1170px',
            },
        }
      })
    },
  ],
}

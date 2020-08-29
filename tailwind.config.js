/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    colors: {
      ...colors,
      'hlc-magenta': 'var(--hlc-magenta)',
      'hlc-blue': 'var(--hlc-blue)',
      'hlc-yellow': 'var(--hlc-yellow)',
      'hlc-brown': 'var(--hlc-brown)',
      'hlc-green': 'var(--hlc-green)',
      'hlc-dark-green': 'var(--hlc-dark-green)',
    }
  },
  variants: {},
  plugins: [],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  },
  future: {
    removeDeprecatedGapUtilities: true,
  },
}

module.exports = {
  mode: 'jit',
  content: [
    '*.html',
    'js/*.js'
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

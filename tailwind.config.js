module.exports = {
  mode: 'jit',
  content: [
    'index.html',
    'src/js/*.js'
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

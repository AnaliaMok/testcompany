module.exports = {
  syntax: 'postcss-scss', // Technically for postcss to sass
  map: false,
  from: '/src/styles/style.scss',
  to: '/src/styles/style.css',
  plugins: {
    'postcss-easy-import': {prefix: '_'},
    'autoprefixer': {}
  }
}
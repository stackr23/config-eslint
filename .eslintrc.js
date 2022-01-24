require('@babel/register', require('./babel.config'))

module.exports = {
  'extends':        [ require.resolve('./env/react.js') ],
  ignorePatterns: [ 'dist/**', 'build/**' ],
}

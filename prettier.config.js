module.exports = {
  printWidth:     90,
  tabWidth:       2,
  useTabs:        false,
  singleQuote:    true,
  trailingComma:  'es5',
  arrowParens:    'always',
  semi:           false,
  bracketSpacing: true,
  proseWrap:      'preserve',
  quoteProps:     'as-needed',
  overrides:      [
    {
      files:   '*.{js,jsx}',
      options: {
        parser: 'babel',
      },
    },
  ],
}

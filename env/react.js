// babelRegister needed for import resolver
require('../utils/babelRegister')
const getResolveConfigPath = require('../utils/getResolveConfigPath')

module.exports = {
  env: {
    es6:     true,
    node:    true,
    browser: false,
  },
  parser:        '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion:  2020,
    sourceType:   'module',
    ecmaFeatures: {
      jsx:     true,
      classes: true,
      modules: true,
    },
  },
  settings: {
    engines: { node: '>=12.0.0' },
    react:   {
      version:     'detect',
      createClass: 'createReactClass',
    },
    'import/resolver': {
      node:    false,
      webpack: {
        config: getResolveConfigPath(),
        env:    'test',
      },
    },
  },
  // TYPESCRIPT OVERRIDES
  // Dont override in extend file - doesn't work
  overrides: [
    {
      files:         [ '*.ts', '*.tsx' ],
      parser:        '@typescript-eslint/parser',
      parserOptions: {
        tsconfigRootDir: process.cwd(),
        project:         './tsconfig.json',
      },
      settings: {
        'import/parsers': {
          '@typescript-eslint/parser': [ '.ts', '.tsx' ],
        },
        'import/resolver': {
          node:       false,
          webpack:    false,
          typescript: { // uses <root>/tsconfig.json
            alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
          },
        },
      },
      plugins:   [ '@typescript-eslint' ],
      'extends': [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        require.resolve('../rules/typescript'),
      ],
      rules: { },
    },
  ],
  ignorePatterns: [ 'build/**/*', '**/*.html.esj' ],
  plugins:        [ 'react', 'react-hooks' ],
  'extends':      [
    require.resolve('../env/node'),
    // REACT RULES
    'plugin:react/recommended',
    require.resolve('../rules/react'),
    // typescript
  ],
}

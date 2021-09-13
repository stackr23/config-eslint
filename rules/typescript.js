module.exports = {
  rules: {
    // additional TS rules (overrides for 'plugin:@typescript-eslint/recommended')
    '@typescript-eslint/ban-ts-ignore':        [ 'warn' ],
    '@typescript-eslint/camelcase':            [ 'warn' ],
    '@typescript-eslint/no-explicit-any':      [ 'warn' ],
    '@typescript-eslint/ban-types':            [ 'warn' ],
    // @typescript-eslint overrides for vanilla eslint rules
    'no-use-before-define':                    0,
    '@typescript-eslint/no-use-before-define': [ 'warn', {
      ignoreTypeReferences: true,
      functions:            false,
      classes:              false,
      variables:            true,
    }],
  },
}

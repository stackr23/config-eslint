module.exports = {
  rules: {
    // @typescript-eslint overrides for vanilla eslint rules
    'no-use-before-define':                    0,
    '@typescript-eslint/no-use-before-define': [ 'warn', {
      ignoreTypeReferences: true,
      functions:            false,
      classes:              false,
      variables:            true,
    }],

    'no-return-await':                 'off',
    '@typescript-eslint/return-await': 'warn',

    'no-unused-expressions':                            'off',
    '@typescript-eslint/no-unused-expressions':         [ 'warn' ],
    // additional TS rules (overrides for 'plugin:@typescript-eslint/recommended')
    '@typescript-eslint/ban-ts-comment':                [ 'warn' ],
    '@typescript-eslint/no-explicit-any':               [ 'warn' ],
    '@typescript-eslint/ban-types':                     [ 'warn' ],
    // viewar team rules
    '@typescript-eslint/no-var-requires':               [ 'error' ],
    '@typescript-eslint/restrict-plus-operands':        [ 'warn', { checkCompoundAssignments: true }],
    '@typescript-eslint/strict-boolean-expressions':    [ 'warn', { allowString: false }],
    '@typescript-eslint/explicit-function-return-type': 'warn',
    '@typescript-eslint/no-floating-promises':          'warn',
    '@typescript-eslint/prefer-optional-chain':         'warn',
    '@typescript-eslint/restrict-template-expressions': 'warn',
    '@typescript-eslint/no-this-alias':                 [ 'warn', {
      allowDestructuring: true, // Disallow `const { props, state } = this`; true by default
      allowedNames:       [ 'self' ], // Allow `const self = this`; `[]` by default
    },
    ],
    '@typescript-eslint/no-dynamic-delete':                      'warn',
    '@typescript-eslint/no-misused-promises':                    'warn',
    '@typescript-eslint/consistent-type-assertions':             'warn',
    '@typescript-eslint/promise-function-async':                 'warn',
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'warn',
    '@typescript-eslint/prefer-nullish-coalescing':              'warn',

    // FOR ESLINT-PLUGIN-UNUSED-IMPORTS
    'no-unused-vars':                    'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'unused-imports/no-unused-imports':  'error',
    'unused-imports/no-unused-vars':     [ 'warn', {
      vars: 'all', varsIgnorePattern: 'React|styles|cx', args: 'after-used', argsIgnorePattern: 'e|err',
    }],
  },
};

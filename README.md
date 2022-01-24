# @stackr23/config-eslint

![Test and Lint](https://github.com/stackr23/config-eslint/actions/workflows/test_and_lint.yml/badge.svg)
[![NPM Release](https://img.shields.io/npm/v/%40stackr23%2Fconfig-eslint.svg?style=flat)](https://www.npmjs.com/package/%40viewar%2Fconfig-eslint) [![Conventional Commits](https://img.shields.io/badge/✔-Conventional%20Commits-blue.svg)](https://conventionalcommits.org) [![Semantic Versioning](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-blue.svg)](https://github.com/semantic-release/semantic-release)

<!-- badge-urls -->

[semantic-img]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-blue.svg
[semantic-url]: https://semver.org/

<!-- /badge-urls -->

- [Installation](#installation)
- [Configuration](#configuration)
  - [NPM Lint Script](#npm-lint-script)
  - [DotFiles](#dotfiles)
  - [VsCode Integration](#vscode-integration)
  - [Import Resolvers](#import-resolvers)

## Installation

> **to skip installation and configuration,**  
> **just run** `npx mrm --preset @stackr23/mrm lint`
>
> **see:** [lint Task of '@stackr23/mrm'](https://github.com/stackr23/mrm#lint)

**install package:** `npm i -D eslint @stackr23/config-eslint`  
_includes all eslint and prettier related plugins and shared configs_

## Configuration

### NPM Lint Script

`eslint --fix . --quiet --format pretty && prettier ./**/*.{css,scss,md,json,yml} --write`

### DotFiles

**EsLint** (_use **either** JS or JSON_)

```js
// NodeJS - {workspace}/.eslintrc.js
module.exports = { extends: [require.resolve('@stackr23/config-eslint')] }
// JSON - {workspace}/.eslintrc
{ "extends": ["./node_modules/@stackr23/config-eslint"] }
```

**Prettier** _(optional for scss, md, json and yml)_

```js
// {workspace}/prettier.config.js
module.exports = require('@stackr23/config-eslint/prettier.config.js')
```

### VsCode Integration

**install extensions:**

- "[dbaeumer.vscode-eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)" - official EsLint Extension from Microsoft
- "[esbenp.prettier-vscode](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)" - official Prettier Extension from Prettier

**JSON Config** - **'{workspace}/.vscode/settings.json'** or global as [User Settings](https://code.visualstudio.com/docs/getstarted/settings#_settings-file-locations)

```javascript
{
  ///// LINT / FORMAT SETTINGS
  // disable vsCode's internal default formatter
  "javascript.validate.enable": false,
  "javascript.format.enable": false,
  "typescript.validate.enable": false,
  "typescript.format.enable": false,
  // use prettier as default formatter (scss, json, md, yml, ...)
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  // use ESLINT for these file types
  "eslint.validate": ["javascript", "javascriptreact", "typescript", "typescriptreact"],
  "eslint.run": "onType", // auto check on typing
  "editor.codeActionsOnSave": { "source.fixAll.eslint": true }, // auto fix on save
  "eslint.alwaysShowStatus": true, // 'IgorSbitnev.error-gutters'
  "eslint.workingDirectories": [{ "directory": ".", "changeProcessCWD": true }],
  // Multiple languages specific editor settings NOT AVAILABLE YET
  // https://github.com/microsoft/vscode/issues/51935
  "[javascript]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint",
    "editor.formatOnPaste": false,
    "editor.formatOnSave": false,
    "editor.formatOnType": false
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint",
    "editor.formatOnPaste": false,
    "editor.formatOnSave": false,
    "editor.formatOnType": false
  },
  "[typescript]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint",
    "editor.formatOnPaste": false,
    "editor.formatOnSave": false,
    "editor.formatOnType": false
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint",
    "editor.formatOnPaste": false,
    "editor.formatOnSave": false,
    "editor.formatOnType": false
  },
}

```

### Import Resolvers

> enables absolute import paths for `eslint-plugin-import`  
> like `import Header from 'components/Header'`

**Webpack Resolver**

> which is applied to the default env 'react'

- **uses '[tsconfig-paths-webpack-plugin](https://github.com/dividab/tsconfig-paths-webpack-plugin#readme)'** to resolve import paths  
  **requires** workspaceRoot/tsconfig.json  
  **see** [path-mapping for typescript](https://www.typescriptlang.org/docs/handbook/module-resolution.html#path-mapping)
- **if tsconfig.json is not present** it won't use that plugin  
  and uses the **default resolve config**:  
  _(paths.src can be overruled by the env var WEBPACK_PATH)_

  ```js
    resolve: {
      extensions: ['.jsx', '.js', '.ts', '.tsx', '.json'],
      // paths are relative to workspace root
      alias:      {
        components: join(basename(CONSTANTS.paths.src), 'components'), // ./src/components
        assets: CONSTANTS.paths.assets // ./assets
      },
      modules: ['node_modules'],
    }
  ```

- **you can overwrite this config** to fit your projects module resolvement,  
  if you **add 'webpack.config.resolve.js'** to your workspaceRoot  
  _(use format of '[src/webpack.config.resolve.js](https://github.com/stackr23/webpack/blob/master/src/webpack.config.resolve.js)')_
  - This config will also be used by '[@stackr23/webpack](https://github.com/stackr23/webpack)'
  - for more information see [webpack's resolve config](https://webpack.js.org/configuration/resolve/)

**Node Resolver**

> applied to env 'browser' and 'node'

```javascript
{
  paths:      [ './src' ],
  extensions: [ '.js', '.jsx', '.json' ],
}
```

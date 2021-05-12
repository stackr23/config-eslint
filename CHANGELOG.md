# Changelog

> generated with [@semantic-release/changelog](https://github.com/semantic-release/changelog)

# 2.0.0 (2021-05-14)

### Bug Fixes

- use `ignorePatterns` ([5e4b2a4](https://github.com/stackr23/config-eslint/commit/5e4b2a4fe1f1dc8809ada6e7c4e476cfe4f3ff77))

### Features

- **remaster:** upgrade to v2.0.0 ([1a215d7](https://github.com/stackr23/config-eslint/commit/1a215d79d690e1890eef0d3abf75b95e7efbd91f))

# 1.12.0 (2020-05-06)

### Bug Fixes

- add ignorePatterns to react-env

### Features

- **typescript-support:** override react env for '.ts?' files

# 1.11.0 (2020-05-05)

### Bug Fixes

- **release-process:** release on master branch

### Features

- **module-resolvement:** use 'tsconfig.json' for webpack-resolver-config

# 1.10.0 (2019-11-27)

### Bug Fixes

- **deps:** add 'eslint-formatter-pretty' to save-deps
- **deps:** fix save-deps (eslint, and some plugins)

### Features

- **react-hooks:** add 'eslint-plugin-react-hooks'
- **CI:** test on linux, mac and windows

# 1.9.0 (2019-11-24)

### Bug Fixes

- **indent:** fix 'indent' rule for 'SwitchCase' and var/let
- **exports:** remove '/prettier' - in favor of '/prettier.config'closes
- **rules:** remove deprecated rule 'react/jsx-space-before-closing'
- **CI:** use travis, as repo is now 'public'

# 1.8.0 (2019-11-18)

### Bug Fixes

- **exports:** remove '/prettier' - in favor of '/prettier.config'

### Features

- **release:** add 'semantic-release-slack-bot'
- **eslint-plugin-promise:** add rules for promise usage
- **env:** make 'react' the default env
- **CI:** use build stage for release

# 1.7.0 (2019-10-31)

### Bug Fixes

- **deps:** add 'eslint-plugin-node' to save-deps
- **package:** prepare pckg to get published
- **CI:** run lint+test+release

### Features

- **npm:** publish to npm per 'semantic-release'

# 1.6.0 (2019-10-31)

### Bug Fixes

- add **tests** to eslintignore
- **settings:** add `settings.engines`
- **install:** move eslint to dev- / peer-deps
- **package:** prepare pckg to get published
- **CI:** run lint+test+release

### Features

- **rules:** allow static state vars for react classes
- **rules:** disable 'no-use-before-define' for functions
- **npm:** publish to npm per 'semantic-release'

## 1.5.1 (2019-10-24)

### Bug Fixes

- disable 'node/no-missing-import' as a workaround

# 1.5.0 (2019-10-15)

### Bug Fixes

- **jsx-filename-extension:** add '.js' to allowed file extensions
- **lint:** config and src path

* **CI:** allow dependabot PRs to run pipeline
* **deps:** fix babelregister bug
* **CI:** readd test job (+ trigger CI)
* **getResolveConfigPath:** return false on catched MODULE_NOT_FOUND
* **release:** version number after reset

### Features

- **/prettier:** export `prettier.config.js` + added test

# 1.3.0 (2019-09-23)

- **CI:** allow dependabot PRs to run pipeline
- **deps:** fix babelregister bug
- **CI:** readd test job (+ trigger CI)
- **getResolveConfigPath:** return false on catched MODULE_NOT_FOUND
- **release:** version number after reset

### Features

- **semantic-release:** deploy per BB master push
- **semantic-release:** runs per CI on branch "next"
- **CI:** use travis

# 1.3.0 (2019-09-23)

### Features

- **react-rules:** add first draft

## 1.2.2 (2019-09-20)

### Bug Fixes

- **resolveConfig:** use fallback resolveConfig

## 1.2.1 (2019-09-19)

### Bug Fixes

- **README:** change install URL to github

# 1.2.0 (2019-09-18)

### Bug Fixes

- **CI:** readd test job (+ trigger CI)
- **release:** version number after reset

### Features

- **semantic-release:** runs per CI on branch "next"

# 1.1.0 (2019-09-17)

### Bug Fixes

- node resolver - 'moduleDirectory' => 'resolvePaths'
- **prettier:** json formatting
- import resolvers and vsCode settings
- settings for vsCode
- **import-resolver:** fix import rules and settings

### Features

- **circleCI:** add testscript and circleCi config
- **env:** split into different environment-settings
- **standard:** add `eslint-config-standard` (and `eslint-plugin-standard`)
- **standard:** add rules from `eslint-config-standard` without plugins

# 1.0.0

🎉 **initial commit**

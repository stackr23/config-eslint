# Changelog

> generated with [@semantic-release/changelog](https://github.com/semantic-release/changelog)



## [2.0.4](https://github.com/stackr23/config-eslint/compare/v2.0.3...v2.0.4) (2021-09-20)


### :wrench: Configs

* add `jest` plugin to node/react env ([e4913b9](https://github.com/stackr23/config-eslint/commit/e4913b93175404603d288f407cbbe05de390f891))
* add babel config for eslint ([bf86a60](https://github.com/stackr23/config-eslint/commit/bf86a60ba5e05320b7d0fc4383190bb9f6c1dd6b))
* **npm:** set babels targets to `"esmodules": true` ([ca3592c](https://github.com/stackr23/config-eslint/commit/ca3592caf228c1cf88de50b454965ac24a2ce5cf))
* **rules-react:** set `prop-types` and `display-name` to 'warn' ([d663952](https://github.com/stackr23/config-eslint/commit/d66395284abbeafbd5b49d461271ad4327abe94c))
* **rules-ts:** set `react/prop-types` to `off` ([b45c1dd](https://github.com/stackr23/config-eslint/commit/b45c1ddbdfa5f6689d326cf141af6f021496280a))
* **rules:** add various typescript rules ([1616da1](https://github.com/stackr23/config-eslint/commit/1616da1d4151c0defe555f015d4da4fff8cd802e))
* **tsconfig:** add `"strictNullChecks": true` ([60046e4](https://github.com/stackr23/config-eslint/commit/60046e461e8a2a1ca8fcbd9f14d913704616ecfb))


### :package: Dependencies

* add `react` for eslint-plugin-detect ([26f2bc6](https://github.com/stackr23/config-eslint/commit/26f2bc69ff02987c3d3bb0a363a83b4bcd56eaff))

## [2.0.3](https://github.com/stackr23/config-eslint/compare/v2.0.2...v2.0.3) (2021-09-13)


### :wrench: Configs

* **env-react:** extend with 'rules/typescript' ([a581beb](https://github.com/stackr23/config-eslint/commit/a581beb26242523afd61df1b864dad49e44d80b4))
* **env-react:** remove duplicate extend of `@typescript-eslint/eslint-recommended` ([853db8c](https://github.com/stackr23/config-eslint/commit/853db8c4be713e325dfe12e37be1a668ec4c0be1))
* **rule:** set `no-return-await` to 'warn' ([e7cabf1](https://github.com/stackr23/config-eslint/commit/e7cabf15e0a05e7ecb13c00b54d52c9c90422d8d))
* **rules:** add `rules/typescript` ([5d80c58](https://github.com/stackr23/config-eslint/commit/5d80c589812d914e9da2f294aca8cea1c046ed21))
* **rules:** change `no-var-requires` ([797e1c5](https://github.com/stackr23/config-eslint/commit/797e1c5756f9c7db2402b5e2b93c0fb59a8e3dde))
* **rules:** change non-critical rules to 'warn' ([7f314ea](https://github.com/stackr23/config-eslint/commit/7f314eab37cd0199f06a568981cd4197f0dcdbd7))
* **rules:** remove deprecated TS rules ([8e61a3b](https://github.com/stackr23/config-eslint/commit/8e61a3b6b1d73bd1bcd364dd067a9613495edfe5))
* **tsconfig:** `allowJs: true` ([61617fa](https://github.com/stackr23/config-eslint/commit/61617fa8fff5061c4e3c9c57f266f34ad02c35a7))
* **tsconfig:** add `paths` mapping ([0b20fec](https://github.com/stackr23/config-eslint/commit/0b20fec7075f8de7081fae5469ece6fac28f936d))
* use `@babel/eslint-parser` instead of `babel-eslint` ([d9fa81b](https://github.com/stackr23/config-eslint/commit/d9fa81bcbdf4787eb1c68a01bd75fb10f5c401bd))

## [2.0.2](https://github.com/stackr23/config-eslint/compare/v2.0.1...v2.0.2) (2021-09-09)


### :beetle: Bug Fixes

* **tsconfigRootDir:** use `process.cwd()` as function ([142924c](https://github.com/stackr23/config-eslint/commit/142924c6a582d759f1008faad75af0dd08fdb10f))


### :wrench: Configs

* **rules:** `allowSeparatedGroups` in `sort-import` ([8b3656c](https://github.com/stackr23/config-eslint/commit/8b3656cef4daee3c027faffd9dd2bfb48766ce48))
* set `settings.react.version: 'detect'` ([30d01cc](https://github.com/stackr23/config-eslint/commit/30d01cc1c03793668afe5730a5babdde28d96f11))

## [2.0.1](https://github.com/stackr23/config-eslint/compare/v2.0.0...v2.0.1) (2021-09-08)


### :wrench: Configs

* **ci:** remove circleCI config ([578a4c3](https://github.com/stackr23/config-eslint/commit/578a4c3606515eb0bc150a9278f3a0b6c69b1745))
* **ci:** remove travis config ([6d2800c](https://github.com/stackr23/config-eslint/commit/6d2800cb52219f1749aa38d3fb49e87d28d37bef))
* **CI:** add 'semantic-release' config ([f3c4adf](https://github.com/stackr23/config-eslint/commit/f3c4adf2bbad7da859b8e0d044f1f7cba06cf378))
* **CI:** remove circleCI config ([7031383](https://github.com/stackr23/config-eslint/commit/703138362f66f6b9ac649e4947c4893cbea19ea4))
* **gh-action:** add 'semantic-release' workflow ([a5ec8a1](https://github.com/stackr23/config-eslint/commit/a5ec8a1e30c61fec9a979a8c456f25cd65419228))
* **npm:** move `prettier` to 'format' script ([5fbb246](https://github.com/stackr23/config-eslint/commit/5fbb2464018ce43a88992fa534f5e7b6766b5581))
* **rules:** add 'key-spacing' rules ([43ce88e](https://github.com/stackr23/config-eslint/commit/43ce88e234a63e07b49d3f433cdc914719794a83))
* **rules:** add 'keyword-spacing' (before and after) ([8fa577f](https://github.com/stackr23/config-eslint/commit/8fa577f5fc11eeae8a507e0ec4d51a4ac82e37ba))
* **rules:** add 'max-len' warning ([38b8e6c](https://github.com/stackr23/config-eslint/commit/38b8e6c7ef74219c8103f7dc1de2b8765e17d519))
* **rules:** add 'no-implicit-globals' ([9b04a44](https://github.com/stackr23/config-eslint/commit/9b04a44cf6c57a58b3917d7742fb26d5ea7d3e0a))
* **rules:** add 'one-var' settings ([9f330a6](https://github.com/stackr23/config-eslint/commit/9f330a617bae1c36f46c2797bd2983b60115378e))
* **rules:** allow JSX in `.ts?` files ([f99d269](https://github.com/stackr23/config-eslint/commit/f99d269cc872b0aa0660f148a47379be163ae447))
* **rules:** change `indent` for variables declarations ([8fa11bc](https://github.com/stackr23/config-eslint/commit/8fa11bc4d3310b60abbaa1ff7f9bfd317ff6fff5))
* **rules:** changed some basic rules ([4a9afef](https://github.com/stackr23/config-eslint/commit/4a9afef384245a42eb16b72c99932678c35b8200))
* **vsCode:** remove setting to use global user setting ([9017b79](https://github.com/stackr23/config-eslint/commit/9017b798436609599fbb3493c15814af8ca0ed5c))
* **vsCode:** remove setting to use global user setting ([fa075f2](https://github.com/stackr23/config-eslint/commit/fa075f292585f8f227f5962695f7bf3aeb6568e8))


### :package: Dependencies

* upgrade all dependencies and remove unused ([#2](https://github.com/stackr23/config-eslint/issues/2)) ([1a6f9ad](https://github.com/stackr23/config-eslint/commit/1a6f9ad8a3151fc1366fc66cfafa22ef66e604b4))

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

???? **initial commit**

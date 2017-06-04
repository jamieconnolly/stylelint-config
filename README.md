# stylelint-config

[![Greenkeeper badge](https://badges.greenkeeper.io/jamieconnolly/stylelint-config.svg)](https://greenkeeper.io/)

[![Build Status][build-status-image]][build-status-url]
[![MIT License][license-image]][license-url]
[![Version][version-image]][version-url]

> My own opinionated stylelint configuration.

## Installation

```
$ npm install --save-dev @jamieconnolly/stylelint-config
```

## Usage

To get started, add this to your `.stylelintrc.*` file:

```json
{
  "extends": "@jamieconnolly/stylelint-config"
}
```

## Presets

In addition to the default preset, there are also specific presets. All presets extend the default one.

### SCSS

```json
{
  "extends": "@jamieconnolly/stylelint-config/scss"
}
```

## License

[MIT License][license-url]

[build-status-image]: https://api.travis-ci.org/jamieconnolly/stylelint-config.svg?branch=master
[build-status-url]: https://travis-ci.org/jamieconnolly/stylelint-config

[license-image]: https://img.shields.io/badge/license-MIT-blue.svg
[license-url]: https://github.com/jamieconnolly/stylelint-config/blob/master/LICENSE

[version-image]: https://img.shields.io/npm/v/@jamieconnolly/stylelint-config.svg
[version-url]: https://www.npmjs.com/package/@jamieconnolly/stylelint-config

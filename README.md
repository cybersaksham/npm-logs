# cybersaksham-npm-logs

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url]
[![Size][size-image]][npm-url] [![License][license-image]][npm-url]

[npm-url]: https://www.npmjs.com/package/cybersaksham-npm-logs
[downloads-image]: http://img.shields.io/npm/dm/cybersaksham-npm-logs.svg
[npm-image]: http://img.shields.io/npm/v/cybersaksham-npm-logs.svg
[size-image]: http://img.shields.io/bundlephobia/min/cybersaksham-npm-logs.svg
[license-image]: http://img.shields.io/npm/l/cybersaksham-npm-logs.svg

This package generates professional log messages in cli.

## Installation

```bash
npm install cybersaksham-npm-logs
# Or
yarn add cybersaksham-npm-logs
```

## Usage

Import and call the functions.

```js
const logs = require("cybersaksham-npm-logs");
```

### Error

```js
const logs = require("cybersaksham-npm-logs");

logs.showError({
  code: 400,
  errors: [
    "Not Found - GET https://registry.npmjs.org/error - Not found",
    "",
    "'error@*' is not in this registry.",
    "",
    "Note that you can also install from a",
    "tarball, folder, http url, or git url.",
  ],
  summary: [
    "A complete log of this run can be found in:",
    "\t/home/cybersaksham/.npm/_logs/2022-12-27T17_58_06_509Z-debug-0.log",
  ],
});
```

## Test

```bash
# Error
npm run test-error
```

## Parameters

### Error (logs.showError)

| Parameter | Type    | Defualt | Description                      |
| --------- | ------- | ------- | -------------------------------- |
| code      | Integer | 404     | Error status code                |
| errors    | Array   | [ ]     | List of error statements to show |
| Summary   | Array   | [ ]     | List of summary statements       |

## License

Released under the [MIT License](http://www.opensource.org/licenses/mit-license.php).

## Contribution

If you want to contribute to the project and make it better, your help is very welcome, create a pull request with your suggested feature / bug fix / enhancements.

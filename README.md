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

### Warning

```js
const logs = require("cybersaksham-npm-logs");

logs.showWarning({
  warnings: [
    "You are running `portfolio-generator` 4.0.0, which is behind the latest release (4.1.0).",
    "",
    "We recommend always using the latest version of portfolio-generator if possible.",
  ],
  summary: [
    "The latest instructions for creating a new app can be found here:",
    "https://portfolio-generator.cybersaksham.co.in/docs/getting-started/",
  ],
});
```

### Notice

```js
const logs = require("cybersaksham-npm-logs");

logs.showNotice({
  notices: [
    "Creating file package.json",
    "Creating file index.js",
    "Installing packages: npm install",
    "Setting up...",
  ],
  summary: [
    "The latest instructions for creating a new app can be found here:",
    "https://portfolio-generator.cybersaksham.co.in/docs/getting-started/",
  ],
});
```

### Single Progress

```js
const logs = require("cybersaksham-npm-logs");
const path = require("path");

logs.showProgress({
  source = "https://sabnzbd.org/tests/internetspeed/20MB.bin",
  destination = path.join(__dirname + "/test.bin"),
});
```

### Multi Progress

```js
const logs = require("cybersaksham-npm-logs");
const path = require("path");

logs.showMultipleProgress([
  {
    source: "https://sabnzbd.org/tests/internetspeed/20MB.bin",
    destination: path.join(__dirname, "/20mb_1.bin"),
  },
  {
    source: "https://sabnzbd.org/tests/internetspeed/20MB.bin",
    destination: path.join(__dirname, "/20mb_2.bin"),
  },
  {
    source: "https://sabnzbd.org/tests/internetspeed/20MB.bin",
    destination: path.join(__dirname, "/20mb_3.bin"),
  },
]);
```

## Test

```bash
# Error
npm run test-error
# Warning
npm run test-warn
# Notice
npm run test-notice
# Single Progress
npm run test-download
# Notice
npm run test-multi-download
```

## Parameters

### Error (logs.showError)

| Parameter | Type    | Defualt | Description                      |
| --------- | ------- | ------- | -------------------------------- |
| code      | Integer | 404     | Error status code                |
| errors    | Array   | [ ]     | List of error statements to show |
| summary   | Array   | [ ]     | List of summary statements       |

### Warning (logs.showWarning)

| Parameter | Type  | Defualt | Description                        |
| --------- | ----- | ------- | ---------------------------------- |
| warnings  | Array | [ ]     | List of warning statements to show |
| summary   | Array | [ ]     | List of summary statements         |

### Notice (logs.showNotice)

| Parameter | Type  | Defualt | Description                       |
| --------- | ----- | ------- | --------------------------------- |
| notices   | Array | [ ]     | List of notice statements to show |
| summary   | Array | [ ]     | List of summary statements        |

### Single Progress (logs.showProgress)

| Parameter   | Type   | Defualt                                            | Description      |
| ----------- | ------ | -------------------------------------------------- | ---------------- |
| source      | String | "https://sabnzbd.org/tests/internetspeed/20MB.bin" | Source URL       |
| destination | String | path.join(\_\_dirname + "/test.bin")               | Destination path |

### Multi Progress (logs.showMultipleProgress)

| Parameter | Type  | Defualt | Description   |
| --------- | ----- | ------- | ------------- |
| fileList  | Array | [ ]      | List of files |

- Each file in `fileList` is an object & contains two fields.

| Parameter   | Type   | Defualt                                            | Description      |
| ----------- | ------ | -------------------------------------------------- | ---------------- |
| source      | String | "https://sabnzbd.org/tests/internetspeed/20MB.bin" | Source URL       |
| destination | String | path.join(\_\_dirname + "/test.bin")               | Destination path |

## License

Released under the [MIT License](http://www.opensource.org/licenses/mit-license.php).

## Contribution

If you want to contribute to the project and make it better, your help is very welcome, create a pull request with your suggested feature / bug fix / enhancements.

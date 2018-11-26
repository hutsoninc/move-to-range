# move-to-range

[![Build Status](https://travis-ci.com/hutsoninc/move-to-range.svg?branch=master)](https://travis-ci.com/hutsoninc/move-to-range) [![Current npm package version](https://img.shields.io/npm/v/move-to-range.svg)](https://www.npmjs.com/package/move-to-range) 

Move files to corresponding directories given a range

## Installation

`npm install --save move-to-range`

## Usage

```js
const moveToRange = require('move-to-range');

moveToRange('1-4', '.txt');
```

```
$ tree
.
├── 1.txt
├── 2.txt
├── 3.txt
├── 4.txt
├── 1
│   └── 1.txt
├── 2
│   └── 2.txt
├── 3
│   └── 3.txt
├── 4
│   └── 4.txt
│ ...
```

With options:

```js
const moveToRange = require('move-to-range');

moveToRange('1-4', '.txt', {
    destination: 'out'
});
```

```
$ tree
.
├── 1.txt
├── 2.txt
├── 3.txt
├── 4.txt
├── out
│   ├── 1
│   │   └── 1.txt
│   ├── 2
│   │   └── 2.txt
│   ├── 3
│   │   └── 3.txt
│   └── 4
│       └── 4.txt
│ ...
```

## Options

Property | Description | Default
--- | --- | ---
destination | Destination directory | `""`

## Related

- [move-to-range-cli](https://github.com/hutsoninc/move-to-range-cli) - CLI for this module
- [copy-to-range](https://github.com/hutsoninc/copy-to-range) - Copy a file to a range of directories
- [make-dir-range](https://github.com/hutsoninc/make-dir-range) - Make directories from a range of integers

## Authors

* **Austin Gordon** - *Development* - [GitHub](https://github.com/AustinLeeGordon)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
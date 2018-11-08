# move-to-range

Move files to a range of directories.

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

## Related

- [copy-to-range](https://github.com/hutsoninc/copy-to-range) - Copy files to a range of directories
- [make-dir-range](https://github.com/hutsoninc/make-dir-range) - Make directories from a range of integers

## Authors

* **Austin Gordon** - *Development* - [GitHub](https://github.com/AustinLeeGordon)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
'use strict';
const fs = require('fs');
const path = require('path');
const validFilename = require('valid-filename');
const rangify = require('rangify-string');

const defaults = {
    fs,
    destination: ''
};

module.exports = (range, fileType, opts) => {

    if (fileType.indexOf('.') != 0) {
        fileType = '.' + fileType;
    }

    range = rangify(range);

    opts = Object.assign({}, defaults, opts);

    for (let i = 0; i < range.length; i++) {
        let dirname = range[i];
        let file = range[i] + fileType;

        if (validFilename(dirname)) {
            try {
                if (!fs.existsSync(path.resolve(file))) {
                    const err = new Error(`File not found: ${file}`);
                    throw err;
                }
                opts.fs.renameSync(path.resolve(file), path.resolve(opts.destination, `${dirname}/${file}`));
            } catch (err) {
                throw err;
            }
        } else {
            throw new Error(`Invalid directory name: ${directory}`);
        }
    }

};
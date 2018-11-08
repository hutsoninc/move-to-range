'use strict';
const fs = require('fs');
const path = require('path');

const validationSet = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '-'];

const defaults = {
    fs,
    destination: ''
};

const isSubsetOf = (subset, set) => {
    for (let i = 0; i < subset.length; i++) {
        if (set.indexOf(subset[i]) === -1) {
            return false;
        }
    }
    return true;
}

const testRange = range => {
    if (!isSubsetOf(range.join('').split(''), validationSet)) {
        const err = new Error(`Range contains invalid characters: ${range}`);
        throw err;
    }
    for (let i = 0; i < range.length; i++) {
        let set = range[i].split('-');
        if (
            set.length === 1 &&
            !isNaN(set[0]) &&
            Number.isInteger(Number(set[0]))
        ) {
            continue;
        } else if (
            set.length === 2 &&
            !isNaN(set[0]) &&
            Number.isInteger(Number(set[0])) &&
            !isNaN(set[1]) &&
            Number.isInteger(Number(set[1])) &&
            Number(set[0]) < Number(set[1])
        ) {
            continue;
        } else {
            const err = new Error(`Invalid formatting: ${range[i]}`);
            throw err;
        }
    }
};

module.exports = (range, fileType, opts) => {

    if (!Array.isArray(range)) {
        range = range.split(',');
        testRange(range);
    } else {
        testRange(range);
    }

    if (fileType.indexOf('.') != 0) {
        fileType = '.' + fileType;
    }

    opts = Object.assign({}, defaults, opts);

    for (let i = 0; i < range.length; i++) {
        let set = range[i].split('-');
        if (set.length === 2) {
            for (let j = set[0]; j <= set[1]; j++) {
                try {
                    if (!fs.existsSync(path.resolve(`${j}${fileType}`))) {
                        const err = new Error(`File not found: ${j}${fileType}`);
                        throw err;
                    }
                    opts.fs.renameSync(path.resolve(`${j}${fileType}`),  path.resolve(opts.destination, `${j}/${j}${fileType}`));
                } catch (err) {
                    throw err;
                }
            }
        } else {
            try {
                if (!fs.existsSync(path.resolve(`${j}${fileType}`))) {
                    const err = new Error(`File not found: ${j}${fileType}`);
                    throw err;
                }
                opts.fs.renameSync(path.resolve(`${j}${fileType}`),  path.resolve(opts.destination, `${j}/${j}${fileType}`));
            } catch (err) {
                throw err;
            }
        }
    }

};
# deep-trim [![Build Status](https://travis-ci.org/zebateira/node-deep-trim.svg?branch=master)](https://travis-ci.org/github/zebateira/node-deep-trim) [![npm version](https://img.shields.io/npm/v/deep-trim.svg?style=flat)](https://www.npmjs.com/package/deep-trim) [![minzipped size](https://img.shields.io/bundlephobia/minzip/deep-trim.svg?label=gzip%20size)](https://bundlephobia.com/result?p=deep-trim)

Recursively trim all the strings in a collection (object or array).

## Install

```bash
$ npm install deep-trim
```

## Usage

```js
var deepTrim = require('deep-trim');

deepTrim('   a ')
// 'a'

deepTrim(['   a ', 1, '', 'a', '             a']);
// ['a', 1, '', 'a', 'a']

deepTrim({ a: '  a', b: 'b  ', c: '   c ', d: 'd' });
// { a: 'a', b: 'b', c: 'c', d: 'd' }

deepTrim({ a: '  a', b: 'b  ', c: ['   ca', 'cb   '], d: 'd' });
// { a: 'a', b: 'b', c: ['ca', 'cb'], d: 'd' }
```

## Tests

```bash
$ npm test
```

## License

Released under the [MIT License](https://opensource.org/licenses/MIT).

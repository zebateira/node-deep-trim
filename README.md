# deep-trim [![Build Status](https://travis-ci.org/carsy/node-deep-trim.svg?branch=master)](https://travis-ci.org/carsy/node-deep-trim)


Recursively trim all the strings in a collection (object or array).


## Installation

`$ npm install deep-trim`

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

`$ npm test`


## License

Released under the [MIT License](http://www.opensource.org/licenses/mit-license.php).

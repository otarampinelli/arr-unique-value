# arr-unique-value [![NPM version](https://img.shields.io/npm/v/arr-unique-value.svg?style=flat)](https://www.npmjs.com/package/arr-unique-value)

> Return only unique values from an array, removing all repeated values.


## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save arr-unique-value
```

## Usage

Works with array of strings and numbers, does not accept array of objects

```js
const uniqueValue = require('arr-unique-value');

console.log(uniqueValue([1, 1, [2, 2, [3, 3, 3]], [4, 4]])); //=> [1, [2, [3]], [4]]
console.log(uniqueValue(['1', '1', ['2', '2', ['3', '3', '3']], ['4', '4']])); //=> ['1', ['2', ['3']], ['4']]
console.log(uniqueValue([1, 1, 'testing', 'testing', ['testingTwo', 'testingTwo']])); //=> [1, 'testing', ['testingTwo']]
```

### Author

**Otavio Rampinelli**

* [LinkedIn Profile](https://linkedin.com/in/otarampinelli)
* [GitHub Profile](https://github.com/otarampinelli)
* [Twitter Profile](https://twitter.com/otarampinelli)

### License

Copyright © 2022, [Otavio Rampinelli](https://github.com/otarampinelli).
Released under the [MIT License](LICENSE).

***

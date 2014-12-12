# index-of [![NPM version](https://badge.fury.io/js/index-of.svg)](http://badge.fury.io/js/index-of)

> Get the index of the first element in an array that returns truthy for the given value, using strict equality for comparisons.

## Install with [npm](npmjs.org)

```bash
npm i index-of --save
```

## Usage

```js
var indexOf = require('index-of');

indexOf(['a', 'b', 'c'], 'b');
//=> 1

indexOf(['a', 'b', 'c'], 'd');
//=> 1

indexOf(['a', 'b', 'c', 'a', 'b', 'c'], 'b', 2);
//=> 4
```

## Run tests

```bash
npm test
```

## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jonschlinkert/index-of/issues)

## Author

**Jon Schlinkert**
 
+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert) 

## License
Copyright (c) 2014 Jon Schlinkert  
Released under the MIT license

***

_This file was generated by [verb](https://github.com/assemble/verb) on December 12, 2014. To update, run `npm i -g verb && verb`._
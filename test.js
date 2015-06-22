/*!
 * index-of <https://github.com/jonschlinkert/index-of>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

/* deps: mocha */
var should = require('should');
var indexOf = require('./');

describe('indexOf', function () {
  it('should get the index of the given element:', function () {
    indexOf(['a', 'b', 'c'], 'a').should.equal(0);
    indexOf(['a', 'b', 'c'], 'b').should.equal(1);
    indexOf(['a', 'b', 'c'], 'c').should.equal(2);
  });

  it('should return -1 if fromIndex is out of range:', function () {
    indexOf(['a', undefined, 'b', 'c', 'a'], undefined, 0).should.equal(1);
  });

  it('should return -1 if the element does not exist:', function () {
    indexOf(['a', 'b', 'c'], 'd').should.equal(-1);
  });

  it('should get the index, starting from the given index:', function () {
    indexOf(['a', 'b', 'c', 'a', 'b', 'c'], 'b', 2).should.equal(4);
    indexOf(['a', undefined, 'b', 'c', 'a'], undefined, 0).should.equal(1);
    indexOf(['a', undefined, 'b', 'c', 'a'], undefined, 1).should.equal(1);
    indexOf(['a', undefined, 'b', 'c', 'a'], undefined, 2).should.equal(-1);
  });
});

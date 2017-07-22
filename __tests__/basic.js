'use strict';

var isPlainObj = require('is-plain-obj');

it('test basic properties of config', function() {
  var config = require('../index.js');

  expect(isPlainObj(config)).toBe(true);
  expect(config.extends).toBeTruthy();
});

it('test basic properties of scss config', function() {
  var config = require('../scss.js');

  expect(isPlainObj(config)).toBe(true);
  expect(config.extends).toBeTruthy();
  expect(config.rules).toBeTruthy();
});

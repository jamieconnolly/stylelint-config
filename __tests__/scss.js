'use strict';

var config = require('../scss'),
    stylelint = require('stylelint');

function isObject(obj) {
  return typeof obj === 'object' && obj !== null;
}

it('test basic properties of config', function() {
  expect(config.extends).toBeTruthy();
  expect(isObject(config.plugins)).toBeTruthy();
  expect(isObject(config.rules)).toBeTruthy();
});

it('load config in stylelint to validate rule syntax', function() {
  return stylelint.lint({
    code: 'a { font-weight: bold; }\n',
    codeFilename: 'valid.scss',
    config: config,
  }).then(function(data) {
    expect(data).toBeTruthy();
    expect(data.errored).toBeFalsy();
    expect(data.results[0].warnings.length).toBe(0);
  });
});

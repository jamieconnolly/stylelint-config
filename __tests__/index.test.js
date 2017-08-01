'use strict';

const isPlainObj = require('is-plain-obj');
const stylelint = require('stylelint');

it('should export an object', function() {
  const config = require('../index');

  expect(isPlainObj(config)).toBe(true);
  expect(config.extends).toBeTruthy();
});

it('should not contain invalid rules', function() {
  return new stylelint.lint({
    code: 'a { font-weight: 500; }\n',
    codeFilename: 'valid.css',
    configFile: 'index.js',
  }).then(function(data) {
    expect(data).toBeTruthy();
    expect(data.errored).toBeFalsy();
    expect(data.results[0].deprecations.length).toBe(0);
    expect(data.results[0].warnings.length).toBe(0);
  });
});

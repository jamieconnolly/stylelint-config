'use strict';

var stylelint = require('stylelint');

it('load config in stylelint to validate rule syntax', function() {
  return new stylelint.lint({
    code: 'a { font-weight: 500; }\n',
    codeFilename: 'valid.css',
    configFile: 'index.js',
  }).then(function(data) {
    expect(data).toBeTruthy();
    expect(data.errored).toBeFalsy();
    expect(data.results[0].warnings.length).toBe(0);
  });
});

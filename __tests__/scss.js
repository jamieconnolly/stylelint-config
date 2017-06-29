'use strict';

var path = require('path');
var stylelint = require('stylelint');

it('load config in stylelint to validate rule syntax', function() {
  return stylelint.lint({
    code: 'a { font-weight: 500; }\n',
    codeFilename: 'valid.scss',
    configFile: path.join(__dirname, '../scss.js'),
  }).then(function(data) {
    expect(data).toBeTruthy();
    expect(data.errored).toBeFalsy();
    expect(data.results[0].warnings.length).toBe(0);
  });
});

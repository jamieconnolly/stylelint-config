'use strict';

module.exports = {
  extends: [
    './',
    './rules/scss',
  ].map(require.resolve),
  rules: {
    // specify a blacklist of disallowed at-rules
    'at-rule-blacklist': ['debug', 'extend'],

    // require or disallow an empty line before at-rules
    'at-rule-empty-line-before': ['always', {
      except: ['blockless-after-same-name-blockless', 'first-nested'],
      ignore: ['after-comment'],
      ignoreAtRules: ['else'],
    }],

    // disallow unknown at-rules
    'at-rule-no-unknown': [true, {
      ignoreAtRules: [
        'extend', 'at-root', 'debug',
        'warn', 'error', 'if', 'else',
        'for', 'each', 'while', 'mixin',
        'include', 'content', 'return', 'function',
      ],
    }],

    // require a newline or disallow whitespace after the closing brace of blocks
    'block-closing-brace-newline-after': ['always', {
      ignoreAtRules: ['else', 'if'],
    }],
  },
};

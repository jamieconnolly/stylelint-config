'use strict';

module.exports = {
  extends: [
    './rules/browser-features',
    './rules/language-features',
    './rules/order',
    './rules/possible-errors',
    './rules/scss',
    './rules/stylistic-issues',
  ].map(require.resolve),
};

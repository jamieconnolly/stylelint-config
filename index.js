'use strict';

module.exports = {
  extends: [
    './rules/language-features',
    './rules/order',
    './rules/possible-errors',
    './rules/stylistic-issues',
  ].map(require.resolve),
};

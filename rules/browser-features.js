'use strict';

module.exports = {
  plugins: [
    'stylelint-no-unsupported-browser-features',
  ],
  rules: {
    // disallow features that are unsupported by the browsers that you are targeting
    'plugin/no-unsupported-browser-features': [true, {severity: 'warning'}],
  },
};

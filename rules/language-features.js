'use strict';

module.exports = {
  rules: {
    // specify a blacklist of disallowed at-rules
    'at-rule-blacklist': null,

    // disallow vendor prefixes for at-rules
    'at-rule-no-vendor-prefix': true,

    // specify a whitelist of allowed at-rules
    'at-rule-whitelist': null,

    // require (where possible) or disallow named colors
    'color-named': 'never',

    // disallow hex colors
    'color-no-hex': null,

    // specify a blacklist of disallowed words within comments
    'comment-word-blacklist': null,

    // specify a pattern for custom media query names
    'custom-media-pattern': null,

    // specify a pattern for custom properties
    'custom-property-pattern': null,

    // limit the number of declaration within single line declaration blocks
    'declaration-block-single-line-max-declarations': 2,

    // disallow !important within declarations
    'declaration-no-important': true,

    // specify a blacklist of disallowed property and unit pairs within declarations
    'declaration-property-unit-blacklist': null,

    // specify a whitelist of allowed property and unit pairs within declarations
    'declaration-property-unit-whitelist': null,

    // specify a blacklist of disallowed property and value pairs within declarations
    'declaration-property-value-blacklist': {
      '/.+/': ['initial'],
      '/^background/': ['http:', 'https:'],
      '/^border/': ['none'],
      '/^position/': ['fixed'],
      '/^transition/': ['/all/'],
    },

    // specify a whitelist of allowed property and value pairs within declarations
    'declaration-property-value-whitelist': null,

    // specify a blacklist of disallowed functions
    'function-blacklist': null,

    // disallow scheme-relative urls
    'function-url-no-scheme-relative': true,

    // specify a blacklist of disallowed url schemes
    'function-url-scheme-blacklist': null,

    // specify a whitelist of allowed url schemes
    'function-url-scheme-whitelist': ['http', 'https'],

    // specify a whitelist of allowed functions
    'function-whitelist': null,

    // specify a blacklist of disallowed media feature names
    'media-feature-name-blacklist': null,

    // disallow vendor prefixes for media feature names
    'media-feature-name-no-vendor-prefix': true,

    // specify a whitelist of allowed media feature names
    'media-feature-name-whitelist': null,

    // limit the number of decimal places allowed in numbers
    'number-max-precision': null,

    // specify a blacklist of disallowed properties
    'property-blacklist': null,

    // disallow vendor prefixes for properties
    'property-no-vendor-prefix': true,

    // specify a whitelist of allowed properties
    'property-whitelist': null,

    // specify a blacklist of disallowed attribute operators
    'selector-attribute-operator-blacklist': null,

    // specify a whitelist of allowed attribute operators
    'selector-attribute-operator-whitelist': null,

    // specify a pattern for class selectors
    'selector-class-pattern': null,

    // specify a pattern for id selectors
    'selector-id-pattern': null,

    // limit the number of attribute selectors in a selector
    'selector-max-attribute': null,

    // limit the number of classes in a selector
    'selector-max-class': null,

    // limit the number of combinators in a selector
    'selector-max-combinators': null,

    // limit the number of compound selectors in a selector
    'selector-max-compound-selectors': 3,

    // limit the number of adjacent empty lines within selectors
    'selector-max-empty-lines': 0,

    // limit the number of id selectors in a selector
    'selector-max-id': 0,

    // limit the specificity of selectors
    'selector-max-specificity': '0,4,0',

    // limit the number of type in a selector
    'selector-max-type': null,

    // limit the number of universal selectors in a selector
    'selector-max-universal': null,

    // specify a pattern for the selectors of rules nested within rules
    'selector-nested-pattern': null,

    // disallow qualifying a selector by type
    'selector-no-qualifying-type': true,

    // disallow vendor prefixes for selectors
    'selector-no-vendor-prefix': true,

    // specify a blacklist of disallowed pseudo-class selectors
    'selector-pseudo-class-blacklist': null,

    // specify a whitelist of allowed pseudo-class selectors
    'selector-pseudo-class-whitelist': null,

    // specify the minimum number of milliseconds for time values
    'time-min-milliseconds': 100,

    // specify a blacklist of disallowed units
    'unit-blacklist': ['px'],

    // specify a whitelist of allowed units
    'unit-whitelist': null,

    // disallow vendor prefixes for values
    'value-no-vendor-prefix': true,
  },
};

'use strict';

module.exports = {
  rules: {
    // specify a blacklist of disallowed at-rules
    'at-rule-blacklist': ['extend'],

    // require or disallow an empty line before at-rules
    'at-rule-empty-line-before': ['always', {
      except: ['blockless-after-same-name-blockless', 'first-nested'],
      ignore: ['after-comment'],
    }],

    // specify lowercase or uppercase for at-rules names
    'at-rule-name-case': 'lower',

    // require a single space after at-rule names
    'at-rule-name-space-after': 'always-single-line',

    // disallow unknown at-rules
    'at-rule-no-unknown': true,

    // disallow vendor prefixes for at-rules
    'at-rule-no-vendor-prefix': true,

    // require a newline after the semicolon of at-rules
    'at-rule-semicolon-newline-after': 'always',

    // require or disallow an empty line before the closing brace of blocks
    'block-closing-brace-empty-line-before': 'never',

    // require a newline or disallow whitespace after the closing brace of blocks
    'block-closing-brace-newline-after': 'always',

    // require a newline or disallow whitespace before the closing brace of blocks
    'block-closing-brace-newline-before': 'always-multi-line',

    // require a single space or disallow whitespace before the closing brace of blocks
    'block-closing-brace-space-before': 'always-single-line',

    // disallow empty blocks
    'block-no-empty': true,

    // require a newline after the opening brace of blocks
    'block-opening-brace-newline-after': 'always-multi-line',

    // require a single space or disallow whitespace after the opening brace of blocks
    'block-opening-brace-space-after': 'always-single-line',

    // require a single space or disallow whitespace before the opening brace of blocks
    'block-opening-brace-space-before': 'always',

    // specify lowercase or uppercase for hex colors
    'color-hex-case': 'lower',

    // specify short or long notation for hex colors
    'color-hex-length': 'short',

    // require (where possible) or disallow named colors
    'color-named': 'never',

    // disallow invalid hex colors
    'color-no-invalid-hex': true,

    // require or disallow an empty line before comments
    'comment-empty-line-before': ['always', {
      except: ['first-nested'],
      ignore: ['stylelint-commands'],
    }],

    // disallow empty comments
    'comment-no-empty': true,

    // require or disallow whitespace on the inside of comment markers
    'comment-whitespace-inside': 'always',

    // require or disallow an empty line before custom properties
    'custom-property-empty-line-before': ['always', {
      except: ['after-custom-property', 'first-nested'],
      ignore: ['after-comment', 'inside-single-line-block'],
    }],

    // require a single space or disallow whitespace after the bang of declarations
    'declaration-bang-space-after': 'never',

    // require a single space or disallow whitespace before the bang of declarations
    'declaration-bang-space-before': 'always',

    // disallow duplicate properties within declaration blocks
    'declaration-block-no-duplicate-properties': [true, {
      ignore: ['consecutive-duplicates-with-different-values'],
    }],

    // disallow longhand properties that can be combined into one shorthand property
    'declaration-block-no-redundant-longhand-properties': true,

    // disallow shorthand properties that override related longhand properties within declaration blocks
    'declaration-block-no-shorthand-property-overrides': true,

    // require a newline or disallow whitespace after the semicolons of declaration blocks
    'declaration-block-semicolon-newline-after': 'always',

    // require a single space or disallow whitespace before the semicolons of declaration blocks
    'declaration-block-semicolon-space-before': 'never',

    // limit the number of declaration within single line declaration blocks
    'declaration-block-single-line-max-declarations': 1,

    // require or disallow a trailing semicolon within declaration blocks
    'declaration-block-trailing-semicolon': 'always',

    // require a newline or disallow whitespace after the colon of declarations
    'declaration-colon-newline-after': 'always-multi-line',

    // require a single space or disallow whitespace after the colon of declarations
    'declaration-colon-space-after': 'always-single-line',

    // require a single space or disallow whitespace before the colon of declarations
    'declaration-colon-space-before': 'never',

    // require or disallow an empty line before declarations
    'declaration-empty-line-before': ['always', {
      except: ['after-declaration', 'first-nested'],
      ignore: ['after-comment', 'inside-single-line-block'],
    }],

    // disallow !important within declarations
    'declaration-no-important': true,

    // specify a blacklist of disallowed property and value pairs within declarations
    'declaration-property-value-blacklist': {
      '/.+/': ['initial'],
      '/^background/': ['http:', 'https:'],
      '/^border/': ['none'],
      '/^transition/': ['/all/'],
    },

    // specify whether or not quotation marks should be used around font family names
    'font-family-name-quotes': 'always-where-recommended',

    // disallow duplicate font family names
    'font-family-no-duplicate-names': true,

    // disallow an unspaced operator within calc functions
    'function-calc-no-unspaced-operator': true,

    // require a newline or disallow whitespace after the commas of functions
    'function-comma-newline-after': 'always-multi-line',

    // require a single space or disallow whitespace after the commas of functions
    'function-comma-space-after': 'always-single-line',

    // require a single space or disallow whitespace before the commas of functions
    'function-comma-space-before': 'never',

    // disallow direction values in linear-gradient() calls that are not valid according to the standard syntax
    'function-linear-gradient-no-nonstandard-direction': true,

    // limit the number of adjacent empty lines within functions
    'function-max-empty-lines': 0,

    // specify lowercase or uppercase for function names
    'function-name-case': 'lower',

    // require a newline or disallow whitespace on the inside of the parentheses of functions
    'function-parentheses-newline-inside': 'always-multi-line',

    // require a single space or disallow whitespace on the inside of the parentheses of functions
    'function-parentheses-space-inside': 'never-single-line',

    // disallow scheme-relative urls
    'function-url-no-scheme-relative': true,

    // require or disallow quotes for urls
    'function-url-quotes': 'always',

    // require or disallow whitespace after functions
    'function-whitespace-after': 'always',

    // specify indentation
    'indentation': 2,

    // disallow !important within keyframe declarations
    'keyframe-declaration-no-important': true,

    // disallow units for zero lengths
    'length-zero-no-unit': true,

    // limit the number of adjacent empty lines
    'max-empty-lines': 1,

    // limit the length of a line
    'max-line-length': [119, {ignore: 'non-comments'}],

    // limit the depth of nesting
    'max-nesting-depth': 3,

    // require a single space or disallow whitespace after the colon in media features
    'media-feature-colon-space-after': 'always',

    // require a single space or disallow whitespace before the colon in media features
    'media-feature-colon-space-before': 'never',

    // specify lowercase or uppercase for media feature names
    'media-feature-name-case': 'lower',

    // disallow unknown media feature names
    'media-feature-name-no-unknown': true,

    // disallow vendor prefixes for media feature names
    'media-feature-name-no-vendor-prefix': true,

    // require a single space or disallow whitespace on the inside of the parentheses within media features
    'media-feature-parentheses-space-inside': 'never',

    // require a single space or disallow whitespace after the range operator in media features
    'media-feature-range-operator-space-after': 'always',

    // require a single space or disallow whitespace before the range operator in media features
    'media-feature-range-operator-space-before': 'always',

    // require a newline or disallow whitespace after the commas of media query lists
    'media-query-list-comma-newline-after': 'always-multi-line',

    // require a single space or disallow whitespace after the commas of media query lists
    'media-query-list-comma-space-after': 'always-single-line',

    // require a single space or disallow whitespace before the commas of media query lists
    'media-query-list-comma-space-before': 'never',

    // disallow duplicate selectors
    'no-duplicate-selectors': true,

    // disallow empty sources
    'no-empty-source': true,

    // disallow end-of-line whitespace
    'no-eol-whitespace': true,

    // disallow extra semicolons
    'no-extra-semicolons': true,

    // disallow double-slash comments (//...) which are not supported by CSS
    'no-invalid-double-slash-comments': true,

    // disallow missing end-of-source newlines
    'no-missing-end-of-source-newline': true,

    // disallow unknown animations
    'no-unknown-animations': true,

    // require or disallow a leading zero for fractional numbers less than 1
    'number-leading-zero': 'never',

    // disallow trailing zeros in numbers
    'number-no-trailing-zeros': true,

    // specify lowercase or uppercase for properties
    'property-case': 'lower',

    // disallow unknown properties
    'property-no-unknown': true,

    // disallow vendor prefixes for properties
    'property-no-vendor-prefix': true,

    // require or disallow an empty line before rules
    'rule-empty-line-before': ['always-multi-line', {
      except: ['first-nested'],
      ignore: ['after-comment'],
    }],

    // require a single space or disallow whitespace on the inside of the brackets within attribute selectors
    'selector-attribute-brackets-space-inside': 'never',

    // require a single space or disallow whitespace after operators within attribute selectors
    'selector-attribute-operator-space-after': 'never',

    // require a single space or disallow whitespace before operators within attribute selectors
    'selector-attribute-operator-space-before': 'never',

    // require a single space or disallow whitespace after the combinators of selectors
    'selector-combinator-space-after': 'always',

    // require a single space or disallow whitespace before the combinators of selectors
    'selector-combinator-space-before': 'always',

    // disallow non-space characters for descendant combinators of selectors
    'selector-descendant-combinator-no-non-space': true,

    // require a newline or disallow whitespace after the commas of selector lists
    'selector-list-comma-newline-after': 'always',

    // require a single space or disallow whitespace before the commas of selector lists
    'selector-list-comma-space-before': 'never',

    // limit the number of compound selectors in a selector
    'selector-max-compound-selectors': 3,

    // limit the number of adjacent empty lines within selectors
    'selector-max-empty-lines': 0,

    // limit the specificity of selectors
    'selector-max-specificity': '0,4,0',

    // disallow vendor prefixes for selectors
    'selector-no-vendor-prefix': true,

    // specify lowercase or uppercase for pseudo-class selectors
    'selector-pseudo-class-case': 'lower',

    // disallow unknown pseudo-class selectors
    'selector-pseudo-class-no-unknown': true,

    // require a single space or disallow whitespace on the inside of the parentheses within pseudo-class selectors
    'selector-pseudo-class-parentheses-space-inside': 'never',

    // specify lowercase or uppercase for pseudo-element selectors
    'selector-pseudo-element-case': 'lower',

    // specify single or double colon notation for applicable pseudo-elements
    'selector-pseudo-element-colon-notation': 'double',

    // disallow unknown pseudo-element selectors
    'selector-pseudo-element-no-unknown': true,

    // specify lowercase or uppercase for type selector
    'selector-type-case': 'lower',

    // disallow unknown type selectors
    'selector-type-no-unknown': true,

    // disallow redundant values in shorthand properties
    'shorthand-property-no-redundant-values': true,

    // disallow (unescaped) newlines in strings
    'string-no-newline': true,

    // specify single or double quotes around strings
    'string-quotes': 'double',

    // specify the minimum number of milliseconds for time values
    'time-min-milliseconds': 100,

    // specify lowercase or uppercase for units
    'unit-case': 'lower',

    // disallow unknown units
    'unit-no-unknown': true,

    // specify lowercase or uppercase for keywords values
    'value-keyword-case': 'lower',

    // require a newline or disallow whitespace after the commas of value lists
    'value-list-comma-newline-after': 'always-multi-line',

    // require a single space or disallow whitespace after the commas of value lists
    'value-list-comma-space-after': 'always-single-line',

    // require a single space or disallow whitespace before the commas of value lists
    'value-list-comma-space-before': 'never',

    // limit the number of adjacent empty lines within value lists
    'value-list-max-empty-lines': 0,

    // disallow vendor prefixes for values
    'value-no-vendor-prefix': true,
  },
};

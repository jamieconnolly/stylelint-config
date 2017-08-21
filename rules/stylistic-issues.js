'use strict';

module.exports = {
  rules: {
    // require or disallow an empty line before at-rules
    'at-rule-empty-line-before': ['always', {
      except: ['blockless-after-same-name-blockless', 'first-nested'],
      ignore: ['after-comment'],
      ignoreAtRules: ['else'],
    }],

    // specify lowercase or uppercase for at-rules names
    'at-rule-name-case': 'lower',

    // require a newline after at-rule names
    'at-rule-name-newline-after': 'always-multi-line',

    // require a single space after at-rule names
    'at-rule-name-space-after': 'always-single-line',

    // require a newline after the semicolon of at-rules
    'at-rule-semicolon-newline-after': 'always',

    // require a single space or disallow whitespace before the semicolons of at rules
    'at-rule-semicolon-space-before': 'never',

    // require or disallow an empty line before the closing brace of blocks
    'block-closing-brace-empty-line-before': 'never',

    // require a newline or disallow whitespace after the closing brace of blocks
    'block-closing-brace-newline-after': ['always', {
      ignoreAtRules: ['else', 'if'],
    }],

    // require a newline or disallow whitespace before the closing brace of blocks
    'block-closing-brace-newline-before': 'always-multi-line',

    // require a single space or disallow whitespace after the closing brace of blocks
    'block-closing-brace-space-after': null,

    // require a single space or disallow whitespace before the closing brace of blocks
    'block-closing-brace-space-before': 'always-single-line',

    // require a newline after the opening brace of blocks
    'block-opening-brace-newline-after': 'always-multi-line',

    // require a newline or disallow whitespace before the opening brace of blocks
    'block-opening-brace-newline-before': null,

    // require a single space or disallow whitespace after the opening brace of blocks
    'block-opening-brace-space-after': 'always-single-line',

    // require a single space or disallow whitespace before the opening brace of blocks
    'block-opening-brace-space-before': 'always',

    // specify lowercase or uppercase for hex colors
    'color-hex-case': 'lower',

    // specify short or long notation for hex colors
    'color-hex-length': 'short',

    // require or disallow an empty line before comments
    'comment-empty-line-before': ['always', {
      except: ['first-nested'],
      ignore: ['stylelint-commands'],
    }],

    // require or disallow whitespace on the inside of comment markers
    'comment-whitespace-inside': 'always',

    // require or disallow an empty line before custom properties
    'custom-property-empty-line-before': ['always', {
      except: ['after-comment', 'after-custom-property', 'first-nested'],
      ignore: ['inside-single-line-block'],
    }],

    // require a single space or disallow whitespace after the bang of declarations
    'declaration-bang-space-after': 'never',

    // require a single space or disallow whitespace before the bang of declarations
    'declaration-bang-space-before': 'always',

    // require a newline or disallow whitespace after the semicolons of declaration blocks
    'declaration-block-semicolon-newline-after': 'always-multi-line',

    // require a newline or disallow whitespace before the semicolons of declaration blocks
    'declaration-block-semicolon-newline-before': 'never-multi-line',

    // require a single space or disallow whitespace after the semicolons of declaration blocks
    'declaration-block-semicolon-space-after': 'always-single-line',

    // require a single space or disallow whitespace before the semicolons of declaration blocks
    'declaration-block-semicolon-space-before': 'never',

    // require or disallow a trailing semicolon within declaration blocks
    'declaration-block-trailing-semicolon': 'always',

    // require a newline or disallow whitespace after the colon of declarations
    'declaration-colon-newline-after': 'always-multi-line',

    // require a single space or disallow whitespace after the colon of declarations
    'declaration-colon-space-after': 'always-single-line',

    // require a single space or disallow whitespace before the colon of declarations
    'declaration-colon-space-before': 'never',

    // require or disallow an empty line before declarations
    'declaration-empty-line-before': ['never', {
      ignore: ['after-declaration', 'inside-single-line-block'],
    }],

    // specify whether or not quotation marks should be used around font family names
    'font-family-name-quotes': 'always-where-recommended',

    // require numeric or named (where possible) font-weight values
    'font-weight-notation': 'numeric',

    // require a newline or disallow whitespace after the commas of functions
    'function-comma-newline-after': 'always-multi-line',

    // require a newline or disallow whitespace before the commas of functions
    'function-comma-newline-before': null,

    // require a single space or disallow whitespace after the commas of functions
    'function-comma-space-after': 'always-single-line',

    // require a single space or disallow whitespace before the commas of functions
    'function-comma-space-before': 'never',

    // limit the number of adjacent empty lines within functions
    'function-max-empty-lines': 0,

    // specify lowercase or uppercase for function names
    'function-name-case': 'lower',

    // require a newline or disallow whitespace on the inside of the parentheses of functions
    'function-parentheses-newline-inside': 'always-multi-line',

    // require a single space or disallow whitespace on the inside of the parentheses of functions
    'function-parentheses-space-inside': 'never-single-line',

    // require or disallow quotes for urls
    'function-url-quotes': 'always',

    // require or disallow whitespace after functions
    'function-whitespace-after': 'always',

    // specify indentation
    'indentation': 2,

    // disallow units for zero lengths
    'length-zero-no-unit': true,

    // limit the number of adjacent empty lines
    'max-empty-lines': 1,

    // limit the length of a line
    'max-line-length': 119,

    // require a single space or disallow whitespace after the colon in media features
    'media-feature-colon-space-after': 'always',

    // require a single space or disallow whitespace before the colon in media features
    'media-feature-colon-space-before': 'never',

    // specify lowercase or uppercase for media feature names
    'media-feature-name-case': 'lower',

    // require a single space or disallow whitespace on the inside of the parentheses within media features
    'media-feature-parentheses-space-inside': 'never',

    // require a single space or disallow whitespace after the range operator in media features
    'media-feature-range-operator-space-after': 'always',

    // require a single space or disallow whitespace before the range operator in media features
    'media-feature-range-operator-space-before': 'always',

    // require a newline or disallow whitespace after the commas of media query lists
    'media-query-list-comma-newline-after': 'always-multi-line',

    // require a newline or disallow whitespace before the commas of media query lists
    'media-query-list-comma-newline-before': 'never-multi-line',

    // require a single space or disallow whitespace after the commas of media query lists
    'media-query-list-comma-space-after': 'always-single-line',

    // require a single space or disallow whitespace before the commas of media query lists
    'media-query-list-comma-space-before': 'never',

    // disallow end-of-line whitespace
    'no-eol-whitespace': true,

    // disallow missing end-of-source newlines
    'no-missing-end-of-source-newline': true,

    // require or disallow a leading zero for fractional numbers less than 1
    'number-leading-zero': 'always',

    // disallow trailing zeros in numbers
    'number-no-trailing-zeros': true,

    // specify lowercase or uppercase for properties
    'property-case': 'lower',

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

    // require or disallow quotes for attribute values
    'selector-attribute-quotes': 'always',

    // require a single space or disallow whitespace after the combinators of selectors
    'selector-combinator-space-after': 'always',

    // require a single space or disallow whitespace before the combinators of selectors
    'selector-combinator-space-before': 'always',

    // disallow non-space characters for descendant combinators of selectors
    'selector-descendant-combinator-no-non-space': true,

    // require a newline or disallow whitespace after the commas of selector lists
    'selector-list-comma-newline-after': 'always',

    // require a newline or disallow whitespace before the commas of selector lists
    'selector-list-comma-newline-before': null,

    // require a single space or disallow whitespace after the commas of selector lists
    'selector-list-comma-space-after': 'always-single-line',

    // require a single space or disallow whitespace before the commas of selector lists
    'selector-list-comma-space-before': 'never',

    // specify lowercase or uppercase for pseudo-class selectors
    'selector-pseudo-class-case': 'lower',

    // require a single space or disallow whitespace on the inside of the parentheses within pseudo-class selectors
    'selector-pseudo-class-parentheses-space-inside': 'never',

    // specify lowercase or uppercase for pseudo-element selectors
    'selector-pseudo-element-case': 'lower',

    // specify single or double colon notation for applicable pseudo-elements
    'selector-pseudo-element-colon-notation': 'double',

    // specify lowercase or uppercase for type selector
    'selector-type-case': 'lower',

    // specify single or double quotes around strings
    'string-quotes': 'double',

    // specify lowercase or uppercase for units
    'unit-case': 'lower',

    // specify lowercase or uppercase for keywords values
    'value-keyword-case': 'lower',

    // require a newline or disallow whitespace after the commas of value lists
    'value-list-comma-newline-after': 'always-multi-line',

    // require a newline or disallow whitespace before the commas of value lists
    'value-list-comma-newline-before': null,

    // require a single space or disallow whitespace after the commas of value lists
    'value-list-comma-space-after': 'always-single-line',

    // require a single space or disallow whitespace before the commas of value lists
    'value-list-comma-space-before': 'never',

    // limit the number of adjacent empty lines within value lists
    'value-list-max-empty-lines': 0,
  },
};

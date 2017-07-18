'use strict';

module.exports = {
  plugins: [
    'stylelint-scss',
  ],
  rules: {
    // require or disallow a newline after the closing brace of @else statements
    'scss/at-else-closing-brace-newline-after': 'always-last-in-chain',

    // require a single space or disallow whitespace after the closing brace of @else statements
    'scss/at-else-closing-brace-space-after': 'always-intermediate',

    // require an empty line or disallow empty lines before @-else
    'scss/at-else-empty-line-before': 'never',

    // disallow at-extends (@extend) with missing placeholders
    'scss/at-extend-no-missing-placeholder': true,

    // specify a pattern for Sass/SCSS-like function names
    'scss/at-function-pattern': null,

    // require or disallow a newline after the closing brace of @if statements
    'scss/at-if-closing-brace-newline-after': 'always-last-in-chain',

    // require a single space or disallow whitespace after the closing brace of @if statements
    'scss/at-if-closing-brace-space-after': 'always-intermediate',

    // disallow leading underscore in partial names in @import
    'scss/at-import-no-partial-leading-underscore': true,

    // specify blacklist of disallowed file extensions for partial names in @import commands
    'scss/at-import-partial-extension-blacklist': ['scss'],

    // specify whitelist of allowed file extensions for partial names in @import commands
    'scss/at-import-partial-extension-whitelist': null,

    // require or disallow parentheses in argumentless @mixin calls
    'scss/at-mixin-argumentless-call-parentheses': 'always',

    // specify a pattern for Sass/SCSS-like mixin names
    'scss/at-mixin-pattern': null,

    // require or disallow properties with - in their names to be in a form of a nested group
    'scss/declaration-nested-properties': 'never',

    // disallow nested properties of the same "namespace" be divided into multiple groups
    'scss/declaration-nested-properties-no-divided-groups': true,

    // require a newline after the colon in $-variable declarations
    'scss/dollar-variable-colon-newline-after': null,

    // require a single space or disallow whitespace after the colon in $-variable declarations
    'scss/dollar-variable-colon-space-after': 'always-single-line',

    // require a single space or disallow whitespace before the colon in $-variable declarations
    'scss/dollar-variable-colon-space-before': 'never',

    // require a single empty line or disallow empty lines before $-variable declarations
    'scss/dollar-variable-empty-line-before': ['always', {
      except: ['after-dollar-variable', 'first-nested'],
      ignore: ['after-comment', 'inside-single-line-block'],
    }],

    // disallow Sass variables that are used without interpolation with CSS features that use custom identifiers
    'scss/dollar-variable-no-missing-interpolation': true,

    // specify a pattern for Sass-like variables
    'scss/dollar-variable-pattern': null,

    // require or disallow an empty line before //-comments
    'scss/double-slash-comment-empty-line-before': ['always', {
      except: ['first-nested'],
      ignore: ['between-comments', 'stylelint-commands'],
    }],

    // require or disallow //-comments to be inline comments
    'scss/double-slash-comment-inline': null,

    // require or disallow whitespace after the // in //-comments
    'scss/double-slash-comment-whitespace-inside': 'always',

    // require a media feature value be a $-variable or disallow $-variables in media feature values
    'scss/media-feature-value-dollar-variable': null,

    // disallow linebreaks after Sass operators
    'scss/operator-no-newline-after': true,

    // disallow linebreaks before Sass operators
    'scss/operator-no-newline-before': true,

    // disallow unspaced operators in Sass operations
    'scss/operator-no-unspaced': true,

    // disallow non-CSS @imports in partial files
    'scss/partial-no-import': true,

    // specify a pattern for %-placeholders
    'scss/percent-placeholder-pattern': null,

    // disallow redundant nesting selectors (&)
    'scss/selector-no-redundant-nesting-selector': true,
  },
};

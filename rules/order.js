'use strict';

module.exports = {
  plugins: [
    'stylelint-order',
  ],
  rules: {
    // specify the order of content within declaration blocks
    'order/order': [
      'custom-properties',
      'dollar-variables',
      'at-variables',
      'declarations',
      'rules',
      'at-rules',
      'less-mixins',
    ],

    // specify the alphabetical order of properties within declaration blocks.
    'order/properties-alphabetical-order': null,

    // specify the almost strict order of properties within declaration blocks
    'order/properties-order': [
      [
        // Content
        {
          properties: [
            'content',
            'quotes',
          ],
        },
        // Position
        {
          properties: [
            'position',
            'z-index',
            'top',
            'right',
            'bottom',
            'left',
          ],
        },
        // Display
        {
          properties: [
            'display',
            'opacity',
            'visibility',
          ],
        },
        // Transform
        {
          properties: [
            'backface-visibility',

            'perspective',
            'perspective-origin',

            'transform',
            'transform-origin',
            'transform-style',

            'transition',
            'transition-delay',
            'transition-duration',
            'transition-property',
            'transition-timing-function',
          ],
        },
        // Animation
        {
          properties: [
            'animation',
            'animation-delay',
            'animation-direction',
            'animation-duration',
            'animation-fill-mode',
            'animation-iteration-count',
            'animation-name',
            'animation-play-state',
            'animation-timing-function',
          ],
        },
        // Layout
        {
          properties: [
            'flex',
            'flex-basis',
            'flex-direction',
            'flex-flow',
            'flex-grow',
            'flex-shrink',
            'flex-wrap',
            'align-content',
            'align-items',
            'align-self',
            'justify-content',
            'order',

            'grid',
            'grid-area',
            'grid-auto-columns',
            'grid-auto-flow',
            'grid-auto-rows',
            'grid-column',
            'grid-column-end',
            'grid-column-gap',
            'grid-column-start',
            'grid-gap',
            'grid-row',
            'grid-row-end',
            'grid-row-gap',
            'grid-row-start',
            'grid-template',
            'grid-template-areas',
            'grid-template-columns',
            'grid-template-rows',

            'float',
            'clear',
          ],
        },
        // Clipping
        {
          properties: [
            'overflow',
            'overflow-x',
            'overflow-y',

            'clip',
            'clip-path',
            'zoom',
          ],
        },
        // Box
        {
          properties: [
            'box-sizing',

            'width',
            'min-width',
            'max-width',
            'height',
            'min-height',
            'max-height',

            'margin',
            'margin-top',
            'margin-right',
            'margin-bottom',
            'margin-left',

            'padding',
            'padding-top',
            'padding-right',
            'padding-bottom',
            'padding-left',
          ],
        },
        // Element-specific
        {
          properties: [
            'columns',
            'column-count',
            'column-fill',
            'column-gap',
            'column-rule',
            'column-rule-color',
            'column-rule-style',
            'column-rule-width',
            'column-span',
            'column-width',

            'table-layout',
            'empty-cells',
            'caption-side',
            'border-spacing',
            'border-collapse',

            'list-style',
            'list-style-image',
            'list-style-position',
            'list-style-type',
          ],
        },
        // Border
        {
          properties: [
            'border',
            'border-color',
            'border-image',
            'border-image-outset',
            'border-image-repeat',
            'border-image-slice',
            'border-image-source',
            'border-image-width',
            'border-radius',
            'border-style',
            'border-width',

            'border-top',
            'border-top-color',
            'border-top-left-radius',
            'border-top-right-radius',
            'border-top-style',
            'border-top-width',

            'border-right',
            'border-right-color',
            'border-right-style',
            'border-right-width',

            'border-bottom',
            'border-bottom-color',
            'border-bottom-left-radius',
            'border-bottom-right-radius',
            'border-bottom-style',
            'border-bottom-width',

            'border-left',
            'border-left-color',
            'border-left-style',
            'border-left-width',

            'outline',
            'outline-color',
            'outline-offset',
            'outline-style',
            'outline-width',
          ],
        },
        // Background
        {
          properties: [
            'background',
            'background-attachment',
            'background-blend-mode',
            'background-clip',
            'background-color',
            'background-image',
            'background-origin',
            'background-position',
            'background-repeat',
            'background-size',

            'box-shadow',
            'fill',
          ],
        },
        // Text
        {
          properties: [
            'font',
            'font-family',
            'font-feature-settings',
            'font-kerning',
            'font-size',
            'font-size-adjust',
            'font-smoothing',
            'font-stretch',
            'font-style',
            'font-variant',
            'font-weight',

            'letter-spacing',
            'line-height',

            'color',

            'text-align',
            'text-align-last',
            'text-decoration',
            'text-decoration-color',
            'text-decoration-line',
            'text-decoration-style',
            'text-emphasis',
            'text-emphasis-color',
            'text-emphasis-position',
            'text-emphasis-style',
            'text-indent',
            'text-justify',
            'text-overflow',
            'text-rendering',
            'text-shadow',
            'text-transform',
            'text-wrap',

            'hyphens',
            'vertical-align',
            'white-space',
            'word-break',
            'word-spacing',
            'word-wrap',
          ],
        },
      ], {
        unspecified: 'bottomAlphabetical',
      },
    ],
  },
};

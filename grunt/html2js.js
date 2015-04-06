'use strict';

module.exports = function(grunt) {
  return {
    options: {
      base: 'client/src',
      module: 'markup',
      rename: function(name) {
        return '/' + name;
      },
      htmlmin: {
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        removeComments: true
      }
    },
    main: {
      src: ['client/src/**/*.html'],
      dest: 'public/js/markup.js'
    },
  };
};

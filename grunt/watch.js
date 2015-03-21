'use strict';

module.exports = function(grunt) {
  return {
    assets: {
        files: ['bower_components/**/*','client/assets/**/*','client/index.html'],
        tasks: 'copy'
    },
    lessfiles: {
      files: ['client/src/**/*.less'],
      tasks: 'less'
    },
    templates: {
      files: ['client/src/**/*.html'],
      tasks: 'html2js'
    },
    appfiles: {
      files: ['client/src/**/*.js'],
      tasks: ['jshint','browserify']
    },
  };
};

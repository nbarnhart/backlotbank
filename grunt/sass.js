'use strict';

module.exports = function(grunt) {
  return {
    dev: {
      files: {
        'public/style/main.css': 'client/style/main.scss'
      }
    },
    dev2: {
      files: {
        'public/style/hey.css': 'client/src/**/*.scss'
      }
    }
  };
};

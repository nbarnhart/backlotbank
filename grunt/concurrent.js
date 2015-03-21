'use strict';

module.exports = function(grunt) {
  return {
    options: {
      logConcurrentOutput: true
    },
    target1: ['nodemon', 'watch']
  };
};

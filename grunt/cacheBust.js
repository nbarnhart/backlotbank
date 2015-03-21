'use strict';

module.exports = function(grunt) {

  return {
    options: {
      encoding: 'utf8',
      algorithm: 'md5',
      length: 16,
      dir: ''
    },
    assets: {
      files: [{
        src: ['public/index.html']
      }]
    }
  };
};


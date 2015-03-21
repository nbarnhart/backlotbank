'use strict';

module.exports = function(grunt) {
    return {
      options: {
        base: 'public/'
      },
      webserver: {
        options: {
          port: 8888,
          keepalive: true
        }
      },
      devserver: {
        options: {
          port: 8888
        }
      },
      testserver: {
        options: {
          port: 9000
        }
      },
      ////TODO
      //coverage: {
      //  options: {
      //    base: 'coverage/',
      //    port: 5555,
      //    keepalive: true
      //  }
      //}
    };
};

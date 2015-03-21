"use strict";

module.exports = function(grunt) {

    //TODO: Load from a config.json, to set up endpoints for dev/prod, etc.
    grunt.config('builddir', 'public');
    grunt.config('appdir', 'client');
    grunt.config('srcdir', 'client/src');
    grunt.config('appvendor', 'client/vendor');

    require('load-grunt-config')(grunt);

};


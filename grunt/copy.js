'use strict';

module.exports = function(grunt) {
    return {
        index: {
            src: grunt.config('appdir') + '/index.html',
            dest: 'public/index.html'
        },
        assets: {
            expand: true,
            cwd: 'client/assets/',
            src: ['**'],
            dest: 'public/'
        },
        angular: {
            src: 'bower_components/angular/angular.min.js',
            dest: 'public/js/angular.min.js'
        },
        angularMap: {
            src: 'bower_components/angular/angular.min.js.map',
            dest: 'public/js/angular.min.js.map'
        },
        angularResource: {
            src: 'bower_components/angular-resource/angular-resource.min.js',
            dest: 'public/js/angular-resource.min.js'
        },
        angularResourceMap: {
            src: 'bower_components/angular-resource/angular-resource.min.js.map',
            dest: 'public/js/angular-resource.min.js.map'
        },
        uiRouter: {
            src: 'bower_components/angular-ui-router/release/angular-ui-router.min.js',
            dest: 'public/js/angular-ui-router.min.js'
        },
        angularAnimate: {
            src: 'bower_components/angular-animate/angular-animate.min.js',
            dest: 'public/js/angular-animate.min.js'
        }
    };
};

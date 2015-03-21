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
        ngSanitize: {
            src: 'bower_components/angular-sanitize/angular-sanitize.js',
            dest: 'public/js/angular-sanitize.js'
        },
        angularMotion: {
            src: 'bower_components/angular-motion/dist/angular-motion.min.css',
            dest: 'public/vendor/angular-motion.min.css'
        },
        rangyCore: {
            src: 'bower_components/rangy-official/rangy-core.min.js',
            dest: 'public/vendor/rangy-official/rangy-core.min.js'
        },
        rangySelectionSaveRestore: {
            src: 'bower_components/rangy-official/rangy-selectionsaverestore.min.js',
            dest: 'public/vendor/rangy-official/rangy-selectionsaverestore.min.js'
        },
        textAngular: {
            src: 'bower_components/textAngular/dist/textAngular.min.js',
            dest: 'public/vendor/textAngular/textAngular.min.js'
        },
        textAngularSanitize: {
            src: 'bower_components/textAngular/dist/textAngular-sanitize.min.js',
            dest: 'public/vendor/textAngular/textAngular-sanitize.min.js'
        },
        flowStandalone: {
            src: 'bower_components/ng-flow/dist/ng-flow-standalone.min.js',
            dest: 'public/vendor/ng-flow/ng-flow-standalone.min.js'
        }

        //angularAnimate: {
        //    src: 'bower_components/angular-animate/angular-animate.js',
        //    dest: 'public/js/angular-animate.js'
        //}
        //angularmap: {
        //    src: 'node_modules/angular/lib/angular.min.js.map',
        //    dest: 'public/js/angular.min.js.map'
        //},
    };
};

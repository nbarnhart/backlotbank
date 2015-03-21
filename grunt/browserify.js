'use strict';

module.exports = function(grunt) {
    return {
        app: {
            options: {
                exclude: ['angular','ui-router'],
                ignore: ['angular','ui-router'],
                alias: [
                    //'./node_modules/angular/lib/angular.min.js:angular',
                    //'./bower_components/angular/angular.min.js:angular',
                    //'./bower_components/angular-resource/angular-resource.js:angular-resource',
                    //'./node_modules/ui-router/release/angular-ui-router.js:ui-router',
                    //'./bower_components/angular-ui-router/release/angular-ui-router.js:ui-router',
                    './node_modules/lodash/dist/lodash.js:lodash'
                ]
            },
            src: ['client/src/app.js'],
            dest: 'public/js/app.js'
        }
    };

};

'use strict';

module.exports = {
    "default": ['build'],
    build: [
        'clean',
        'jshint',
        //'mochacli',
        'copy',
        'loopback_sdk_angular',
        'browserify',
        'html2js',
        'less'
    ],
    dev: [
        'clean',
        'jshint',
        //'mochacli',
        'copy',
        'loopback_sdk_angular',
        'browserify',
        'html2js',
        'less',
        'watch'
    ]
};

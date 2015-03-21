'use strict';

module.exports = function(grunt) {
    return {
        prod: {
            options: {
                mangle: false,
                compress: true,
                preserveComments: false
            },
            files: [{
                expand: true,
                src: 'public/js/app.js',
                dst: 'public/js/app.js'
            },{
                expand: true,
                src: 'public/js/templates.js',
                dst: 'public/js/templates.js'
            },{
                expand: true,
                src: 'public/js/lb-services.js',
                dst: 'public/js/lb-services.js'
            }]
        }
    };
};


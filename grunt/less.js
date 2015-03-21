'use strict';

module.exports = function(grunt) {
    return {
        development: {
            options: {
                cleancss: true
            },
            files: {
                "public/plains.css": "client/src/**/*.less"
            }
        }
    };
};

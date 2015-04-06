'use strict';

module.exports = function(grunt) {
    return {
        development: {
            options: {
                cleancss: true
            },
            files: {
                "public/css/styles.css": "client/src/**/*.less"
            }
        }
    };
};

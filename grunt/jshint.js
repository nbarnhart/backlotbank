'use strict';

module.exports = function(grunt) {
    return {
        files: [
            "client/src/**/*.js",
            "common/models/*.js"
        ],
        options: {
            jshintrc: ".jshintrc"
        }
    };
};

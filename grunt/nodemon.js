'use strict';

module.exports = function(grunt) {
    return {
        dev: {
            cwd: __dirname,
            script: 'server/server.js',
            options: {
                watch: ['grunt']
            }
        }
    };
};

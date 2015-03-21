'use strict';

module.exports = function(grunt) {
    return {
        server: {
            options: {
                index: 'server/server.js',
                logDir: 'logs'
            }
        }

    };
};

'use strict';

module.exports = function(grunt) {
    return {
        services: {
            options: {
                input: 'server/server.js',
                output: 'public/js/lb-services.js'
            }
        }
    };
};

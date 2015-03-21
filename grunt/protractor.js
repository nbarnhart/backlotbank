'use strict';

module.exports = function(grunt) {
    return {
        options: {
            configFile: "test/protractor_conf.js", // Default config file
            keepAlive: true, // If false, the grunt process stops when the test fails.
            noColor: false, // If true, protractor will not use colors in its output.
            args: {
                // Arguments passed to the command
            },
            timeout: 30000, // in milliseconds
            suiteTimeout: 90000 // in milliseconds
        },
        dev: {
            options: {
                //configFile: "e2e.conf.js", // Target-specific config file
                //args: {} // Target-specific arguments
            }
        },
    };
};

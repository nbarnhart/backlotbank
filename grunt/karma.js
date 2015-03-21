'use strict';

module.exports = function(grunt) {
    return {
        unit: {
            configFile: 'test/karma-unit.conf.js',
            autoWatch: false,
            singleRun: true
        }
        /** Unused at this time:
        unit_auto: {
            configFile: './test/karma-unit.conf.js'
        },
        //// Using protractor instead:
        //e2e: {
        //    configFile: './test/karma-e2e.conf.js',
        //    autoWatch: false,
        //    singleRun: true
        //},
        //e2e_auto: {
        //    configFile: './test/karma-e2e.conf.js'
        //}
        */
    };
};

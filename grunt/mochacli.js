'use strict';

module.exports = function(grunt) {
    return {
        src: ["server/**/test/*-spec.js"],
        options: {
            timeout: 6000,
            "check-leaks": true,
            ui: "bdd",
            reporter: "spec"
        }
    };
};

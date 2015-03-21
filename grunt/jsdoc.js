'use strict';

module.exports = function(grunt) {
    return {
        "run": {
            "options": {
                "destination": "public/docs",
                "private": false,
                "templates": {
                    "cleverLinks": false,
                    "monospaceLinks": false,
                    "systemName": "pm-app",
                    "footer": "Plains Mobile",
                    "copyright": 2014
                }
            },
            "src": [
                "client/src/**/*.js"
                //"!client/loopback/lb-services.js"
            ]
        }
    };

};

'use strict';

module.exports = function(grunt) {
    return {
        "all": {
            "options": {
                "threshhold": 90,
                "timeout": 5000,
                "run": false,
                "log": true,
                "logErrors": true,
                "urls": [
                    "http://localhost:8080/tests/index.html"
                ],
                "reporter": "Spec"
            }
        }
    };
};

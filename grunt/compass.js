'use strict';

module.exports = function(grunt) {

    var config = {
        options: {
            cssDir: '../../public/css',
            noLineComments: true
        }
    };

    grunt.file.expand('client/src/*').forEach(function(path) {
        config[path] = { options: { sassDir: path } };
    });
    return config;
};


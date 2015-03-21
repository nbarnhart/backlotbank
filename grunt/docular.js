'use strict';

module.exports = function(grunt) {
    return {
        groups: [{
            groupTitle: 'LoopBack',
            groupId: 'loopback',
            sections: [{
                id: 'lbServices',
                title: 'LoopBack Services',
                scripts: [ 'public/js/lb-services.js' ]
            }]
        }]
    };
};

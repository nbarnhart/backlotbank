'use strict';

module.exports = (function() {

    var mod = angular.module('main', [ ]);

    mod.controller('MainCtrl', require('./main-ctrl'));

    return mod;

})();

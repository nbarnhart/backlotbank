'use strict';

module.exports = (function() {

    var mod = angular.module('main', [ ]);

    mod.controller('SubscribeCtrl', require('./subscribe-ctrl'));

    return mod;

})();

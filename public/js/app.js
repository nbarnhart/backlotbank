(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

//require('angular');

var app = angular.module('backlot-app', [
    'ui.router',
    'lbServices',
    'mgcrea.ngStrap',

    //Features
    require('./main/index').name,

    //Templates
    'markup',

]);

app.run(['$rootScope','$state','$location',function($rootScope,$state,$location){

}]);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('main', {
        url: '/',
        views: {
            '': {
                templateUrl: '/main/main.html',
            },
        }
    });

}]);



},{"./main/index":2}],2:[function(require,module,exports){
'use strict';

module.exports = (function() {

    var mod = angular.module('main', [ ]);

    mod.controller('SubscribeCtrl', require('./subscribe-ctrl'));

    return mod;

})();

},{"./subscribe-ctrl":3}],3:[function(require,module,exports){
'use strict';

module.exports = SubscribeCtrl;

SubscribeCtrl.$inject = [
    '$scope',
    'Scrape',
];

function SubscribeCtrl($scope,Scrape) {
    $scope.viewState = {
        subscribeEmail: '',
        scrapeEmail: '',
        username: '',
        password: '',
        selectedGuild: '',
        guildOptions: ['DGA','SAG-AFTRA','WGA'],
    };

    $scope.runScrape = function() {
        var scrape = new Scrape();
        scrape.$runScrape({
            data: {
                username: $scope.viewState.username,
                password: $scope.viewState.password,
                guild: $scope.viewState.selectedGuild,
                email: $scope.viewState.scrapeEmail,
            }
        });
    };
    $scope.subscribe = function() {
        //console.log('MLM: subscribing...',$scope.viewState.subscribeEmail);
    };
}


},{}]},{},[1]);

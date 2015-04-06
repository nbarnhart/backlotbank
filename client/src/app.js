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



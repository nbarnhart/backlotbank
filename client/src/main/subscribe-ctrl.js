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


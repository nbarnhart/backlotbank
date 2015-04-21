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
        selectedGuild: 'DGA',
        guildOptions: ['DGA'],
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
        var scrape = new Scrape();
        scrape.$runSubscribe({
            data: {
                email: $scope.viewState.subscribeEmail,
            }
        });
        //console.log('MLM: subscribing...',$scope.viewState.subscribeEmail);
    };
}


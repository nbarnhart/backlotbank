'use strict';

module.exports = SubscribeCtrl;

SubscribeCtrl.$inject = [
    '$scope',
    'Scrape',
    '$modal',
];

function SubscribeCtrl($scope,Scrape,$modal) {
    $scope.viewState = {
        subscribeEmail: '',
        scrapeEmail: '',
        username: '',
        password: '',
        selectedGuild: 'DGA',
        guildOptions: ['DGA'],
    };

    var errorModal = $modal({title: 'Error', content: 'There was an error submitting your information, please try again later!', show: false});
    var subscribeModal = $modal({title: 'Thank you', content: 'Thank you for subscribing!', show: false});
    var scrapeModal = $modal({title: 'Thank you', content: 'Thank you for submitting your information!', show: false});

    $scope.runScrape = function() {
        var scrape = new Scrape();
        scrape.$runScrape({
            data: {
                username: $scope.viewState.username,
                password: $scope.viewState.password,
                guild: $scope.viewState.selectedGuild,
                email: $scope.viewState.scrapeEmail,
            }
        }).then(function(result){
            scrapeModal.$promise.then(errorModal.show);
        },function(err){
            errorModal.$promise.then(errorModal.show);
        });
    };
    $scope.subscribe = function() {
        var scrape = new Scrape();
        scrape.$runSubscribe({
            data: {
                email: $scope.viewState.subscribeEmail,
            }
        }).then(function(result){
            subscribeModal.$promise.then(errorModal.show);
        },function(err){
            errorModal.$promise.then(errorModal.show);
        });
    };
}


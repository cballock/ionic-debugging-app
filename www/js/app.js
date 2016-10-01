// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('app', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
    .state('log', {
        url: "/log",
        templateUrl: "htmls/logView.html",
        controller: "logController"
    });

    $urlRouterProvider.otherwise("/log");
})

.service('logger', function() {
        
    var logs = [];

    this.log = function(message) {
        logs.push(message);
        console.log(message);
    }

    this.getLogs = function() {
        return logs; 
    }
})

.controller('logController', function($scope, logger) {
    $scope.logs = logger.getLogs();
})

.run(function($ionicPlatform, $rootScope, logger) {
    
    logger.log('Angular run() called.');
    
    $ionicPlatform.ready(function() {
        
        logger.log('Ionic ready() called.');
        
        if(window.cordova && window.cordova.plugins.Keyboard) {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

            // Don't remove this line unless you know what you are doing. It stops the viewport
            // from snapping when text inputs are focused. Ionic handles this internally for
            // a much nicer keyboard experience.
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if(window.StatusBar) {
            StatusBar.styleDefault();
        }
        $rootScope.$apply();
    });
});

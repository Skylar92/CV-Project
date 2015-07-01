var aboutMeModule = angular.module('application.aboutMe', []);

aboutMeModule.controller('aboutMeController',
    ['$scope', '$location', '$timeout', '$http', '$q', function ($scope, $location, $timeout) {
        
        $scope.callbackHome = function() {
            console.log('callback call');
        }

    }]);
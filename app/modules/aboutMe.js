var aboutMeModule = angular.module('application.aboutMe', []);

aboutMeModule.controller('aboutMeController', ['$scope', '$location', '$timeout', function ($scope, $location, $timeout) {

    document.title = 'About me';

    $scope.goBack = function(id) {
        //document.getElementById('backImage').classList.add('button-animation-back');
        document.getElementById(id).classList.add('content-animation-back');

        $timeout(function () {
            $location.path('/');
        }, 1000);
    }

}]);
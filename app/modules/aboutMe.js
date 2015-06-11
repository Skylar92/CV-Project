var aboutMeModule = angular.module('application.aboutMe', []);

aboutMeModule.controller('aboutMeController', ['$scope', '$location', '$timeout', function ($scope, $location, $timeout) {

    $scope.colorHeader = '#aa00ff';
    $scope.title = 'About me';

    $scope.data = [
        {
            id : 'banana',
            content : 'Banana',
            color : '#ab47bc'
        },
        {
            id : 'orange',
            content : 'Orange',
            color : '#ba68c8'
        },
        {
            id : 'apple',
            content : 'Apple',
            color : '#9c27b0'
        },
        {
            id : 'mango',
            content : 'Mango',
            color : '#7b1fa2'
        }
    ];

    document.title = $scope.title;

    if (document.getElementById('content-view') === null) {
        var content = new DeclarativeContent($scope.data, $scope.colorHeader, $scope.title);
        document.getElementById('created_content').appendChild(content);
    }

    $scope.goBack = function (id) {
        document.getElementById(id).classList.add('content-animation-back');

        $timeout(function () {
            $location.path('/');
        }, 1000);
    }

}]);
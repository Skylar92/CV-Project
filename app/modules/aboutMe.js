var aboutMeModule = angular.module('application.aboutMe', []);

aboutMeModule.controller('aboutMeController', ['$scope', '$location', '$timeout', function ($scope, $location, $timeout) {

    $scope.colorHeader = '#aa00ff';
    $scope.title = 'About me';

    $scope.data = [
        {
            id : 'banana',
            content : '<h1 style="color: #d6b7a9">Banana</h1>',
            color : '#ab47bc'
        },
        {
            id : 'orange',
            content : '<h1 style="color: #d6b7a9">Orange</h1>',
            color : '#ba68c8'
        },
        {
            id : 'apple',
            content : '<h1 style="color: #d6b7a9">Apple</h1>',
            color : '#9c27b0'
        },
        {
            id : 'mango',
            content : '<h1 style="color: #d6b7a9">Mango</h1>',
            color : '#7b1fa2'
        }
    ];

    document.title = $scope.title;

    if (document.getElementById('content-view') === null) {
        var content = new DeclarativeContent($scope.data, $scope.colorHeader, $scope.title);
        document.getElementById('created_content').appendChild(content);
    }

    document.getElementById('created_content').addEventListener('home', function(event) {
        $timeout(function () {
            $location.path('/');
        }, 1000);
    });
}]);
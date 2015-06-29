var aboutMeModule = angular.module('application.aboutMe', []);

aboutMeModule.controller('aboutMeController',
    ['$scope', '$location', '$timeout', '$http', '$q', function ($scope, $location, $timeout) {

        $scope.colorHeader = '#aa00ff';
        $scope.title = 'About me';

        $scope.fetchContent = function (url) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, false);
            xhr.send(null);
            return xhr.responseText;
        };


        $scope.data = [
            {
                id: 'banana',
                content: $scope.fetchContent('../app/templates/aboutMe/pages/aboutMe_1.html'),
                color: '#ab47bc'
            },
            {
                id: 'orange',
                content: $scope.fetchContent('../app/templates/aboutMe/pages/aboutMe_2.html'),
                color: '#ba68c8'
            },
            {
                id: 'apple',
                content: $scope.fetchContent('../app/templates/aboutMe/pages/aboutMe_3.html'),
                color: '#9c27b0'
            },
            {
                id: 'mango',
                content: $scope.fetchContent('../app/templates/aboutMe/pages/aboutMe_4.html'),
                color: '#7b1fa2'
            }
        ];

        document.title = $scope.title;

        var content = new DeclarativeContent($scope.data, $scope.colorHeader, $scope.title);
        document.getElementById('created_content').appendChild(content);

        document.getElementById('created_content').addEventListener('home', function (event) {
            $timeout(function () {
                $location.path('/');
            }, 1000);
        });
    }]);
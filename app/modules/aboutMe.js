var aboutMeModule = angular.module('application.aboutMe', []);

aboutMeModule.controller('aboutMeController',
    ['$scope', '$location', '$timeout', '$http', function ($scope, $location, $timeout, $http) {

    $scope.colorHeader = '#aa00ff';
    $scope.title = 'About me';

    $scope.fetchContent = function(url) {
        var response = null;
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, false);
        xhr.onload = function (e) {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    response = xhr.responseText;
                } else {
                    response = '<div style="font-size: 36px; text-align: center">error get '+ url + '</div>'
                }
            }
        };
        xhr.onerror = function (e) {
            response = '<div style="font-size: 36px; text-align: center">error get '+ url + '</div>'
        };
        xhr.send(null);
        return response;
    };

    console.log('>>>>>>>>>>>>>> ' + $scope.fetchContent('../app/templates/aboutEducation.html'));

    $scope.data = [
        {
            id : 'banana',
            content : $scope.fetchContent('../app/templates/aboutEducation.html'),
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
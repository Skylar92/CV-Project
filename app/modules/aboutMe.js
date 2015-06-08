var aboutMeModule = angular.module('application.aboutMe', []);

aboutMeModule.controller('aboutMeController', ['$scope', '$location', '$timeout', function ($scope, $location, $timeout) {

    document.title = 'About me';

    $scope.data = [
        {
            id : '1',
            content : 'Banana',
            color : '#2E7D32'
        },
        {
            id : '2',
            content : 'Orange',
            color : '#7B1FA2'
        },
        {
            id : '3',
            content : 'Apple',
            color : '#558B2F'
        },
        {
            id : '4',
            content : 'Mango',
            color : '#3949AB'
        }
    ];

    if (document.getElementById('content-view') === null) {
        var content = new DeclarativeContent($scope.data);
        document.getElementById('created_content').appendChild(content);
        document.getElementsByTagName('declarative-content')[0].setAttribute('data', $scope.data);
    }

    $scope.goBack = function (id) {
        document.getElementById(id).classList.add('content-animation-back');

        $timeout(function () {
            $location.path('/');
        }, 1000);
    }

}]);
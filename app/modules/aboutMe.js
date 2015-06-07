var aboutMeModule = angular.module('application.aboutMe', []);

aboutMeModule.controller('aboutMeController', ['$scope', '$location', '$timeout', function ($scope, $location, $timeout) {

    document.title = 'About me';

    $scope.data = [
        {content : "Banana"},
        {content : "Orange"},
        {content : "Apple"},
        {content : "Mango"}
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
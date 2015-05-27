var aboutMeModule = angular.module('application.aboutMe', []);

aboutMeModule.controller('aboutMeController', ['$scope', function ($scope) {

    document.getElementById('aboutMeContent').classList.add('background-color-about-me');

}]);
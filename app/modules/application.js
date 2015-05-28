(function () {

    var application = angular.module('application', [
        'ngRoute',
        'ngMaterial',
        'application.constants',
        'application.aboutMe']);

    application.config(['$routeProvider', function ($routeProvider) {
        /**
         * Configuration router
         */
        $routeProvider
            .when('/aboutMe', {
                templateUrl: 'templates/aboutMe.html',
                controller: 'aboutMeController'
            })
            .otherwise({
                redirectTo: '/',
                templateUrl: 'templates/home.html',
                controller: 'defaultController'
            });
    }]);

    application.run(['$rootScope', '$timeout', function ($rootScope, $timeout) {

        $rootScope.layout = {};

        $rootScope.$on('$routeChangeStart', function () {
            console.log('$routeChangeStart');
            $timeout(function () {
                $rootScope.layout.loading = true;
            });
        });

        $rootScope.$on('$routeChangeSuccess', function () {
            console.log('$routeChangeSuccess');
            $timeout(function () {
                $rootScope.layout.loading = false;
            }, 400);
        });

        $rootScope.$on('$routeChangeError', function () {
            console.log('Error on call spinner gif animation');
            $rootScope.layout.loading = false;
        });

    }]);

    var defaultController = application.controller('defaultController', ['$scope', '$location', '$timeout', function ($scope, $location, $timeout) {

        document.title = 'Welcome to my CV';

        $scope.buttonList = BUTTON_LIST;
        $scope.isLoadingAnimation = false;

        /**
         * Function to redirect to another page (must be global)
         * @param id - path to redirect
         */
        $scope.redirect = function (id) {
            $scope.isLoadingAnimation = true;

            document.getElementById(id).classList.add('grid-tile-animation');
            document.getElementById(id + '-image').classList.add('image-animation');

            $timeout(function () {
                $location.path(id);
            }, 1000);

        };

    }]);

})();
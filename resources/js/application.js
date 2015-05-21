(function () {

    var application = angular.module('application', [
        'ngRoute',
        'ngMaterial',
        'application.home']);

    application.config(['$routeProvider', function ($routeProvider) {
        /**
         * Configuration router
         */
        $routeProvider
            .when('/home', {
                templateUrl: 'template/home.html',
                controller: 'homeController'
            })
            .otherwise({
                redirectTo: '/',
                templateUrl: 'template/welcome.html',
                controller: 'defaultController'
            });
    }]);

    application.run(['$rootScope','$timeout',function ($rootScope, $timeout) {

        $rootScope.layout = {};

        $rootScope.$on('$routeChangeStart', function () {
            console.log('$routeChangeStart');
            $timeout(function(){ $rootScope.layout.loading = true; });
        });

        $rootScope.$on('$routeChangeSuccess', function () {
            console.log('$routeChangeSuccess');
            $timeout(function(){ $rootScope.layout.loading = false;}, 400);
        });

        $rootScope.$on('$routeChangeError', function () {
            console.log('Error on call spinner gif animation');
            $rootScope.layout.loading = false;
        });

    }]);

    var defaultController = application.controller('defaultController', ['$scope', '$location', function ($scope, $location) {

        var view = document.getElementById('view');
        view.classList.add('wrapper');
        view.classList.add('background-color-aqua');

        /**
         * Function to redirect to another page (must be global)
         * @param path - path to redirect
         */
        $scope.go = function( path ) {
            $location.path( path );
        };
    }]);

})();
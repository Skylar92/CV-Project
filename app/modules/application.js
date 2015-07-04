(function () {

    var application = angular.module('application', ['ngRoute']);

    application.config(['$routeProvider', function ($routeProvider) {
        /**
         * Configuration router
         */
        $routeProvider
            .when('/aboutMe', {
                templateUrl: 'templates/aboutMe.html'
            })
            .when('/aboutEducation', {
                templateUrl: 'templates/aboutEducation.html'
            })
            .when('/aboutExperience', {
                templateUrl: 'templates/aboutExperience.html'
            })
            .when('/aboutWishes', {
                templateUrl: 'templates/aboutWishes.html'
            })
            .when('/myContact', {
                templateUrl: 'templates/myContact.html'
            })
            .when('/myProjects', {
                templateUrl: 'templates/myProjects.html'
            })
            .otherwise({
                redirectTo: '/',
                templateUrl: 'templates/home.html',
                controller: 'defaultController'
            });
    }]);

    application.run(['$rootScope', '$timeout', '$location', function ($rootScope, $timeout, $location) {

        $rootScope.layout = {};

        $rootScope.$on('$routeChangeStart', function () {
            $timeout(function () {
                $rootScope.layout.loading = true;
            });
        });

        $rootScope.$on('$routeChangeSuccess', function () {
            $timeout(function () {
                $rootScope.layout.loading = false;
            }, 400);
        });

        $rootScope.$on('$routeChangeError', function () {
            console.log('Error on call spinner gif animation');
            $rootScope.layout.loading = false;
        });

        /**
         * Common function go to main page
         * @param timeout - timeout to redirect on main page
         * @param callback - call add function when router change url
         */
        $rootScope.home = function (timeout, callback) {
            var wait = 1000;
            if (timeout) {
                wait = timeout;
            }
            if (callback)
                callback.call();
            $timeout(function () {
                $location.path('/');
            }, wait);
        }

    }]);

    application.controller('defaultController', ['$scope', '$location', '$timeout', function ($scope, $location, $timeout) {
        document.title = 'Welcome to my CV';
        document.addEventListener('goto', function (data) {
            $timeout(function () {
                document.title = data.detail.text;
                $location.path(data.detail.id);
            }, 500);
        });

    }]);

})();
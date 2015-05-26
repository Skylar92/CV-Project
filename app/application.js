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
                templateUrl: 'templates/home.html',
                controller: 'homeController'
            })
            .otherwise({
                redirectTo: '/',
                templateUrl: 'templates/welcome.html',
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

    var defaultController = application.controller('defaultController', ['$scope', '$location', function ($scope, $location) {
        console.log('This is run default controller');

        $scope.buttonList = [
            {
                'buttonName': 'About me',
                "ngColorTile":'#C8E6C9',
                "ngColorFooterTile":'#2E7D32',
                "mdRowSpan":'10',
                "mdColSpan":'2',
                'svgIcon':'assets/homeView/aboutMe.svg'
            },
            {
                'buttonName': 'About my education',
                "ngColorTile":'#E1BEE7',
                "ngColorFooterTile":'#7B1FA2',
                "mdRowSpan":'5',
                "mdColSpan":'2',
                'svgIcon':'assets/homeView/aboutEducation.svg'
            },
            {
                'buttonName': 'About my experience',
                "ngColorTile":'#C5E1A5',
                "ngColorFooterTile":'#558B2F',
                "mdRowSpan":'5',
                "mdColSpan":'2',
                'svgIcon':'assets/homeView/aboutExperience.svg'
            },
            {
                'buttonName': 'About my wishes',
                "ngColorTile":'#009688',
                "ngColorFooterTile":'#3949AB',
                "mdRowSpan":'5',
                "mdColSpan":'4',
                'svgIcon':'assets/homeView/aboutWishes.svg'
            },
            {
                'buttonName': 'My projects',
                "ngColorTile":'#E57373',
                "ngColorFooterTile":'#FF4081',
                "mdRowSpan":'4',
                "mdColSpan":'3',
                'svgIcon':'assets/homeView/myProjects.svg'
            },
            {
                'buttonName': 'My contacts',
                "ngColorTile":'#B2DFDB',
                "ngColorFooterTile":'#00695C',
                "mdRowSpan":'4',
                "mdColSpan":'1',
                'svgIcon':'assets/homeView/myContact.svg'
            }
        ];


        /**
         * Function to redirect to another page (must be global)
         * @param path - path to redirect
         */
        $scope.redirect = function () {
            //$location.path(path);
        };
    }]);

})();
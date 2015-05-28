(function () {

    var application = angular.module('application', [
        'ngRoute',
        'ngMaterial',
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

        $scope.buttonList = [
            {
                id: 'aboutMe',
                'buttonName': 'About me',
                "ngColorTile": '#C8E6C9',
                "ngColorFooterTile": '#2E7D32',
                "mdRowSpan": '10',
                "mdColSpan": '2',
                'svgIcon': 'assets/homeView/aboutMe.svg'
            },
            {
                id: 'aboutEducation',
                'buttonName': 'About my education',
                "ngColorTile": '#E1BEE7',
                "ngColorFooterTile": '#7B1FA2',
                "mdRowSpan": '5',
                "mdColSpan": '2',
                'svgIcon': 'assets/homeView/aboutEducation.svg'
            },
            {
                id: 'aboutExperience',
                'buttonName': 'About my experience',
                "ngColorTile": '#C5E1A5',
                "ngColorFooterTile": '#558B2F',
                "mdRowSpan": '5',
                "mdColSpan": '2',
                'svgIcon': 'assets/homeView/aboutExperience.svg'
            },
            {
                id: 'aboutWishes',
                'buttonName': 'About my wishes',
                "ngColorTile": '#009688',
                "ngColorFooterTile": '#3949AB',
                "mdRowSpan": '5',
                "mdColSpan": '4',
                'svgIcon': 'assets/homeView/aboutWishes.svg'
            },
            {
                id: 'projects',
                'buttonName': 'My projects',
                "ngColorTile": '#E57373',
                "ngColorFooterTile": '#FF4081',
                "mdRowSpan": '5',
                "mdColSpan": '3',
                'svgIcon': 'assets/homeView/myProjects.svg'
            },
            {
                id: 'contacts',
                'buttonName': 'My contacts',
                "ngColorTile": '#B2DFDB',
                "ngColorFooterTile": '#00695C',
                "mdRowSpan": '5',
                "mdColSpan": '1',
                'svgIcon': 'assets/homeView/myContact.svg'
            }
        ];

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
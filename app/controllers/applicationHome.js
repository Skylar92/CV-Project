var home = angular.module('application.home', []);

home.controller('homeController', function() {
    console.log('homeController was started');

    var view = document.getElementById('view');
    view.classList.add('wrapper');
    view.classList.add('background-color-cherry');

});
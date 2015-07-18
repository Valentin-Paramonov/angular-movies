angular.module('moviedb', ['ngResource', 'ngRoute'])
    .constant('apiKey', '739c4bd0ee4c3bb16d622312d23d7b8a')
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: '/routes/main.html',
                controller: 'MainController',
                controllerAs: 'mc'
            })
            .when('/movie/:movieId', {
                templateUrl: '/routes/movie.html',
                controller: 'MovieController',
                controllerAs: 'mc'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);
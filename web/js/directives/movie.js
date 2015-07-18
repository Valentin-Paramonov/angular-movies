angular.module('moviedb')
    .directive('mdbMovie', function() {
        return {
            replace: true,
            templateUrl: '/movie.html',
            scope: {
                movie: '=',
                images: '='
            },
            bindToController: true,
            controllerAs: 'mc',
            controller: function() {
            }
        };
    });
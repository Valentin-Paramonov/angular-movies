angular.module('moviedb').directive('mdbMovieSearch', function(movies, $location) {
    return {
        replace: true,
        templateUrl: 'movie-search.html',
        scope: {
            'onSelect': '&'
        },
        bindToController: true,
        controllerAs: 'mc',
        controller: function() {
            this.results = [];

            this.search = function(query) {
                movies.search(query)
                    .then(function(response) {
                        this.results = response.results;
                    }.bind(this));
            };

            this.select = function(movie) {
                this.results = [];
                $location.path('/movie/' + movie.id);
            };
        }
    };
});
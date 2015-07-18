angular.module('moviedb')
    .controller('MovieController', function(movies, images, $routeParams) {
        movies.findById($routeParams.movieId)
            .then(function(movie) {
                this.movie = movie;
            }.bind(this));
        images.byId($routeParams.movieId)
            .then(function(images) {
                this.images = images.backdrops;
            }.bind(this));
    });
angular.module('moviedb')
    .factory('images', function($resource, apiKey) {
        return {
            byId: function(id) {
                return $resource('http://api.themoviedb.org/3/movie/:id/images').get({
                    id: id,
                    api_key: apiKey
                }).$promise;
            }
        };
    });
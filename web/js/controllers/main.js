angular.module('moviedb')
    .controller('MainController', function() {
        this.results = [
            { title: 'Terminator 2: Judgment Day' },
            { title: 'Lola Rennt' },
            { title: 'Scarface' }
        ];

        this.search = function(query) {
            console.log(query);
        };
    });
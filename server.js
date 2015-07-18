const PARTIALS_DIR = __dirname + '/partials';
const ROOT = __dirname + '/web';
const PORT = 8080;

var express = require('express');
var jade = require('connect-jade-static');

var server = express();
server.use(express.static(ROOT));
server.set('view engine', 'jade');
server.set('views', PARTIALS_DIR);
server.use(jade({
    baseDir: PARTIALS_DIR,
    baseUrl: '/',
    jade: {
        pretty: true
    }
}));

server.listen(PORT, function() {
    console.log('Listening on port ' + PORT);
});
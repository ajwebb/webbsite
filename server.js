var express = require('express');
var app = express();

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

// set the view engine to html
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// set the home page route
app.get('/', function(req, res) {
    // ejs render automatically looks in the views folder
    res.render('index.html');
});

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

var server = require('http').createServer(app);

server.listen(port, function() {
	console.log('Server is listening on http://localhost:' + port);
});

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express(); 
var PORT = process.env.PORT || 3000; 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

//require('./apiRoutes.js')(app); 
require('./htmlRoutes.js')(app);

app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});

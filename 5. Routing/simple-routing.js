let express = require('express');
let logger = require('morgan');

let app = express();

app.use(logger('dev'));

app.get("/olivia", function(request, response) {
	response.send("Welcome to Olivia’s homepage!");
});
//Go to localhost:3001/olivia

app.use(function(request, response) {
	response.status(404).send("Page not found!");
});

app.listen(3001,function(){
	console.log("App started");
});
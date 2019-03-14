let express = require('express');
let logger = require('morgan');

let app = express();

app.use(logger('dev'));

app.get("/user/:username", function(request, response) {
	let name =  request.params.username;
	response.send("Welcome to "+ name +"’s homepage!");
});
//Go to localhost:3001/user/username

app.use(function(request, response) {
	response.status(404).send("Page not found!");
});

app.listen(3001,function(){
	console.log("App started");
});
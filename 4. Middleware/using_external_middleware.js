const express = require("express");
const logger = require("morgan");

let app = express();

//See logging in console

app.use(logger('dev'));

app.use(function(req,res){
	res.writeHead(200, {"Content-Type" : "text/plain"});
	res.end("Hello World");
});

app.listen(3000,()=>{console.log("App started at localhost:3000")});
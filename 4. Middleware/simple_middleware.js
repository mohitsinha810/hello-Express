const express = require("express");

let app = express();

//See logging in console

app.use(function(req,res,next){
	console.log("Request IP: " + req.url);
	console.log("Request date:" + new Date());
	next();
});

app.use(function(req,res){
	res.writeHead(200, {"Content-Type" : "text/plain"});
	res.end("Hello World");
});

app.listen(3000,()=>{console.log("App started at localhost:3000")});
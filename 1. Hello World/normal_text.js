const express = require("express");

let app = express();

app.use(function(req,res,next){
	console.log("In comes a response to: " + req.url);
	next();
});

app.use(function(req,res){
	res.send("Hello World");
});

app.listen(3000,()=>{console.log("App started at localhost:3000")});
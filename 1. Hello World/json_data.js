const express = require("express");

let app = express();

app.use(function(req,res,next){
	console.log("In comes a response to: " + req.url);
	next();
});

app.use(function(req,res){
	res.json({hello : 'world'});
	//or res.send({hello : 'world'});
});

app.listen(3000,()=>{console.log("App started at localhost:3000")});
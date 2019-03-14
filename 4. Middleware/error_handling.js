const express = require("express");
const logger = require("morgan");
const path = require("path");

let app = express();

let filePath = path.join(__dirname, "hello.jpg");
//hello.jpg not present

app.use(logger('short'));

app.use(function(req,res,next){
	res.sendFile(filePath, function(err){
		if(err) { next(new Error("Error sending file")); }
		else console.log("File sent");
	});
});

app.use(function(err,req,res,next){
	console.error(err);
	next(err);
});

app.use(function(err,req,res,next){
	res.status(500).send("Internal server error");
});

app.listen(3000,()=>{console.log("App started at localhost:3000")});
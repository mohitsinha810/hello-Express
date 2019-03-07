const express = require("express");
const logger = require("morgan");
const path = require("path");

let app = express();

app.use(logger('short'));

app.use(function(req,res){
	res.json({hello : 'world'});
	//or res.send({hello : 'world'});
});

app.listen(3000,()=>{console.log("App started at localhost:3000")});
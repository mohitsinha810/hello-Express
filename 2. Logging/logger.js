const express = require("express");
const logger = require("morgan");

let app = express();

app.use(logger('short'));

app.use(function(req,res){
	res.send("Check logging at the terminal!");
});

app.listen(3000,()=>{console.log("App started at localhost:3000")});
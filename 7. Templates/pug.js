const express = require("express");
const path = require("path");
const logger = require("morgan");

let app = express();

app.locals.name = "Test App";
app.locals.lists = ["Coffee","Tea"];

app.set("view engine","pug");
app.set("views",path.resolve(__dirname,"views"));

app.use(logger("dev"));

app.get("/",function(req,res){
	res.render("index");
});

app.get("/about",function(req,res){
	res.render("about");
});

app.listen(3000,() => console.log("App started"));
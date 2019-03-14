const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');

let app = express();

app.set("views",path.resolve(__dirname,"views"));
app.set("view-engine","ejs");

let entries = [];
app.locals.entries = entries;

app.use(logger('dev'));

app.use(bodyParser.urlencoded({extended : false}));

app.get("/",function(req,res){
	res.render("index.ejs");
});

app.get("/new-entry",function(req,res){
	res.render("new-entry.ejs");
});

app.post("/new-entry",function(req,res){
	if(!req.body.title || !req.body.body){
		res.status(400).send("Entries must have a title and a body");
		return;
	}
	entries.push({
		title : req.body.title,
		body : req.body.body,
		published : new Date()
	});
	res.redirect("/");
});

app.use(function(req,res){
	res.status(404).render("404.ejs");
})

app.listen(3000,function(){
	console.log("App started at 3000");
});
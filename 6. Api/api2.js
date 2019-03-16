const express = require("express");

let api = express.Router();

api.get("/result",function(req,res){
	res.send("This is version 2");
});

module.exports = api;
const express = require("express");
const logger = require("morgan");
const path = require("path");

let app = express();

let publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));
//Try this url: loclhost:3000/image.jpg

app.use(logger('short'));

app.use(function(req,res){
	res.writeHead(200, {"Content-Type" : "text/plain"});
	res.end("Founded no static file");
});

app.listen(3000,()=>{console.log("App started at localhost:3000")});
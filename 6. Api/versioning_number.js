const express = require("express");
const logger = require("morgan");
const api1 = require("./api1.js");
const api2 = require("./api2.js");

let app = express();

app.use(logger("short"));

app.use("/v1",api1);

app.use("/v2",api2);

app.listen(5000,()=>{console.log("App started at localhost:5000")});
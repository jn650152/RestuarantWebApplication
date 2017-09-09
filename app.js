var express = require("express");
var bodyParser = require("body-parser");

var app= express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
//var engines = require('consolidate');
//app.set("views", "Views");
//app.engine('html', engines.hogan);
//app.set('view engine', 'html');
app.use(express.static('./Views'));

var router = require("./Routes/routes.js");
app.use("/process",router);
app.listen(3000, function(){
	console.log("listening on localhost:3000");
})



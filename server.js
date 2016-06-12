var express = require('express');
var app = express();
//app.use(express.static(__dirname+"/html"));

app.get("/", function(req, res){
	console.log("Request incomming");
	res.sendFile(__dirname+"/html/index.html");
	console.log("file send");
})

app.listen(3000);
console.log("Server started");
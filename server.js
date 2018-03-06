var express = require('express');
var app = express();

app.listen(3000);
app.use('/', express.static(__dirname + ""));
//app.use('/content',express.static(__dirname + "/content"));
//app.use('/fonts',express.static(__dirname + "/fonts"));

console.log("Server running at port 3000");

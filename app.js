var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get("/", function(req, res) {
  console.log("Someone got wrong direction!");
});

app.get("/gp", function(req, res) {
  console.log("Someone got to grandpa zone!");
  res.sendfile("gp.html");
});

io.on('connection', function(socket) {
  console.log("Someone connected! : " + socket.id);
  socket.on('disconnect', function() {
    console.log("Someone disconnected! : " + socket.id);
  });
});

var port = process.env.PORT || 3000;
http.listen(port, function() {
  console.log("Server on!");
});

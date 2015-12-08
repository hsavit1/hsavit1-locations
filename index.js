var express = require('express')
var app = express()
var server = require('http').createServer(app)
var io = require('socket.io').listen(server)

app.set('port',  (process.env.PORT || 3000));

server.listen(process.env.PORT || 3000);

app.use(express.static(__dirname + "/"))

app.get(express.static(__dirname + "/"), function (req, res) {
  res.send('Hello World!');
});

io.sockets.on('connection', function(socket) { 

})

//'connection' or any other event

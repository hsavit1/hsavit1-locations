var express = require('express')
var app = express()
var server = require('http').createServer(app)
var io = require('socket.io').listen(server)

server.listen(process.env.PORT || 3000);

app.use(express.static(__dirname + "/"))

app.get('/', function (req, res) {
  res.send('Hello World!');
});

io.sockets.on('connection', function(socket) { 

})

//'connection' or any other event

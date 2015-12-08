var express = require('express')
var app = express()
var server = require('http').createServer(app)
var io = require('socket.io').listen(server)

server.listen(process.env.PORT || 3000);

console.log("http server listening on %d", port)

io.sockets.on('connection', function(socket) { 

})

//'connection' or any other event

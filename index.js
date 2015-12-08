var express = require('express')
var app = express()
var server = require('http').createServer(app)
var io = require('socket.io').listen(server)

var socket = io.connection('https://www.heroku.com/fierce-fortress-2845')

app.set('port',  (process.env.PORT || 3000));

server.listen(process.env.PORT || 3000);

app.use(express.static(__dirname + "/"))

app.get('/',  function (req, res) {
  res.send('Hello World!');
});

io.on('connection', function(socket) { 

})
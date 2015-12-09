var express = require('express')
var app = express()
var server = require('http').createServer(app);
var io = require('socket.io')(server);

app.set('port',  (process.env.PORT || 3000));

app.use(express.static(__dirname + "/"))

app.get('/',  function (req, res) {
  res.send('Hello World!');
});

io.on('connection', function(socket) { 

   socket.emit('connection', {hello: 'world'});
   socket.emit('stuff', function(other)
   {
       console.log(other);
   });
})

server.listen(process.env.PORT || 3000);

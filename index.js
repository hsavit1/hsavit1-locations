var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
// var io = require('socket.io')(server, {
//   serveClient: (config.env === 'production') ? false : true,
//   path: '/socket.io'
// });

// var io = require('socket.io')(server);

app.set('port',  (process.env.PORT || 3000));

app.use(express.static(__dirname + "/"))

app.get('/',  function (req, res) {
  res.send('Hello World!');
});

io.set('log level', 2);

io.on('connection', function(socket) { 
  // socket.on('join', function (data){
  //   socket.room = data;
  // })


   // socket.emit('connection', {
	  //  hello: 'world'
   // });
   
   // socket.emit('stuff', function(other)
   // {
   //     console.log(other);
   // });
})

io.on("removeLocation", function(socket) {

})

io.on("locationUpdate", function(socket) {
	
})

server.listen(process.env.PORT || 3000);

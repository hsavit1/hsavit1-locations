var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
// var io = require('socket.io')(server, {
//   serveClient: (config.env === 'production') ? false : true,
//   path: '/socket.io'
// });

app.set('port',  (process.env.PORT || 3000));

app.use("./node_modules/socket.io-client/")
// app.use(express.static(__dirname + "/node_modules/socket.io-client/"))
app.use(express.static(__dirname + "/public"));


app.get('/',  function (req, res) {
  res.send('Hello World!');
});

io.on('connection', function(socket) { 
    console.log("Someone connected %s", socket.id);

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

    // respond on client message
    socket.on("client", function(data) {

        socket.emit("client", "Response from server on " + new Date().toTimeString() + " to " + data);
    });
})

// io.on("removeLocation", function(socket) {
// })

// io.on("locationUpdate", function(socket) {
// })

server.listen(process.env.PORT || 3000);


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

// app.use(express.static(__dirname + "/"))

// serve index response from public folder
app.use(express.static("./public"));
app.use(express.static(".//node_modules/socket.io-client/"));


// app.get('/',  function (req, res) {
//   res.send('Hello World!');
// });

io.set('log level', 2);

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


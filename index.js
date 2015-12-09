var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server); 

app.set('port',  (process.env.PORT || 3000));

// app.use("./node_modules/socket.io-client/")
// app.use(express.static(__dirname + "/node_modules/socket.io-client/"))

// app.use(express.static(__dirname + "/public"));
// app.use(express.static(__dirname = "/"))

app.get('/',  function (req, res) {
  res.send('Hello World!');
  res.sendFile(express.static(__dirname + '/index.html'));
});

io.on('connection', function(socket) { 
    console.log("Someone connected %s", socket.id);

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


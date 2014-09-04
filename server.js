var app = require('express')(),
	server = require('http').Server(app),
	io = require('socket.io')(server);

// when new user connects
io.on('connection', function(socket){
	// custom event. user is sending image
	socket.io('event:new:image', function(data){
		socket.broadcast.emit('event:incoming:image', data)
	})
})

server.listen(8000, function(){
	console.log('Socket.io running on port 8000')
})
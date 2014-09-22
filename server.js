var app = require('express')(),
	server = require('http').Server(app),
	io = require('socket.io')(server);

app.get('/', function(req, res){
	res.sendFile(__dirname + '/public/index.html');
})

// when new user connects
io.on('connection', function(socket){
	console.log("New connection!");

	socket.on('chat message', function(msg){
		console.log('message: ' + msg);
		io.emit('chat message', msg)
	})

	// custom event. user is sending image
	// socket.io('event:new:image', function(data){
	// 	socket.broadcast.emit('event:incoming:image', data)
	// })
	socket.on('disconnect', function(){
		console.log('User disconnected')
	})
})

server.listen(8000, function(){
	console.log('Socket.io running on port 8000')
})
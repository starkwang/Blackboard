var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server),
    path = require('path');

server.listen(8080);
console.log('Running at port 8080...');


app.get('/', function(req, res) {
    res.sendfile(_t_dirname + '/client/index.hml');
});
app.use('/js', express.static(__dirname + '/client/build/js'));
app.use('/css', express.static(__dirname + '/client/build/css'));

io.sockets.on('connection', function(socket) {
    
    socket.on('input', function(data) {
        socket.broadcast.emit('update', data);
    });
});

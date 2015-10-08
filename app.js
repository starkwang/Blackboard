var express = require('express'),
    app = express(),
    server = require('http').createServer(app),
    io = require('socket.io').listen(server),
    alphabet = require('alphabetjs'),
    path = require('path');

server.listen(8080);
console.log('Running at port 8080...');
console.log(alphabet('MASHIRO', 'planar'));

app.get('/', function(req, res) {
    res.sendfile(__dirname + '/client/index.html');
});
app.use('/public',express.static(__dirname + '/public/'));
io.sockets.on('connection', function(socket) {
    socket.on('input', function(data) {
        socket.broadcast.emit('update', data);
    });
});

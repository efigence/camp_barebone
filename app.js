var express = require('express');
var app = module.exports.app = exports.app = express();

app.use(require('connect-livereload')());

app.use(express.static('dst'));

var server = app.listen(8080, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

var io = require('socket.io')(server);
io.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('join', function (data) {
    console.log(data);
  });

  socket.on('broadcast', function (data) {
    console.log('broadcast', data);
    socket.broadcast.emit('broadcast', data);
  });
});

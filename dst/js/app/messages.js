$(function(){
  var socket = io.connect('http://localhost:8080');
  socket.on('news', function (data) {
    console.log(data);
    socket.emit('join', { my: 'data' });
  });


  socket.on('broadcast', function (data) {
    console.log('broadcast', data);
  });

  $('.header-bg img').on('click', function(){
    socket.emit('broadcast', {a: 'b'})
  });

});

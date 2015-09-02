var express = require('express');
var app = module.exports.app = exports.app = express();

app.use(require('connect-livereload')());

app.use(express.static('dst'));

var server = app.listen(8080, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

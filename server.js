var express = require('express');
var http = require('http');
var bodyParser = require('body-parser'):
var cookieParser = require('cookie-parser')
var auth = require('./auth')(require('./auth-info.json'));
var app = express();
const port = 8000;
var utils = (function () {
  var ret = {
    routes: function (file) {
      return require('./routes/'+file+'.js');
    },
    path: function (path) {
      return __dirname + path;
    },
  };
  return ret;
})();
// server.listen(port, function () {
//   console.log('listening at localhost:'+port);
// });
app.use('/', utils.routes('views')(utils, auth));
app.use('/api', utils.routes('api')(utils, auth));
app.use('/static', express.static(utils.path('/static')));

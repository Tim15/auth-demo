module.exports = function (utils, auth) {
  var express = require('express');
  var router = express.Router();
  var routes = {
    home: ['/', function (req, res) {
      // res.sendFile(utils.path('/views/index.html'));
    }],
    signin: ['/signin', function (req, res) {
      // res.sendFile(utils.path('/views/signin.html'));
    }],
    signout: ['/signout', function (req, res) {}],
    signup: ['/signup', function (req, res) {
      // res.sendFile(utils.path('/views/signup.html'));
    }],
    profile: ['/myprofile', function (req, res) {
      // res.sendFile(utils.path('/views/profile.html'));
    }],
    things: ['/mythings', function (req, res) {
      // res.sendFile(utils.path('/views/profile.html'));
    }],
    users: ['/users', function (req, res) {
      // res.sendFile(utils.path('/views/index.html'));
    }],
    user: ['/users/:id([a-zA-Z0-9\\-_]{6})', function (req, res) {
      // res.sendFile(utils.path('/views/index.html'));
    }],
    shared: ['/shared/:id([a-zA-Z0-9\\-_]{7})', function (req, res) {
      // res.sendFile(utils.path('/views/index.html'));
    }],
    thing: ['/thing/:id([a-zA-Z0-9\\-_]{7})', function (req, res) {
      // res.sendFile(utils.path('/views/index.html'));
    }],
    resource: ['/thing/:id([a-zA-Z0-9\\-_]{7})', function (req, res) {
      // res.sendFile(utils.path('/views/index.html'));
    }],
  };
  for (var i in routes) {
    if (routes.hasOwnProperty(i)) {
      router[routes[i][2]||'get'](routes[i][0], routes[i][1]);
    }
  }
  return router;
}

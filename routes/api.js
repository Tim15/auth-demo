module.exports = function (utils) {
  var express = require('express');
  var router = express.Router();
  var routes = {
    options: ['options', '*', function (req, res){}],//return options for that url
    signup: ['post', '/signup', function (req, res){
      
    }],
    signin: ['post', '/signin', function (req, res){}],
    signout: ['post', '/signout', function (req, res){}],
    deleteAccount: ['delete', '/users/:id([a-zA-Z0-9\\-_]{6})', function (req, res){}],
    deleteResource: ['delete', '/users/:id([a-zA-Z0-9\\-_]{6})', function (req, res){}],
    makeResource: ['post', '/resource', function (req, res) {}],
    editResource: ['put', '/resource/:id([a-zA-Z0-9\\-_]{6})', function (req, res) {}],
    getResource: ['get', '/resource/:id([a-zA-Z0-9\\-_]{6})', function (req, res) {}],
    deleteResource: ['delete', '/resource/:id([a-zA-Z0-9\\-_]{6})', function (req, res) {}],
    getAccountData: ['get', '/accounts/:id([a-zA-Z0-9\\-_]{6})', function (req, res) {}],
    resetPassword: ['post', '/accounts/:id([a-zA-Z0-9\\-_]{6})/reset', function (req, res) {}],
  };
  for (var i in routes) {
    if (routes.hasOwnProperty(i)) {
      router[routes[i][0]](routes[i][1], routes[i][2]);
    }
  }
  return router;
}

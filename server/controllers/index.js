var models = require('../models');
var bluebird = require('bluebird');


module.exports = {
  messages: {
    get: function (req, res) {
      res.writeHead(201);
      var message = {objectId: 1, roomname: 'lobby', text: 'lol bbq', username: 'me'};
      var data = {results: [message]};

      res.end(JSON.stringify(data));
    }, // a function which handles a get request for all messages
    post: function (req, res) {


    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};


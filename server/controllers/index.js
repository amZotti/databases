var models = require('../models');
var bluebird = require('bluebird');

module.exports = {
  messages: {
    get: function (req, res) {
          var cb = function(data) {
          res.writeHead(201);
          res.end(JSON.stringify({results: data}));
      }
          models.messages.get(cb);

    },
    post: function (req, res) {
        models.messages.post(req.body);
    }
  }
};

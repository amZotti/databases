var models = require('../models');
var bluebird = require('bluebird');
var mysql = require('mysql');

var dbConnection = mysql.createConnection({
  user: "root",
  password: "",
  database: "chat"
});
dbConnection.connect();
//dbConnection.query('insert into messages (username, message, roomname) values ("brian", "yo bbq2", "lobby");');

module.exports = {
  messages: {
    get: function (req, res) {
      dbConnection.query('SELECT * FROM messages', function(err, data){
        res.writeHead(201);
        res.end(JSON.stringify({results: data}));
      });

      //res.send({result: ???});
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      console.log('hitting');
      req.body.username = req.body.username || 'Annonymous';
      dbConnection.query('INSERT INTO messages ' +
        ' (username, roomname, message) values ' +
        '("' + req.body.username + '", "' + req.body.roomname + '", "' + req.body.text + '");');

    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};


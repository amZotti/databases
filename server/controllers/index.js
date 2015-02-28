var models = require('../models');
var bluebird = require('bluebird');
var Sequelize = require("sequelize");
var sequelize = new Sequelize("chat", "root", "", {
  host: "localhost",
  dialect: "mysql",
  pool: {
    max:5, min:0, idle: 10000
  }
});


var User = sequelize.define("User", {
  username: {
    type: Sequelize.STRING,
    field: "username"
  }
});

var Message = sequelize.define("messages", {
  objectId: {
    type: Sequelize.INTEGER,
    field: "objectId",
    autoIncrement: true,
    primaryKey: true
  },
  username: {
    type: Sequelize.STRING,
    field: "username"
  },
  message: {
    type: Sequelize.STRING,
    field: "message"
  },
  roomname: {
    type: Sequelize.STRING,
    field: "roomname"
  }

});

module.exports = {
  messages: {
    get: function (req, res) {
      var array = [];

      Message.all().then(function(messages){
        for (var i = 0; i < messages.length; i++){
          array.push(messages[i].values);
        }
        res.writeHead(201);
        res.end(JSON.stringify({results: array}));
      })
    },
    post: function (req, res) {
      req.body.username = req.body.username || 'Annonymous';

      Message.sync().success(function(){
        var newMessage = Message.build({username: req.body.username,
                        message: req.body.text,
                        roomname: req.body.roomname
        });
        newMessage.save().success(function(){
          console.log("success store in db");
        })
      });
    }
  }
};


var db = require('../db/index.js');
console.log(db);


module.exports = {
  messages: {
    get: function (callback) {
      var array = [];
      db.Message.all().then(function(messages){
        for (var i = 0; i < messages.length; i++)
          array.push(messages[i].values);
        callback(array);
      });
    },

    post: function (data) {
      data.username = data.username || 'Annonymous';

      db.Message.sync().success(function(){
        var newMessage = db.Message.build({username: data.username,
                        message: data.text,
                        roomname: data.roomname
        });
        newMessage.save().success(function(){
          console.log("success store in db");
        });
      });
    }
  }
};


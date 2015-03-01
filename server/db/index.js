var Sequelize = require("sequelize");
var sequelize = new Sequelize("chat", "root", "", {
  host: "localhost",
  dialect: "mysql",
  pool: {
    max:5, min:0, idle: 10000
  }
});

module.exports = {
  User: sequelize.define("User", {
    username: {
      type: Sequelize.STRING,
      field: "username"
    }
  }),

  Message: sequelize.define("messages", {
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
  })
}

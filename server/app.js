var express = require('express');
var db = require('./db');
// Middleware
var morgan = require('morgan');
var parser = require('body-parser');
var cors = require('cors');
var handler = require('./controllers/index.js');
// Router
var router = require('./routes.js');
var mysql      = require('mysql');

var app = express();
module.exports.app = app;

var dbConnection = mysql.createConnection({
  user: "root",
  password: "",
  database: "chat"
});
dbConnection.connect();

//dbConnection.query('insert into messages (username, message, roomname) values ("brian", "yo bbq2", "lobby");');

app.use(cors());
// Set what we are listening on.
app.set("port", 3000);
// Logging and parsing
app.use(morgan('dev'));
app.use(parser.json());

// Set up our routes
app.use("/classes", router);

// Serve the client files
app.use(express.static(__dirname + "/../client"));

// If we are being run directly, run the server.
if (!module.parent) {
  app.listen(app.get("port"));
  console.log("Listening on", app.get("port"));
}


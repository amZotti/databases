DROP DATABASE chat;
CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  objectId int NOT NULL AUTO_INCREMENT,
  username varchar(20),
  message varchar(140),
  roomname  varchar(30),
  updatedAt timestamp DEFAULT CURRENT_TIMESTAMP,
  createdAt timestamp DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY(objectId)
);

CREATE TABLE users (
  username varchar(20)
);

INSERT INTO messages (username, message, roomname) VALUES ('Tony', 'Hey, it is working!', 'lobby');

INSERT INTO users (username) VALUES ('Brian');

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/


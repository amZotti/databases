DROP DATABASE chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  objectId int NOT NULL AUTO_INCREMENT,
  username varchar(20),
  message varchar(140),
  roomname  varchar(30),
  time timestamp DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY(objectId)
);

INSERT INTO messages (username, message, roomname) VALUES ('Tony', 'Hey, it is working!', 'lobby');

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/


DROP DATABASE chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  username varchar(20),
  message varchar(140),
  roomname  varchar(30),
  time timestamp DEFAULT CURRENT_TIMESTAMP
);


/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/


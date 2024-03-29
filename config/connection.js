'use strict';

let mysql = require("mysql");
let connection = {};


if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
      host: "localhost",
      port: 3306,
      user: "root",
      password: "root",
      database: "burger_db"
    });
  }

connection.connect((err) => {
    if (err) {
      console.error("Error connecting: " + err.stack);
      return;
    }
    console.log("Connected as id " + connection.threadId + ". Connection success.");
  });

  module.exports = connection;
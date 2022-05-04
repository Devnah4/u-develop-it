const mysql = require("mysql2");

// Connects to the mysql database
const db = mysql.createConnection(
    {
      host: "localhost",
      user: "root",
      password: "liquiddeath2022",
      database: "election",
    },
    console.log("Connected to the Election Database!")
  );

  module.exports = db;
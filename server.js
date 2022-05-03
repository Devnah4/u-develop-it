const express = require("express");
const mysql = require("mysql2");

// Sets the localhost port
const PORT = process.env.PORT || 3001;
const app = express();

// Express Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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

// GET test route
app.get("/", (req, res) => {
  res.json({
    message: "Hello Nerd!",
  });
});

// Returns data for the candidates table
// db.query(`SELECT * FROM candidates`, (err, rows) => {
//     // Logs the rows in the table
//     console.log(rows);
// });

// GET a single candidate
// db.query(`SELECT * FROM candidates WHERE id = 1`, (err, row) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(row);
// });

// Delete a candidate
// db.query(`DELETE FROM candidates WHERE id = ?`, 1, (err, result) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(result);
// });

// Create a candidate
const sql = `INSERT INTO candidates (id, first_name, last_name, industry_connected) 
              VALUES (?,?,?,?)`;
const params = [1, 'Ronald', 'Firbank', 1];

db.query(sql, params, (err, result) => {
  if (err) {
    console.log(err);
  }
  console.log(result);
});

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

// Starts the Express.js server on the port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

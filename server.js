const express = require("express");
const mysql = require('mysql2');

// Sets the localhost port
const PORT = process.env.PORT || 3001;
const app = express();

// Express Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connects to the mysql database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'liquiddeath2022',
        database: 'election'
    },
    console.log('Connected to the Election Database!')
);

// GET test route
app.get("/", (req, res) => {
  res.json({
    message: "Hello Nerd!",
  });
});

// Returns data for the candidates table
db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
}); 

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

// Starts the Express.js server on the port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

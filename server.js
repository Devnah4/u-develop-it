const db = require("./db/connection");
const apiRoutes = require("./routes/apiRoutes");
const express = require("express");
const inputCheck = require("./utils/inputCheck");

// Sets the localhost port
const PORT = process.env.PORT || 3001;
const app = express();

// Express Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// Use the apiRoutes files
app.use("/api", apiRoutes);

// GET test route
// app.get("/", (req, res) => {
//   res.json({
//     message: "Hello Nerd!",
//   });
// });

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

// Starts the Express.js server on the port
db.connect((err) => {
  if (err) throw err;
  console.log("Database Connected!");
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});

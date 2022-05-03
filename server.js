const express = require("express");

// Sets the localhost port
const PORT = process.env.PORT || 3001;
const app = express();

// Express Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// GET test route
app.get("/", (req, res) => {
  res.json({
    message: "Hello Nerd!",
  });
});

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

// Starts the Express.js server on the port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

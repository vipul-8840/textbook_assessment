const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json()); // Middleware to parse JSON
app.get("/", (req, res) => {
  res.send("Express server is running!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} : http://localhost:5000`);
});

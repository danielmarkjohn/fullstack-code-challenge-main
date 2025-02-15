const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const newsRoutes = require("./routes/newsRoutes");
const port = 3001;

// Initialize Express app
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use("/news", newsRoutes);

// Start server
const listener = app.listen(port, () => {
  console.log(`App listening on port: ${listener.address().port}`);
});

if (!process.env.API_KEY || !process.env.NEWSAPI_URL) {
  console.error(
    "Error: Missing required environment variables (API_KEY or NEWSAPI_URL)."
  );
  process.exit(1); 
}

module.exports = app;

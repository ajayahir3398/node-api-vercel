const express = require("express");
const { MongoClient } = require("mongodb");

const app = express();
const PORT = process.env.PORT || 3000;

const mongoURI =
  "mongodb+srv://ajayahir:Ajay3398@cluster.vy3znto.mongodb.net/test?retryWrites=true&w=majority";

// Connect to MongoDB
MongoClient.connect(
  mongoURI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {
    if (err) {
      console.error("Error connecting to MongoDB:", err);
      return;
    }

    console.log("Connected to MongoDB");

    // Set up your routes or other logic here

    // Close the MongoDB connection when the app is terminated
    process.on("SIGINT", () => {
      client.close();
      process.exit();
    });
  }
);

app.listen(PORT, () => {
  console.log(`API listening on PORT ${PORT} `);
});

app.get("/", (req, res) => {
  res.send("Hey this is my API running------=- 🥳");
});

app.get("/about", (req, res) => {
  res.send("This is my about route..... ");
});

// Export the Express API
module.exports = app;

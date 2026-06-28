const express = require("express");
require("dotenv").config();
const connectDB = require("./db/connect");

const app = express();
const PORT = process.env.PORT || 3000;

// Home route
app.get("/", (req, res) => {
  res.send("Hello World");
});

// Get all contacts from MongoDB
app.get("/contacts", async (req, res) => {
  const db = await connectDB();
  const contacts = await db.collection("contacts").find().toArray();
  res.json(contacts);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
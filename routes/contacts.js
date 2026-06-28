const express = require("express");
const router = express.Router();
const connectDB = require("../db/connect");

router.get("/", async (req, res) => {
  try {
    const db = await connectDB();
    const contacts = await db.collection("contacts").find().toArray();
    res.json(contacts);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
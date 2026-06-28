const express = require("express");
const router = express.Router();
const connectDB = require("../db/connect");
const { ObjectId } = require("mongodb");

// GET ALL contacts
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

// GET ONE contact by ID (query parameter)
router.get("/single", async (req, res) => {
  try {
    const db = await connectDB();

    const id = req.query.id;

    const contact = await db.collection("contacts").findOne({
      _id: new ObjectId(id)
    });

    if (!contact) {
      return res.status(404).send("Contact not found");
    }

    res.json(contact);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
const express = require("express");
require("dotenv").config();

const contactsRoutes = require("./routes/contacts");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/contacts", contactsRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
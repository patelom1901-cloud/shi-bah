const express = require("express");
const router = express.Router();
const Contact = require("../models/contact"); // import the model

// POST /contact - save form submission
router.post("/", async (req, res) => {
  try {
    const { name, email, contactNumber, message } = req.body;

    // Simple validation
    if (!name || !email || !contactNumber || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Create a new contact document
    const newContact = new Contact({ name, email, contactNumber, message });

    // Save to MongoDB
    await newContact.save();

    res.status(201).json({ message: "Contact saved successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
const mongoose = require("mongoose");

// Define the schema (template) for contact form submissions
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },           // Name field
  email: { type: String, required: true },          // Email field
  contactNumber: { type: String, required: true },  // Contact number field
  message: { type: String, required: true },        // Message field
  createdAt: { type: Date, default: Date.now }      // Timestamp (auto)
});

// Create the model from the schema
const Contact = mongoose.model("Contact", contactSchema);

// Export the model so other files can use it
module.exports = Contact;
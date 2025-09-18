const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

// Connect DB
require("./db");

// Middleware
app.use(cors());            // <-- enable CORS
app.use(express.json());    // <-- parse JSON

// Contact route
const contactRoute = require("./routes/contact");
app.use("/contact", contactRoute);

// Test route
app.get("/", (req, res) => {
  res.send("🚀 Shiv Shakti Backend is running with MongoDB ✅");
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
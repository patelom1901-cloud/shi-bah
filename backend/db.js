const mongoose = require("mongoose");

// Replace <username>, <password>, <dbname> with your details
const uri = "mongodb+srv://patelom1901_db_user:CKtMv4ANLvKtpUgS@shivshakticluster.bu0zt3k.mongodb.net/shivshakti?retryWrites=true&w=majority&appName=ShivshaktiCluster";
// Connect to MongoDB
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB connected successfully"))
.catch(err => console.error("❌ MongoDB connection error:", err));
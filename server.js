require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const port = 3101;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());
// Import routes


// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(
      process.env.DB_URL,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    console.log("MongoDB connected");
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};
connectDB();

// Routes
////asdasl;dmaskmd


app.get("/", (req, res) => {
  res.send("trang ngu");
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ success: false, message: "Internal Server Error" });
});

// Start the server
app.listen(port, () => {
  console.log(`Máy chủ Express đang lắng nghe trên cổng ${port}`);
});
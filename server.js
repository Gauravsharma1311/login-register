const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const errorHandler = require("./utils/errorHandler");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Database connection
connectDB()
  .then(() => {
    // Routes
    app.use("/api/auth", authRoutes);

    // Error handler middleware
    app.use(errorHandler);

    // Specify the port to run the server
    const PORT = process.env.PORT || 4000; // Change 4000 to the desired port number
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB:", error.message);
    process.exit(1); // Exit process with failure
  });

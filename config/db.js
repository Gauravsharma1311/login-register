const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://gauravsh:gauravsh7568@cluster0.i5nz68r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/LOGINAUTHENTICATION",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Database connected");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;

const { default: mongoose } = require("mongoose");

const dbConnect = async () => {
  try {
   
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection error:", error.message);
    process.exit(1); // Exit the process if the connection fails
  }
};

module.exports = dbConnect;

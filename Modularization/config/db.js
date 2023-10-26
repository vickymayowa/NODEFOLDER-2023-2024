const mongoose = require("mongoose")

const connectDB = async () => {
    try {
      const conn = await mongoose.connect(process.env.MONGODB_URI);
      console.log(`MongoDB Connected SuccessFully: ${conn.connection.host}`);
    } catch (error) {
      console.error(`MongoDB Connection Failed: ${error.message}`);
      process.exit(1);
    }
  };

  
module.exports = connectDB;
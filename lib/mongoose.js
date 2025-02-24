import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // This line loads variables from your .env file

const connectionToDatabase = async () => {
  try {
    if (!process.env.MONGOURL) {
      throw new Error("MONGOURL is not defined in the .env file");
    }
    
    await mongoose.connect(process.env.MONGOURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Connected to MongoDB");
  } catch (err) {
    console.error("Database connection error ❌:", err);
    throw new Error("Database connection failed");
  }
};

export default connectionToDatabase;

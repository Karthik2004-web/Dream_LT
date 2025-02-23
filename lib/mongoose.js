import mongoose from "mongoose";

const connectionToDatabase = async () => {
  if (mongoose.connection.readyState >= 1) {
    console.log("Already connected to the database");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGOURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB successfully ✅");
  } catch (err) {
    console.error("Database connection error ❌:", err);
    throw new Error("Database connection failed");
  }
};

export default connectionToDatabase;

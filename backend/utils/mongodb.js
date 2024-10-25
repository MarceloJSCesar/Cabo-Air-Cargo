import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

async function connectToDatabase() {
  try {
    mongoose.connect(process.env.MONGODB_URL, {});
    console.log("MongoDb connected ...");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
}

connectToDatabase();

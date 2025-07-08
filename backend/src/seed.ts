import mongoose from "mongoose";
import dotenv from "dotenv";
import { Course } from "./models/course.model";

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || "";

mongoose
  .connect(MONGO_URI)
  .then(async () => {
    console.log("✅ Connected to MongoDB");

    // Sample data
    const courses = [
      { title: "React Basics", instructor: "Sudha Rani" },
      { title: "Node.js Fundamentals", instructor: "Amrutha" },
      { title: "MongoDB Deep Dive", instructor: "Kiran" },
    ];

    await Course.insertMany(courses);
    console.log("✅ Sample courses inserted");
    process.exit(0);
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  });
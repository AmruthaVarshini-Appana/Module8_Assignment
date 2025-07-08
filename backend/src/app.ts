import express, { Application } from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

// Import route handlers (routers)
import courseRoutes from "./routes/courseRoutes";
import enrollmentRoutes from "./routes/enrollmentRoutes"; // ✅ Correct default import

// Load environment variables from .env file
dotenv.config();

// Initialize Express app
const app: Application = express();

// Global Middlewares
app.use(cors());
app.use(express.json());

// API Endpoints
app.use("/api/courses", courseRoutes);      // GET all courses
app.use("/api/enroll", enrollmentRoutes);   // POST enroll, GET enrollments

// MongoDB Connection
const mongoURI: string | undefined = process.env.MONGO_URI;

if (!mongoURI) {
  console.error("❌ MONGO_URI is missing in .env file");
  process.exit(1);
}

mongoose
  .connect(mongoURI)
  .then(() => {
    console.log("✅ MongoDB connected successfully");
  })
  .catch((error: Error) => {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1);
  });

// Export Express app to be used by server.ts
export default app;
import mongoose, { Document, Schema } from "mongoose";

// Define the course structure
export interface ICourse extends Document {
  title: string;
  instructor: string;
}

const courseSchema: Schema = new Schema<ICourse>({
  title: { type: String, required: true },
  instructor: { type: String, required: true },
});

// Create and export the Course model
export const Course = mongoose.model<ICourse>("Course", courseSchema);
import mongoose, { Document, Schema } from "mongoose";

// Define the Enrollment interface
export interface IEnrollment extends Document {
  studentId: string;
  courseId: mongoose.Types.ObjectId;
}

const enrollmentSchema: Schema = new Schema<IEnrollment>({
  studentId: { type: String, required: true },
  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },
});

// Create and export the Enrollment model
export const Enrollment = mongoose.model<IEnrollment>("Enrollment", enrollmentSchema);
import { Request, Response } from "express";
import { Enrollment } from "../models/enrollment.model";
import { Course } from "../models/course.model";
import { io } from "../socket/socket";

// ✅ Update return type to Promise<Response>
export const enrollInCourse = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { studentId, courseId } = req.body;

    console.log("📥 Enroll request body:", req.body);

    if (!studentId || !courseId) {
      return res.status(400).json({ message: "Missing studentId or courseId" });
    }

    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    const existing = await Enrollment.findOne({ studentId, courseId });
    if (existing) {
      return res.status(400).json({ message: "Student already enrolled in this course" });
    }

    await Enrollment.create({ studentId, courseId });

    // Send real-time WebSocket notification
    io.emit("newEnrollment", {
      courseTitle: course.title,
    });

    return res.status(201).json({ message: "Enrollment successful" });
  } catch (error: any) {
    console.error("❌ Enrollment error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// ✅ Update return type to Promise<Response>
export const getEnrollmentsByUser = async (req: Request, res: Response): Promise<Response> => {
  try {
    const { userId } = req.params;

    const enrollments = await Enrollment.find({ studentId: userId }).populate({
      path: "courseId",
      select: "title instructor",
    });

    return res.json(enrollments);
  } catch (error: any) {
    console.error("❌ Fetch enrollments error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};


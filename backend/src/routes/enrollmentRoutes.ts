import { Router } from "express";
import {
  enrollInCourse,
  getEnrollmentsByUser,
} from "../controllers/enrollmentController";

const router = Router();

// POST /api/enroll - Enroll a student in a course
router.post("/", enrollInCourse);

// GET /api/enroll/:userId - Get all courses enrolled by a student
router.get("/:userId", getEnrollmentsByUser);

export default router;

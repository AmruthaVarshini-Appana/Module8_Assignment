import { Router } from "express";
import { getAllCourses } from "../controllers/courseController";

const router = Router();

// GET /api/courses - Fetch all available courses
router.get("/", getAllCourses);

export default router;
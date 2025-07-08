import { Request, Response } from "express";
import { Course } from "../models/course.model";

export const getAllCourses = async (_req: Request, res: Response) => {
  const courses = await Course.find();
  res.json(courses);
};
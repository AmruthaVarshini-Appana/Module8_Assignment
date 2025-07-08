import { useEffect, useState } from "react";
import axios from "axios";

interface Course {
  _id: string;
  title: string;
  instructor: string;
}

export default function CourseList() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch courses from backend
  const fetchCourses = async () => {
    try {
      setLoading(true);
      const res = await axios.get<Course[]>("http://localhost:5000/api/courses");
      setCourses(res.data);
    } catch (err: any) {
      setError("Failed to fetch courses.");
      console.error("Error fetching courses:", err);
    } finally {
      setLoading(false);
    }
  };

  // Enroll in a course
  const handleEnroll = async (courseId: string) => {
    try {
      await axios.post("http://localhost:5000/api/enroll", {
        studentId: "123", // Replace with actual login later
        courseId,
      });
      alert("✅ Enrollment successful");
      fetchCourses(); // Refresh course list
    } catch (err: any) {
      const message = err?.response?.data?.message || err.message || "Unknown error";
      alert("❌ Enrollment failed: " + message);
      console.error("Enrollment error:", message);
    }
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Available Courses</h2>

      {loading ? (
        <p className="text-gray-600 italic">Loading courses...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : courses.length === 0 ? (
        <p className="text-gray-500 italic">No courses available.</p>
      ) : (
        <div className="space-y-4">
          {courses.map((course) => (
            <div
              key={course._id}
              className="flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition p-4 rounded-lg shadow-sm border"
            >
              <div>
                <p className="font-medium text-lg text-gray-800">{course.title}</p>
                <p className="text-sm text-gray-500">Instructor {course.instructor}</p>
              </div>
              <button
                onClick={() => handleEnroll(course._id)}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                Enroll
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
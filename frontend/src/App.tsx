import CourseList from "./components/CourseList";
import Notifications from "./components/Notifications";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 px-6 py-12">
      <h1 className="text-4xl font-extrabold text-center mb-12">
        Course Enrollment and Notifications
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Course List Section */}
        <section className="bg-white p-6 rounded-2xl shadow-md border">
          <CourseList />
        </section>

        {/* Notifications Section */}
        <section className="bg-white p-6 rounded-2xl shadow-md border">
          <Notifications />
        </section>
      </div>
    </div>
  );
}

export default App;
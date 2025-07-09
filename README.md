## 📘 Module 8 Assignment: Course Enrollment and Notifications

This project implements a course enrollment system with real-time notifications for instructors. It includes:

* RESTful APIs for managing courses and enrollments
* A React-based frontend with course listing and enrollment
* WebSocket-based real-time notifications
* MongoDB database integration

---

## 📁 Folder Structure

```
Module8_Assignment/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── CourseList.tsx
│   │   │   └── Notifications.tsx
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   ├── socket.ts
│   │   └── routes/
│   │       └── routes.tsx (optional, if using routing)
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   ├── courseController.ts
│   │   │   └── enrollmentController.ts
│   │   ├── models/
│   │   │   ├── course.model.ts
│   │   │   └── enrollment.model.ts
│   │   ├── routes/
│   │   │   ├── courseRoutes.ts
│   │   │   └── enrollmentRoutes.ts
│   │   ├── socket/
│   │   │   └── socket.ts
│   │   ├── app.ts
│   │   └── server.ts
├── .env
├── package.json (x2 - one for backend, one for frontend)
```

---

## 🚀 Features

* 📝 **Students** can view and enroll in available courses.
* 🔔 **Instructors** get **real-time notifications** via WebSocket when someone enrolls.
* 🌐 Built with **React + TypeScript + Tailwind CSS**
* 🔧 Backend built using **Express.js + MongoDB + Mongoose + Socket.IO**
* 📡 API calls handled using **Axios**
* 📦 State management via **React Hooks**

---

## 🔧 Setup Instructions

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd Module8_Assignment
```

---

### 2. Setup the Backend

```bash
cd backend
npm install
```


✅ Seed the database (optional):

```bash
npx ts-node src/seed.ts
```

🚀 Start the backend server:

```bash
npm run dev
```

---

### 3. Setup the Frontend

```bash
cd ../frontend
npm install
npm run dev
```

Frontend will run on `http://localhost:5173`
Backend will run on `http://localhost:5000`

---

## 📌 Important APIs

| Method | Endpoint              | Description                         |
| ------ | --------------------- | ----------------------------------- |
| POST   | `/api/enroll`         | Enroll a student in a course        |
| GET    | `/api/enroll/:userId` | Get all courses enrolled by student |
| GET    | `/api/courses`        | Fetch all available courses         |

---

## 🧠 How Real-Time Notifications Work

* Backend uses **Socket.IO** to emit events when students enroll.
* Instructors receive these notifications live in the **Notifications panel** of the frontend.

---

## ✅ Completed Features
* Course list and enrollment UI

 * Dynamic API integration with Axios

 * WebSocket real-time instructor notifications

 * MongoDB database connection and models

 * Express backend with validation

 * Basic error handling

 * Proper modular folder structure

---

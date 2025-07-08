import { useEffect, useState } from "react";
import { socket } from "../socket";

export default function Notifications() {
  const [notifications, setNotifications] = useState<string[]>([]);

  useEffect(() => {
    const handleNewEnrollment = (data: { courseTitle: string }) => {
      setNotifications((prev) => [
        ...prev,
        `New student enrolled in *${data.courseTitle}*`,
      ]);
    };

    socket.on("newEnrollment", handleNewEnrollment);

    return () => {
      socket.off("newEnrollment", handleNewEnrollment);
    };
  }, []);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Notifications</h2>

      {notifications.length === 0 ? (
        <p className="italic text-gray-500">No notifications yet.</p>
      ) : (
        <ul className="space-y-3">
          {notifications.map((note, idx) => (
            <li key={idx} className="text-gray-800 text-base">
              {/* Render markdown-style italic */}
              {note.includes("*") ? (
                <span
                  dangerouslySetInnerHTML={{
                    __html: note.replace(/\*(.*?)\*/g, "<em>$1</em>"),
                  }}
                />
              ) : (
                note
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
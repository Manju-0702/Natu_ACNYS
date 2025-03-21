import { useState, useEffect } from "react";
import "./AnnouncementBar.css";

const announcements = [
  "🎉 Admissions open for 2025-26!",
  "📢 New courses added to the curriculum.",
  "📅 Upcoming seminar on AI & ML on March 30th.",
];

export default function AnnouncementBar() {
  const [currentAnnouncement, setCurrentAnnouncement] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAnnouncement((prev) => (prev + 1) % announcements.length);
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="announcement-bar">
      <p className="announcement-text">{announcements[currentAnnouncement]}</p>
    </div>
  );
}

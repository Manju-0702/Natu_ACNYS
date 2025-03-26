import { useState, useEffect } from "react";
import "./AnnouncementBar.css";

const announcements = [
  "🎉 Admissions open for 2025-26! Apply now!",
  "📢 Exciting new courses added to our curriculum.",
  "📅 Don't miss our AI & ML seminar on March 30th. Register today!",
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
      <div className="marquee-container">
        <p className="announcement-text">{announcements[currentAnnouncement]}</p>
      </div>
    </div>
  );
}

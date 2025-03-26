import { useState, useEffect } from "react";
import "./AnnouncementBar.css";

const announcements = [
  "🎉 Be REady for The biggest rivelry ON March 28 ",
  "📢 RCB vs CSK",
  "📅 Upcoming seminar on AI & ML on March 30th.",
];

export default function AnnouncementBar() {
  const [currentAnnouncement, setCurrentAnnouncement] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAnnouncement((prev) => (prev + 1) % announcements.length);
    }, 3000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="announcement-bar">
      <p className="announcement-text">{announcements[currentAnnouncement]}</p>
    </div>
  );
}

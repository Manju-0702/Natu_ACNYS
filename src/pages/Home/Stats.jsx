import React, { useEffect, useState } from "react";
import { FaGraduationCap, FaHourglassHalf, FaAward } from "react-icons/fa";
import "./Stats.css";

const Stats = () => {
  const statsData = [
    { icon: <FaAward />, end: 120, label: "Degree Programs" },
    { icon: <FaHourglassHalf />, end: 43, label: "Years of Excellence" },
    { icon: <FaGraduationCap />, end: 14000, label: "Graduates" },
  ];

  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    const duration = 1500; // Animation duration (ms)
    let startTime = null;

    function animateCount(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      setCounts(statsData.map((stat) => Math.floor(stat.end * progress)));

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      }
    }

    requestAnimationFrame(animateCount);
  }, []);

  return (
    <div className="stats-container">
      <div className="stats-row">
        {statsData.map((stat, index) => (
          <div key={index} className="stat">
            <div className="icon">{stat.icon}</div>
            <h1>{counts[index].toLocaleString()}+</h1>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stats;

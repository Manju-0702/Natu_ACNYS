import React, { useEffect, useState } from 'react';
import './Stats.css';

const Stats = () => {
  const [count, setCount] = useState({ programs: 0, years: 0, graduates: 0 });

  useEffect(() => {
    let start = { programs: 0, years: 0, graduates: 0 };
    const end = { programs: 120, years: 43, graduates: 14000 };
    const duration = 1500;
    let startTime;

    function animateCount(timestamp) {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);

      setCount({
        programs: Math.floor(start.programs + (end.programs - start.programs) * progress),
        years: Math.floor(start.years + (end.years - start.years) * progress),
        graduates: Math.floor(start.graduates + (end.graduates - start.graduates) * progress),
      });

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      }
    }

    requestAnimationFrame(animateCount);
  }, []);

  return (
    <div className="stats-container">
      <h2>Alva's College of Naturopathy and Yogic Science</h2>
      <div className="stats-row">
        <div className="stat">
          <h1>{count.programs}+</h1>
          <p>Degree Programs</p>
        </div>
        <div className="stat">
          <h1>{count.years}+</h1>
          <p>Years of Excellence</p>
        </div>
        <div className="stat">
          <h1>{count.graduates.toLocaleString()}+</h1>
          <p>Graduates</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;

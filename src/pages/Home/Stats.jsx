import React, { useEffect, useState } from 'react';
import './Stats.css';

const Stats = () => {
  const [count, setCount] = useState({ programs: 0, years: 0, graduates: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => ({
        programs: prev.programs < 120 ? prev.programs + 2 : 120,
        years: prev.years < 43 ? prev.years + 1 : 43,
        graduates: prev.graduates < 10000 ? prev.graduates + 200 : 10000,
      }));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="stats-container">
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
  );
};

export default Stats;

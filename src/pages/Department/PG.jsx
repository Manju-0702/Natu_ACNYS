import React from 'react';
import './PG.css';

const PG = () => {
  return (
    <div className="pg-container">
      <div className="pg-banner">
        <h1>Postgraduate Programs</h1>
      </div>
      <div className="pg-content">
        <p>
          Our postgraduate programs offer advanced learning in naturopathy and yogic sciences. 
          Students gain in-depth knowledge, research opportunities, and hands-on experience.
        </p>
        <h2>Available PG Courses:</h2>
        <ul>
          <li>Master in Yoga Therapy</li>
          <li>MD in Naturopathy</li>
        </ul>
      </div>
    </div>
  );
};

export default PG;

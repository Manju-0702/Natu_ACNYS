import React from "react";
import "./Achievement.css"; // Import the external CSS
import img1 from "../../../assets/1 (1).jpg"
import img2 from "../../../assets/2.jpg"
import img3 from "../../../assets/3.jpg"

const posters = [
  img1,
  img2,
  img3,
  // Add more image paths here
];

const Achievement = () => {
  return (
    <div className="achievement-container">
      <h1 className="achievement-title">Achievements</h1>
      <div className="poster-grid">
        {posters.map((poster, index) => (
          <div key={index} className="poster-card">
            <img
              src={poster}
              alt={`Achievement ${index + 1}`}
              className="poster-image"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievement;         

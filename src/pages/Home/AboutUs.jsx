import React from 'react';
import { useNavigate } from 'react-router-dom';
import './AboutUs.css';
import campus1 from '../../assets/Campus1.png';
import campus2 from '../../assets/Campus2.png';
import campus3 from '../../assets/Campus1.png'; // New Image
import campus4 from '../../assets/Campus2.png'; // New Image

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <div className="about-us-container">
      <div className="about-us-content">
        {/* Images Section */}
        <div className="about-us-images">
          <img src={campus1} alt="Campus View 1" className="about-image hover-effect" />
          <img src={campus2} alt="Campus View 2" className="about-image hover-effect" />
          <img src={campus3} alt="Campus View 3" className="about-image hover-effect" />
          <img src={campus4} alt="Campus View 4" className="about-image hover-effect" />
        </div>

        {/* Text Section */}
        <div className="about-us-text">
          <h2>About Us</h2>
          <p>
            Alva’s College of Naturopathy and Yogic Science is a vision of philanthropist 
            and connoisseur, Dr. M. Mohan Alva. It came into its nascent existence in 
            the year 2003. Today, within a short span, it has catapulted into an epitome 
            of quality education in the field of naturopathy and yogic sciences, 
            rivalling the best institutions in the country.
          </p>
          <p>
            It is also an abode of rich cultural and traditional extravaganza of the country, 
            as it has a vibrant mix of students from across the country and abroad, who 
            cherish every moment of their stay here.
          </p>
          <button className="read-more-btn" onClick={() => navigate('/about/acnys')}>
            Read More...
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
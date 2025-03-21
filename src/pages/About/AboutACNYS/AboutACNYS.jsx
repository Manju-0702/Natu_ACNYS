import React from 'react';
import './AboutACNYS.css';
import img1 from '../../../assets/Campus1.png';
 

const About = () => {
  return (
    <div>
      <div className="about-banner">
        <h1>About Us</h1>
      </div>
      <div className="about-container">
        <img src={img1} alt="Campus" />
        <div className="about-content">
          <h2>About ACNYS</h2>
          <p className="about-text">
            Alva’s College of Naturopathy and Yogic Science is a vision of philanthropist and connoisseur, Dr. M. Mohan Alva. 
            It came into its nascent existence in the year 2003. Today, within a short span, it has catapulted into an epitome of 
            quality education in the field of naturopathy and yogic sciences, rivaling the best institutions in the country. 
            It is also an abode of rich cultural and traditional extravaganza of the country, as it has a vibrant mix of students 
            from across the country and abroad, who cherish every moment of their stay here.
          </p>
          <p className="about-text">
            Moodbidri is a bustling temple town with an air of progressiveness on the long winding NH-13, 35 km from the coastal 
            town of Mangalore. Richly laden with coconut palms and exotic flora, it is a picture-perfect destination tucked away 
            in the green valleys down the scenic west. It is also known for its easygoing and highly literate population.
          </p>
        </div>
      </div>

      

    </div>
  );
}

export default About;

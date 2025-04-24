import React from "react";
import "./FastingNutrition.css";
import faculty1 from "../../../../assets/user.webp";
import faculty2 from "../../../../assets/user.webp";


const facultyData = [
  {
    id: 1,
    name: "Dr. Subramanya Padyana", 
    image: faculty1,
    designation: "Professor",
    qualification: "BSC , BAMS, DNHE , MD AYU",
    yoe:"17 Years",
    // mobile: "+91 98765 43210",
    email: "harish.nayak@example.com"
  },
  {
    id: 2,
    name: "Dr. Rajini S",
    image: faculty2,
    designation: "Lecturer",
    qualification: "BNYS , Naturopathy",
    yoe:"1 Year",
    // mobile: "+91 87654 32109",
    email: "jane.smith@example.com"
  },
  

  
  
];

const Anatomy = () => {
  return (
    <div>
      <div className="FastingNutrition-banner">
        <h1>Fasting , Dietetics, Nutrition and Medicinal Herbs</h1>
      </div>

      <div className="FastingNutrition-container">
        <p className="description">
          Welcome to the Anatomy department! This course covers the fundamentals of human anatomy.
        </p>
        
        <div className="faculty-grid">
          {facultyData.map((faculty) => (
            <div key={faculty.id} className="faculty-card">
              <div className="card-inner">
                {/* Front Side */}
                <div className="card-front">
                  <img src={faculty.image} alt={faculty.name} className="faculty-image" />
                  <div className="faculty-info">
                    <h3 className="faculty-name">{faculty.name}</h3>
                    <p className="faculty-designation">{faculty.designation}</p>
                  </div>
                </div>

                {/* Back Side */}
                <div className="card-back">
                  <div className="faculty-back-details">
                    <h3 className="faculty-back-name">{faculty.name}</h3>
                    <p className="faculty-back-designation">{faculty.designation}</p>
                    <p className="faculty-back-qualification"><strong>Qualification:</strong> {faculty.qualification}</p>
                    <p className="faculty-back-yoe"><strong>YOE:</strong> {faculty.yoe}</p>
                    {/* <p className="faculty-back-mobile"><strong>Mobile:</strong> {faculty.mobile}</p> */}
                    <p className="faculty-back-email"><strong>Email:</strong> {faculty.email}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Anatomy;

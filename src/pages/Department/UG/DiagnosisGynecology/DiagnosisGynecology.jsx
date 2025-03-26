import React from "react";
import "./DiagnosisGynecology.css";
import faculty1 from "../../../../assets/anatomy1.jpg";
import faculty2 from "../../../../assets/diagnosis1.webp";

const facultyData = [
  {
    id: 1,
    name: "Dr. Vasantha T", 
    image: faculty1,
    designation: "Professor",
    qualification: "MBBS, MD",
    yoe: "16 Years",
    mobile: "+91 98765 43210",
    email: "harish.nayak@example.com"
  },
  {
    id: 2,
    name: "Dr. Hana Shetty",
    image: faculty2,
    designation: "Assistant Professor",
    qualification: "MBBS , MD(OBG)",
    yoe: "6 Years",
    mobile: "+91 87654 32109",
    email: "jane.smith@example.com"
  },
];

const Anatomy = () => {
  return (
    <div>
      <div className="DiagnosisGynecology-banner">
        <h1>Modern Diagnosis and Obstetrics and gynecology</h1>
      </div>

      <div className="DiagnosisGynecology-container">
        <div className="about-department">
          <h2>About Department</h2>
          <p>
            The Anatomy Department is dedicated to providing comprehensive education 
            in human anatomy, fostering research, and encouraging innovation in the field.
          </p>
        </div>

        <h2 className="faculty-heading">Our Faculty</h2>

        <div className="faculty-grid">
          {facultyData.map((faculty) => (
            <div key={faculty.id} className="faculty-card">
              <div className="card-inner">
                <div className="card-front">
                  <img src={faculty.image} alt={faculty.name} className="faculty-image" />
                  <div className="faculty-info">
                    <h3 className="faculty-name">{faculty.name}</h3>
                    <p className="faculty-designation">{faculty.designation}</p>
                  </div>
                </div>
                <div className="card-back">
                  <div className="faculty-back-details">
                    <h3 className="faculty-back-name">{faculty.name}</h3>
                    <p className="faculty-back-designation">{faculty.designation}</p>
                    <p className="faculty-back-qualification"><strong>Qualification:</strong> {faculty.qualification}</p>
                    <p className="faculty-back-yoe"><strong>YOE:</strong> {faculty.yoe}</p>
                    <p className="faculty-back-mobile"><strong>Mobile:</strong> {faculty.mobile}</p>
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

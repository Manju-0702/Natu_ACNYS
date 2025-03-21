import React from "react";
import "./clinical.css";
import faculty1 from "../../../../assets/clinical1.jpg";
import faculty2 from "../../../../assets/clinical2.jpg";
import faculty3 from "../../../../assets/clinical3.jpg";
import faculty4 from "../../../../assets/clinical4.jpg";


const facultyData = [
  {
    id: 1,
    name: "Dr. Prajna P Shetty", 
    image: faculty1,
    designation: "Associate Professor",
    qualification: "BNYS, MD Naturopathy",
    yoe:"13 Years",
    mobile: "+91 98765 43210",
    email: "harish.nayak@example.com"
  },
  {
    id: 2,
    name: "Dr. Akshatha",
    image: faculty2,
    designation: "Lecturer",
    qualification: "BNYS",
    yoe:"4 Years",
    mobile: "+91 87654 32109",
    email: "jane.smith@example.com"
  },
  {
    id: 3,
    name: "Dr. Greeshma Vivek Alva",
    image: faculty3,
    designation: "Lecturer",
    qualification: "BNYS",
    yoe:"1 Year",
    mobile: "+91 76543 21098",
    email: "emily.brown@example.com"
  },
  {
    id: 4,
    name: "Dr. Saritha N K",
    image: faculty4,
    designation: "Assisstant Professor",
    qualification: "BNYS",
    yoe:"6 Years",
    mobile: "+91 76543 21098",
    email: "emily.brown@example.com"
  },
  {
    id: 5,
    name: "Dr. Saritha N K",
    image: faculty4,
    designation: "Assisstant Professor",
    qualification: "BNYS",
    mobile: "+91 76543 21098",
    email: "emily.brown@example.com"
  },
  {
    id: 6,
    name: "Dr. Saritha N K",
    image: faculty4,
    designation: "Assisstant Professor",
    qualification: "BNYS",
    mobile: "+91 76543 21098",
    email: "emily.brown@example.com"
  },
  {
    id: 7,
    name: "Dr. Saritha N K",
    image: faculty4,
    designation: "Assisstant Professor",
    qualification: "BNYS",
    mobile: "+91 76543 21098",
    email: "emily.brown@example.com"
  },
  {
    id: 8,
    name: "Dr. Saritha N K",
    image: faculty4,
    designation: "Assisstant Professor",
    qualification: "BNYS",
    mobile: "+91 76543 21098",
    email: "emily.brown@example.com"
  },
];

const Anatomy = () => {
  return (
    <div>
      <div className="clinical-banner">
        <h1>Clinical Naturopathy Diagnosis and Research Methodology</h1>
      </div>

      <div className="clinical-container">
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

import React from "react";
import "./Clinical.css";
import faculty1 from "../../../../assets/anatomy1.jpg";
import faculty2 from "../../../../assets/anatomy2.jpg";
import faculty3 from "../../../../assets/anatomy2.jpg";
import faculty4 from "../../../../assets/clinical4.jpg";
import faculty5 from "../../../../assets/clinical1.jpg";
import faculty6 from "../../../../assets/clinical3.jpg";
import faculty7 from "../../../../assets/clinical2.jpg";
import faculty8 from "../../../../assets/anatomy2.jpg";

const facultyData = [
  {
    id: 1,
    name: "Dr. Shankar Shetty", 
    image: faculty1,
    designation: "Professor",
    qualification: "BSc , MLT, MSC(MED), PHD",
    yoe: "15 Years",
    mobile: "+91 98765 43210",
    email: "harish.nayak@example.com"
  },
  {
    id: 2,  
    name: "Dr. Padmanabha Shenoy",
    image: faculty2,
    designation: "Professor",
    qualification: "BNYS",
    yoe: "13 Years",
    mobile: "+91 87654 32109",
    email: "jane.smith@example.com"
  },
  {
    id: 3,
    name: "Dr. Lakshmeesha D R",
    image: faculty3,
    designation: "Associate Professor",
    qualification: "BNYS, MD Naturopathy",
    yoe: "9 Years",
    mobile: "+91 87654 32109",
    email: "jane.smith@example.com"
  },
  {
    id: 4,
    name: "Dr. Saritha N K",
    image: faculty4,
    designation: "Assistant Professor",
    qualification: "BNYS",
    yoe: "6 Years",
    mobile: "+91 87654 32109",
    email: "jane.smith@example.com"
  },
  {
    id: 5,
    name: "Dr. Prajna P shetty",
    image: faculty5,
    designation: "Associate Professor",
    qualification: "BNYS, MD Naturopathy",
    yoe: "13 Years",
    mobile: "+91 87654 32109",
    email: "jane.smith@example.com"
  },
  {
    id: 6,
    name: "Dr. Greeshma Vivek Alva",
    image: faculty6,
    designation: "Lecturer",
    qualification: "BNYS",
    yoe: "1 Year",
    mobile: "+91 87654 32109",
    email: "jane.smith@example.com"
  },
  {
    id: 7,
    name: "Dr. Akshatha",
    image: faculty7,
    designation: "Lecturer",
    qualification: "BNYS",
    yoe: "4 Years",
    mobile: "+91 87654 32109",
    email: "jane.smith@example.com"
  },
  {
    id: 8,
    name: "Dr. Audrey Pinto",
    image: faculty8,
    designation: " Professor",
    qualification: "MA , PhD",
    yoe: "20 Years",
    mobile: "+91 87654 32109",
    email: "jane.smith@example.com"
  },
];

const Anatomy = () => {
  return (
    <div>
      <div className="Acupunture-banner">
        <h1>Clinical Naturopathy Diagnosis and Research methodology</h1>
      </div>

      <div className="Acupunture-container">
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

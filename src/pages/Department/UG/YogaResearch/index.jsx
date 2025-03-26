import React from "react";
import "./YogaResearch.css";
import faculty1 from "../../../../assets/yoga1.jpeg";
import faculty2 from "../../../../assets/user.webp";
import faculty3 from "../../../../assets/yoga3.jpg";
import faculty4 from "../../../../assets/yoga4.jpg";
const facultyData = [
  {
    id: 1,
    name: "Dr. Archana ", 
    image: faculty1,
    designation: "Professor",
    qualification: "BNYS , MD YOGA",
    yoe: "15 Years",
    mobile: "+91 98765 43210",
    email: "harish.nayak@example.com"
  },
  {
    id: 2,
    name: "Dr. Swathi K V",
    image: faculty2,
    designation: "Associate Professor",
    qualification: "BNYS.MD YOGA",
    yoe: "12 Years",
    mobile: "+91 87654 32109",
    email: "jane.smith@example.com"
  },
  {
    id: 3,
    name: "Dr. Anupritha", 
    image: faculty3,
    designation: "Assistant Professor",
    qualification: "BAMS, MSc Yoga",
    yoe: "8 Years",
    mobile: "+91 98765 43210",
    email: "harish.nayak@example.com"
  },
  {
    id: 4,
    name: "Dr. Sharada", 
    image: faculty4,
    designation: "Assistant Professor",
    qualification: "BNYS, MD Yoga",
    yoe: "2 Years",
    mobile: "+91 98765 43210",
    email: "harish.nayak@example.com"
  },

];

const Anatomy = () => {
  return (
    <div>
      <div className="YogaResearch-banner">
        <h1>Department of Yoga and Research Methodology</h1>
      </div>

      <div className="YogaResearch-container">
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

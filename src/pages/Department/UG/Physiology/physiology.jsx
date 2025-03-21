import React from "react";
import "./physiology.css";
import faculty1 from "../../../../assets/clinical1.jpg";
import faculty2 from "../../../../assets/physio1.jpg";
import faculty3 from "../../../../assets/clinical3.jpg";
import faculty4 from "../../../../assets/clinical4.jpg";


const facultyData = [
  {
    id: 1,
    name: "Dr. Mamatha G", 
    image: faculty1,
    designation: "Professor",
    qualification: "MBBS, DA",
    yoe:"19 Years",
    mobile: "+91 98765 43210",
    email: "harish.nayak@example.com"
  },
  {
    id: 2,
    name: "Mr. Arshad",
    image: faculty2,
    designation: "Assistant Pprofessor",
    qualification: "M.sc Biochemistry",
    yoe:"5 Years",
    mobile: "+91 87654 32109",
    email: "jane.smith@example.com"
  },

];

const Anatomy = () => {
  return (
    <div>
      <div className="physiology-banner">
        <h1>Physiology and Biochemistry</h1>
      </div>

      <div className="physiology-container">
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

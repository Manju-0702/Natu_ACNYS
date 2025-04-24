import React from "react";
import "./Clinical.css";
import faculty1 from "../../../../assets/clinical6.jpeg";
import faculty2 from "../../../../assets/user.webp";
import faculty3 from "../../../../assets/clinical5.jpeg";
import faculty4 from "../../../../assets/clinical4.jpg";
import faculty5 from "../../../../assets/clinical1.jpg";
import faculty6 from "../../../../assets/clinical3.jpg";
import faculty7 from "../../../../assets/clinical2.jpg";
import faculty8 from "../../../../assets/user.webp";

const facultyData = [
  {
    id: 1,
    name: "Dr. Shankar Shetty", 
    image: faculty1,
    designation: "Professor",
    qualification: "BSc , MLT, MSC(MED), PHD",
    yoe: "15 Years",
    // mobile: "+91 98765 43210",
    email: "harish.nayak@example.com"
  },
  {
    id: 2,  
    name: "Dr. Padmanabha Shenoy",
    image: faculty2,
    designation: "Professor",
    qualification: "BNYS",
    yoe: "13 Years",
    // mobile: "+91 87654 32109",
    email: "jane.smith@example.com"
  },
  {
    id: 3,
    name: "Dr. Lakshmeesha D R",
    image: faculty3,
    designation: "Associate Professor",
    qualification: "BNYS, MD Naturopathy",
    yoe: "9 Years",
    // mobile: "+91 87654 32109",
    email: "jane.smith@example.com"
  },
  {
    id: 4,
    name: "Dr. Saritha N K",
    image: faculty4,
    designation: "Assistant Professor",
    qualification: "BNYS",
    yoe: "6 Years",
    // mobile: "+91 87654 32109",
    email: "jane.smith@example.com"
  },
  {
    id: 5,
    name: "Dr. Prajna P shetty",
    image: faculty5,
    designation: "Associate Professor",
    qualification: "BNYS, MD Naturopathy",
    yoe: "13 Years",
    // mobile: "+91 87654 32109",
    email: "jane.smith@example.com"
  },
  {
    id: 6,
    name: "Dr. Greeshma Vivek Alva",
    image: faculty6,
    designation: "Lecturer",
    qualification: "BNYS",
    yoe: "1 Year",
    // mobile: "+91 87654 32109",
    email: "jane.smith@example.com"
  },
  {
    id: 7,
    name: "Dr. Akshatha",
    image: faculty7,
    designation: "Lecturer",
    qualification: "BNYS",
    yoe: "4 Years",
    // mobile: "+91 87654 32109",
    email: "jane.smith@example.com"
  },
  {
    id: 8,
    name: "Dr. Audrey Pinto",
    image: faculty8,
    designation: " Professor",
    qualification: "MA , PhD",
    yoe: "20 Years",
    // mobile: "+91 87654 32109",
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
          The Department of Manipulative Therapies and Physical Medicine focuses on the use of hands-on
techniques and physical interventions to treat musculoskeletal pain, injuries, and disorders. Manipulative
therapies include various manual techniques like chiropractic adjustments, osteopathy, and therapeutic
massage, aimed at improving joint mobility, reducing pain, and restoring normal function. These
therapies are often used for conditions such as back pain, neck pain, and joint stiffness.
Physical medicine involves the use of physical methods such as exercise, heat therapy, cold therapy,
ultrasound, electrical stimulation, and hydrotherapy to treat and rehabilitate individuals with
musculoskeletal injuries, neurological conditions, or disabilities. This department emphasizes non-
invasive, holistic approaches to healing and rehabilitation, aiming to improve physical function, reduce
pain, and enhance the quality of life. Students in this department are trained to assess, diagnose, and treat
physical impairments using manual and physical modalities, supporting overall health and mobility.
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

import React from "react";
import "./Anatomy.css";
import faculty1 from "../../../../assets/anatomy1.jpg";
import faculty2 from "../../../../assets/anatomy2.jpg";

const facultyData = [
  {
    id: 1,
    name: "Dr. Harish Nayak",
    image: faculty1,
    designation: "Professor",
    qualification: "MBBS, MS",
    yoe: "22 Years",
    email: "harish.nayak@example.com"
  },
  {
    id: 2,
    name: "Dr. Manu Bhat",
    image: faculty2,
    designation: "Professor",
    qualification: "BHMS.MD HOMEO",
    yoe: "13 Years",
    email: "jane.smith@example.com"
  },
];

const Anatomy = () => {
  return (
    <div>
      <div className="anatomy-banner">
        <h1>Anatomy Department</h1>
      </div>

      <div className="anatomy-container">
        <div className="department container">
          <h2>About Department</h2>
          <p>
            The Physiology and Biochemistry departments are essential pillars of medical and health sciences
            education, providing students with a deep understanding of the functional and chemical processes of the
            human body. The Physiology Department focuses on how the human body functions, covering various
            systems such as cardiovascular, respiratory, nervous, endocrine, and muscular systems. It helps students
            understand how organs and systems work individually and in coordination to maintain life, emphasizing
            homeostasis and the body's responses to internal and external changes. Practical sessions and experiments
            further enhance students’ grasp of physiological mechanisms through hands-on learning.
            <br /><br />
            The Biochemistry Department deals with the chemical processes and substances that occur within the
            body. It explores the structure and function of biomolecules like proteins, carbohydrates, lipids, nucleic
            acids, and enzymes, along with metabolic pathways and their relevance to health and disease. By
            understanding biochemistry, students can link molecular-level changes to physiological functions and
            clinical conditions. Both departments are well-equipped with modern laboratories, instruments, and
            experienced faculty to facilitate interactive learning and research. Together, they build a strong scientific
            foundation that supports clinical understanding and medical practice.
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

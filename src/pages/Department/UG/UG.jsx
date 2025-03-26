import React from "react";
import { Link } from "react-router-dom";
import { FaFlask, FaHeartbeat, FaMicroscope, FaBrain, FaDna } from "react-icons/fa"; // Import Icons
import "./UG.css";
import { path } from "framer-motion/client";

const courses = [
  { name: "Anotomy", path: "/department/ug/anatomy", icon: <FaFlask /> },
  { name: "Physiology and Biochemistry", path: "/department/ug/physiology", icon: <FaHeartbeat /> },
  { name: "Pathology and Microbiology", path: "/department/ug/pathology", icon: <FaMicroscope /> },
  { name: "Manipulative Therapies and Physical", path: "/department/ug/manipulative-therapies", icon: <FaBrain /> },
  { name: "Forensic Medicine and Toxicology, Pharmacology", path: "/department/ug/forensic-medicine", icon: <FaDna /> },
  { name: "Department of Yoga and Research Methodology", path: "/department/ug/yoga-research", icon: <FaBrain /> },
  { name: "Acupuncture and Acupressure, Color and Magneto Biology", path: "/department/ug/acupuncture", icon: <FaHeartbeat /> },
  { name: "Fasting, Dietetics, Nutrition and Medicinal Herbs", path: "/department/ug/fasting-nutrition", icon: <FaFlask /> },
  { name: "Modern Diagnosis and Obstetrics and Gynecology", path: "/department/ug/modern-diagnosis", icon: <FaMicroscope /> },
  { name: "Department of Hydrotherapy and Mud Therapy", path: "/department/ug/hydrotherapy", icon: <FaBrain /> },
  { name: "Clinical Naturopathy Diagnosis and Research Methodology", path: "/department/ug/clinical-naturopathy", icon: <FaDna /> },
  { name: "Psychology Allied Health Sciences", path: "/department/ug/psychology", icon: <FaHeartbeat /> },
  { name: "Community Medicine", path: "/department/ug/community", icon: <FaFlask /> }, // Added Community Medicine
];


const UG = () => {
  return (
    <div className="ug-container">
      <div className="ug-banner">
        <h1>Undergraduate Programs</h1>
      </div>
      <div className="ug-content">
        <p>
          Our undergraduate programs focus on holistic education in naturopathy and yogic sciences.
          We aim to provide a well-rounded curriculum that blends traditional knowledge with modern science.
          Our curriculum enables the students to play the role of an effective naturopathic practitioner and fulfill the responsibilities of a medical graduate in both rural & urban environment confidently & competently.
          Education without character & discipline is futile, especially in the medical field. Our institution emphasizes character building along with academic learning.
        </p>
        <h2>Available UG Courses:</h2>
        <div className="ug-grid">
          {courses.map((course, index) => (
            <Link key={index} to={course.path} className="ug-card">
              <div className="ug-icon">{course.icon}</div>
              <p>{course.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UG;

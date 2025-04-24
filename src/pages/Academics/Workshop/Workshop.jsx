import React from "react";
import "./Workshop.css";
import img1 from '../../../assets/2.jpg'

const workshops = [
  {
    title: "YOGA AND MENTAL HEALTH",
    date: "09/08/2024",
    venue: "YOGA HALL",
    image: img1, // Add actual image path
    organizer: "ALVAS COLLEGE OF NATUROPATHY AND YOGIC SCIENCES",
    supporter: "ALVAS EDUCATION FOUNDATION",
    purpose:
      "Integrate ancient wisdom with modern mental health practices, helping students develop emotional resilience, self-discipline, and inner peace.",
    participants: "Undergraduates and Postgraduates",
    resource: {
      name: "Dr. Hemanth Bhargav",
      designation:
        "MBBS, Diploma Community Mental Health, MD YOGA & Rehab, PhD Yoga, Associate Professor of Yoga, Dept. of Integrative Medicine, 12 years post MD",
    },
    summary:
      "The session explored mental well-being through Yoga, Bhagavad Gita, Patanjali’s Yoga Sutras, and Upanishads. Organized by Dr. Vanitha Shetty.",
  },
  {
    title: "NATUROPATHY DIAGNOSIS",
    date: "07/08/2024",
    venue: "YOGA HALL",
    image: "/images/naturopathy-diagnosis.jpg",
    organizer: "ALVAS COLLEGE OF NATUROPATHY AND YOGIC SCIENCES",
    supporter: "ALVAS EDUCATION FOUNDATION",
    purpose:
      "Equip students with foundational knowledge in diagnosing health conditions using naturopathic principles with holistic assessment techniques.",
    participants: "Undergraduates",
    resource: {
      name: "Dr. Titty George",
      designation:
        "BNYS, MSc, E-MBA, Assistant Professor at The School of Yoga and Naturopathic Medicine, S-VYASA University, HOD of Naturopathy Diagnosis and OBG",
    },
    summary:
      "Focused on Iris, facial, and pulse diagnosis. Delivered insights into recognizing natural indicators for underlying health conditions.",
  },
  {
    title: "FLOWER THERAPY",
    date: "06/02/2025",
    venue: "YOGA HALL",
    image: "/images/flower-therapy.jpg",
    organizer: "ALVAS COLLEGE OF NATUROPATHY AND YOGIC SCIENCES",
    supporter: "ALVAS EDUCATION FOUNDATION",
    purpose:
      "Promote emotional well-being and relaxation through flower therapy using vibrational healing and holistic perspectives.",
    participants: "Undergraduates and Postgraduates",
    resource: {
      name: "Mr. Vishal Sukhatankar",
      designation:
        "Founder, Emotional Healer, Bach Flower Therapist, Sound Healer, Life Coach at Ekom Soul",
    },
    summary:
      "Covered vibrational healing, Dr. Edward Bach’s remedies, and stress-relief approaches like Rescue Remedy. Organized by Dr. Vanitha Shetty.",
  },
  {
    title:
      "SCIENCE & SPIRITUALITY (Spiritual Significance of Anatomy and Health in Ancient Texts)",
    date: "05/03/2025",
    venue: "SEMINAR HALL",
    image: "/images/science-spirituality.jpg",
    organizer: "ALVAS COLLEGE OF NATUROPATHY AND YOGIC SCIENCES",
    supporter: "ALVAS EDUCATION FOUNDATION",
    purpose:
      "Bridge science with spiritual wisdom using Vedas, Gita, Hatha Yoga, etc., to understand the body, mind, and disease holistically.",
    participants: "Undergraduates and Postgraduates",
    resource: {
      name: "Dr. Manjunath Gururaj",
      designation:
        "BAMS, D.N.Y, MS, Sr. Associate Professor, Division of Yoga-Spirituality, S-VYASA University",
    },
    summary:
      "UG session on body-spirit connection; PG session on health/disease concepts in Vedas, Gita, Hatha Yoga, PYS, and Yoga Vasistha.",
  },
];

const Workshop = () => {
  return (
    <div className="workshop-container">
      <h1>Workshops</h1>
      {workshops.map((w, idx) => (
        <div className="workshop-card" key={idx}>
          <img src={w.image} alt={w.title} className="workshop-image" />
          <div className="workshop-info">
            <h2>{w.title}</h2>
            <p><strong>Date:</strong> {w.date}</p>
            <p><strong>Venue:</strong> {w.venue}</p>
            <p><strong>Organized by:</strong> {w.organizer}</p>
            <p><strong>Supported by:</strong> {w.supporter}</p>
            <p><strong>Purpose:</strong> {w.purpose}</p>
            <p><strong>Participants:</strong> {w.participants}</p>
            <p><strong>Resource Person:</strong> {w.resource.name}</p>
            <p><strong>Designation:</strong> {w.resource.designation}</p>
            <p><strong>Summary:</strong> {w.summary}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Workshop;

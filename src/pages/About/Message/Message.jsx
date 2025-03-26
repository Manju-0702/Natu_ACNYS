import React from "react";
import "./Message.css";
import chairmanImg from '../../../assets/Message.jpeg';  
import message from '../../../assets/Message1.jpeg';
import trustee1 from '../../../assets/trustee1.webp';
import trustee2 from '../../../assets/trustee2.jfif';
import trustee3 from '../../../assets/diagnosis1.webp';
import trustee4 from '../../../assets/clinical3.jpg';
import trustee5 from '../../../assets/Message1.jpeg';

const Management = () => {
  return (
    <div>
      <div className="about-banner">
        <h1>Messages</h1>
      </div>

      <div className="message fade-in">
        <img src={chairmanImg} alt="Chairman" />
        <div className="message-content">
          <h2>Chairman Message</h2>
          <h4>- Dr. M. Mohan Alva</h4>
          <p>
            "Alva's Education Foundation®.was conceived and founded by the visionary chairman Dr. M. Mohan Alva, a physician by profession and philanthropist by heart. Alva's Education Foundation is dream realized by Dr. M. Mohan Alva to impart quality education. Dr. Alva's dynamist, foresight, simplicity, goodwill, righteousness and his conviction that education lies at the root of all social progress are the guiding forces behind establishing the foundation which came into being in 1995 with a few institutions affiliated to Rajiv Gandhi University of Health Science Bangalore. Today he has a vast array of institutions in various disciplines where long awaited social transformation is becoming a reality. Alva's Education Foundation (R.) is synonymous with discipline, punctuality, humility and fulfillment."
          </p>
        </div>
      </div>

      <div className="message fade-in">
        <img src={message} alt="Principal" />
        <div className="message-content">
          <h2>Principal Message</h2>
          <h4>- Dr. Vanitha S. Shetty</h4>
          <p>
            "Naturopathy is an eclectic alternative medical system that focuses on natural remedies and the body's vital ability to heal and maintain itself.
            
            Yoga is the science of right living. It works in all aspects of a person, the physical, mental, emotional, vital and spiritual levels. Yoga is the means of balancing the body, mind and emotion. Hence yoga & Naturopathy help to maintain Physical harmony and mental health."
          </p>
        </div>
      </div>

      <div className="trustees-section">
        <h2>Management Trustees</h2>
        <div className="trustees-grid">
          <div className="trustee">
            <img src={trustee1} alt="Trustee 1" />
            <h4>Dr. Vinay Alva</h4>
          </div>
          <div className="trustee">
            <img src={trustee2} alt="Trustee 2" />
            <h4>Mr. Vivek Alva</h4>
          </div>
          <div className="trustee">
            <img src={trustee3} alt="Trustee 3" />
            <h4>Dr. Hana Shetty</h4>
          </div>
          <div className="trustee">
            <img src={trustee4} alt="Trustee 4" />
            <h4>Dr. Greeshma Vivek Alva</h4>
          </div>
          <div className="trustee">
            <img src={trustee5} alt="Trustee 5" />
            <h4>Trustee Name 5</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Management;

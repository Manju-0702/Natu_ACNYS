import { useState } from "react";
import "./Contact.css";

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div>
      {/* Banner Section */}
      <div className="contact-banner">
        <h1>Contact Us</h1>
      </div>

      <div className="contact-grid">
        {/* Contact Form */}
        <div className="contact-form">
          <h2>Get in Touch</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" onChange={handleChange} required />
            <input type="email" name="email" placeholder="Your Email" onChange={handleChange} required />
            <input type="text" name="subject" placeholder="Subject" onChange={handleChange} required />
            <textarea name="message" rows="4" placeholder="Your Message" onChange={handleChange} required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="contact-info">
          <h2>Contact Information</h2>
          <p><strong>College Name:</strong> Alva's College of Naturopathy & Yogic Science</p>
          <p><strong>Address:</strong> Mijar,Moodbdiri-574225 Mangalore, D.K Karnataka.</p>
          <p><strong>Phone:</strong> 08258 – 238104 – 238111 (8 Lines), 238637, 262142</p>
          <p><strong>Email:</strong> admission@alvas.org / acnys@alvas.org / info@alvas.org</p>
        </div>
      </div>

      {/* Google Map */}
      <div className="contact-map">
        <iframe
          title="College Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3264.65694643415!2d74.96681607415532!3d13.02169371377986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba4aa09b9b09575%3A0xc86c714f74a3e3f3!2sAlva&#39;s%20College%20Of%20Naturopathy%20And%20Yogic%20Sciences!5e1!3m2!1sen!2sus!4v1742363889957!5m2!1sen!2sus"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

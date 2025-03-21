import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import './Footer.css'; // Import the CSS file
import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Column 1: Logo and About */}
        <div className="footer-column">
          <img src={logo} alt="Naturopathy College Logo" className="footer-logo" />
          <p className="footer-about">
            Welcome to Alva's Naturopathy & Yogic Science, a place where nature meets science. We are dedicated to empowering students with holistic health knowledge and practices.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-column">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Departments</a></li>
            <li><a href="#">Anatomy</a></li>
            <li><a href="#">Life@ACNYS</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* Column 3: Contact Information */}
        <div className="footer-column">
          <h4 className="footer-heading">Contact Us</h4>
          <ul className="footer-adress">
            <li>Moodbidri – 574227, D. K. Dist., Karnataka, India.</li>
            <li>Phone: 08258 – 238104 – 238111 (8 Lines), 238637, 262142</li>
            <li>Email: admission@alvas.org / acnys@alvas.org / info@alvas.org</li>
          </ul>
        </div>

        {/* Column 4: Social Media */}
        <div className="footer-column">
          <h4 className="footer-heading">Follow Us</h4>
          <div className="social-icons">
            <a href="#" className="social-icon" style={{ marginRight: '25px' }}><FaFacebookF /></a>
            <a href="#" className="social-icon" style={{ marginRight: '25px' }}><FaTwitter /></a>
            <a href="#" className="social-icon" style={{ marginRight: '25px' }}><FaInstagram /></a>
            <a href="#" className="social-icon"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Column 5: Google Map */}
        <div className="footer-column">
          <h4 className="footer-heading">Our Location</h4>
          <div className="footer-map">
            <iframe
              title="Alva's Naturopathy & Yogic Science Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3264.65694643415!2d74.96681607415532!3d13.02169371377986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba4aa09b9b09575%3A0xc86c714f74a3e3f3!2sAlva&#39;s%20College%20Of%20Naturopathy%20And%20Yogic%20Sciences!5e1!3m2!1sen!2sus!4v1742363889957!5m2!1sen!2sus"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Alva's Naturopathy & Yogic Science. All Rights Reserved. | Privacy Policy | Terms of Service
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="back-to-top">
          Back to Top
        </button>
      </div>
    </footer>
  );
};

export default Footer;

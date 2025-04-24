import React from 'react';
import logo from '../../assets/logo.png';
import './TopBar.css';

const Header = () => {
  return (
    <header className="header">
      <div className="main-header">
        <div className="logo-container">
          <img 
            src={logo}
            alt="Alvas Law College Logo"
            className="logo"
          />
        </div>

        <div className="contact-inf">
          <div className="contact-left">
            <span>📞 College Office: 08258 – 238104 – 238111</span>
            <span>📞 Fax: 08258 – 236731</span>
            {/* <span>📞 9035255086</span> */}

           
              <span>✉️ <a href="mailto:lawcollege@alvascollege.com">admission@alvas.org / acnys@alvas.org / info@alvas.org</a></span>
              {/* <span>✉️ <a href="mailto:principal@alvascollege.com">principal@alvascollege.com</a></span> */}
            
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

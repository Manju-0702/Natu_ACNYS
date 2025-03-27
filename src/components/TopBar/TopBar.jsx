import React from "react";
import "./TopBar.css";
import logo from '../../assets/logoo.png'

const TopBar = () => {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <img src={logo} alt="Alva's Logo" className="topbar-logo" />
        <span className="topbar-title"></span>
      </div>
      <div className="topbar-center">
        <div className="topbar-info">
          <span><strong>College Office:</strong> 9448915155, 9606044275</span>
          <span><strong>Admission Office:</strong> 6366377825, 6366377827</span>
        </div>
        <div className="topbar-info">
          <span><strong>Email Us:</strong> principal@alvaspucollege.org</span>
        </div>
      </div>
      <div className="topbar-right">
        <button className="enquire-btn">Enquire Now!</button>
      </div>
    </div>
  );
};

export default TopBar;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdowns, setDropdowns] = useState({
    about: false,
    department: false,
  });

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setDropdowns({ about: false, department: false });
  };

  const handleMouseEnter = (name) => {
    setDropdowns({ ...dropdowns, [name]: true });
  };

  const handleMouseLeave = (name) => {
    setDropdowns({ ...dropdowns, [name]: false });
  };

  return (
    <div className='navbar'>
      <div className='menu-icon' onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <nav className={menuOpen ? 'open' : ''}>
        <ul>
          <li><Link to="/" onClick={toggleMenu}>Home</Link></li>

          {/* About Dropdown */}
          <li 
            className='dropdown' 
            onMouseEnter={() => handleMouseEnter('about')} 
            onMouseLeave={() => handleMouseLeave('about')}
          >
            <span className="dropdown-title">About ▾</span>
            <ul className={`dropdown-menu ${dropdowns.about ? 'show' : ''}`}>
              <li><Link to="/about/acnys" onClick={toggleMenu}>About ACNYS</Link></li>
              <li><Link to="/about/messages" onClick={toggleMenu}>Messages</Link></li>
              <li><Link to="/about/vision-mission" onClick={toggleMenu}>Vision & Mission</Link></li>
            </ul>
          </li>

          {/* Department Dropdown */}
          <li 
            className='dropdown' 
            onMouseEnter={() => handleMouseEnter('department')} 
            onMouseLeave={() => handleMouseLeave('department')}
          >
            <span className="dropdown-title">Department ▾</span>
            <ul className={`dropdown-menu ${dropdowns.department ? 'show' : ''}`}>
              <li><Link to="/department/ug" onClick={toggleMenu}>UG</Link></li>
              <li><Link to="/department/pg" onClick={toggleMenu}>PG</Link></li>
            </ul>
          </li>

          <li><Link to="/academics" onClick={toggleMenu}>Academics</Link></li>
          <li><Link to="/anandamaya" onClick={toggleMenu}>Anandamaya</Link></li>
          <li><Link to="/ACNYS" onClick={toggleMenu}>Life@ACNYS</Link></li>
          <li><Link to="/contact" onClick={toggleMenu}>Contact Us</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Navbar = () => {
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false);

  const handleMoreDropdownToggle = () => {
    setIsMoreDropdownOpen((prevState) => !prevState);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">AgroMinds...</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/"><i className="fas fa-home"></i> Home</Link></li>
        <li><Link to="/crops"><i className="fas fa-seedling"></i> Crops</Link></li>
        <li><Link to="/agri"><i className="fas fa-user-tie"></i> Experts</Link></li>
        <li><Link to="/fertilizer"><i className="fas fa-flask"></i> Fertilizer</Link></li>
        <li><Link to="/about"><i className="fas fa-info-circle"></i> About</Link></li>

        {/* More Dropdown */}
        <li 
          className="dropdown" 
          onMouseEnter={handleMoreDropdownToggle}
          onMouseLeave={handleMoreDropdownToggle}
        >
          <span className="dropbtn"><i className="fas fa-ellipsis-h"></i> More</span>
          {isMoreDropdownOpen && (
            <div className="dropdown-content">
              <Link to="/schemes"><i className="fas fa-hand-holding-usd"></i> Schemes</Link>
              <Link to="/products"><i className="fas fa-box"></i> Products</Link>
            </div>
          )}
        </li>
        <li><Link to="/login"><i className="fas fa-sign-in-alt"></i> Login</Link></li>
        <li><Link to="/register"><i className="fas fa-user-plus"></i> SignUp</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;

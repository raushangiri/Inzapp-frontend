import React, { useState } from "react";
import "../App.css"; // Ensure you have styles in a CSS file
import logo2 from '../Asset/logo2.png'
import { Link} from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for dropdown

  return (
    <div className="header2">
      <img className="logo-light-png2" src={logo2} alt="Logo"style={{height:"auto"}} />
      <div className="ul-menu-main-menu">
       <div className="home-us2 "> <Link to="/" className="text-decoration-none text-reset" style={{  color: "#ffffff !important;"
}}>Home</Link></div>
        <div className="about-us2">About Us</div>
        
        {/* Services Dropdown */}
        <div className="span4">
          <div className="our-services" onClick={() => setIsOpen(!isOpen)}>
            Our Services
            <div className="span-after2"></div>
          </div>
          
          
          {/* Dropdown Content */}
          {isOpen && (
            <div className="dropdown">
              <div className="dropdown-item">Service 1</div>
              <div className="dropdown-item">Service 2</div>
              <div className="dropdown-item">Service 3</div>
            </div>
          )}
        </div>

        <div className="work-with-us2">Work with Us</div>
        <Link to="/login"><div className="blog"> Login / Sign Up</div></Link>
      </div>
      <div className="button3">
        <div className="button-before3"></div>
        <div className="get-in-touch2">Get In Touch</div>
      </div>
    </div>
  );
};

export default Navbar;

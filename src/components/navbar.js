import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import "./navbar.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import resume from '../assets/Resume.pdf';


function Navbar() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const closeMenu = () => {
    setMenuActive(false);
  };

  return (

    <>
    <section>
    <div className="container-fluid">
      <nav className="nav-wrapper">
        <div className="nav-content">
          <h3 className="logo mb-0">UZAIR</h3>

          <button className="menu-btn" onClick={toggleMenu}>
            <i className={`bi ${menuActive ? "bi-x" : "bi-list"}`}></i>
          </button>

          <ul className={`mb-0 ${menuActive ? "active" : ""}`}>
            <li>
              <a href="#home" onClick={closeMenu}>Home</a>
            </li>
            <li>
              <a href="#about" onClick={closeMenu}>About</a>
            </li>
            <li>
              <a href="#skills" onClick={closeMenu}>Skills</a>
            </li>
            <li>
              <a href="#work-experience" onClick={closeMenu}>Work Experience</a>
            </li>
            <li>
              <a href="#contact" onClick={closeMenu}>Contact</a>
            </li>
            <li>
              <a href={resume} download onClick={closeMenu}>
                <Button variant="secondary">My Resume <i className="bi bi-download"></i></Button>
              </a>
            </li>
            <a href="mailto:uzairiftikhar24636@example.com">
              <Button variant="dark" className="contact-btn" onClick={closeMenu}>
                Hire me
              </Button>
            </a>
          </ul>
        </div>
      </nav>
    </div>
    </section>
    </>
  );
}

export default Navbar;

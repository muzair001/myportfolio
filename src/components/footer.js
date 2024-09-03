import React from "react";
import resume from "../assets/Resume.pdf";
import "bootstrap-icons/font/bootstrap-icons.css";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <footer className="bg-primary text-white mt-3 py-4">
      <div className="container">
        <div className="row">

          {/* Company Info Section */}
          <div className="col-12 col-sm-6 col-lg-4 col-sm-12 col-xs-12 mb-3 mb-lg-0">
            <img
              src={logo}
              className="img-fluid rounded-circle mb-3  text-center"
              alt="company logo"
              width={150}
              height={150}
            />
            <h2>Programmer</h2>
            <p className="align-items-start">
              I made websites in React.js using Bootstrap and component-based
              projects, and also used useState hooks in this portfolio.
            </p>
          </div>

          {/* Social Media Section */}
          <div className="col-12 col-lg-4 col-sm-6 mt-4 col-sm-12 col-xs-12 align-item-center mb-lg-0 ">
            <h4><b>Social Media Connections</b></h4>
            <nav className="d-flex flex-column align-items-start">
              <a
                href="https://www.linkedin.com/in/uzair-iftikhar-079238240"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white mb-2"
              >
                <i className="bi bi-linkedin"></i> LinkedIn
              </a>
              <a
                href="https://x.com/Uzair_zani?s=09"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white mb-2"
              >
                <i className="bi bi-twitter"></i> Twitter
              </a>
              <a
                href="https://x.com/Uzair_zani?s=09"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white mb-2"
              >
                <i className="bi bi-instagram"></i> Instagram
              </a>
              <a href={resume} className="text-white mb-2" download>
                <i className="bi bi-download"></i> Resume
              </a>
            </nav>
          </div>

          {/* Contact Section */}
          <div className="col-12 col-lg-4 col-xs-12 mt-4 text-center text-md-start text-lg-start">
            <h4>Contact us!</h4>
            <p className="align-items-start">
              <i className="bi bi-envelope"></i> uzairiftikhar24636@gmail.com
            </p>
            <p className="align-items-start">
              <i className="bi bi-telephone"></i> +923370186038
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

import React from "react";
import react from "../assets/react.png";
import html from "../assets/html.png";
import css from "../assets/CSS.png";
import js from "../assets/JS.jfif";
import database from "../assets/database.png";
import bootstrap from "../assets/bootstrapp.jfif";
import github from "../assets/github.png";
import combine from "../assets/combine.PNG";

const Skills = () => {
  return (
    <>
      <section id="skills">
        <div className="container-fluid">
          <h2 className="mt-4 fw-bold">Technical Skills</h2>
          <div className="row item-center skills-gallery">
            <div className="col-lg-3 col-md-6 col-4 text-sm-center text-center">
              <img
                src={html}
                className="img-fluid mt-3 rounded-circle"
                alt="Responsive"
              />
              
                <h4>HTML</h4>
             
            </div>

            <div className="col-lg-3 col-md-6 col-4 text-sm-center text-center">
              <img
                src={css}
                className="img-fluid mt-3 rounded-circle"
                alt="Responsive"
              />
             
                <h4>CSS</h4>
              
            </div>
            <div className="col-lg-3 col-md-6 col-4 text-sm-center text-center">
              <img
                src={js}
                className="img-fluid mt-3 rounded-circle"
                alt="Responsive"
              />
              
                <h4>JavaScript</h4>
              
            </div>
            <div className="col-lg-3 col-md-6 col-4 text-sm-center text-center">
              <img
                src={react}
                className="img-fluid mt-3 rounded-circle"
                alt="Responsive"
              />
             
                <h4>React</h4>
              
            </div>

            <div className="col-lg-3 col-md-6 col-4 mt-3 text-sm-center text-center">
              <img
                src={bootstrap}
                className="img-fluid rounded "
                alt="responisve"
              />
             
                <h4>BootStrap</h4>
              
            </div>
            <div className="col-lg-3 col-md-6 col-4 mt-3 text-sm-center text-center">
              <img
                src={database}
                className="img-fluid rounded "
                alt="responisve"
              />
             
                <h4>DataBases</h4>
              
            </div>
            <div className="col-lg-3 col-md-6 col-4  mt-3 text-sm-center text-center">
              <img
                src={github}
                className="img-fluid rounded "
                alt="responisve"
              />
              
                <h4>GitHub</h4>
              
            </div>
            <div className="col-lg-3 col-md-6 col-4 mb-6 mt-3 d-flex  flex-column text-sm-center text-center">
              <img
                src={combine}
                className="img-fluid rounded "
                alt="responisve"
              />
              
                <h4>C++&Java</h4>
              
            </div>

            <h2 className="mt-4">
              <b> Soft-Skills</b>
            </h2>

            <div className="col-lg-3 col-md-6 col-sm-12 bullet mt-3 mb-3 text-center">
              <h4> Problem Solving</h4>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 mt-3 mb-3 text-center">
              <h4> Communication </h4>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 mt-3 mb-3 text-center">
              <h4> LeaderShip</h4>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 mt-3 mb-3 text-center">
              <h4> Team-work</h4>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 bullet mt-3 mb-3 text-center">
              <h4> Time Management</h4>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 mt-3 mb-3 text-center">
              <h4> Critical Thinking </h4>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 mt-3 mb-3 text-center">
              <h4> Adabtability</h4>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 mt-3 mb-5 text-center">
              <h4> Work Ethic</h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Skills;

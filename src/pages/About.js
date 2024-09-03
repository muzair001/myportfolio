import React from "react";
import img from "../assets/images.jpg"
const About = () => {
  return (
    <>
      <section id="about">
        <div className="container-fluid">
          <div className="row item-center">
            <h3 className="mt-4 mb-4"><b>About me</b></h3>
           
            <div className="col-lg-6 col-sm-12 d-flex align-items-center"> 
              <img src={img} className="img-fluid" alt="show-image"/>

            </div>
            <div className="col-lg-6 col-sm-12 mt-4 text-justify justify-content-center text-lg-start">
              <p>
                
              I am an aspiring software developer with a strong foundation in
              front-end development, particularly in ReactJS. During my recent
              internship, I had the opportunity to work on real-world projects,
              where I applied my developing skills in coding, problem-solving,
              and collaboration to contribute to the creation of engaging web
              applications.I am now seeking a software development position
              where I can further enhance my skills, learn from experienced
              professionals.Collaborated with a team of developers to build
              responsive and user-friendly web applications using React.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;

import React from "react";
import MyImg from "../assets/uzair.png";

const Home = () => {
  return (
    <>
      <section id="home">
        <div className="container-fluid">
          <div className="row items-center">
            <div className="col-6 col-sm-6 d-flex align-items-center justify-content-center mt-3 ">
              Im a Front End Developer with Strong fundamentalof HTML, CSS,
              BootStrap, Node Modules also work in React.js
            </div>
            <div className="col-6 col-sm-6
             mt-4">
              <img src={MyImg} className="img-fluid thumbnail" alt="img" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

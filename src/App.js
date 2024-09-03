import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer"
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import WorkExperience from "./pages/Workexperience";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      
        
       <Navbar />
      <Home />
      <About />
      <Skills />
      <WorkExperience />
      <Contact />
      <Footer />
     
      
    </>
  );
}

export default App;

import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Contact from '../pages/Contact';
import About from "../pages/About";
import Skills from "../pages/Skills";
import Workexperience from "../pages/Workexperience";
import transition from ""

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/work-experience" element={<Workexperience />} />
      <Route path="/contact" element={<Contact />} />    
    </Routes>
  );
}

export default Router;

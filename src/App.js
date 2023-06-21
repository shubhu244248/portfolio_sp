import React from 'react';
// import { Switch } from 'react-router-dom';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Education from './components/pages/Education';
import Skills from './components/pages/Skills';
import Experience from './components/pages/Experience';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
// import Navbar from './components/common/Navbar';
import backgroundImage from "./components/image/Background4.jpg";
// import AppBanner from './components/common/AppBanner';


function App() {
  return (
    <Router>
      <div className=" bg-scroll bg-cover"
        style={{ backgroundImage: `url(${backgroundImage})` }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Home from './pages/Home';
import About from './pages/About';
import Personal from './pages/Personal';
import Business from './pages/Business';
import Wealth from './pages/Wealth';
import Links from './pages/Links';
import Contact from './pages/Contact'; 
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/personal" element={<Personal />} />
        <Route path="/business" element={<Business />} />
        <Route path="/wealth" element={<Wealth />} />
        <Route path="/links" element={<Links />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer /> 
    </Router>
  );
};

export default App;


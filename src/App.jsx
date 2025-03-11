import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; import Navbar2 from './components/Navbar2';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Product from './components/Product';
import Pulses from './components/Pulses';
import Spices from './components/Spices';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <>
    
    <Router>
      <ScrollToTop></ScrollToTop>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/spices" element={<Spices />} />
        <Route path="/pulses" element={<Pulses />} />
        
      </Routes>
    </Router>
    </>
  );
};

export default App;

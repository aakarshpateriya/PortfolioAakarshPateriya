import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './navbar.jsx';
import './navbar.css';
import Footer from './footer.jsx';
import Certifications from './pages/Certifications.jsx';
import Home from './pages/Home.jsx';
import Skills from './pages/Skills.jsx';
import Contact from './pages/Contact.jsx';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

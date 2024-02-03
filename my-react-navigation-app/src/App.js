// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import './App.css'; // Import the CSS file

const App = () => {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link home">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link about">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

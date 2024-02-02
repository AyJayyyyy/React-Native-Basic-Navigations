// src/components/Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/Navigation.css'; // Import the CSS file for styling

const Navigation = () => {
  return (
    <div className="navigation-container">
      <div className="home-container">
        <Link to="/">Home</Link>
      </div>
      <div className="about-container">
        <Link to="/about">About</Link>
      </div>
      <div className="feedback-container">
        <Link to="/feedback">Feedback</Link>
      </div>
    </div>
  );
};

export default Navigation;

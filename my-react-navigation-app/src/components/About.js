// src/components/About.js
import React from 'react';

const About = () => {
    const containerStyle = {
      textAlign: 'center',
      margin: '50px auto',
      padding: '20px',
      maxWidth: '600px',
      border: '1px solid #ddd',
      borderRadius: '5px',
      backgroundColor: '#fff',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    };

  return (
    <div style={containerStyle}>
      <h2>About</h2>
      <p>This is the about page.</p>
    </div>
  );
};

export default About;

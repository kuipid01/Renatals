// PulseLoader.js
import React from 'react';
import './PulseLoader.css'; // Import the styles

const PulseLoader = () => {
  return (
    <div className="pulse-loader">
      <div className="pulse"></div>
      <div className="pulse"></div>
      <div className="pulse"></div>
    </div>
  );
};

export default PulseLoader;

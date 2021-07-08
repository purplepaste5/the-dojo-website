import React from 'react';
import './style.css';

const DojoExplanation = ({ children, title, description }) => {
  return (
    <div className="explanation-text-container">
      <div className="explanation-text-header">{title}</div>
      <div className="explanation-text">{description}</div>
    </div>
  );
};

export default DojoExplanation;

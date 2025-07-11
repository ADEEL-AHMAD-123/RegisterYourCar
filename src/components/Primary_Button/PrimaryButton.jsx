import React from 'react';
import './PrimaryButton.scss';

const PrimaryButton = ({ children, onClick, className = '', ...props }) => {
  return (
    <button
      className={`primary-btn ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;

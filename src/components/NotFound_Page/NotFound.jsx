import React from 'react';
import './NotFound.scss';
import { FaExclamationTriangle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../components/Primary_Button/PrimaryButton';

const NotFound = () => {
  return (
    <section className="not-found page-container">
      <div className="not-found-wrapper">
        <FaExclamationTriangle className="icon" />
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/">
          <PrimaryButton>Go Back Home</PrimaryButton>
        </Link>
      </div>
    </section>
  );
};

export default NotFound;

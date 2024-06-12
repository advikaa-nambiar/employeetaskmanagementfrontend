import React from 'react';
import { useLocation } from 'react-router-dom';
import './displaypage.css';

const DisplayPage = () => {
  const location = useLocation();
  const { name } = location.state;

  return (
    <div className="display-container">
      <h1>Welcome, {name}!</h1>
    </div>
  );
};

export default DisplayPage;

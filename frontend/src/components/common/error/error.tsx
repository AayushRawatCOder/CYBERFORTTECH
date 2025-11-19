import React from 'react';
import './ErrorPage.scss';

const ErrorPage: React.FC = () => {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className="error-page">
      <div className="error-container">
        <div className="warning-icon">
          <div className="triangle">
            <span className="exclamation">!</span>
          </div>
        </div>
        
        <h1 className="error-title">ERROR</h1>
        
        <p className="error-message">
          Oopss!! We are running with some problem.
          <br />
          Please come back to us in some time.
        </p>
        
        <button className="reload-button" onClick={handleReload}>
          RELOAD
        </button>
      </div>
      
      <div className="footer">
        <span className="logo">Cyberfort TECH</span>
      </div>
      
      <div className="decorative-lines top-lines">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="line"></div>
        ))}
      </div>
      
      <div className="decorative-lines bottom-lines">
        {[...Array(20)].map((_, i) => (
          <div key={i} className="line"></div>
        ))}
      </div>
    </div>
  );
};

export default ErrorPage;
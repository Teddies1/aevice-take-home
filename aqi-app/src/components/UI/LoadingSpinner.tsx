import React from 'react';
import '../../styles/LoadingSpinner.css';

interface LoadingSpinnerProps {
  message?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  message = 'Loading air quality data...' 
}) => {
  return (
    <div className="loading-spinner" role="status" aria-live="polite">
      <div className="spinner" aria-hidden="true"></div>
      <span className="loading-message">{message}</span>
    </div>
  );
};

export default LoadingSpinner;
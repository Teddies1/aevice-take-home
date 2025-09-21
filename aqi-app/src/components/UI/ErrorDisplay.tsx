import React from 'react';
import '../../styles/ErrorDisplay.css';

interface ErrorDisplayProps {
  error: string;
  onRetry?: () => void;
}

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ error, onRetry }) => {
  return (
    <div className="error-display" role="alert">
      <div className="error-icon" aria-hidden="true">⚠️</div>
      <h3 className="error-title">Oops! Something went wrong</h3>
      <p className="error-message">{error}</p>
      {onRetry && (
        <button 
          className="retry-button" 
          onClick={onRetry}
          type="button"
        >
          Try Again
        </button>
      )}
    </div>
  );
};

export default ErrorDisplay;
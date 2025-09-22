import React, { useState } from 'react';
import '../styles/CitySearch.css';

interface CitySearchProps {
  onSearch: (cityName: string) => void;
  isLoading: boolean;
}

const CitySearch: React.FC<CitySearchProps> = ({ onSearch, isLoading }) => {
  const [cityName, setCityName] = useState('');
  const [error, setError] = useState('');

  const validateInput = (value: string): string => {
    if (!value.trim()) {
      return 'Please enter a city name';
    }
    if (value.trim().length < 2) {
      return 'City name must be at least 2 characters long';
    }
    if (!/^[a-zA-Z\s,.-]+$/.test(value.trim())) {
      return 'City name can only contain letters, spaces, commas, periods, and hyphens';
    }
    return '';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationError = validateInput(cityName);
    
    if (validationError) {
      setError(validationError);
      return;
    }
    
    setError('');
    onSearch(cityName.trim());
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCityName(value);
    
    if (error && value.trim()) {
      setError('');
    }
  };

  return (
    <div className="city-search">
      <form onSubmit={handleSubmit} className="search-form">
        <div className="input-group">
          <label htmlFor="city-input" className="search-label">
            Enter City Name
          </label>
          <input
            id="city-input"
            type="text"
            value={cityName}
            onChange={handleInputChange}
            placeholder="e.g., New York, London, Tokyo"
            className={`search-input ${error ? 'error' : ''}`}
            disabled={isLoading}
            aria-describedby={error ? 'search-error' : undefined}
            autoComplete="off"
          />
          {error && (
            <div id="search-error" className="error-message" role="alert">
              {error}
            </div>
          )}
        </div>
        <button
          type="submit"
          className="search-button"
          disabled={isLoading || !cityName.trim()}
        >
          {isLoading ? 'Searching...' : 'Get Air Quality'}
        </button>
      </form>
    </div>
  );
};

export default CitySearch;

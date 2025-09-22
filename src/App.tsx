import { useState } from 'react';
import './styles/App.css';
import CitySearch from './components/CitySearch';
import AQIDisplay from './components/AQIDisplay';
import LoadingSpinner from './components/UI/LoadingSpinner';
import ErrorDisplay from './components/UI/ErrorDisplay';
import { geocodingAPI, airPollutionAPI } from './services/api';
import { processAQIData } from './utils/aqiUtils';
import { AQIData } from './types/aqi';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [aqiData, setAqiData] = useState<AQIData | null>(null);
  const [error, setError] = useState<string>('');
  const [currentCity, setCurrentCity] = useState<string>('');

  const handleSearch = async (cityName: string) => {
    setIsLoading(true);
    setError('');
    setAqiData(null);

    try {
      const geocodingResponse = await geocodingAPI.getCityCoordinates(cityName);
      const { lat, lon, name, country } = geocodingResponse[0];
      
      const pollutionResponse = await airPollutionAPI.getAirPollution(lat, lon);
      const processedData = processAQIData(pollutionResponse);
      
      setAqiData(processedData);
      setCurrentCity(`${name}, ${country}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const handleRetry = () => {
    if (currentCity) {
      const cityNameOnly = currentCity.split(',')[0];
      handleSearch(cityNameOnly);
    }
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1>Air Quality Index Monitor</h1>
        <p>Get real-time air quality information for any city worldwide</p>
      </header>
      
      <main className="app-main">
        <CitySearch onSearch={handleSearch} isLoading={isLoading} />
        
        {isLoading && <LoadingSpinner />}
        
        {error && !isLoading && (
          <ErrorDisplay error={error} onRetry={currentCity ? handleRetry : undefined} />
        )}
        
        {aqiData && !isLoading && !error && (
          <AQIDisplay aqiData={aqiData} cityName={currentCity} />
        )}
      </main>
      
      <footer className="app-footer">
        <p>Data provided by OpenWeatherMap API</p>
      </footer>
    </div>
  );
}

export default App;

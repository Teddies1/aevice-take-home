import React from 'react';
import { AQIData } from '../types/aqi';
import '../styles/AQIDisplay.css';

interface AQIDisplayProps {
  aqiData: AQIData;
  cityName: string;
}

const AQIDisplay: React.FC<AQIDisplayProps> = ({ aqiData, cityName }) => {
  const formatPollutantValue = (value: number, unit: string = 'μg/m³') => {
    return `${value.toFixed(1)} ${unit}`;
  };

  return (
    <div className="aqi-display">
      <div className="aqi-header">
        <h2 className="city-name">{cityName}</h2>
        <div className="aqi-main" style={{ borderColor: aqiData.color }}>
          <div className="aqi-value" style={{ color: aqiData.color }}>
            {aqiData.aqi}
          </div>
          <div className="aqi-category" style={{ backgroundColor: aqiData.color }}>
            {aqiData.category}
          </div>
        </div>
      </div>

      <div className="main-pollutant">
        <h3>Main Pollutant</h3>
        <span className="pollutant-name">{aqiData.mainPollutant}</span>
      </div>

      <div className="health-recommendation">
        <h3>Health Recommendation</h3>
        <p>{aqiData.healthRecommendation}</p>
      </div>

      <div className="pollutant-details">
        <h3>Pollutant Concentrations</h3>
        <div className="pollutant-grid">
          <div className="pollutant-item">
            <span className="pollutant-label">PM2.5</span>
            <span className="pollutant-value">
              {formatPollutantValue(aqiData.components.pm2_5)}
            </span>
          </div>
          <div className="pollutant-item">
            <span className="pollutant-label">PM10</span>
            <span className="pollutant-value">
              {formatPollutantValue(aqiData.components.pm10)}
            </span>
          </div>
          <div className="pollutant-item">
            <span className="pollutant-label">NO2</span>
            <span className="pollutant-value">
              {formatPollutantValue(aqiData.components.no2)}
            </span>
          </div>
          <div className="pollutant-item">
            <span className="pollutant-label">SO2</span>
            <span className="pollutant-value">
              {formatPollutantValue(aqiData.components.so2)}
            </span>
          </div>
          <div className="pollutant-item">
            <span className="pollutant-label">O3</span>
            <span className="pollutant-value">
              {formatPollutantValue(aqiData.components.o3)}
            </span>
          </div>
          <div className="pollutant-item">
            <span className="pollutant-label">CO</span>
            <span className="pollutant-value">
              {formatPollutantValue(aqiData.components.co)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AQIDisplay;
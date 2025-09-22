import { AirPollutionResponse, AQIData, AQI_CATEGORIES } from '../types/aqi';

export const processAQIData = (data: AirPollutionResponse): AQIData => {
  const pollutionData = data.list[0];
  const aqi = pollutionData.main.aqi;
  const components = pollutionData.components;
  
  // Determine main pollutant based on highest concentration relative to WHO guidelines
  const pollutantLevels: Record<string, number> = {
    'PM2.5': components.pm2_5,
    'PM10': components.pm10,
    'NO2': components.no2,
    'SO2': components.so2,
    'O3': components.o3,
    'CO': components.co
  };
  
  const mainPollutant = Object.entries(pollutantLevels).reduce((max, [pollutant, level]) => {
    return level > pollutantLevels[max] ? pollutant : max;
  }, 'PM2.5');
  
  const category = AQI_CATEGORIES[aqi as keyof typeof AQI_CATEGORIES];
  
  return {
    aqi,
    mainPollutant,
    category: category.label,
    color: category.color,
    healthRecommendation: category.healthRecommendation,
    components
  };
};
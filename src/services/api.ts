import axios from 'axios';
import { GeocodingResponse, AirPollutionResponse } from '../types/aqi';

const API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org';

if (!API_KEY) {
  console.warn('OpenWeatherMap API key not found. Please set REACT_APP_OPENWEATHER_API_KEY in your environment variables.');
}

export const geocodingAPI = {
  async getCityCoordinates(cityName: string): Promise<GeocodingResponse[]> {
    try {
      const response = await axios.get(
        `${BASE_URL}/geo/1.0/direct`,
        {
          params: {
            q: cityName,
            limit: 1,
            appid: API_KEY
          }
        }
      );
      
      if (response.data.length === 0) {
        throw new Error('City not found. Please check the spelling and try again.');
      }
      
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 401) {
          throw new Error('Invalid API key. Please check your OpenWeatherMap API configuration.');
        }
        if (error.response?.status === 404) {
          throw new Error('City not found. Please check the spelling and try again.');
        }
        throw new Error('Failed to fetch city coordinates. Please try again.');
      }
      throw error;
    }
  }
};

export const airPollutionAPI = {
  async getAirPollution(lat: number, lon: number): Promise<AirPollutionResponse> {
    try {
      const response = await axios.get(
        `${BASE_URL}/data/2.5/air_pollution`,
        {
          params: {
            lat,
            lon,
            appid: API_KEY
          }
        }
      );
      
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response?.status === 401) {
          throw new Error('Invalid API key. Please check your OpenWeatherMap API configuration.');
        }
        throw new Error('Failed to fetch air pollution data. Please try again.');
      }
      throw error;
    }
  }
};
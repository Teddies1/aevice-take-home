export interface GeocodingResponse {
  name: string;
  lat: number;
  lon: number;
  country: string;
  state?: string;
}

export interface AirPollutionResponse {
  coord: {
    lon: number;
    lat: number;
  };
  list: [
    {
      main: {
        aqi: number;
      };
      components: {
        co: number;
        no: number;
        no2: number;
        o3: number;
        so2: number;
        pm2_5: number;
        pm10: number;
        nh3: number;
      };
      dt: number;
    }
  ];
}

export interface AQIData {
  aqi: number;
  mainPollutant: string;
  category: string;
  color: string;
  healthRecommendation: string;
  components: {
    co: number;
    no: number;
    no2: number;
    o3: number;
    so2: number;
    pm2_5: number;
    pm10: number;
    nh3: number;
  };
}

export const AQI_CATEGORIES = {
  1: {
    label: 'Good',
    color: '#4CAF50',
    healthRecommendation: 'Air quality is satisfactory and poses little to no health risk.'
  },
  2: {
    label: 'Fair',
    color: '#FFEB3B',
    healthRecommendation: 'Air quality is acceptable for most people, though sensitive individuals may experience minor issues.'
  },
  3: {
    label: 'Moderate',
    color: '#FF9800',
    healthRecommendation: 'Members of sensitive groups may experience health effects. The general public is less likely to be affected.'
  },
  4: {
    label: 'Poor',
    color: '#F44336',
    healthRecommendation: 'Some members of the general public may experience health effects; members of sensitive groups may experience more serious health effects.'
  },
  5: {
    label: 'Very Poor',
    color: '#9C27B0',
    healthRecommendation: 'Health alert: The risk of health effects is increased for everyone. Avoid outdoor activities.'
  }
} as const;
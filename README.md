# Air Quality Index Monitor

A React application that allows users to search for a city and displays its current Air Quality Index (AQI) with clear indicators and pollutant information. This project provides real-time air quality data with health recommendations and responsive design for both desktop and mobile devices.

## Features

- **City Search**: Input validation and city name search functionality
- **Real-time AQI Data**: Current air quality index with color-coded categories
- **Health Recommendations**: Contextual health advice based on AQI levels
- **Pollutant Information**: Detailed breakdown of air pollutants (PM2.5, PM10, NO2, SO2, O3, CO)

## Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager
- OpenWeatherMap API key (free registration at [openweathermap.org](https://openweathermap.org/api))

## Setup Instructions

1. **Clone the repository**
   ```bash
   git clone git@github.com:Teddies1/aevice-take-home.git
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Create a `.env` file in the main directory
   - Enter this line: `REACT_APP_OPENWEATHER_API_KEY=<your_api_key_here>`
   - Replace `<your_api_key_here>` with your actual OpenWeatherMap API key

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## API Configuration

This application uses the OpenWeatherMap API for:
- **Geocoding API**: Convert city names to coordinates
- **Air Pollution API**: Fetch current air quality data

The API requires an API key which is available free at OpenWeatherMap.com


## Technology Stack

- **React 18** with TypeScript
- **Axios** for HTTP requests
- **CSS3** with responsive design
- **OpenWeatherMap API** for air quality data

## AI Assistance


This application is written with the help of Claude CLI. There was also manual debugging done to fix any errors in the code.
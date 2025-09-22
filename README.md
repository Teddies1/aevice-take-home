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
   git clone <repository-url>
   cd aqi-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Copy `.env.example` to `.env`
   - Replace `your_api_key_here` with your actual OpenWeatherMap API key
   ```bash
   cp .env.example .env
   ```

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

Get your free API key from [OpenWeatherMap](https://openweathermap.org/api) and add it to your `.env` file:

```
REACT_APP_OPENWEATHER_API_KEY=your_actual_api_key_here
```

## Technology Stack

- **React 18** with TypeScript
- **Axios** for HTTP requests
- **CSS3** with responsive design
- **OpenWeatherMap API** for air quality data

## Development

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) using the TypeScript template.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

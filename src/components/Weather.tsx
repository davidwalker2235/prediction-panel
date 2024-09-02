import React from 'react';
import {WeatherWidget} from "@daniel-szulc/react-weather-widget";
import "./Weather.css"

const Weather = () => {
  return (
    <WeatherWidget
      provider='openWeather'
      apiKey={process.env.REACT_APP_OPEN_WEATHER_KEY}
      location='Barcelona'
      tempUnit="C"
      windSpeedUnit="kph"
      lang="es"
    />
  );
};

export default Weather
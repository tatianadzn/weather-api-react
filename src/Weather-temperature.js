import React from 'react';
import WeatherTemperatureStyle from './style/WeatherTemperatureStyle.module.css';

const WeatherTemperature = () => {
    return (
        <div id="temp" className={WeatherTemperatureStyle.WeatherTemperatureBlock}>
            Loading...
        </div>
    )
};

export default WeatherTemperature;
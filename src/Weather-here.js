import React from 'react';
import WeatherIcon from './Weather-icon';
import WeatherTemperature from './Weather-temperature';
import WeatherDataRows from './Weather-data-rows';
import WeatherHereStyles from './style/WeatherHereStyles.module.css';

class WeatherHere extends React.Component {

    render() {
        return (
            <div className={WeatherHereStyles.WeatherHereBlock}>
                <WeatherIcon iconURL={this.props.iconURL}/>
                <WeatherTemperature/>
                <WeatherDataRows/>
            </div>
        )
    }
}

export default WeatherHere;
import React from 'react';
import WeatherIcon from './WeatherIcon';
import WeatherTemperature from './WeatherTemperature';
import WeatherDataRows from './WeatherDataRows';
import Loader from './Loader/Loader';
import { connect } from "react-redux";
import WeatherHereStyles from './style/WeatherHereStyles.module.css';

class WeatherHere extends React.Component {

    render() {
        if (this.props.state.isLoading){
            return (
                <Loader/>
            )
        }
        else {
            const cityObj = this.props.state.currentWeather;
            let iconURL = '';
            if (cityObj.iconCode !== '') {
                iconURL = '//openweathermap.org/img/wn/' + cityObj.iconCode + '@2x.png';
            }

            return (
                <div className={WeatherHereStyles.WeatherHereBlock}>
                    <WeatherIcon iconURL={iconURL}/>
                    <WeatherTemperature/>
                    <WeatherDataRows
                        cityName={cityObj.cityName}
                        weather={cityObj.weather}
                        wind={cityObj.wind}
                        pressure={cityObj.pressure}
                        humidity={cityObj.humidity}
                    />
                </div>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        state: state
    }
};

export default connect(mapStateToProps)(WeatherHere);
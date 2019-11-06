import React from 'react';
import WeatherIcon from './Weather-icon';
import WeatherTemperature from './Weather-temperature';
import WeatherDataRows from './Weather-data-rows';
import { connect } from "react-redux";
import WeatherHereStyles from './style/WeatherHereStyles.module.css';

class WeatherHere extends React.Component {

    render() {
        if (this.props.state.isLoading){
            return (
                <div>Loading...</div>
            )
        }
        else {
            const cityObj = this.props.state.currentWeather;
            return (
                <div className={WeatherHereStyles.WeatherHereBlock}>
                    <WeatherIcon iconURL={this.props.iconURL}/>
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
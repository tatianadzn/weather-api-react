import React from 'react';
import {connect} from 'react-redux';
import WeatherTemperatureStyle from './style/WeatherTemperatureStyle.module.css';

class WeatherTemperature extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        if (this.props.isLoading) {
            return <div className={WeatherTemperatureStyle.WeatherTemperatureBlock}>Loading...</div>;
        }
        else {
            return(
                <div className={WeatherTemperatureStyle.WeatherTemperatureBlock}>
                    {this.props.temp}
                </div>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        temp: state.currentWeather.maintemp
    };
};

export default connect(mapStateToProps)(WeatherTemperature);
import React from 'react';
import WeatherIconStyle from './WeatherIconStyle.module.css';

class WeatherIcon extends React.Component {
    render() {
        return(
            <div className={WeatherIconStyle.WeatherIconBlock}>
                <img src={this.props.iconURL} alt={"Loading..."}/>
            </div>
        )
    }
}

export default WeatherIcon;
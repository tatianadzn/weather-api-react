import React from 'react';
import WeatherIconStyle from './style/WeatherIconStyle.module.css';

class WeatherIcon extends React.Component {
    render() {
        return(
            <div id={"iconIMG"} className={WeatherIconStyle.WeatherIconBlock}>
                <img src={this.props.iconURL} alt={"Loading..."}/>
            </div>
        )
    }
};

export default WeatherIcon;
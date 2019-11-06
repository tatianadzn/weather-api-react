import React from 'react';
import WeatherDataRowsStyle from './style/WeatherDataRowsStyle.module.css';
import RowStyle from './style/RowSlyle.module.css';

class WeatherDataRows extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return(
            <div className={WeatherDataRowsStyle.WeatherDataBody}>
                <div className={RowStyle.row}>{this.props.cityName}</div>
                <div className={RowStyle.row}>{this.props.weather}</div>
                <div className={RowStyle.row}>{this.props.wind}</div>
                <div className={RowStyle.row}>{this.props.pressure}</div>
                <div className={RowStyle.row}>{this.props.humidity}</div>
            </div>
        )
    }
}

export default WeatherDataRows;

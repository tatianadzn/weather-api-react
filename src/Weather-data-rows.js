import React from 'react';
import WeatherDataRowsStyle from './style/WeatherDataRowsStyle.module.css';
import RowStyle from './style/RowSlyle.module.css';

class WeatherDataRows extends React.Component {

    render() {
        return(
            <div className={WeatherDataRowsStyle.WeatherDataBody}>
                <div id={"rowname"} className={RowStyle.row}>Loading...</div>
                <div id={"rowtemp"} className={RowStyle.row}>Loading...</div>
                <div id={"rowwind"} className={RowStyle.row}>Loading...</div>
                <div id={"rowpressure"} className={RowStyle.row}>Loading...</div>
                <div id={"rowhumidity"} className={RowStyle.row}>Loading...</div>
            </div>
        )
    }


};

export default WeatherDataRows;
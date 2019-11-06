import React from 'react';
import WeatherDataRows from '../../Weather-data-rows';
import { connect } from 'react-redux';
import {deleteCityFromFavourites, fetchFavData} from "../../store/actions/actionCreators";
import './FavCity.css';

class FavCity extends React.Component {


    render() {
        const cityObj = JSON.parse(localStorage.getItem(this.props.city));
        return (
            <div className={'body'}>
                <button className={'btnDel'} onClick={() => {this.props.deleteCityFromFavourites(this.props.city)}}> X </button>
                <WeatherDataRows
                    cityName={cityObj.cityName}
                    weather={cityObj.weather}
                    wind={cityObj.wind}
                    pressure={cityObj.pressure}
                    humidity={cityObj.humidity}
                    />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = {
  deleteCityFromFavourites, fetchFavData
};

export default connect(mapStateToProps, mapDispatchToProps)(FavCity);
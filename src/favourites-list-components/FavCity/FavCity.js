import React from 'react';
import WeatherDataRows from '../../Weather-data-rows';
import { connect } from 'react-redux';
import {deleteCityFromFavourites} from "../../store/actions/actionCreators";
import './FavCity.css';

class FavCity extends React.Component {


    render() {
        const cityObj = JSON.parse(localStorage.getItem(this.props.city));

        if (cityObj !== null) {
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
        else {
            if (this.props.isLoading){
                return (
                    <div>Loader...</div>
                );
            }
        }
    }
}

const mapStateToProps = state => {
    return {
        isLoading: state.favWeatherIsLoading
    };
};

const mapDispatchToProps = {
  deleteCityFromFavourites
};

export default connect(mapStateToProps, mapDispatchToProps)(FavCity);
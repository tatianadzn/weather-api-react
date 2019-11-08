import React from 'react';
import WeatherDataRows from '../../WeatherDataRows';
import Loader from '../../Loader/Loader';
import { connect } from 'react-redux';
import {deleteCityFromFavourites} from "../../store/actions/actionCreators";
import './FavCity.css';

class FavCity extends React.Component {


    render() {
        const cityObj = JSON.parse(localStorage.getItem(this.props.city));

        if (cityObj !== null) {
            let iconURL = '';
            if (cityObj.iconCode !== '') {
                iconURL = '//openweathermap.org/img/wn/' + cityObj.iconCode + '@2x.png';
            }
            return (
                <div className={'body'}>

                    <button className={'btnDel'} onClick={() => {this.props.deleteCityFromFavourites(this.props.city)}}> X </button>
                    <img className={'iconIMG'} src={iconURL} alter="Loading..."/>
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
                    <Loader/>
                );
            }
            else return null
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
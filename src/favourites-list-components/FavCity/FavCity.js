import React from 'react';
import WeatherDataRows from '../../Weather-data-rows';
import './FavCity.css';

class FavCity extends React.Component {

    handleDelete = () => {
        console.log(this.props.city + ' deleted');
        let cityList = JSON.parse(localStorage.getItem('cityList'));
        cityList = cityList.filter((city) => city !== this.props.city);
        localStorage.setItem('cityList', JSON.stringify(cityList));
    };

    render() {
        return (
            <div className={'body'}>
                <button className={'btnDel'} onClick={this.handleDelete}> X </button>
                <WeatherDataRows/>
            </div>
        );
    }
}

export default FavCity;
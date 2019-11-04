import React from 'react';
import WeatherDataRows from '../../Weather-data-rows';
import { connect } from 'react-redux';
import {deleteCityFromFavourites} from "../../store/actions/actionCreators";
import './FavCity.css';

class FavCity extends React.Component {

    render() {
        return (
            <div className={'body'}>
                <button className={'btnDel'} onClick={() => {this.props.deleteCityFromFavourites(this.props.city)}}> X </button>
                <WeatherDataRows/>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {

    };
};

const mapDispatchToProps = {
  deleteCityFromFavourites
};

export default connect(mapStateToProps, mapDispatchToProps)(FavCity);
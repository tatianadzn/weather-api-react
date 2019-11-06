import React from 'react';
import FavCity from './FavCity/FavCity'
import {connect} from 'react-redux';
import {getCityListFromLocalStorage, fetchFavData} from '../store/actions/actionCreators';

class FavCityList extends React.Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {
        this.props.getCityListFromLocalStorage();
    }

    render() {
        if (this.props.isLoading && this.props.cityList !== null) {
            return <div>Loading...</div>
        }
        else {
            return(
                <div>
                    {this.props.cityList !== null && this.props.cityList.map(city => {
                        //if exists in localstorage then
                        if (JSON.parse(localStorage.getItem(city) !== null)) {
                            return <FavCity
                                key={city}
                                city={city}
                            />
                        } else {
                            console.log(city + ' will be fetched');

                            const url = 'https://api.openweathermap.org/data/2.5/weather?appid=41210752a269dfb2e2a8167a0910c3a1&q=' + city;

                            this.props.fetchFavData(url);
                        }
                    })}
                </div>
            )
        }
    }
}

const mapStateToProps = state => {
    return {
        cityList: state.cityList,
        isLoading: state.favWeatherIsLoading
    };
};

const mapDispatchToProps = {
    getCityListFromLocalStorage, fetchFavData
};

export default connect(mapStateToProps, mapDispatchToProps)(FavCityList);
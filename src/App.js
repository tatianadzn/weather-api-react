import React from 'react';
import GEO from './GEO';
import WeatherHere from './Weather-here';
import Favourites from './favourites-list-components/Favourites/Favourites';
import FavCityList from './favourites-list-components/FavCityList';
import {connect} from 'react-redux';
import {fetchData, fetchFavData} from "./store/actions/actionCreators";
import AppStyles from './style/App.module.css';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            latitude: '',
            longitude: '',
            weatherIconURL: ''
        }
    }

    render() {
        return(
            <div className={AppStyles.AppBody}>
                <div id="out"></div>
                <GEO getLocation={this.getLocation.bind(this)}/>
                <WeatherHere/>
                <Favourites onAddingNewCity={this.handleAddingNewCityToFav}/>
                <FavCityList/>
            </div>
        )
    }

    componentDidMount() {
        this.getLocation();
    }

    getLocation() {
        let output = document.getElementById("output");

        if (!navigator.geolocation){
            output.innerHTML = "Geolocation is not supported by your browser";
            return;
        }

        if (this.props.isLoading){
            output.innerHTML = "Locating...";
        }

        navigator.geolocation.getCurrentPosition(this.success.bind(this), this.error.bind(this));

    }

    error(){
        this.setState({latitude: 60, longitude: 30});
        document.getElementById("output").innerHTML = "Cannot retrive your location";
        const url = 'https://api.openweathermap.org/data/2.5/weather?appid=41210752a269dfb2e2a8167a0910c3a1&' + 'lat=' + this.state.latitude.toString() + '&lon=' + this.state.longitude.toString();
        this.props.fetchData(url);
    }
    success(position){
        this.setState({latitude: position.coords.latitude, longitude: position.coords.longitude});
        document.getElementById("output").innerHTML = '';
        const url = 'https://api.openweathermap.org/data/2.5/weather?appid=41210752a269dfb2e2a8167a0910c3a1&' + 'lat=' + this.state.latitude.toString() + '&lon=' + this.state.longitude.toString();
        this.props.fetchData(url);
    }

    handleAddingNewCityToFav = city => {
        const url = 'https://api.openweathermap.org/data/2.5/weather?appid=41210752a269dfb2e2a8167a0910c3a1&q=' + city;
        this.props.fetchFavData(url);
    }
}

const mapStateToProps = state => {
  return {
      isLoading: state.isLoading
  };
};

const mapDispatchToProps = {
    fetchData, fetchFavData
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

import React from 'react';
import GEO from './GEO';
import WeatherHere from './Weather-here';
import Favourites from './favourites-list-components/Favourites/Favourites';
import FavCityList from './favourites-list-components/FavCityList';
import AppStyles from './style/App.module.css';
import $ from "jquery";

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
                <WeatherHere iconURL={this.state.weatherIconURL}/>
                <Favourites/>
                <FavCityList/>
            </div>
        )
    }

    componentDidMount() {
        // this.getLocation();
    }

    getLocation() {
        let output = document.getElementById("output");

        if (!navigator.geolocation){
            output.innerHTML = "Geolocation is not supported by your browser";
            return;
        }

        output.innerHTML = "Locating...";

        navigator.geolocation.getCurrentPosition(this.success.bind(this), this.error.bind(this));

    }

    error(){
        this.setState({latitude: 60, longitude: 30});
        document.getElementById("output").innerHTML = "Cannot retrive your location";
        this.getWeather(this.state.latitude, this.state.longitude);
    }
    success(position){
        this.setState({latitude: position.coords.latitude, longitude: position.coords.longitude});
        document.getElementById("output").innerHTML = '';
        this.getWeather(this.state.latitude, this.state.longitude);
    }

    setIconURL(iconCode){
        //iconCode - 10n, for example. need to concat it inside the sample URL
        this.setState({weatherIconURL: '//openweathermap.org/img/wn/' + iconCode + '@2x.png'})
    }

    async getWeather(latitude, longitude){
        let code = '';
        const result = await $.getJSON(
            'https://api.openweathermap.org/data/2.5/weather?appid=41210752a269dfb2e2a8167a0910c3a1&?',
            {lat: latitude, lon: longitude},
            function (cities) {
                //save to redux store

            // document.getElementById('rowname').innerHTML = "City name: " + cities.name;
            // document.getElementById('rowtemp').innerHTML = "Weather: " + cities.weather[0].description;
            // document.getElementById('rowwind').innerHTML = "Wind speed: " + cities.wind.speed + "m/sec";
            // document.getElementById('rowpressure').innerHTML = "Pressure: " + cities.main.pressure;
            // document.getElementById('rowhumidity').innerHTML = "Humidity: " + cities.main.humidity + "%";
            // document.getElementById('temp').innerHTML = cities.main.temp + "K";

            // code = cities.weather[0].icon;
        });
        // .fail(function (error) {
        //     if (error === 'Not found'){
        //         document.getElementById('mypanel').innerText = 'City not found';
        //     }
        //     else {
        //         document.getElementById('mypanel').innerText = 'Server error';
        //     }
        // })
        this.setIconURL(code);
    }
}

export default App;

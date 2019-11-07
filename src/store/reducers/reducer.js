import {
    ADD_CITY_TO_FAVOURITES,
    DELETE_CITY_FROM_FAVOURITES,
    GET_CITYLIST_FROM_LOCALSTORAGE,
    DATA_IS_LOADING,
    FETCH_DATA_ERROR,
    FETCH_DATA_SUCCESSFUL,
    FAV_DATA_IS_LOADING,
    FAV_DATA_SUCCESSFUL,
    ICON_FETCH_SUCCESSFUL,
    ICON_IS_LOADING
} from '../actions/actionCreators';

const defaultState = {
    currentWeather: {
        cityName: '',
        weather: '',
        wind: '',
        pressure: '',
        humidity: '',
        maintemp: '',
        iconCode: ''
    },
    cityList: [],
    isLoading: true,
    favWeatherIsLoading: false,
    errorText: ''
};
const reducer = (state = defaultState, action) => {

  switch (action.type) {
      case ADD_CITY_TO_FAVOURITES:
          //add city to localStorage
          let cityList = JSON.parse(localStorage.getItem('cityList'));
          if (cityList !== null) {
              cityList = JSON.parse(localStorage.getItem('cityList'));
          } else {
              cityList = [];
          }
          cityList.push(action.payload);
          localStorage.setItem('cityList', JSON.stringify(cityList));
          return {
              ...state,
              cityList: cityList
          };
      case GET_CITYLIST_FROM_LOCALSTORAGE:
          //on mount by default
          let list = JSON.parse(localStorage.getItem('cityList'));
          return {
              ...state,
              cityList: list
          };

      case DELETE_CITY_FROM_FAVOURITES:
          let array = state.cityList;
          array = array.filter((city) => city !== action.payload);
          localStorage.setItem('cityList', JSON.stringify(array));
          localStorage.removeItem(action.payload);
          return {
              ...state,
              cityList: array
          };
      case DATA_IS_LOADING:
          return {
              ...state,
              isLoading: action.payload
          };
      case FETCH_DATA_ERROR:
          console.log('error');
          return state;
      case FETCH_DATA_SUCCESSFUL:
          console.log('successful');
          const cities = action.payload;
          const cityObj = {
              cityName: "City name: " + cities.name,
              weather: "Weather: " + cities.weather[0].description,
              wind: "Wind speed: " + cities.wind.speed + "m/sec",
              pressure: "Pressure: " + cities.main.pressure,
              humidity: "Humidity: " + cities.main.humidity + "%",
              maintemp: cities.main.temp + "K",
              iconCode: cities.weather[0].icon
          };
          return {
              ...state,
              currentWeather: cityObj,
              isLoading: false
          };
      case FAV_DATA_IS_LOADING:
          return{
              ...state,
              favWeatherIsLoading: action.payload
          };
      case FAV_DATA_SUCCESSFUL:
          console.log('fav data successful');
          const data = action.payload;
          const obj = {
              cityName: "City name: " + data.name,
              weather: "Weather: " + data.weather[0].description,
              wind: "Wind speed: " + data.wind.speed + "m/sec",
              pressure: "Pressure: " + data.main.pressure,
              humidity: "Humidity: " + data.main.humidity + "%",
              maintemp: data.main.temp + "K",
              iconCode: data.weather[0].icon
          };
          localStorage.setItem(data.name, JSON.stringify(obj));
          console.log(JSON.parse(localStorage.getItem(data.name)));
          console.log(state.favWeatherIsLoading);
          return {
              ...state,
              favWeatherIsLoading: false
          };
  }
  return state;
};

export default reducer;

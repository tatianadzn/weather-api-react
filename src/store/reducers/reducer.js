import {
    ADD_CITY_TO_FAVOURITES,
    DELETE_CITY_FROM_FAVOURITES,
    GET_CITYLIST_FROM_LOCALSTORAGE,
    LOAD_WEATHER_PARAMETERS
} from '../actions/actionCreators';

const defaultState = {
    currentWeather: {
        cityName: '',
        temp: '',
        wind: '',
        pressure: '',
        humidity: ''
    },
    cityList: []
};
const reducer = (state = defaultState, action) => {

  switch (action.type) {
      case ADD_CITY_TO_FAVOURITES:
          //add city to localStorage
          let cityList = [];
          if (JSON.parse(localStorage.getItem('cityList'))!= null) {
              cityList = JSON.parse(localStorage.getItem('cityList'));
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
          return {
              ...state,
              cityList: array
          }
  }
  return state;
};

export default reducer;
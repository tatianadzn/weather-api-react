import {
    ADD_CITY_TO_FAVOURITES,
    DELETE_CITY_FROM_FAVOURITES,
    GET_CITYLIST_FROM_LOCALSTORAGE,
    DATA_IS_LOADING,
    FETCH_DATA_ERROR,
    FETCH_DATA_SUCCESSFUL,
    FAV_DATA_IS_LOADING,
    FAV_DATA_SUCCESSFUL
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
    errorText: ''
};
const reducer = (state = defaultState, action) => {

    switch (action.type) {
        case ADD_CITY_TO_FAVOURITES:
            //add city to localStorage
            let cityList = JSON.parse(localStorage.getItem('cityList'));
            if (cityList === null) {
                cityList = [];
            }
            cityList.push(action.payload);
            localStorage.setItem('cityList', JSON.stringify(cityList));

            //and add city to state
            return {
                ...state,
                cityList: [...state.cityList, {name: action.payload, isLoading: true}]
            };
        case GET_CITYLIST_FROM_LOCALSTORAGE:
            //on mount by default
            let list = JSON.parse(localStorage.getItem('cityList'));
            if (list === null) {
                return state
            }
            let tmp = list.map(city =>
                ({name: city, isLoading: true})
            );
            return {
                ...state,
                cityList: tmp
            };

        case DELETE_CITY_FROM_FAVOURITES:
            let array = state.cityList;
            array = array.filter((city) => city.name !== action.payload);
            let localStorageArray = array.map(city =>(city.name));
            localStorage.setItem('cityList', JSON.stringify(localStorageArray));
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
            if (action.payloadId === 'fav') {
                //need to be changed

                return {
                    ...state,
                    errorText: action.payloadCause
                };
            } else {
                return {
                    ...state,
                    errorText: action.payloadCause,
                    isLoading: false
                };
            }

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
            //need to be changed
            return {
                state
                // favWeatherIsLoading: action.payload
            };
        case FAV_DATA_SUCCESSFUL:
            const data = action.payload;
            const obj = {
                name: data.name,
                weather: "Weather: " + data.weather[0].description,
                wind: "Wind speed: " + data.wind.speed + "m/sec",
                pressure: "Pressure: " + data.main.pressure,
                humidity: "Humidity: " + data.main.humidity + "%",
                maintemp: data.main.temp + "K",
                iconCode: data.weather[0].icon,
                isLoading: false
            };

            let cityListArray = state.cityList;
            cityListArray = cityListArray.filter((city) => city.name !== action.city);
            cityListArray.push(obj);
            return {
                ...state,
                cityList: cityListArray
            };
        default:
            return state;
    }
};

export default reducer;

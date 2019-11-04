export const ADD_CITY_TO_FAVOURITES = 'ADD_CITY_TO_FAVOURITES';
export const DELETE_CITY_FROM_FAVOURITES = 'DELETE_CITY_FROM_FAVOURITES';
export const LOAD_WEATHER_PARAMETERS = 'LOAD_WEATHER_PARAMETERS';
export const GET_CITYLIST_FROM_LOCALSTORAGE = 'GET_CITYLIST_FROM_LOCALSTORAGE';

export const addCityToFavourites = (cityList) => ({
    type: ADD_CITY_TO_FAVOURITES,
    payload: cityList
});

export const getCityListFromLocalStorage = () => ({
    type: GET_CITYLIST_FROM_LOCALSTORAGE,
    payload: ''
});

export const deleteCityFromFavourites = (city) => ({
    type: DELETE_CITY_FROM_FAVOURITES,
    payload: city
});

export const loadWeatherParameters = (result) => ({
    type: LOAD_WEATHER_PARAMETERS,
    payload: result
});
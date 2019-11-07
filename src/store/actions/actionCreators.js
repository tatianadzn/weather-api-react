export const ADD_CITY_TO_FAVOURITES = 'ADD_CITY_TO_FAVOURITES';
export const DELETE_CITY_FROM_FAVOURITES = 'DELETE_CITY_FROM_FAVOURITES';
export const GET_CITYLIST_FROM_LOCALSTORAGE = 'GET_CITYLIST_FROM_LOCALSTORAGE';
export const DATA_IS_LOADING = 'DATA_IS_LOADING';
export const FETCH_DATA_SUCCESSFUL = 'FETCH_DATA_SUCCESSFUL';
export const FETCH_DATA_ERROR = 'FETCH_DATA_ERROR';
export const FAV_DATA_IS_LOADING = 'FAV_DATA_IS_LOADING';
export const FAV_DATA_SUCCESSFUL = 'FAV_DATA_SUCCESSFUL';

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

export const dataIsLoading = (bool) => ({
    type: DATA_IS_LOADING,
    payload: bool
});

export const fetchDataISuccessful = (result) => ({
    type: FETCH_DATA_SUCCESSFUL,
    payload: result
});
export const fetchDataError = () => ({
    type: FETCH_DATA_ERROR
});

export const favDataIsLoading = bool => ({
   type: FAV_DATA_IS_LOADING,
   payload: bool
});

export const favDataSuccessful = result => ({
    type: FAV_DATA_SUCCESSFUL,
    payload: result
});

export function fetchFavData(url) {
    return (dispatch) => {
        dispatch(favDataIsLoading(true));

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                return response;
            })
            .then((result) => result.json())
            .then((result) => dispatch(favDataSuccessful(result)))
            .catch(() => dispatch(fetchDataError()));
    };
}

export function fetchData(url) {
    return (dispatch) => {
        dispatch(dataIsLoading(true));

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                return response;
            })
            .then((result) => result.json())
            .then((result) => dispatch(fetchDataISuccessful(result)))
            .catch(() => dispatch(fetchDataError()));
    };
}
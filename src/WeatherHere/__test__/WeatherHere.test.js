import React from 'react';
import WeatherHere from '../WeatherHere';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';

import configureStore from 'redux-mock-store';
const mockStore = configureStore([]);

describe('WeatherHere testing', () => {
    let store;

    it('should render with given state from Redux store: loading is true', () => {
        store = mockStore({
            currentWeather: {
                cityName: 'London',
                weather: 'test',
                wind: 'test',
                pressure: 'test',
                humidity: 'test',
                maintemp: 'test',
                iconCode: 'test'
            },
            isLoading: true
        });
        const tree = renderer
            .create(<Provider store={store}><WeatherHere/></Provider>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should render with given state from Redux store: loading is false, icon code is not empty', () => {
        store = mockStore({
            currentWeather: {
                cityName: 'London',
                weather: 'test',
                wind: 'test',
                pressure: 'test',
                humidity: 'test',
                maintemp: 'test',
                iconCode: 'test'
            },
            isLoading: false
        });
        const tree = renderer
            .create(<Provider store={store}><WeatherHere/></Provider>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should render with given state from Redux store: loading is false, icon code is empty', () => {
        store = mockStore({
            currentWeather: {
                cityName: 'London',
                weather: 'test',
                wind: 'test',
                pressure: 'test',
                humidity: 'test',
                maintemp: 'test',
                iconCode: ''
            },
            isLoading: false
        });
        const tree = renderer
            .create(<Provider store={store}><WeatherHere/></Provider>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
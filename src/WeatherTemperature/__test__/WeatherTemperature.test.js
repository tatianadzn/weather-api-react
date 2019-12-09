import React from 'react';
import WeatherTemperature from '../WeatherTemperature';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';

import configureStore from 'redux-mock-store';
const mockStore = configureStore([]);

describe('WeatherTemperature testing', () => {
    let store;

    it('should render with given state from Redux store: loading is false', () => {
        store = mockStore({
            currentWeather: {
                maintemp: 'test',
            },
            isLoading: false
        });
        const tree = renderer
            .create(<Provider store={store}><WeatherTemperature/></Provider>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should render with given state from Redux store: loading is true', () => {
        store = mockStore({
            currentWeather: {
                maintemp: 'test',
            },
            isLoading: true
        });
        const tree = renderer
            .create(<Provider store={store}><WeatherTemperature/></Provider>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
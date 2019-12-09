import React from 'react';
import App from '../App';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';

import configureStore from 'redux-mock-store';
const mockStore = configureStore([]);

describe('App testing', () => {
    let store;

    it('should render with given state from Redux store: navigator error', () => {
        store = mockStore({
            currentWeather: {
                cityName: 'London',
                weather: 'test',
                wind: 'test',
                pressure: 'test',
                humidity: 'test',
                maintemp: 'test',
                iconCode: 'test',
                isLoading: false
            },
            cityList: [],
            isLoading: false,
            errorText: 'some error text'
        });
        const tree = renderer
            .create(<Provider store={store}><App/></Provider>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should render with given state from Redux store: weather here is loading', () => {
        store = mockStore({
            isLoading: true,
            errorText: '',
            cityList: []
        });
        const tree = renderer
            .create(<Provider store={store}><App/></Provider>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should render with given state from Redux store: cityList with 2 loading cities', () => {
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
            cityList: [
                {
                    name: 'London',
                    weather: '',
                    isLoading: true
                },
                {
                    name: 'Moscow',
                    weather: '',
                    isLoading: true
                }
            ],
            isLoading: false,
            error: ''
        });
        const tree = renderer
            .create(<Provider store={store}><App/></Provider>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should render with given state from Redux store: cityList with 2 loaded cities', () => {
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
            cityList: [
                {
                    name: 'London',
                    weather: 'test',
                    wind: 'test',
                    pressure: 'test',
                    humidity: 'test',
                    maintemp: 'test',
                    iconCode: 'test',
                    isLoading: false
                },
                {
                    name: 'Moscow',
                    weather: 'test',
                    wind: 'test',
                    pressure: 'test',
                    humidity: 'test',
                    maintemp: 'test',
                    iconCode: 'test',
                    isLoading: false
                }
            ],
            isLoading: false,
            error: ''
        });
        const tree = renderer
            .create(<Provider store={store}><App/></Provider>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
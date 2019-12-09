import React from 'react';
import FavCityList from '../FavCityList';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';

import configureStore from 'redux-mock-store';
const mockStore = configureStore([]);

describe('FavCity testing', () => {
    let store;

    it('should render with given state from Redux store: cityList is not empty', () => {
        store = mockStore({
            cityList: [
                {
                    name: 'London',
                    weather: 'test',
                    wind: 'test',
                    pressure: 'test',
                    humidity: 'test',
                    maintemp: 'test',
                    iconCode: '10n'
                },
                {
                    name: 'Moscow',
                    weather: 'test',
                    wind: 'test',
                    pressure: 'test',
                    humidity: 'test',
                    maintemp: 'test',
                    iconCode: '10n'
                }]
        });
        const tree = renderer
            .create(<Provider store={store}><FavCityList/></Provider>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should render with given state from Redux store: cityList is empty', () => {
        store = mockStore({
            cityList: []
        });
        const tree = renderer
            .create(<Provider store={store}><FavCityList/></Provider>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
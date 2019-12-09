import React from 'react';
import FavCity from '../FavCity';
import renderer from 'react-test-renderer';
import {Provider} from 'react-redux';

import configureStore from 'redux-mock-store';
const mockStore = configureStore([]);

describe('FavCity testing', () => {
    let store;

    it('should render with given state from Redux store: loading is finished', () => {
        store = mockStore({
            cityList: [
                {
                    name: 'London',
                    weather: 'test',
                    wind: 'test',
                    pressure: 'test',
                    humidity: 'test',
                    maintemp: 'test',
                    iconCode: '10n',
                    isLoading: false
                }]
        });
        const tree = renderer
            .create(<Provider store={store}><FavCity key={'London'} city={'London'}/></Provider>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should render with given state from Redux store: loading is not finished', () => {
        store = mockStore({
            cityList: [
                {
                    name: 'London',
                    weather: 'test',
                    wind: 'test',
                    pressure: 'test',
                    humidity: 'test',
                    maintemp: 'test',
                    iconCode: '10n',
                    isLoading: true
                }]
        });
        const tree = renderer
            .create(<Provider store={store}><FavCity key={'London'} city={'London'}/></Provider>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});



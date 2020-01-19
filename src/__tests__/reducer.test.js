import * as constants from '../js/constants';

import { toggleFavourite } from '../js/actions/actions'
import reducer from '../js/reducers/index';

const initialState = {
    rates: [
        { "currency": "dolar amerykański", "code": "USD", "bid": 3.764, "ask": 3.84, favourite: false },
        { "currency": "dolar australijski", "code": "AUD", "bid": 2.6003, "ask": 2.6529, favourite: false },
        { "currency": "dolar kanadyjski", "code": "CAD", "bid": 2.8842, "ask": 2.9424, favourite: false },
        { "currency": "euro", "code": "EUR", "bid": 4.1938, "ask": 4.2786, favourite: false },
        { "currency": "forint(Węgry)", "code": "HUF", "bid": 0.012547, "ask": 0.012801, favourite: false },
        { "currency": "frank szwajcarski", "code": "CHF", "bid": 3.9018, "ask": 3.9806, favourite: false },
        { "currency": "funt szterling", "code": "GBP", "bid": 4.9126, "ask": 5.0118, favourite: false },
        { "currency": "jen(Japonia)", "code": "JPY", "bid": 0.034201, "ask": 0.034891, favourite: false },
        { "currency": "korona czeska", "code": "CZK", "bid": 0.1666, "ask": 0.17, favourite: false },
        { "currency": "korona duńska", "code": "DKK", "bid": 0.5612, "ask": 0.5726, favourite: false },
        { "currency": "korona norweska", "code": "NOK", "bid": 0.4238, "ask": 0.4324, favourite: false },
        { "currency": "korona szwedzka", "code": "SEK", "bid": 0.3969, "ask": 0.4049, favourite: false },
        { "currency": "SDR(MFW)", "code": "XDR", "bid": 5.1998, "ask": 5.3048, favourite: false }
    ]
};



describe('Reducers', () => {
    describe('Combined reducer work', () => {
        it('should set and return the initial state', () => {
            expect(reducer(initialState, {})).toBe(initialState);
        })
    });
    describe('Toggle currency', () => {
        it('should toggle favourite prop on given currency', () => {
            const [item] = initialState.rates;
            const expectedValue = !item.favourite;
            const action = toggleFavourite(item.code);
            const state = reducer(initialState, action);
            const [resultingItem] = state.rates;

            expect(resultingItem.favourite).toEqual(expectedValue);
        })
    });
});
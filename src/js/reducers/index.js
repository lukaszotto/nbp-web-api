import { combineReducers } from 'redux';
import rates from './reducers';

export default combineReducers({
    rates: rates
})
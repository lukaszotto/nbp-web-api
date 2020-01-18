import { applyMiddleware, createStore, compose } from 'redux';
import reducer from '../reducers/index';
import thunk from 'redux-thunk';
import { getRates } from '../actions/actions';

const middleWare = [thunk];

const store = createStore(
    reducer,
    { rates: [] },
    compose(applyMiddleware(...middleWare))
);

store.dispatch(getRates());

export default store;
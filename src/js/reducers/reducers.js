import { TOGGLE_FAVOURITE, GET_RATES, CLEAR_ALL_FAVOURITES } from '../constants';

export default function (state = {}, action) {
    if (action.type === TOGGLE_FAVOURITE) {
        return state.map((item) => {
            if (item.code === action.payload.code) {
                return { ...item, favourite: !item.favourite }
            } else {
                return item;
            }
        });
    }

    if (action.type === CLEAR_ALL_FAVOURITES) {
        return state.map((item) => {
            return { ...item, favourite: false }
        });
    }

    if (action.type === GET_RATES) {
        return action.payload;
    }
    return state;
}
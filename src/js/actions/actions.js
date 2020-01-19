import { fetchExchangerates } from '../api/config'
import { TOGGLE_FAVOURITE, GET_RATES, CLEAR_ALL_FAVOURITES } from '../constants';
export const toggleFavourite = (code) => {
    return {
        type: TOGGLE_FAVOURITE,
        payload: {
            code: code
        }
    }
}

export const clearAllFavourites = () => {
    return {
        type: CLEAR_ALL_FAVOURITES
    }
}

export const getRates = () => {
    return dispatch => {
        fetchExchangerates.then(({ data }) => {
            dispatch(
                {
                    type: GET_RATES,
                    payload: data[0].rates.map((item) => {
                        return { ...item, favourite: false }
                    })
                }
            )
        });
    }
}
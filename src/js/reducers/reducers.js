export default function (state = {}, action) {
    if (action.type === 'TOGGLE_FAVOURITE') {
        return state.map((item) => {
            if (item.code === action.payload.code) {
                return { ...item, favourite: !item.favourite }
            } else {
                return item;
            }
        });
    }
    if (action.type === 'GET_RATES') {
        return action.payload;
    }
    return state;
}
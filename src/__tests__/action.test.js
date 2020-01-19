import * as constants from '../js/constants';


import { toggleFavourite, clearAllFavourites } from '../js/actions/actions'



describe('Currency action', () => {

    describe('toggleFavourite', () => {
        it('should return TOGGLE_FAVOURITE as the item type', () => {
            const action = toggleFavourite('item name');
            expect(action.type).toBe(constants.TOGGLE_FAVOURITE);
        });

        it('should return the provided code on the action', () => {
            const code = 'USD';
            const action = toggleFavourite(code);
            expect(action.payload.code).toBe(code);
        });
    });

    describe('clearAllFavourites', () => {
        it('should return CLEAR_ALL_FAVOURITES as the item type', () => {
            const action = clearAllFavourites();
            expect(action.type).toBe(constants.CLEAR_ALL_FAVOURITES);
        });
    })
})
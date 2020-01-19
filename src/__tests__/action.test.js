import * as constants from '../js/constants';


import { toggleFavourite } from '../js/actions/actions'



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
})
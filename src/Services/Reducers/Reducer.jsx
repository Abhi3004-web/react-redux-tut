import { Add_To_Cart } from '../constant';

const initialState = {
    cartData: []
};

export default function cardItem(state = initialState, action) {
    switch (action.type) {
        case Add_To_Cart:
            const existingIndex = state.cartData.findIndex(
                (item) => item.name === action.data.name
            );

            let updatedCart;

            if (existingIndex !== -1) {
                // update count for existing image
                updatedCart = [...state.cartData];
                updatedCart[existingIndex].count = action.data.count;

                // if count is 0, remove item
                if (action.data.count === 0) {
                    updatedCart.splice(existingIndex, 1);
                }

            } else {
                // add new image if count > 0
                if (action.data.count > 0) {
                    updatedCart = [...state.cartData, action.data];
                } else {
                    updatedCart = [...state.cartData]; // no changes
                }
            }

            return {
                ...state,
                cartData: updatedCart
            };

        default:
            return state;
    }
}

import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants";

function cartReducer(state = { cartItems: [] }, action) {

    switch (action.type) {
        case CART_ADD_ITEM:
            console.log("cart add item")
            const item = action.payload;
            const product = state.cartItems.find(x => x.product === item.product);
            console.log("items", product)
            if (product) {
                return {
                    cartItems:
                        state.cartItems.map(x => x.product.product ? item : x)
                };
            }
            return { cartItems: [...state.cartItems, item] };
        case CART_REMOVE_ITEM:
            console.log("cart remove item")

            return { cartItems: state.cartItems.filter(x => x.product !== action.payload) }
        default:
            console.log("cart default item")

            return state
    }
}

export default cartReducer;
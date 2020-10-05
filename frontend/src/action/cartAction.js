import Axios from 'axios';
import Cookie from 'js-cookie';
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants'



const addTocart = (productId, qty) => async (dispatch, getState) => {
    try {
        const { data } = await Axios.get("/api/products/" + productId);
        console.log("data", data);
        dispatch({
            type: CART_ADD_ITEM, payload: {
                product: data._id,
                name: data.name,
                img: data.img,
                price: data.price,
                countInStock: data.countInStock,
                qty
            }
        });
        const { cart: { cartItems } } = getState();
        Cookie.set("cartItems", JSON.stringify(cartItems));
    }
    catch (error) {
        console.log(error);
    }
}

const removeFromeCart = (productId) => (dispatch, getState) => {
    dispatch({ type: CART_REMOVE_ITEM, payload: productId })

    const { cart: { cartItems } } = getState();
    Cookie.set("cartItems", JSON.stringify(cartItems));
}

export { addTocart, removeFromeCart };
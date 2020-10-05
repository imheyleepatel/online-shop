import React, { useEffect, dispatch } from 'react';
import Media from 'react-bootstrap/Media';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { addTocart } from '../action/cartAction';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromeCart } from '../action/cartAction';
function CartScreen(props) {

    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;
    const productId = props.match.params.id;
    const qty = props.location.search ? Number(props.location.search.split("=")[1]) : 1;
    console.log("cartitems", cartItems)

    const dispatch = useDispatch();
    const removeFromeCartHandler = (productId) => {
        dispatch(removeFromeCart(productId));
    }

    useEffect(() => {
        if (productId) {
            dispatch(addTocart(productId, qty));
        }
    }, []);

    const checkoutHandler = () => {
        props.history.push("/signin?redirect=shipping")
    }

    return <div>
    <div class="cart-flex">
     

            <ul>
                <li>
                    <h3>
                        Shopping Cart
                    </h3>

                </li>
                {
                    cartItems.length === 0 ?
                        <div>
                            Cart is empty
                    </div>
                        :
                        cartItems.map(item =>
                            <Media>
<img
                                    width={"25%"}
                                    height={"25%"}
                                    className="align-self-start mr-3"
                                    src={item.img}
                                    alt="Generic placeholder"
                                />
  <Media.Body>
             <h5>
                                        <Link to={"/product" + item.product}>
                                            {item.name}

                                         </Link>
                                     </h5>
    
                 <h5> Price:
                                         {item.price} rs.
                                     </h5>
                                                  <h5>
                                Qty:
                        <select value={item.qty} onChange={(e) => dispatch(addTocart(item.product, e.target.value))}>
                                            {[...Array(item.countInStock).keys()].map(x =>
                                                <option key={x + 1} value={x + 1}>{x + 1}</option>)}
                                        </select>
                                     <button type="button" className="button" onClick={() => removeFromeCartHandler(item.product)} >Delete</button>
                                    </h5>

    
  </Media.Body>
</Media>
        

                        )
                }
            </ul>

   
     
     </div>
        <div class="cart-card">
            <Card>

                <Card.Header>
                    <h5>
                        Total Item: {cartItems.reduce((a, c) => a + c.qty, 0)} </h5>
                    <h5> Total  Price:  {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}</h5>
                </Card.Header>
                <Button onClick={checkoutHandler} variant="primary" disabled={cartItems.length === 0} >Proceed to Checkout </Button>
            </Card>

        </div>

    </div>
}

export default CartScreen;
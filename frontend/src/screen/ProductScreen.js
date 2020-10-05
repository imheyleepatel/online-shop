import React, { useEffect, useState } from 'react';
import CardGroup from 'react-bootstrap/CardGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/col';
import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { detailsProduct } from '../action/productAction';
 
function ProductScreen(props) {
    const [qty, setQty] = useState(1);
    const productDetails = useSelector(state => state.productDetails);
    console.log(productDetails);
    const { product, loading, error } = productDetails;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(detailsProduct(props.match.params.id));
        return () => {
            //
        };
    }, [])

    const handleAddToCart = () => {
        props.history.push("/cart/" + props.match.params.id + "?qty=" + qty)
    }

    return <div>
        <div className="back-to-result">
            <Link to="/">Back to the result</Link>
        </div>
{loading? <div>Loading... </div> : 
            error? <div>{error}</div> :
                (

     <div className="details">
                                           


  <CardGroup>
  <Container>
  <Row>
    <Col xs={6} md={4}>
      <Image src={product.img} rounded  style={{ padding: "20px"}}  />
    </Col>

  </Row>
  </Container>


  </CardGroup>
               <div>
                        <div className="details-info">
                            <ul>
                                <li>
                                    <h4>{product.name}</h4>
                                </li>
                                <li>
                                    Price: <h4>{product.price}</h4>
                                </li>
                                <li>
                                    <h4>{product.description}</h4>
                                </li>
                            </ul>
                        </div>
                        
                        <div className="details-action">
                            <ul>
                                <li>
                                    Price: {product.price}
                                </li>
                                <li>
                                    Status: {product.countInStock > 0 ? "In stock" : ""}
                                </li>
                                <li>
                                                      Qty: <select value={qty} onChange={(e) => { setQty(e.target.value) }}>
                                        {[...Array(product.countInStock).keys()].map(x =>
                                            <option key={x + 1} value={x + 1}>{x + 1}</option>)}
                                    </select>

                                </li>
                                <li>
                                    {product.countInStock > 0 && <button onClick={handleAddToCart} className="button" style={{ background: "rgb(225, 125, 112)"}} >Add to Cart</button>
                                    }
                                </li>
                            </ul>
                        </div>
                    </div>
                    </div>
                )

        }

    </div>
}

export default ProductScreen;
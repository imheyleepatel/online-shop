import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import React, { useEffect , useState } from 'react';

import { Link } from 'react-router-dom';
import { useSelector , useDispatch } from 'react-redux';
import {listProducts} from '../action/productAction';

function HomeScreen(props) {
    const productList = useSelector(state => state.productList);
    console.log(productList)
    const {products,loading,error} = productList;
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(listProducts());
      return()=>{

      };
    } , [])
    
    return (
    
        loading? 
          <div>Loading...</div>
         :
         error? (
          <div>{error}</div>
        ) : (

          <ul>
            <CardDeck>
            {products.map((product) => (
              
              <Card  >  
              <li key={product._id}>
                  <Link to={'/product/' + product._id}>
                    <Card.Img variant="top"
                      className="card-img-top"
                      src={product.img}
                      alt="product"
                    />
                  </Link>

                  <Card.Body>
                  <Card.Title>
                    <Link to={'/product/' + product._id}>{product.name}</Link>
                  </Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                    <Card.Text style={{ color: '#e17d70' , bottom:0 }}> <h4>Price : {product.price} rs. </h4></Card.Text>
                  </Card.Body>


              </li>
                         </Card>  
                             
            ))}  
      </CardDeck>  
          </ul>



        )
  
    );
}

export default HomeScreen;
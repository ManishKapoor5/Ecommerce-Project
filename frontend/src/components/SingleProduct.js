import React from 'react'
import {  Card, Button, ButtonToolbar } from "react-bootstrap";
import { CartState } from "../context/Context";
import Rating from "./Rating";
import "./styles.css"
const SingleProduct = ({ prod }) => {

  const {
    state: { cart },
    dispatch,
  } = CartState();

  return (
    <div className="products">
       <Card>
  <Card.Body className="my-card-body">
      <Card>
        <Card.Img variant="top" size="10px" src={prod.image} alt={prod.name} />
        <Card.Body>
          <Card.Title wrap="nowrap" fontWeight="10px">{prod.name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>₹ {prod.price.split(".")[0]}</span>
            {prod.fastDelivery ? (
              <div>Fast Delivery</div>
            ) : (
              <div>4 days delivery</div>
            )}
            <div className='rating'><Rating rating={prod.ratings} /></div>
          </Card.Subtitle>
          {cart.some((p) => p.id === prod.id) ? (
              <Button variant="danger" onClick={() => 
                dispatch({
                  type: "REMOVE_FROM_CART",
                  payload: prod,
                })
               }
               >
                Remove from cart
                </Button>
            ) : (
              <Button onClick={() => 
                dispatch({
                  type: "ADD_TO_CART",
                  payload: prod,
                })
               }
                disabled={!prod.inStock}>
            {!prod.inStock ? "Out of Stock" : "Add to cart"}
          </Button>
            )}
        </Card.Body>
      </Card>
      </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProduct;
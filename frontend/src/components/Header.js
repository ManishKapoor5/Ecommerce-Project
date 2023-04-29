import { Dropdown, Container, FormControl, Nav, Navbar, NavbarBrand, Badge, Button } from 'react-bootstrap';
import { FaShoppingCart } from "react-icons/fa";
import React from 'react';
import { Link } from "react-router-dom";
import { CartState } from '../context/Context';
import { AiFillDelete } from 'react-icons/ai';
import { Logout } from "./Logout";
import { Flex } from '@chakra-ui/react';

const Header = () => {
  const {
    state: {cart },
    dispatch,
    productDispatch
  } = CartState();
  
  return (
   
    
    <Navbar bg="dark" variant="dark" style={{ height: 70 }}>

        <Container>
        
            <NavbarBrand>
               <Link to="/">Shopping Cart</Link>
            </NavbarBrand>
            <Navbar.Text className='search'>
                <FormControl 
                style={{ width: 500} }
                Placeholder="Search a product"
                className='m-auto'
                onChange={(e) => {
                  productDispatch({
                  type: "FILTER_BY_SEARCH",
                  payload: e.target.value,
                });
                }}
                />
            </Navbar.Text>
            <Logout marginLeft="10px"/>
        <Nav>
          
        <Dropdown>
          <Dropdown.Toggle variant="success">
            <FaShoppingCart color="white" fontSize="25px"/>
        <Badge>{cart.length}</Badge>
          </Dropdown.Toggle>

          <Dropdown.Menu align={"start"} style={{ minWidth: 370 }}>
            {cart.length > 0 ? (
              <>
              {cart.map((prod) => (
                <span className="cartitem" key={prod.id}>
                  <img
                  src={prod.image}
                  className="cartItemImg"
                  alt={prod.name}
                  />
                  <div className="cartItemDetail">
                    <span>{prod.name}</span>
                    <span>₹ {prod.price.split(".")[0]}</span>
                  </div>
                  <AiFillDelete
                   fontSize="20px"
                   style={{ cursor: "pointer"}}
                   onClick={() =>
                    dispatchEvent({
                      type: "REMOVE_FROM_CART",
                      payload: prod,
                    })
                  }
                  />
                </span>
            ))}
            <Link to="/cart">
              <Button style={{ width: "95%", margin: "0 10px"}}>
                Go to Cart
              </Button>
            </Link>
            </>
            ) : (
        <span style={{ padding: 10}}>Cart is empty!</span>
            )}
        </Dropdown.Menu>
        </Dropdown>
    </Nav>
    
    </Container>
    </Navbar>
  
  )
}

export default Header;
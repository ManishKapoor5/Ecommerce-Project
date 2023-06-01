import { Dropdown, Container, FormControl, Nav, Navbar, NavbarBrand, Badge, Button } from 'react-bootstrap';
import { FaShoppingCart } from "react-icons/fa";
import React from 'react';
import { Link } from "react-router-dom";
import { CartState } from '../context/Context';
import { AiFillDelete } from 'react-icons/ai';
import { Logout } from "./Logout";
import { Flex } from '@chakra-ui/react';
import DropdownButton from 'react-bootstrap/DropdownButton';

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
               <Link to="/usersdata">Shopping Cart</Link>
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
            
            <span className="Badge">{cart.length}</span>
        <DropdownButton
      align="end"
      title={<FaShoppingCart color="white" fontSize="25px"/>}
      width="30px"

      id="dropdown-menu-align-end"
    >
      
   {/* <Dropdown.Menu style={{ minWidth: 370 }}> */}
          
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
                    dispatch({
                      type: "REMOVE_FROM_CART",
                      payload: prod,
                    })
                  }
                  />
                </span>
            ))}
            <Dropdown.Divider />
          
            <Link to="/cart">
              <Button style={{ width: "55%", margin: "0 10px"}}>
                Go to Cart
              </Button>
            </Link>
            </>
            ) : (
        <span style={{ padding: 10}}> Cart is empty!</span>
            )}
        {/* </Dropdown.Menu> */}
      
        </DropdownButton>

        
        <Logout marginLeft="10px"/>
  
    
    </Container>
    </Navbar>
  
  )
}

export default Header;
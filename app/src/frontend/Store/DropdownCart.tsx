import React from 'react';

import { useState } from 'react';

import Dropdown from 'react-bootstrap/Dropdown';
import * as Icon from 'react-bootstrap-icons';

import "./DropdownCart.css";

function DropdownCart() {

  const [open, setOpen] = useState(false);

  return (

    <div className="App">
      <div className='menu-container'>
        <div className='menu-trigger' onClick={() => {setOpen(!open)}}>
          <Icon.Cart></Icon.Cart><Icon.CaretDownFill></Icon.CaretDownFill>
        </div>

        <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >
          <ul>
            <Dropdown.Item href="#/AddToCart">Add to cart <Icon.CartPlus></Icon.CartPlus></Dropdown.Item>
            <Dropdown.Item href="#/AddToWishlist">Add to wishlist <Icon.CartCheck></Icon.CartCheck></Dropdown.Item>
          </ul>
        </div>
      </div>
    </div>

    // <Dropdown>
    //   <Dropdown.Toggle variant="success" id="dropdown-basic">
    //     <Icon.Cart></Icon.Cart><Icon.CaretDownFill></Icon.CaretDownFill>
    //   </Dropdown.Toggle>

    //   <Dropdown.Menu>
    //     <Dropdown.Item href="#/AddToCart">Add to cart <Icon.CartPlus></Icon.CartPlus></Dropdown.Item>
    //     <Dropdown.Item href="#/AddToWishlist">Add to wishlist <Icon.CartCheck></Icon.CartCheck></Dropdown.Item>
    //   </Dropdown.Menu>
    // </Dropdown>
  );
}

export default DropdownCart;
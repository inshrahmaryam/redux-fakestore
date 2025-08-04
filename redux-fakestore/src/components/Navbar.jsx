import React from 'react'
import {Link} from 'react-router-dom';
import { useSelector } from "react-redux";
function Navbar() {
    const cartItems = useSelector((state) => state.cart.items);
  console.log("Cart:", cartItems); // just to test if it's updating
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  return (
   <nav>
    <h1>Shopping Cart</h1>
    <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/cart">🛒 Cart <span> ({totalItems}) </span></Link>

    </div>
   </nav>
  )
}

export default Navbar

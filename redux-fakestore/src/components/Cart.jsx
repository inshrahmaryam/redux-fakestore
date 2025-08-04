import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Cart.css';
import { removeFromCart } from '../features/ShopCart/cartSlice';
import { Link } from 'react-router-dom';
function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const total = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch(); // ✅ add this

  return (
    <div className="cart-wrapper">
      <h2>Your Shopping Cart</h2>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-content">
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img
                  src={item.image}
                  alt={item.title}
                  className="item-image"
                />
                <div className="item-details">
                  <h3>{item.title}</h3>
                  <p>Price per item: ${item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Total: ${item.price * item.quantity}</p>
                  <div className="item-controls">
                    <input type="number" min="1" defaultValue={item.quantity} />
                    <button>Update</button>
                    <button onClick={() => dispatch(removeFromCart(item.id))}
>
  Remove
</button>

                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <p className="total">Total: ${total}</p>
            {/* <button className="checkout">Proceed to Checkout</button> */}
           <Link to="/" className="back">
  Back to Shopping
</Link>

          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;

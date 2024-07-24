import React from "react";
import { useCart } from "../contexts/useCart"
const Cart = () => {
  const { cartItems } = useCart();

  return (
    <aside className="cart">
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} (Size: {item.size}) - Quantity: {item.quantity}
            </li>
          ))}
        </ul>
      )}
      <button className="checkout-button">Checkout</button>
    </aside>
  );
};

export default Cart;

import React, { useState } from "react";
import { CartContext } from "./cartContext";

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    console.log("Adding to cart:", item);
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const cartItemCount = cartItems.length;

  console.log("CartProvider rendered, cartItemCount:", cartItemCount);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, cartItemCount }}>
      {children}
    </CartContext.Provider>
  );
};

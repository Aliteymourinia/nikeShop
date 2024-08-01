// CartContext.js
import React, { createContext, useEffect, useState } from "react";

// Create a context
const CartContext = createContext();

// Create a provider component
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);
  console.log(cart);

  // Load cart from local storage on initial render
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    const storedCartCount = localStorage.getItem("cartCount");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
      setCartItemCount(parseInt(storedCartCount, 10));
    }
  }, []);
  // Save cart to local storage whenever cart state changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("cartItemCount", cartItemCount);
  }, [cart, cartItemCount]);

  const addItemToCart = (item) => {
    setCart((state) => [...state, item]);
    setCartItemCount((count) => count + 1); //increment the cart item count
  };

  const removeItemFromCart = (id) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.id !== id);
      setCartItemCount((count) => count - 1);
      return updatedCart;
    });
  };

  return (
    <CartContext.Provider
      value={{ cart, cartItemCount, addItemToCart, removeItemFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };

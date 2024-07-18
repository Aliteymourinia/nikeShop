// this component will hold the cart state and provide functions to modify it.
import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CCartContextart);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [notificationCount, setNotificationCount] = useState(0);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
    setNotificationCount(notificationCount + 1);
  };

  const clearNotification = () => setNotificationCount(0);

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, notificationCount, clearNotification }}
    >
      {children}
    </CartContext.Provider>
  );
};

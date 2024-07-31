// CartContext.js
import React, { createContext, useState } from "react";

// Create a context
const CartContext = createContext();

// Create a provider component
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({
    items: [],
    totalAmount: 0,
  });

  const addItemToCart = (item) => {
    setCart((prevCart) => {
      const updatedTotalAmount =
        prevCart.totalAmount + item.price * item.quantity;

      const existingCartItemIndex = prevCart.items.findIndex(
        (i) => i.id === item.id
      );

      let updatedItems;

      if (existingCartItemIndex >= 0) {
        const updatedItem = {
          ...prevCart.items[existingCartItemIndex],
          quantity:
            prevCart.items[existingCartItemIndex].quantity + item.quantity,
        };
        updatedItems = [...prevCart.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = prevCart.items.concat(item);
      }

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    });
  };

  const removeItemFromCart = (id) => {
    setCart((prevCart) => {
      const existingCartItemIndex = prevCart.items.findIndex(
        (i) => i.id === id
      );
      const existingItem = prevCart.items[existingCartItemIndex];
      const updatedTotalAmount = prevCart.totalAmount - existingItem.price;

      let updatedItems;
      if (existingItem.quantity === 1) {
        updatedItems = prevCart.items.filter((i) => i.id !== id);
      } else {
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity - 1,
        };
        updatedItems = [...prevCart.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      }

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    });
  };

  return (
    <CartContext.Provider value={{ cart, addItemToCart, removeItemFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };

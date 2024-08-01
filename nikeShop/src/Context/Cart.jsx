// CartContext.js
import React, { createContext, useState } from "react";

// Create a context
const CartContext = createContext();

// Create a provider component
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);
  console.log(cart);

  const addItemToCart = (item) => {
    setCart((state) => [...state, item]);
    setCartItemCount((count) => count + 1); //increment the cart item count
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

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
      // const updatedTotalAmount = prevCart.totalAmount - existingItem.price;

      if (!existingItem) return prevCart;

      let updatedCart;
      if (existingItem.quantity === 1) {
        updatedCart = prevCart.filter((i) => i.id !== id);
        setCartItemCount((count) => count - 1); //decrement the item count
      } else {
        updatedCart = prevCart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        );
      }
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

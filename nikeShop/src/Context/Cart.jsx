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

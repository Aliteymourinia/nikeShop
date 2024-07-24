import React from "react";
import { useCart } from "../../../context/useCart";

const CartPage = () => {
  const { cartItems } = useCart();

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index} className="mb-4">
              <div className="flex items-center">
                <img
                  src={item.imageURL}
                  alt={item.name}
                  className="w-16 h-16 rounded-lg mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p>{item.gender}men's Shoes</p>
                  <p>Size: {item.size}</p>
                  <p>${item.price}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;

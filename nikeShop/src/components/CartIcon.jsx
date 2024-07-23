import React from "react";
import { useCart } from "../context/CartContext";

const CartIcon = () => {
  const { cartItemCount } = useCart();
  console.log("CartIcon rendered, cartItemCount:", cartItemCount);
  
  return (
    <div className="cart-icon relative">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 8m10-8l2 8m-6-4h4"
        />
      </svg>
      {cartItemCount > 0 && (
        <span className="absolute -top-2 -right-2 rounded-full bg-red-500 text-white text-xs px-2 py-1">
          {cartItemCount}
        </span>
      )}
    </div>
  );
};

export default CartIcon;

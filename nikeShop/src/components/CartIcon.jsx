import React from "react";
import { useCart } from "../context/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const CartIcon = () => {
  const { notificationCount, clearNotification } = useCart();
  const navigate = useNavigate();

  const handleClick = () => {
    clearNotification();
    navigate("/cart");
  };

  return (
    <div className="relative" onClick={handleClick}>
      <FontAwesomeIcon icon={faShoppingCart} className="text-2xl" />
      {notificationCount > 0 && (
        <span className="absolute top-0 right-0 inline-block w-6 h-6 bg-red-500 text-white text-xs font-bold rounded-full text-center">
          {notificationCount}
        </span>
      )}
    </div>
  );
};

export default CartIcon;

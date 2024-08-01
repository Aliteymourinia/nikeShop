// CartPage.jsx
import React, { useContext } from "react";
import { CartContext } from "../Context/Cart";
import { Link } from "react-router-dom";
import { Icon } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleDown,
  faArrowAltCircleRight,
  faBasketball,
  faRemove,
  faTrash,
  faTrashAlt,
  faTrashArrowUp,
  faTrashRestore,
} from "@fortawesome/free-solid-svg-icons";
import ArrowCircleRight from "@mui/icons-material/ArrowCircleRight";

const CartPage = () => {
  const { cart, removeItemFromCart } = useContext(CartContext);

  const handleRemoveClick = (id) => {
    removeItemFromCart(id);
  };

  return (
    <div className="cart-page">
      <h1 className="text-2xl mb-4">Your Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>
          Your cart is empty. Go back to <Link to="/">shopping</Link>!
        </p>
      ) : (
        <div>
          <div className="cart-items">
            {cart.map((item, index) => (
              <div
                key={index}
                className="cart-item flex justify-between items-center mb-6 p-4 border rounded"
              >
                <div className="item-details flex items-center">
                  <img
                    src={item.imageURL}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded mr-4"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-600">{item.gender}'s Shoes</p>
                    <p className="text-gray-600">{item.category}</p>
                    <p className="text-lg font-semibold">${item.price}</p>
                  </div>
                </div>
                <FontAwesomeIcon
                  icon={faTrashAlt}
                  className="p-5 h-6 cursor-pointer "
                  onClick={() => handleRemoveClick(item.id)}
                />
              </div>
            ))}
          </div>
          <Link
            to="/checkout"
            className="checkout-button bg-blue-500 text-white px-4 py-4 ml-[43%] rounded-xl mt-4  hover:bg-blue-700"
          >
            Proceed to Checkout
            <FontAwesomeIcon icon={faArrowAltCircleRight} className="px-2" />
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartPage;

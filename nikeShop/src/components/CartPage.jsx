// CartPage.jsx
import React, { useContext } from "react";
import { CartContext } from "../Context/Cart";
import { Link } from "react-router-dom";

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
                className="cart-item flex justify-between items-center mb-4 p-4 border rounded"
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
                <button
                  className="remove-button text-red-600 hover:underline"
                  onClick={() => handleRemoveClick(item.id)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <Link
            to="/checkout"
            className="checkout-button bg-blue-500 text-white px-4 py-2 rounded mt-4"
          >
            Proceed to Checkout
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartPage;

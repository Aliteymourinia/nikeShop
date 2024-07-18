import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/ProductDetails.css";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import CardsTwo from "./CardsTwo";
import AirGreen from "../assets/AirGreen.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHamburger, faHeart } from "@fortawesome/free-solid-svg-icons";
import FavouriteButton from "./FavouriteButton";

const HeartIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    className="h-5 w-5"
  >
    <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
  </svg>
);
const ProductDetails = ({ products }) => {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState(null);
  const allProducts = {
    ...products.men,
    ...products.women,
    ...products.kids,
    ...products.customize,
  };

  const product = Object.values(allProducts).find(
    (product) => product.id === parseInt(id)
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };
  const renderSizeCell = (size) => (
    <td
      key={size}
      className={`cursor-pointer p-2 rounded-md text-gray-800 border border-gray-300 ${
        selectedSize === size ? "outline " : ""
      }`}
      onClick={() => handleSizeClick(size)}
    >
      {size}
    </td>
  );

  const sizes = [
    "US 2.5",
    "US 3",
    "US 3.5",
    "US 4",
    "US 4.5",
    "US 5",
    "US 5.5",
    "US 6",
    "US 6.5",
    "US 7",
    "US 7.5",
    "US 8",
    "US 8.5",
    "US 9",
    "US 9.5",
    "US 10",
  ];

  return (
    <div className="ProductDetails flex p-3 pl-28">
      <img
        src={product.imageURL}
        alt={product.name}
        className="w-2/5 h-3/4 rounded-lg object-cover mx-8 "
      />
      <div className="Description-Container mt-1 ml-9 px-4">
        <h2 className="text-2xl">{product.name}</h2>
        <p className="mt-1 text-gray-700">{product.gender}'s Shoes</p>
        <p className="text-lg font-semibold mt-1">${product.price}</p>
        <h1 className="pt-4">Select Size</h1>

        <table className=" text-center border-gray-300 border-separate cursor-pointer border-spacing-1 -ml-2 ">
          <tbody className="flex flex-wrap">
            {sizes.map((size, index) => (
              <tr key={index}>{renderSizeCell(size)}</tr>
            ))}
          </tbody>
        </table>
        <PrimaryButton
          text="Add to Bag"
          className="mt-6 px-28 py-4 mx-1 rounded-full scale-110 hover:bg-zinc-500 hover:text-white text-nowrap font-sans"
        />
        <FavouriteButton
          text="Favourite"
          icon={HeartIcon}
          className="mt-4 px-[117px] py-4 mx-1 rounded-full bg-white text-black outline outline-gray-300 scale-110 hover:outline-[1px] hover:bg-white hover:text-gray-950 text-nowrap"
        />
      </div>
      <CardsTwo
        className=" w-[1200px] h-[350px] mt-[37em] -ml-[60em] "
        src={AirGreen}
      />
    </div>
  );
};

export default ProductDetails;

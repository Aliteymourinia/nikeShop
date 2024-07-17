import React from "react";
import { useParams } from "react-router-dom";
import "../styles/ProductDetails.css";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
import CardsTwo from "./CardsTwo";
import AirGreen from "../assets/AirGreen.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const ProductDetails = ({ products }) => {
  const { id } = useParams();
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
        <table className="w-80 h-60 text-center border-gray-300 border-separate cursor-pointer border-spacing-1 -ml-2 ">
          <tbody className="">
            <tr className="parent [&>*]:border [&>*]:border-gray-300 [&>*]:p-2 [&>*]:rounded-md [&>*]:text-gray-800  ">
              <td className="">US 2.5</td>
              <td className="">US 3</td>
              <td className="">US 3.5</td>
            </tr>
            <tr className="parent [&>*]:border [&>*]:border-gray-300 [&>*]:p-2 [&>*]:rounded-md [&>*]:text-gray-800">
              <td className="">US 4</td>
              <td className="">US 4.5</td>
              <td className="">US 5</td>
            </tr>
            <tr className="parent [&>*]:border [&>*]:border-gray-300 [&>*]:p-2 [&>*]:rounded-md [&>*]:text-gray-800">
              <td className="">US 5.5</td>
              <td className="">US 6</td>
              <td className="">US 6.5</td>
            </tr>
            <tr className="parent [&>*]:border [&>*]:border-gray-300 [&>*]:p-2 [&>*]:rounded-md [&>*]:text-gray-800">
              <td className="">US 7</td>
              <td className="">US 7.5</td>
              <td className="">US 8</td>
            </tr>
            <tr className="parent [&>*]:border [&>*]:border-gray-300 [&>*]:p-2 [&>*]:rounded-md [&>*]:text-gray-800">
              <td className="">US 8.5</td>
              <td className="">US 9</td>
              <td className="">US 9.5</td>
            </tr>
          </tbody>
        </table>
        <PrimaryButton
          text="Add to Bag"
          className="mt-6 py-4 rounded-full scale-110 hover:bg-zinc-500 hover:text-white text-nowrap"
        />
        <SecondaryButton
          text="Favourite"
          icon={<FontAwesomeIcon icon={faHeart} />}
          className=" mt-4 font-light py-4 rounded-full bg-white text-black outline outline-gray-300 scale-110 hover:outline-[1px] hover:bg-white hover:text-black "
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

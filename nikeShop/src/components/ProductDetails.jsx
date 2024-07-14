import React from "react";
import { useParams } from "react-router-dom";
import "../styles/ProductDetails.css";
import PrimaryButton from "./PrimaryButton";
import SecondaryButton from "./SecondaryButton";
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
      <div>
        <img
          src={product.imageURL}
          alt={product.name}
          className="w-4/5 rounded-lg h-[90%] object-cover"
        />
      </div>
      <div className="Description-Container  mt-1 -ml-5">
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
          className="mt-4 px-24 py-4 rounded-full scale-110"
        />
        <SecondaryButton
          text="Add to Favourite"
          className="font-light px-20 py-4 rounded-full mt-4 bg-white text-black outline outline-gray-300  mx-3 scale-110 hover:outline-[1px] hover:bg-white hover:text-black"
        />
      </div>
    </div>
  );
};

export default ProductDetails;

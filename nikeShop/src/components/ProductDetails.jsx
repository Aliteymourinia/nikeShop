import React from "react";
import { useParams } from "react-router-dom";

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
    <div className="product-details flex p-3 pl-24">
      <div>
        <img src={product.imageURL} alt={product.name} className="w-4/5" />
      </div>
      <div className="Description-Container -mx-6 mt-1">
        <h2 className="text-2xl">{product.name}</h2>
        <p className="mt-1 text-gray-700">{product.gender}'s Shoes</p>
        <p className="text-lg font-semibold mt-2">${product.price}</p>
        <table>
          <tr>
            <td>US 2.5</td>
            <td>US 3</td>
            <td>US 3.5</td>
          </tr>
          <tr>
            <td>US 4</td>
            <td>US 4.5</td>
            <td>US 5</td>
          </tr>
          <tr>
            <td>US 5.5</td>
            <td>US 6</td>
            <td>US 6.5</td>
          </tr>
          <tr>
            <td>US 7</td>
            <td>US 7.5</td>
            <td>US 8</td>
          </tr>
          <tr>
            <td>US 8.5</td>
            <td>US 9</td>
            <td>US 9.5</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default ProductDetails;

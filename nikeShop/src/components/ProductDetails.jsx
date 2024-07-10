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
    <div className="product-details flex p-4 pl-24">
      <div>
        <img src={product.imageURL} alt={product.name} className="" />
      </div>
      <div>
        <h2 className="text-2xl  ">{product.name}</h2>
        <p className="">{product.gender}'s Shoes</p>
        <p className="text-lg font-semibold">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductDetails;

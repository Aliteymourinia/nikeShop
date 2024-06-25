import React from "react";
const ProductListing = ({ products }) => {
  const productsArray = Object.values(products);
  return (
    <div className="flex flex-wrap w-full justify-center">
      {productsArray.map((product) => {
        return (
          <div
            className="bg-gray-400 m-2 w-1/5 flex flex-col items-center"
            key={product.id}
          >
            <img src={product.imageURL} alt={product.name} />
            <h3>{product.name}</h3>
            <h2>{product.price}</h2>
          </div>
        );
      })}
    </div>
  );
};
export default ProductListing;

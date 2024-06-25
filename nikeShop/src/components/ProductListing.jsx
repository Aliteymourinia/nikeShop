import React from "react";
const ProductListing = ({ products }) => {
  const productsArray = Object.values(products);
  return (
    <div className="flex flex-wrap w-full justify-center">
      {productsArray.map((product) => {
        return (
          <div
            className="w-1/5 flex flex-col items-center m-2"
            key={product.id}
          >
            <img className="w-full" src={product.imageURL} alt={product.name} />
            <div>
              <h3>{product.name}</h3>
              <h2>{product.price}</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ProductListing;

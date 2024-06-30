import React from "react";

const ProductListing = ({ products }) => {
  const productsArray = Object.values(products);
  return (
    <div className="flex flex-wrap w-full justify-center">
      {productsArray.map((product) => {
        return (
          <div
            className="w-1/5 flex flex-col items-center m-2 bg-gray-100 hover:cursor-pointer "
            key={product.id}
          >
            <img className="w-full" src={product.imageURL} alt={product.name} />
            <div className="discription flex flex-col items-center bg-gray-300 w-full">
              <h3>{}</h3>
              <h2>{}</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ProductListing;

import React from "react";
const ProductListing = ({ products }) => {
  const productListItems = products.map((product) => {
    return (
      <div key={product.id}>
        <h3>{product.name}</h3>
        <p>{product.brand}</p>
      </div>
    );
  });

  return <div>{productListItems}</div>;
};
export default ProductListing;

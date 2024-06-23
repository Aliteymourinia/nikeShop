import React from "react";

const ProductListing = ({ products }) => {
  return (
    <div className="product-listing">
      {products.map((product) => (
        <div key={product.id}>{/* Render product details */}</div>
      ))}
    </div>
  );
};

export default ProductListing;

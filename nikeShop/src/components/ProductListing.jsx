import React from "react";
const ProductListing = ({ products }) => {
  const productsArray = Object.values(products[0]);
  return productsArray.map((product) => {
    return (
      <div key={product.id}>
        <h3>{product.name}</h3>
        <p>{product.brand}</p>
      </div>
    );
  });
};
export default ProductListing;

export function Item() {
  return (
    <div>ProductListing</div>
  )
}

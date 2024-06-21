// src/components/ProductListing.jsx
import React from 'react';

const ProductListing = ({ products }) => {
  return (
    <div className="product-listing">
      {products.map(product => (
        // Render each product item
      ))}
    </div>
  );
};

export default ProductListing;

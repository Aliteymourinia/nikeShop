import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";

const ProductDetailsPage = ({ products }) => {
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
    return (
      <Layout>
        <div>Product not found</div>
      </Layout>
    );
  }

  return (
    <div className="product-details p-4">
      <div></div>
      <Layout></Layout>
        <img
          src={product.imageURL}
          alt={product.name}
          className=""
          />
        <h2 className="text-2xl font-bold my-4">{product.name}</h2>
        <p className="text-gray-500">{product.category}</p>
        <p className="text-gray-500">{product.gender}</p>
        <p className="text-lg font-bold">${product.price}</p>
        <p className="mt-4">{product.description}</p>
      </div>
    
  );
};

export default ProductDetailsPage;

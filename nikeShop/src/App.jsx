import { Component, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import "./styles/index.css";
import "./styles/Fonts.css";
import Home from "./pages/Home";
import ProductListing from "./components/ProductListing";
import products from "./productsData";
import ProductDetails from "./components/ProductDetails";
import CartPage from "./components/CartPage";
import { CartProvider } from "./context/CartContext";
import CartIcon from "./components/CartIcon";
import Layout from "./components/Layout";
import Header from "./components/Header";

function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="men"
            element={<ProductListing products={products.men} />}
          />
          <Route
            path="women"
            element={<ProductListing products={products.women} />}
          />
          <Route
            path="kids"
            element={<ProductListing products={products.kids} />}
          />
          <Route
            path="customize"
            element={<ProductListing products={products.customize} />}
          />
          <Route
            path="product/:id"
            element={<ProductDetails products={products} />}
          />
        </Route>
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </CartProvider>
  );
}
export default App;

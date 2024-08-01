import { Component, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductListing from "./components/ProductListing";
import products from "./productsData";
import ProductDetails from "./components/ProductDetails";
import Layout from "./components/Layout";
import Header from "./components/Header";
import { CartProvider } from "./Context/Cart";
import "./styles/App.css";
import "./styles/index.css";
import "./styles/Fonts.css";
import CartIcon from "./components/CartIcon";
import CartPage from "./components/CartPage";
import Cart from "./components/Cart";
import CardsTwo from "./components/CardsTwo";

function App() {
  console.log("App rendered");
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
        <Route path="CartPage" element={<CartIcon />} />
      </Routes>
    </CartProvider>
  );
}
export default App;

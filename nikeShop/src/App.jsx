import { Component, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
  Link,
} from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import ProductListing from "./components/ProductListing";
import products from "./productsData";
function App() {
  const location = useLocation();

  const isProductPage =
    location.pathname === "/men" ||
    location.pathname === "/women" ||
    location.pathname === "/kids" ||
    location.pathname === "/customize";

  let currentProducts = {};
  if (isProductPage) currentProducts = products.men;
  else if (isProductPage) currentProducts = products.women;
  else if (isProductPage) currentProducts = products.kids;
  else if (isProductPage) currentProducts = products.customize;

  return (
    <div className="App">
      <Header />
      {!isProductPage}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<ProductListing />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route
          path="/men"
          element={<ProductListing products={products.men} />}
        ></Route>

        <Route
          path="/women"
          element={<ProductListing products={products.women} />}
        />
        <Route
          path="/kids"
          element={<ProductListing products={products.kids} />}
        />
        <Route
          path="/customize"
          element={<ProductListing products={products.customize} />}
        />
      </Routes>
    </div>
  );
}
export default App;

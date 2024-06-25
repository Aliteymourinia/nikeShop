import { Component, useState } from "react";
import "./App.css";
import Button from "@mui/material/Button";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import Footer from "./components/Footer";
import ProductListing from "./components/ProductListing";
import productsData, { products } from "./productsData";
function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <ProductListing products={productsData} />;
    </div>
  );
}
export default App;

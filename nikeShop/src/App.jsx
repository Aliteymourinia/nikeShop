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
  return (
    <Router>
      <div className="App">
        <Header />
        <HeroSection />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={<ProductListing />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route
            path="/men"
            element={<ProductListing products={products} />}
          ></Route>
        </Routes>
      </div>
    </Router>
  );
}
export default App;

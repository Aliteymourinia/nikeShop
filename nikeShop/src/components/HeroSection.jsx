import React from "react";
import { Button, Select } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {} from "@fortawesome/free-solid-svg-icons";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
const HeroSection = () => {
  return (
    <section className="hero">
      <h1>Shoes as unique as the human who wears it.</h1>
      <h2>We provide best shoes for every budget , as you want</h2>
      <h1>$319.19</h1>
      <img src="" alt="" />
      <div className="buttonContainer flex">
        <button className="px-6">
          Shop Now
          <ArrowCircleRightIcon className="ml-4" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;

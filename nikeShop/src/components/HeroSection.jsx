import React from "react";
import { Button, Select } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {} from "@fortawesome/free-solid-svg-icons";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
const HeroSection = () => {
  return (
    <section className="hero">
      <h1></h1>
      <h2></h2>
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

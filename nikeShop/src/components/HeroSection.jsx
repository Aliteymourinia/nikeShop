import React from "react";
import { Button, Select } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {} from "@fortawesome/free-solid-svg-icons";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import nikeShoe from "../assets/nikeShoe.png";
const HeroSection = () => {
  return (
    <section className="hero flex flex-col  justify-between">
      <h1 className="text-balance w-1/3">
        Shoes as unique as the human who wears it.
      </h1>
      <h2 className="w-1/4 text-sm">
        We provide best shoes for every budget as you want , discover new
        collections.
      </h2>
      <h1 className="mt-7">$319.19</h1>
      <img className="w-1/2" src={nikeShoe} alt="nikeShoe" />
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

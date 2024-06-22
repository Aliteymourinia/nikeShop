import React from "react";
import { Button, Select } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {} from "@fortawesome/free-solid-svg-icons";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import nikeShoe from "../assets/nikeShoe.png";
const HeroSection = () => {
  return (
    <section className="hero flex flex-row p-8">
      <div>
        <h1 className="text-balance w-2/3">
          Shoes as unique as the human who wears it.
        </h1>
        <h2 className="w-2/4 mx-1">
          We provide best shoes for every budget as you want , discover new
          collections.
        </h2>
        <h1 className="mt-7 mx-10 font-sans">$319.19</h1>
      </div>
      <div>
        <img className="w-1/2" src={nikeShoe} alt="nikeShoe" />
        <div className="buttonContainer flex">
          <button className="px-6">
            Shop Now
            <ArrowCircleRightIcon className="ml-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

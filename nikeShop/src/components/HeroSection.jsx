import React from "react";
import { Button, Select } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {} from "@fortawesome/free-solid-svg-icons";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import nikeShoe from "../assets/nikeShoe.png";

const HeroSection = () => {
  return (
    <section className="hero flex flex-row p-10 items-center">
      <div className="relative left-36">
        <h1 className="w-2/5 leading-tight text-5xl font-bold font-sans">
          Shoes as unique as the human who wears it.
        </h1>
        <h2 className="w-80 mx-1 text-sm my-2 font-sans text-gray-600">
          We provide best shoes for every budget as you want , discover new
          collections.
        </h2>
        <h1 className="absolute left-16 top-60 font-sans text-5xl font-bold">
          $320.19
        </h1>
      </div>
      <div className="flex flex-col items-center absolute w-2/5 left-[40%] top-20 ">
        <img className="" src={nikeShoe} alt="nikeShoe" />
        <div className="buttonContainer flex">
          <button className="px-7 absolute top-[65%] left-[63%]">
            Shop now
          </button>
        </div>
      </div>
    </section>
  ); //add link to shop now btn for going to men products!
};

export default HeroSection;

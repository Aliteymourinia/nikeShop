import React from "react";
import { Button, Select } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {} from "@fortawesome/free-solid-svg-icons";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import nikeShoe from "../assets/nikeShoe.png";
import PrimaryButton from "./PrimaryButton";

const HeroSection = () => {
  return (
    <section className="hero flex flex-row py-10 items-center ">
      <div className="relative left-64 w-2/4">
        <h1 className="w-3/5 leading-tight text-5xl font-bold heroSectionText ">
          Shoes as unique as the human who wears it.
        </h1>
        <h2 className="w-80 mx-1 text-sm my-2 font-sans text-gray-600">
          We provide best shoes for every budget as you want , discover new
          collections.
        </h2>
        <h1 className="absolute left-16 top-64 font-sans text-5xl font-bold">
          $320.19
        </h1>
      </div>
      <div className="flex flex-col items-center absolute w-2/5 left-[40%] top-16 ">
        <img className="" src={nikeShoe} alt="nikeShoe" />
        <div className="buttonContainer absolute top-[65%] left-[63%]">
          <Link to={"/Men"}>
            <PrimaryButton text="Shop Now" className="px-10 py-4 text-nowrap rounded-full" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

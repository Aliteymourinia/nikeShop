import React from "react";
import SecondaryButton from "../components/SecondaryButton";
import blueNike from "../assets/blueNike.png";
import LightGreen from "../assets/LightGreen.png";
import whiteAir from "../assets/whiteAir.png";
import Accessories from "../assets/Accessories.png";
import Hoodie from "../assets/Hoodie.jpg";
import WhiteCap from "../assets/WhiteCap.jpg";
import "../styles/Cards.css";

const CardsTwo = ({ className }) => {
  return (
    <div className={` ${className}`}>
      {""}
      {/* The above className is for pass props to another components */}
      <section className="flex ">
        <div className="">
          <a href="" className="">
            <img className="" src={Hoodie} alt="" />
          </a>
          <h1>Nike Dunk Low Retro</h1>
          <h2 className="text-gray-500">Men's Shoe</h2>
          <h3>$109.99</h3>
        </div>
        <div>
          <a href="" className="">
            <img className="" src={WhiteCap} alt="" />
          </a>
          <h1>Nike Air Force Low</h1>
          <h2 className="text-gray-500">Men's Shoe</h2>
          <h3></h3>
        </div>
        <div>
          <a href="" className="">
            <img className="" src={Accessories} alt="" />
            <h1>Nike Dunk Low Green</h1>
            <h2 className="text-gray-500">Men's Shoe</h2>
            <h3></h3>
          </a>
        </div>
      </section>
    </div>
  );
};

export default CardsTwo;

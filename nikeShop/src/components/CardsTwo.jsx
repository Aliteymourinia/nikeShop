import React from "react";
import SecondaryButton from "../components/SecondaryButton";
import blueNike from "../assets/blueNike.png";
import LightGreen from "../assets/LightGreen.png";
import whiteAir from "../assets/whiteAir.png";
import "../styles/Cards.css";

const CardsTwo = ({ className }) => {
  return (
    <div className={`-ml-[70em] ${className}`}>
      {""}
      {/* The above className is for pass props to another components */}
      <h1 className="text-2xl capitalize mb-9">You might also like</h1>
      <section className="flex justify-center gap-3 items-center ">
        <div className="">
          <a href="" className="">
            <img
              className="w-full h-full object-cover object-[50%,1%]"
              src={blueNike}
              alt="blueNikeShoe"
            />
          </a>
          <h1>Nike Dunk Low Retro</h1>
          <h2>Men's Shoe</h2>
          <h3>$109.99</h3>
        </div>
        <div>
          <a href="" className="">
            <img
              className="w-full h-full object-cover object-[50%,1%]"
              src={whiteAir}
              alt="whiteAirShoe"
            />
          </a>
          <h1>Nike Air Force Low</h1>
          <h2>Men's Shoe</h2>
          <h3>$109.99</h3>
        </div>
        <div>
          <a href="" className="">
            <img
              className="w-full h-full object-cover object-[50%,1%]"
              src={LightGreen}
              alt="LightGreenShoe"
            />
            <h1>Nike Dunk Low Green</h1>
            <h2>Men's Shoe</h2>
            <h3>$109.99</h3>
          </a>
        </div>
      </section>
    </div>
  );
};

export default CardsTwo;

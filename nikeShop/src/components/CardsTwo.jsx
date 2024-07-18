import React from "react";
import SecondaryButton from "../components/SecondaryButton";
import blueNike from "../assets/blueNike.png";
import LightGreen from "../assets/LightGreen.png";
import whiteAir from "../assets/whiteAir.png";
import "../styles/Cards.css";

const CardsTwo = ({ className }) => {
  return (
    <div className={` ${className}`}>
      {" "}
      {/* The above className is for pass props to another components */}
      <h1 className="text-2xl capitalize mb-9">You might also like</h1>
      <section className="flex justify-center gap-3">
        <div className="w-[300px]">
          <a href="" className="">
            <img
              className="w-full h-full object-cover object-[50%,1%]"
              src={blueNike}
              alt="blueNikeShoe"
            />
          </a>
          <h1>Nike Dunk Low Retro</h1>
          <h2>Men's Shoe</h2>
          <h3>£109.99</h3>
        </div>
        <div>
          <a href="" className="relative image-container-two">
            <img
              className="w-full h-full object-cover object-[50%,1%]"
              src={LightGreen}
              alt="LightGreenShoe"
            />
          </a>
        </div>
        <div>
          <a href="" className="relative image-container-two">
            <img
              className="w-full h-full object-cover object-[50%,1%]"
              src={whiteAir}
              alt="whiteAirShoe"
            />
          </a>
        </div>
      </section>
    </div>
  );
};

export default CardsTwo;

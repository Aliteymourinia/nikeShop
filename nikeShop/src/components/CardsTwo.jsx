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
      <section className="flex justify-center gap-3">
        <a href="" className="relative image-container-two">
          <img
            className="w-full h-full object-cover object-[50%,1%]"
            src={blueNike}
            alt="blueNikeShoe"
          />
        </a>
        <a href="" className="relative image-container-two">
          <img
            className="w-full h-full object-cover object-[50%,1%]"
            src={LightGreen}
            alt="LightGreenShoe"
          />
        </a>
        <a href="" className="relative image-container-two">
          <img
            className="w-full h-full object-cover object-[50%,1%]"
            src={whiteAir}
            alt="whiteAirShoe"
          />
        </a>
      </section>
    </div>
  );
};

export default CardsTwo;

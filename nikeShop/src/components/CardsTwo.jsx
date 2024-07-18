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
      {/* this className is for pass props to another components */}
      <section className="flex justify-center gap-3">
        <a href="" className="relative image-container-two">
          <img
            className="w-full h-full object-cover object-[50%,1%]"
            src={blueNike}
            alt="blueNikeShoe"
          />
          <div className="absolute flex flex-col bottom-[5em] left-1/4 transform -translate-x-1/2">
            <h1 className="text-white text-3xl pt-5 ">Clothes</h1>
            <span className="absolute top-24 -my-4 left-16 transform -translate-x-3/4 ">
              <SecondaryButton text="Shop" />
            </span>
          </div>
        </a>
        <a href="" className="relative image-container-two">
          <img
            className="w-full h-full object-cover object-[50%,1%]"
            src={LightGreen}
            alt="LightGreenShoe"
          />
          <div className="absolute flex flex-col bottom-[5em] left-28 transform -translate-x-20">
            <h1 className="text-white text-3xl pt-1 ">Caps</h1>
            <span className="absolute top-24 -my-8 left-16 transform -translate-x-3/4 ">
              <SecondaryButton text="Shop" />
            </span>
          </div>
        </a>
        <a href="" className="relative image-container-two">
          <img
            className="w-full h-full object-cover object-[50%,1%]"
            src={whiteAir}
            alt="whiteAirShoe"
          />
          <div className="absolute flex flex-col bottom-[5em] left-1/4 transform -translate-x-1/2">
            <h1 className="text-white text-3xl pt-5 ">Accessories</h1>
            <span className="absolute top-24 -my-4 left-16 transform -translate-x-3/4 ">
              <SecondaryButton text="Shop" />
            </span>
          </div>
        </a>
      </section>
    </div>
  );
};

export default CardsTwo;

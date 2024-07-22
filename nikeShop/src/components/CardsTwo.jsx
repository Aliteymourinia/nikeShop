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
      <section className="flex gap-3 ">
        <div className="">
          <a href="" className="">
            <img
              className=" image-container-two object-cover object-left-bottom   "
              src={Hoodie}
              alt=""
            />
            <div className="absolute -translate-y-20 translate-x-3">
              <h1 className="text-white text-2xl">Hoodie</h1>
              <SecondaryButton text="Shop" />
            </div>
          </a>
        </div>
        <div>
          <a href="" className="">
            <img
              className=" image-container-two object-cover"
              src={WhiteCap}
              alt=""
            />
            <div className="absolute -translate-y-20 translate-x-3">
              <h1 className="text-white text-2xl">Cap</h1>
              <SecondaryButton text="Shop" />
            </div>
          </a>
        </div>
        <div>
          <a href="" className="relative">
            <img
              className=" image-container-two object-cover"
              src={Accessories}
              alt=""
            />
            <div className="absolute -translate-y-20 translate-x-3">
              <h1 className="text-white text-2xl">Accessories</h1>
              <SecondaryButton text="Shop" />
            </div>
          </a>
        </div>
      </section>
    </div>
  );
};

export default CardsTwo;

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
        <div className="relative">
          <a href="" className="">
            <img
              className=" image-container-two object-fill "
              src={Hoodie}
              alt="Hoodie"
            />
            <div className="absolute -translate-y-20 translate-x-3 flex flex-col gap-5 -mt-10 mx-7">
              <h1 className="text-white text-2xl mx-2">Hoodie</h1>
              <SecondaryButton text="Shop" />
            </div>
          </a>
        </div>
        <div>
          <a href="" className="">
            <img
              className=" image-container-two object-cover"
              src={WhiteCap}
              alt="WhiteCap"
            />
            <div className="absolute -translate-y-20 translate-x-3 flex flex-col items-center gap-5 -mt-10">
              <h1 className="text-white text-3xl">Cap</h1>
              <SecondaryButton text="Shop" />
            </div>
          </a>
        </div>
        <div>
          <a href="" className="">
            <img
              className="image-container-two object-cover"
              src={Accessories}
              alt="Accessories"
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

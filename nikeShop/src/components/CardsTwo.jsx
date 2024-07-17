import React from "react";
import SecondaryButton from "../components/SecondaryButton";
import Hoodie from "../assets/Hoodie.jpg";
import WhiteCap from "../assets/WhiteCap.jpg";
import Accessories from "../assets/Accessories.png";
import "../styles/Cards.css";

const CardsTwo = ({ className, src }) => {
  return (
    <div {...src} className={` ${className}`}>
      {" "}
      {/* this className is for pass props to another components */}
      <section className="flex justify-center gap-3">
        <a href="" className="relative image-container-two">
          <img
            className="w-full h-full object-cover object-[50%,1%]"
            src={Hoodie}
            alt="Clothes"
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
            src={WhiteCap}
            alt="Clothes"
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
            src={Accessories}
            alt="Clothes"
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

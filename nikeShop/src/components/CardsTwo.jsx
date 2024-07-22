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
              className="image-container object-cover object-[10%,20%] "
              src={Hoodie}
              alt=""
            />
            <h1>Hoodie</h1>
            <SecondaryButton text="Shop" />
          </a>
        </div>
        <div>
          <a href="" className="">
            <img
              className="image-container object-cover"
              src={WhiteCap}
              alt=""
            />
            <h1>Cap</h1>
            <SecondaryButton text="Shop" />
          </a>
        </div>
        <div>
          <a href="" className="">
            <img
              className="image-container object-cover"
              src={Accessories}
              alt=""
            />
            <h1>Accessories</h1>
            <SecondaryButton text="Shop" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default CardsTwo;

import React from "react";
import SecondaryButton from "../components/SecondaryButton";
import blueNike from "../assets/blueNike.png";
import LightGreen from "../assets/LightGreen.png";
import whiteAir from "../assets/whiteAir.png";
import "../styles/Cards.css";

const SimilarCards = ({ className }) => {
  return (
    <div className={` ${className}`}>
      {""}
      {/* The above className is for pass props to another components */}
      <h1 className="text-2xl capitalize mb-9">You might also like</h1>
      <section className=" ">
        <div className="">
          <a href="" className="">
            <img className="" alt="" />
          </a>
          <h1>Nike Dunk Low Retro</h1>
          <h2></h2>
          <h3>$109.99</h3>
        </div>
        <div>
          <a href="" className="">
            <img className="" src alt="" />
          </a>
          <h1>Nike Air Force Low</h1>
          <h2></h2>
          <h3></h3>
        </div>
        <div>
          <a href="" className="">
            <img className="" src alt="" />
            <h1>Nike Dunk Low Green</h1>
            <h2></h2>
            <h3></h3>
          </a>
        </div>
      </section>
    </div>
  );
};

export default SimilarCards;

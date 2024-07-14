import React from "react";
import BlackShoe from "../assets/BlackShoe.jpg";
import AirColor from "../assets/AirColor.png";
import AirGreen from "../assets/AirGreen.png";
import GreenShoe from "../assets/GreenShoe.jpg";
import SecondaryButton from "../components/SecondaryButton";
import VideoComponent from "../components/Video";
import Hoodie from "../assets/Hoodie.jpg";
import WhiteCap from "../assets/WhiteCap.jpg";
import Accessories from "../assets/Accessories.png";
import "../styles/Cards.css";
import CardsTwo from "./CardsTwo";
const Cards = () => {
  return (
    <div>
      <section className="flex ">
        <a
          href="https://www.nike.com/fr/t/chaussure-air-jordan-1-mid-pour-8KzLMC/DV0991-101?nikegos=true"
          className=" relative image-container"
        >
          <img
            className="w-full h-full object-cover object-[100%,90%]"
            src={BlackShoe}
            alt="Blackshoe"
          />
          <div className="absolute flex flex-col gap-1 bottom-12 left-1/4 transform -translate-x-1/2 mb-5">
            <h2 className="text-white text-lg">Trending</h2>
            <h1 className="text-white text-2xl">Classic Black and White</h1>
            <span className="absolute top-24 -my-4 left-16 transform -translate-x-3/4">
              <SecondaryButton text="Shop" />
            </span>
          </div>
        </a>

        <a href="" className="relative image-container">
          <img
            className="w-full h-full object-cover object-[50%,100%]"
            src={GreenShoe}
            alt="GreenShoe"
          />
          <div className="absolute flex flex-col gap-1 bottom-[60px] left-1/4 transform -translate-x-1/2">
            <h2 className="text-white text-lg">Trending</h2>
            <h1 className="text-white text-2xl mb-2 ">Nike Dunk Low Green</h1>
            <span className="absolute top-24 -my-4 left-16 transform -translate-x-3/4 ">
              <SecondaryButton text="Shop" />
            </span>
          </div>
        </a>
      </section>
      <section className="flex">
        <a href="" className="relative image-container">
          <img
            className="w-full h-full object-cover object-[50%,100%]"
            src={AirColor}
            alt="AirColor"
          />
          <div className="absolute bottom-12 flex flex-col gap-1 left-1/4 transform -translate-x-1/2 mb-4">
            <h2 className="text-white text-lg">Trending</h2>
            <h1 className="text-white text-2xl mb-2">Nike Dunk Low Abstract</h1>
            <span className="absolute top-24 -my-4 left-16 transform -translate-x-3/4">
              <SecondaryButton text="Shop" />
            </span>
          </div>
        </a>

        <a href="" className="relative image-container">
          <img
            className="w-full h-full object-cover object-[50%,80%]"
            src={AirGreen}
            alt="AirGreen"
          />
          <div className="absolute bottom-12 flex flex-col gap-1 left-1/4 transform -translate-x-1/2 mb-4">
            <h2 className="text-white text-lg">Trending</h2>
            <h1 className="text-white text-2xl mb-2">
              Air Jordan high Seafoam
            </h1>
            <span className="absolute top-24 -my-4 left-16 transform -translate-x-3/4">
              <SecondaryButton text="Shop" />
            </span>
          </div>
        </a>
      </section>
      <h2 className="text-3xl flex justify-center mt-20 ">
        Running isn't just Running
      </h2>
      <div>
        <VideoComponent />
      </div>
      <h3 className="text-3xl flex justify-center mb-20 ">
        Discover The New Products By Categories
      </h3>
      <CardsTwo />
    </div>
  );
};

export default Cards;

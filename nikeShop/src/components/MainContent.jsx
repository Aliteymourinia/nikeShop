import React from "react";
import BlackShoe from "../assets/BlackShoe.jpg";
import AirColor from "../assets/AirColor.png";
import AirGreen from "../assets/AirGreen.png";
import GreenShoe from "../assets/GreenShoe.jpg";
import SecondaryButton from "../components/SecondaryButton";
// import NikeGif from "../assets/NikeGif.jpg";
function Main() {
  return (
    <div className="my-40 flex flex-col">
      <section className="flex ">
        <a href="" className=" relative image-container">
          <img
            className="w-full h-full object-cover object-[100%,90%]"
            src={BlackShoe}
            alt="Blackshoe"
          />
          <div className="absolute  bottom-0 left-1/2 transform -translate-x-1/2 mb-4">
            <SecondaryButton />
          </div>
        </a>

        <a href="" className="relative image-container">
          <img
            className="w-full h-full object-cover object-[50%,100%]"
            src={GreenShoe}
            alt="GreenShoe"
          />
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4">
            <SecondaryButton />
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
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4">
            <SecondaryButton />
          </div>
        </a>

        <a href="" className="relative image-container">
          <img
            className="w-full h-full object-cover object-[50%,80%]"
            src={AirGreen}
            alt="AirGreen"
          />
          <div className="absolute  bottom-0 left-1/2 transform -translate-x-1/2 mb-4">
            <SecondaryButton />
          </div>
        </a>
      </section>
    </div>
  );
}

export default Main;

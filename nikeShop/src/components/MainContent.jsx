import React from "react";
import BlackShoe from "../assets/BlackShoe.jpg";
import BasketballShoe from "../assets/BasketballShoe.jpg";
import WhiteShoe from "../assets/WhiteShoe1.png";
import GreenShoe from "../assets/GreenShoe.jpg";
// import NikeGif from "../assets/NikeGif.jpg";
function Main() {
  return (
    <div className="my-40 flex flex-col">
      <section className="flex ">
        <a href="">
          <div className="image-container">
            <img
              className="w-full h-full object-cover object-[100%,90%]"
              src={BlackShoe}
              alt="Blackshoe"
            />
          </div>
        </a>
        <a href="">
          <div className="image-container">
            <img
              className="w-full h-full object-cover object-[50%,100%]"
              src={GreenShoe}
              alt="GreenShoe"
            />
          </div>
        </a>
      </section>
      <section className="flex">
        <a href="">
          <div className="image-container">
            <img
              className="w-full h-full object-cover object-[50%,70%]"
              src={WhiteShoe}
              alt="WhiteShoe"
            />
          </div>
        </a>
        <a href="">
          <div className="image-container">
            <img
              className="w-full h-full object-cover object-[50%,100%] scale-110"
              src={BasketballShoe}
              alt="GreenShoee"
            />
          </div>
        </a>
      </section>
    </div>
  );
}

export default Main;

import React from "react";
import Man1 from "../assets/Man1.jpg";
import BasketballShoe from "../assets/BasketballShoe.jpg";
import WhiteShoe1 from "../assets/WhiteShoe1.png";
import GreenShoe from "../assets/GreenShoe.jpg";
// import NikeGif from "../assets/NikeGif.jpg";
function Main() {
  return (
    <div className="my-40 flex flex-col">
      <section className="flex ">
        <a href="">
          <div className="image-container">
            <img
              className="w-full h-full object-cover object-[100%,100%] scale-125"
              src={Man1}
              alt=""
            />
          </div>
        </a>
        <a href="">
          <div className="image-container">
            <img
              className="w-full h-full object-cover object-[50%,100%]"
              src={GreenShoe}
              alt=""
            />
          </div>
        </a>
      </section>
      <section className="flex">
        <a href="">
          <div className="image-container">
            <img
              className="w-full h-full object-cover object-[50%,70%]"
              src={WhiteShoe1}
              alt="WhiteShoe"
            />
          </div>
        </a>
        <a href="">
          <div className="image-container">
            <img
              className="w-full h-full object-cover object-[50%,100%]"
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

import React from "react";
import Man1 from "../assets/Man1.png";
import Man2 from "../assets/Man2.png";
import WhiteShoe1 from "../assets/WhiteShoe1.png";
import gg from "../assets/gg.jpg";
// import NikeGif from "../assets/NikeGif.jpg";
function Main() {
  return (
    <div className="my-40 flex flex-col">
      <section className="flex ">
        <a href="">
          
        </a>
        <a href="">
        
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
              className="w-full h-full object-cover object-bottom"
              src={gg}
              alt="GreenShoee"
            />
          </div>
        </a>
      </section>
    </div>
  );
}

export default Main;

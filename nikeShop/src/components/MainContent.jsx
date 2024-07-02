import React from "react";
import bas from "../assets/bas.jpg";
import WhiteShoe1 from "../assets/WhiteShoe1.png";
import greenShoe from "../assets/greenShoe.png";
import { green } from "@mui/material/colors";
// import NikeGif from "../assets/NikeGif.jpg";
function Main() {
  return (
    <div className="my-40 flex flex-col">
      <section className="flex ">
        <a href="">
          <div>
            <img src="" alt="" />
          </div>
        </a>
        <a href="">
          <div>
            <img src="" alt="" />
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
              className="w-full h-full object-cover"
              src={greenShoe}
              alt="GreenShoee"
            />
          </div>
        </a>
      </section>
    </div>
  );
}

export default Main;

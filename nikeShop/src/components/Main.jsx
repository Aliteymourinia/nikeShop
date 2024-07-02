import React from "react";
import Man1 from "../assets/Man1.png";
import Man2 from "../assets/Man2.png";
import WhiteShoe1 from "../assets/WhiteShoe1.png";
import GreenShoe from "../assets/GreenShoee.png";
// import NikeGif from "../assets/NikeGif.jpg";
function Main() {
  return (
    <div className="my-24 flex flex-col mx-10">
      <section className="flex">
        <a href="">
          <img src={Man1} alt="Man" />
        </a>
        <a href="">
          <img src={Man2} alt="Man2" />
        </a>
      </section>
      <section className="flex">
        <a href="">
          <img src={WhiteShoe1} alt="WhiteShoe" />
        </a>
        <a href="">
          <img src={GreenShoe} alt="GreenShoee" />
        </a>
      </section>
    </div>
  );
}

export default Main;

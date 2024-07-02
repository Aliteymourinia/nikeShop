import React from "react";
import Man1 from "../assets/Man1.png";
import Man2 from "../assets/Man2.png";
import WhiteShoe1 from "../assets/WhiteShoe1.png";
import WhiteShoe2 from "../assets/WhiteShoe2.png";
// import NikeGif from "../assets/NikeGif.jpg";
function Main() {
  return (
    <div>
      <container className="flex flex-row w-3/4 p-10 gap-5 items-center">
        <a href="">
          <img src={Man1} alt="Man" />
        </a>
        <a href="">
          <img src={Man2} alt="Man2" />
        </a>
      </container>
      <container className="flex flex-row p-10items-center">
        <a href="">
          <img src={WhiteShoe1} alt="WhiteShoe" />
        </a>
        <a href="">
          <img src={WhiteShoe2} alt="WhiteShoe2" />
        </a>
      </container>
    </div>
  );
}

export default Main;

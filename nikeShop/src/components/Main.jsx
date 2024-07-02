import React from "react";
import Man1 from "../assets/Man1.jpg";
import Man2 from "../assets/Man2.jpg";
import WhiteShoe from "../assets/WhiteShoe.jpg";
import WhiteShoe2 from "../assets/WhiteShoe2.jpg";
// import NikeGif from "../assets/NikeGif.jpg";
function Main() {
  return (
    <div>
      <section>
        <a href="">
          <img src={Man1} alt="Man" />
        </a>
        <a href="">
          <img src={Man2} alt="Man2" />
        </a>
        <a href="">
          <img src={WhiteShoe} alt="WhiteShoe" />
        </a>
        <a href="">
          <img src={WhiteShoe2} alt="WhiteShoe2" />
        </a>
      </section>
    </div>
  );
}

export default Main;

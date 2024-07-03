import React from "react";

const PrimaryButton = ({ text }) => {
  return (
    <div className="">
      <button className=" absolute top-[65%] left-[63%] active:scale-90 px-7 ">
        {text}
      </button>
    </div>
  );
};

export default PrimaryButton;

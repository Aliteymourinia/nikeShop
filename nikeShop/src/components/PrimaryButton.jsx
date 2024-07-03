import React from "react";

const PrimaryButton = ({ text }) => {
  return (
    <div className="">
      <button className=" active:scale-90 px-7 ">{text}</button>
    </div>
  );
};

export default PrimaryButton;

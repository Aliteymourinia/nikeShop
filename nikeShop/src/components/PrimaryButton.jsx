import React from "react";

const PrimaryButton = ({ text, className }) => {
  return (
    <div className="">
      <button className={`active:scale-90 px-7} ${className}`}>{text}</button>
    </div>
  );
};

export default PrimaryButton;

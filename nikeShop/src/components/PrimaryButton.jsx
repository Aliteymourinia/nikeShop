import React from "react";

const PrimaryButton = ({ text, className }) => {
  return (
    <div className="">
      <button className={`active:scale-90  ${className}`}>{text}</button>
    </div>
  );
};

export default PrimaryButton;

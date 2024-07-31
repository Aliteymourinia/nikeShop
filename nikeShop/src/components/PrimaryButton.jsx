import React from "react";

const PrimaryButton = ({ text, className, handleClick }) => {
  return (
    <div className="">
      <button onClick={handleClick} className={`active:scale-90  ${className}`}>
        {text}
      </button>
    </div>
  );
};

export default PrimaryButton;

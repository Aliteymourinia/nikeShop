import React from "react";

const PrimaryButton = ({ text, style }) => {
  return (
    <div className="">
      <button style={style} className=" active:scale-90 px-7">
        {text}
      </button>
    </div>
  );
};

export default PrimaryButton;

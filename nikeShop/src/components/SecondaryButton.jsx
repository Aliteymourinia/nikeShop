import React from "react";

function SecondaryButton({ text }) {
  return (
    <div>
      <button className="bg-white text-black px-5 font-bold hover:bg-black hover:text-white active:scale-90 ">
        {text}
      </button>
    </div>
  );
}

export default SecondaryButton;

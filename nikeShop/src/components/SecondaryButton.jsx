import React from "react";

function SecondaryButton({ text, className }) {
  return (
    <div>
      <button
        className={`bg-white text-black px-5 font-bold hover:text-white hover:bg-black active:scale-90 ${className}`}
      >
        {text}
      </button>
    </div>
  );
}

export default SecondaryButton;

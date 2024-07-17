import React from "react";

function SecondaryButton({ text, className }) {
  return (
    <div>
      <button
        className={`bg-white text-black font-bold hover:bg-black active:scale-90 ${className}`}
      >
        {text}
      </button>
    </div>
  );
}

export default SecondaryButton;

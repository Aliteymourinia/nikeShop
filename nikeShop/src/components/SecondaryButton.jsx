import React from "react";

function SecondaryButton({ text, className, icon }) {
  return (
    <div>
      <button
        className={` px-5 bg-white text-black font-bold hover:bg-black hover:text-white active:scale-88 ${className}`}
      >
        {text} {icon && <span className="absolute mx-2">{icon}</span>}
      </button>
    </div>
  );
}

export default SecondaryButton;

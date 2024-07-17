import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function SecondaryButton({ text, className, icon }) {
  return (
    <div>
      <button
        className={` px-5 bg-white text-black font-bold hover:bg-black hover:text-white active:scale-90 ${className}`}
      >
        {text} {icon && <span className="absolute mx-2">{icon}</span>}
      </button>
    </div>
  );
}

export default SecondaryButton;

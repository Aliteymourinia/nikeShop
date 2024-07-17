import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

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

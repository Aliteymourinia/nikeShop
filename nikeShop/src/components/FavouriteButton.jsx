import React from "react";

function FavouriteButton({ text, className, icon, onClick }) {
  return (
    <div>
      <button
        onClick={onClick}
        className={` px-5 bg-white text-black font-bold hover:bg-black  active:scale-90 ${className}`}
      >
        {text} {icon && <span className="absolute mx-2">{icon}</span>}
      </button>
    </div>
  );
}

export default FavouriteButton;

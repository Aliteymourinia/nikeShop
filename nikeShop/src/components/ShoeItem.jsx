import React from "react";

const ShoeItem = ({ shoe }) => {
  return (
    <div>
    
      <h2>{shoe.name}</h2>
      <p>{shoe.description}</p>
      <p>{shoe.price}</p>
    </div>
  );
};

export default ShoeItem;

import React from "react";

const ShoeList = ({ shoes }) => {
  return (
    <ul>
      {shoes.map((shoe) => (
        <li key={shoe.id}>{shoe.name}</li>
      ))}
    </ul>
  );
};

export default ShoeList;

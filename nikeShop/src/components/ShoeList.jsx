import React from "react";

const ShoeList = ({ shoes }) => {
  return (
    <div>
      <ul>
        {shoes.map((shoe) => (
          <li key={shoe.id}>{shoe.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ShoeList;

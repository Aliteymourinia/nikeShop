import React from "react";

const Alert = ({ message, className }) => {
  return (
    <div
      className={` ${className}`}
    >
      {message}
    </div>
  );
};

export default Alert;

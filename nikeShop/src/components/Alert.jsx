import React from "react";

const Alert = ({ message, className }) => {
  return (
    <div
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded ${className}`}
    >
      {message}
    </div>
  );
};

export default Alert;

import React from "react";
import Logo from "../assets/Nike.jsx";
const Header = () => {
  return (
    <header className="fixed w-fit -top-40 p-2 z-50 bg-white shadow-md">
      {/* Add your logo and navigation links here */}
      <Logo />
      
    </header>
  );
};

export default Header;

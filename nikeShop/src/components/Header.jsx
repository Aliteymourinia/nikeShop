import React from "react";
import { AppBar, Card, Toolbar, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Logo from "../assets/Nike.jsx";
const Header = () => {
  return (
    <div className="HeaderContainer flex p-2 mx-3 justify-between items-center w-full h-12 my-3">
      <Logo />
      <nav className="flex gap-10">
        <a href="#men">Men</a>
        <a href="#women">Women</a>
        <a href="#kids">Kids</a>
        <a href="#customize">Customize</a>
      </nav>
      <div className="iconContainer flex gap-4 mx-6">
        <a href="/search">
          <FontAwesomeIcon icon={faSearch} />
        </a>
        <a href="/cart">
          <FontAwesomeIcon icon={faCartShopping} />
        </a>
      </div>
    </div>
  );
};

export default Header;

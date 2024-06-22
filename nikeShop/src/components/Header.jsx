import React from "react";
import { AppBar, Card, Toolbar, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Logo from "../assets/Nike.jsx";
const Header = () => {
  return (
    <AppBar className="fixed top-0 left-0 right-0">
      <Toolbar className="flex justify-center gap-40">
        <Logo />
        {/* Place your logo here */}
        <nav>
          {/* Example navigation links */}
          <a href="#men">Men</a>
          <a href="#women">Women</a>
          <a href="#kids">Kids</a>
          <a href="#customize">Customize</a>
          <FontAwesomeIcon icon={faSearch} />
          <FontAwesomeIcon icon="fa-light fa-cart-shopping" />
        </nav>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

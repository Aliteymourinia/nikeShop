import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
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
        </nav>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

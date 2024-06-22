import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import Logo from "../assets/Nike.jsx";
const Header = () => {
  return (
    <AppBar
      position="static"
      className="w-fit -top-40 p-2 z-50 bg-white shadow-md"
    >
      <Toolbar>
        <Typography variant="h" component="div" sx={{ flexGrow: 1 }}>
          <Logo />
          {/* Place your logo here */}
        </Typography>
        <nav className="flex gap-4 justify-around">
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

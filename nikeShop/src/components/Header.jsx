import React from "react";
import { AppBar, Card, Toolbar, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Logo from "../assets/Nike.jsx";
const Header = () => {
  return (
    <div className="HeaderContainer flex p-7 mx-3 justify-between items-center w-full h-12 my-3">
      <Logo />
      <nav className="flex gap-12">
        <ul>
          <li className="hover:underline underline-offset- hover:cursor-pointer " href="#men">
            Men
          </li>
          <li
            className="hover:underline underline-offset- hover:cursor-pointer transition-shadow"
            href="#women"
          >
            Women
          </li>
          <li
            className="hover:underline underline-offset- hover:cursor-pointer transition-shadow"
            href="#kids"
          >
            Kids
          </li>
          <li
            className="hover:underline underline-offset-4 transition-shadow hover:cursor-pointer"
            href="#customize"
          >
            Customize
          </li>
        </ul>
        <div className="iconContainer flex gap-4 mx-6 text-lg">
          <a href="/search">
            <FontAwesomeIcon icon={faSearch} />
          </a>
          <a href="/cart">
            <FontAwesomeIcon icon={faCartShopping} />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Header;

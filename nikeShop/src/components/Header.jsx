import React from "react";
import { AppBar, Card, Toolbar, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faContactBook,
  faContactCard,
  faPerson,
  faPersonBiking,
  faPersonCirclePlus,
  faSearch,
  faSign,
  faSignIn,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Logo from "../assets/Nike.jsx";
import "../styles/Header.css";

const Header = () => {
  return (
    <div className="Header-container flex p-6 mx-3 justify-center items-center w-full h-12 my-3 relative">
      <div className="logo-container hover:cursor-pointer">
        <Link to={"/"}>
          <Logo />
        </Link>
      </div>
      <nav className="flex-1 flex justify-center ">
        <ul className="flex items-center gap-6">
          <li>
            <Link to="/men">Men</Link>
          </li>
          <li>
            <Link to="/women">Women</Link>
          </li>
          <li>
            <Link to="/kids">Kids</Link>
          </li>
          <li>
            <Link to="/customize">Customize</Link>
          </li>
        </ul>
      </nav>
      <div className="iconContainer text-lg hover:cursor-pointer flex gap-4 items-center">
        <Link to="/search">
          <FontAwesomeIcon icon={faCartShopping} />
        </Link>

        <Link to="/cart">
          <FontAwesomeIcon icon={faUser} />
        </Link>
      </div>
    </div>
  );
};

export default Header;

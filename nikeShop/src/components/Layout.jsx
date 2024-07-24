import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import CartIcon from "./CartIcon";
import Cart from "./Cart";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Cart />
      <Footer />
    </div>
  );
};

export default Layout;

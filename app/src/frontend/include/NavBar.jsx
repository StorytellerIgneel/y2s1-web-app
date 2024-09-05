import React, { useContext } from "react";
import { Link } from "react-router-dom";

import SearchBar from "./SearchBar";
import UserProfile from "./UserProfile";
import { CartContext } from "../Cart/CartContext";
import { IoCartSharp, IoStar } from "react-icons/io5";

function NavBar() {
  return (
    <header className="min-w-[26rem]">
      <NavBarTop />
      <NavBarBottom />
    </header>
  );
}

function NavBarTop() {
  return (
    <div className="flex h-15 items-center justify-between px-0.5 sm:px-16">
      <div className="flex items-center space-x-2.5 p-3 sm:space-x-5">
        <Link to="/">
          <img
            src="../../../images/logo/light/GNS_Horizontal_Black.svg"
            alt="GameNonStop Logo"
            className="h-6 sm:h-[30px]"
          />
        </Link>
        <div className="h-7 w-[1px] rounded bg-slate-300"></div>
        <Link to="/store" className="text-xs font-bold">
          STORE
        </Link>
        <Link to="/support" className="text-xs font-bold text-gray-600">
          Support
        </Link>
        <Link to="/about-us" className="text-xs font-bold text-gray-600">
          About Us
        </Link>
      </div>
      <UserProfile />
    </div>
  );
}

function NavBarBottom() {
  const { cart } = useContext(CartContext);
  return (
    <div className="flex h-15 items-center justify-between bg-gray-100 px-3 sm:px-20 md:px-44">
      <SearchBar />
      <div className="flex items-center space-x-6 p-3 sm:space-x-10">
        <Link to="/cart" className="flex items-center space-x-1">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-full">
            <IoCartSharp className="size-6" fill="gray" />
            <span className="absolute top-2/3 right-1/2 bg-red-500 text-white text-sm px-2 h-5 rounded-xl flex items-center justify-center">{cart.length}</span>
          </div>
          <p className="text-sm font-bold text-gray-600">Cart</p>
        </Link>
        <Link to="/wishlist" className="flex items-center space-x-1">
          <IoStar className="size-6" fill="gray" />
          <p className="text-sm font-bold text-gray-600">Wishlist</p>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;

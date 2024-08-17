import SearchBar from "./SearchBar";
import UserProfile from "./UserProfile";
import { IoCartSharp, IoStar } from "react-icons/io5";

function NavBar() {
  return (
    <div className="min-w-[26rem]">
      <NavBarTop />
      <NavBarBottom />
    </div>
  );
}

function NavBarTop() {
  return (
    <div className="flex justify-between items-center h-14 px-0.5 sm:px-16">
      <div className="p-3 flex items-center space-x-2.5 sm:space-x-5">
        <img
          src="../../../images/logo/light/GNS_Horizontal_Black.svg"
          alt="GameNonStop Logo"
          className="h-6 sm:h-[30px]"
        />
        <div className="h-7 w-[1px] bg-slate-300 rounded"></div>
        <a className="font-bold text-xs" href="">
          STORE
        </a>
        <a className="font-bold text-xs text-gray-600" href="">
          Support
        </a>
        <a className="font-bold text-xs text-gray-600" href="">
          About Us
        </a>
      </div>
      <UserProfile />
    </div>
  );
}

function NavBarBottom() {
  return (
    <div className="flex justify-between bg-gray-100 h-14 items-center px-3 md:px-44 sm:px-20">
      <SearchBar />
      <div className="p-3 flex items-center space-x-6 sm:space-x-10">
        <a className="flex items-center space-x-1" href="">
          <IoCartSharp className="size-5" fill="gray"/>
          <span className="font-bold text-sm text-gray-600">Cart</span>
        </a>
        <a className="flex items-center space-x-1" href="">
          <IoStar className="size-5" fill="gray"/>
          <span className="font-bold text-sm text-gray-600">Wishlist</span>
        </a>
      </div>
    </div>
  );
}

export default NavBar;

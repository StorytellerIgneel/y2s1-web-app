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
  // const profile = OAuth();
  return (
    <div className="flex h-14 items-center justify-between px-0.5 sm:px-16">
      <div className="flex items-center space-x-2.5 p-3 sm:space-x-5">
        <img
          src="../../../images/logo/light/GNS_Horizontal_Black.svg"
          alt="GameNonStop Logo"
          className="h-6 sm:h-[30px]"
        />
        <div className="h-7 w-[1px] rounded bg-slate-300"></div>
        <a className="text-xs font-bold" href="">
          STORE
        </a>
        <a className="text-xs font-bold text-gray-600">
          Support
        </a>
        <a className="text-xs font-bold text-gray-600">
          About Us
        </a>
      </div>
      <UserProfile />
    </div>
  );
}

function NavBarBottom() {
  return (
    <div className="flex h-14 items-center justify-between bg-gray-100 px-3 sm:px-20 md:px-44">
      <SearchBar />
      <div className="flex items-center space-x-6 p-3 sm:space-x-10">
        <a className="flex items-center space-x-1" href="">
          <IoCartSharp className="size-5" fill="gray" />
          <button className="text-sm font-bold text-gray-600">Cart</button>
        </a>
        <a className="flex items-center space-x-1">
          <IoStar className="size-5" fill="gray" />
          <button className="text-sm font-bold text-gray-600">Wishlist</button>
        </a>
      </div>
    </div>
  );
}

export default NavBar;

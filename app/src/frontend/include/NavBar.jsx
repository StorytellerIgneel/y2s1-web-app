function NavBar() {
  return (
    <div>
      <NavBarTop />
      <NavBarBottom />
    </div>
  );
}

function NavBarTop() {
  return (
    <div className="flex justify-between items-center h-14 px-1 sm:px-16">
      <div className="p-3 flex items-center space-x-2 sm:space-x-5">
        <img
          src="../../../images/logo/light/GNS_Horizontal_Black.svg"
          alt="GameNonStop Logo"
          className="h-[30px]"
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
      <a href="">
        <div className="p-3 flex items-center space-x-5">
          <p
            className="font-bold text-xs text-gray-600 hidden md:block"
            href=""
          >
            {/* TODO: Make this dynamic */}
            Username
          </p>
          <div className="flex space-x-2">
            {/* TODO: Make this dynamic */}
            <img
              className="rounded-full border border-gray-100 shadow-sm w-10 h-10"
              src="https://preview.redd.it/dr-ratio-alhaitham-chibi-swap-edit-feel-free-to-use-credits-v0-ppqauow026cc1.png?width=496&format=png&auto=webp&s=f60177f2d5cc0dcc5cb568709f32050ddb1abea2"
              alt="user image"
            />
          </div>
        </div>
      </a>
    </div>
  );
}

function NavBarBottom() {
  return (
    <div className="flex bg-gray-200 h-14 items-center sm:px-44">
      <div className="flex items-center justify-center ">
        <input
          className="border-2 border-gray-300 bg-white h-9 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          type="search"
          placeholder="Search..."
        />
        <button className="m-[-30px]">
          <img
            className="size-4"
            src="../../../icon/search.svg"
            alt="search icon"
          />
        </button>
      </div>
      <div></div>
    </div>
  );
}

export default NavBar;

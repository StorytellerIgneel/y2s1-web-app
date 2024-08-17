import { IoSearch } from "react-icons/io5";

function SearchBar() {
  return (
    <div className="relative flex items-center">
      <button className="absolute right-3">
        <IoSearch className="size-5" fill="gray" />
      </button>
      <input
        className="h-8 w-60 rounded-md bg-white pl-3 pr-10 text-sm font-semibold placeholder-gray-400 focus:outline-none"
        type="search"
        placeholder="Search..."
      />
    </div>
  );
}

export default SearchBar;

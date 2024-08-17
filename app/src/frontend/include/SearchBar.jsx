import { IoSearch } from "react-icons/io5"

function SearchBar() {
  return (
    <div className="relative flex items-center">
      <button className="absolute right-3">
        <IoSearch className="size-5" fill="gray"/>
      </button>
      <input
        className="bg-white h-8 rounded-md text-sm font-semibold w-60 placeholder-gray-400 pl-3 pr-10 focus:outline-none"
        type="search"
        placeholder="Search..."
      />
    </div>
  )
}

export default SearchBar
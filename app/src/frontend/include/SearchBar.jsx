import { IoSearch } from "react-icons/io5";

function SearchBar() {
  return (
    <div>
      <div className="relative flex items-center">
        <button className="absolute right-3">
          <IoSearch className="size-5" fill="gray" />
        </button>
        <input
          type="text"
          placeholder="Search for a game..."
          className="h-8 w-60 rounded-md bg-white pl-3 pr-10 text-sm font-semibold placeholder-gray-400 focus:outline-none"
        />
      </div>
      {/* <SearchResults results={results} />SS */}
    </div>
  );
}

function SearchResults({ results }) {
  return (
    <div className="mt-2">
      {results.length > 0 ? (
        results.map((game) => (
          <div key={game.id} className="h-10 w-60 flex items-center space-x-2">
            <img src={game.img_src} alt={game.title} className="h-8 w-8 rounded" />
            <p className="text-sm font-semibold">{game.title}</p>
          </div>
        ))
      ) : (
        <p className="text-sm text-gray-400">No results found</p>
      )}
    </div>
  );
}

export default SearchBar;

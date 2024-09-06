import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function SearchBar() {
  const [searchGame, setSearchGame] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (searchGame.trim() !== "") {
      const url =
        "http://localhost/y2s1-web-app/app/src/backend/php/searchGame.php";
      const formData = new FormData();
      formData.append("searchGame", searchGame);

      axios
        .post(url, formData)
        .then((response) => {
          if (response.data.success) setResults(response.data.games);
          else setResults([]); //clear search results
        })
        .catch((error) => {
          console.log(error.message);
          //setResults([]);
        });
    } else {
      setResults([]); // Clear results if search term is empty
    }
  }, [searchGame]);

  return (
    <div>
      <input
        type="search"
        className="h-8 w-60 rounded-md bg-white pl-3 pr-10 text-sm font-semibold placeholder-gray-400 focus:outline-none"
        placeholder="Search for a game..."
        onChange={(e) => setSearchGame(e.target.value)}
        value={searchGame}
      />
      <div className="absolute mt-2 rounded-sm py-2">
        {results.length > 0 ? (
          results.map((game) => (
            <SearchResults
              key={game.id}
              img_src={game.img_src}
              title={game.title}
              slug={game.id}
            />
          ))
        ) : (
          <p className="text-sm text-gray-400">No results found</p>
        )}
      </div>
    </div>
  );
}

function SearchResults({ img_src, title, slug }) {
  return (
    <Link to={`/store/${slug}`}>
      <div className="flex h-12 w-72 items-center space-x-2 bg-white">
        <img
          src={img_src}
          alt={title}
          className="h-10 w-20 rounded object-cover"
        />
        <p className="text-sm font-semibold">{title}</p>
      </div>
    </Link>
  );
}

export default SearchBar;

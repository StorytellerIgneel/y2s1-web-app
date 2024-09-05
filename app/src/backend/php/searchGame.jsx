import React, { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";

function SearchGame() {
  const [searchGame, setSearchGame] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (searchGame.trim() !== "") {
      const url =
        "http://localhost/y2s1-web-app/app/src/backend/php/searchGame.php";
      const formData = new FormData();
      formData.append("searchGame", searchGame); // Append the search value to the FormData object

      axios
        .post(url, formData)
        .then((response) => {
          console.log(response.data);
          if (response.data.success) {
            setResults(response.data.games);
          } else {
            setResults([]); // Handle case where success is false
          }
          // if (response.data.success) {
          //     alert("successfully")
          //     //console.log(response.data);
          //     //navigate('/store');  // Navigate to '/store' if successful
          // }
        })
        .catch((error) => {
          console.log(error.message);
          setResults([]);
        });
    } else {
      setResults([]); // Clear results if search term is empty
    }
  }, [searchGame]);

  console.log(results);
  return (
    <div>
      <input
        type="search"
        className="h-8 w-60 rounded-md bg-white pl-3 pr-10 text-sm font-semibold placeholder-gray-400 focus:outline-none"
        placeholder="Search for a game..."
        onChange={(e) => setSearchGame(e.target.value)}
        value={searchGame}
      />
      <div className="mt-2">
        {results.length > 0 ? (
          results.map((game) => (
            <SearchResults
              key={game.id}
              img_src={game.img_src}
              title={game.title}
            />
          ))
        ) : (
          <p className="text-sm text-gray-400">No results found</p>
        )}
      </div>
    </div>
  );
}

function SearchResults({ img_src, title }) {
  return (
    <div className="mb-2 flex h-10 w-60 items-center space-x-2">
      <img src={img_src} alt={title} className="h-8 w-16 rounded" />
      <p className="text-sm font-semibold">{title}</p>
    </div>
  );
}

export default SearchGame;

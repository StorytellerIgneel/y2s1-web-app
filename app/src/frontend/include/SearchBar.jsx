import axios from "axios";
import { useState, useEffect } from "react";
import { IoSearch } from "react-icons/io5";



function SearchBar() {
  const [searchGame, setSearchGame] = useState("")

  useEffect(() => {

      if (searchGame.trim() !== ""){
          const url = "http://localhost/y2s1-web-app/app/src/backend/php/searchGame.php";
          const formData = new FormData();
          formData.append("searchGame", searchGame);  // Append the search value to the FormData object

          axios.post(url, formData)
          .then((response) =>  {
              console.log(response.data);
              // if (response.data.success) { 
              //     alert("successfully")
              //     //console.log(response.data);
              //     //navigate('/store');  // Navigate to '/store' if successful
              // }
          }).catch(error => {console.log(error.message)})
      }
    }, [searchGame]);

  return (
    <div className="relative flex items-center">
      <button className="absolute right-3">
        <IoSearch className="size-5" fill="gray" />
      </button>
      <input
        className="h-8 w-60 rounded-md bg-white pl-3 pr-10 text-sm font-semibold placeholder-gray-400 focus:outline-none"
        type="search"
        placeholder="Search..."
        onChange={(e) => setSearchGame(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;

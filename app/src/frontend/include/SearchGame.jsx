import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

function SearchGame() {
  const [searchGame, setSearchGame] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (searchGame) {
      const url = "http://localhost/y2s1-web-app/app/src/backend/php/searchGame.php";

      axios
        .post(url, searchGame)
        .then((response) => {
          console.log(response.data);
          if (response.data.success) {
            console.log(response);
            navigate("/store"); // Navigate to '/store' if successful
          } else {
            Swal.fire({
              icon: "error",
              title: "Login Error",
              text: response.data.error,
            }); // Handle the failure case if needed
          }
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  }, [searchGame]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a game..."
        className="h-8 w-60 rounded-md bg-white pl-3 pr-10 text-sm font-semibold placeholder-gray-400 focus:outline-none"
        onChange={(e) => setSearchGame(e.target.value)}
      />
    </div>
  );
}

export default SearchGame;
